<template>
    <div class="cb-inner-window chatgroup-container">
        <div class="chatgroup-wrapper" v-if="activeContainer === 'chatgroup'">
            <div class="chatgroup">
                <vue-scroll ref="vue-scroll-chatgroup" id="vue-scroll-chatgroup">
                    <div class="chatgroup-form">

                        <template v-if="activeGroup">
                            <div v-if="!showEditNameForm" class="chatgroup-name mt-2">
                                <h6>{{ formData.name }}</h6>
                                <div v-if="activeGroup.canModerate" class="chatgroup-actions">
                                    <button type="button" @click="editName"><i class="fas fa-pencil-alt"></i></button>
                                </div>
                            </div>

                            <div v-else-if="activeGroup.canModerate" class="chatgroup-name mt-2">
                                <input type="text" class="form-control" ref="groupName" v-model="formData.name" :placeholder="$t('chat.chat_group_name')">

                                <div class="chatgroup-actions">
                                    <button type="button" @click="updateName"><i class="fas fa-check"></i></button>
                                </div>
                            </div>
                        </template>

                        <template v-else>
                            <div class="chatgroup-name">
                                <input type="text" class="form-control" ref="groupName" v-model="formData.name" :placeholder="$t('chat.chat_group_name')">
                            </div>

                            <base-checkbox class="ml-3 mt-4" v-model="formData.isPublicGroup" v-if="hasRole('admin')">
                                <span class="text-light">{{ $t('chat.is_public_group') }}?</span>
                            </base-checkbox>

                        </template>

                        <div class="chatgroup-members-header pt-3">
                        </div>

                        <div class="chatgroup-members">
                            <slot name="members" v-bind:members="formData.members" />
                        </div>

                    </div>
                </vue-scroll>
            </div>

            <div class="chatgroup-footer" v-if="!activeGroup">
                <base-button type="button" design="dark-primary" @click="goBack">{{ $t('general.cancel') }}</base-button>
                <base-button type="button" design="primary" @click="createGroup">{{ $t('general.save') }}</base-button>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        props: {
            activeContainer: {
                type: String,
                default: 'home',
                required: true
            },
            activeGroup: {
                type: [Object, null],
                default() {
                    return null
                },
            },
            membersToAdd: {
                type: Array,
                default() {
                    return []
                },
            },
            membersToRemove: {
                type: Array,
                default() {
                    return []
                },
            },
        },
        data() {
            return {
                formData: {
                    uuid: null,
                    name: '',
                    isPublicGroup: false,
                    members: [],
                },
                showEditNameForm: false,
                isLoading: false,
            }
        },
        watch: {
            activeContainer(newVal, oldVal) {
                if(newVal === 'chatgroup' && newVal !== oldVal) {
                    if(! this.activeGroup) {
                        this.formData.uuid = null
                        this.formData.name = ''
                        this.formData.isPublicGroup = false
                        this.formData.members = []
                    }
                }
            },
            activeGroup(newValue, oldValue) {
                if(oldValue !== newValue) {
                    if(newValue) {
                        this.formData.uuid = newValue.uuid
                        this.formData.name = newValue.name
                        this.formData.members = newValue.members
                        this.getMembers()
                    } else {
                        this.formData.uuid = null
                        this.formData.name = ''
                        this.formData.isPublicGroup = false
                        this.formData.members = []
                    }
                }
            },
            membersToAdd: {
                handler(newValue) {
                    if(! (newValue && newValue.length) ) {
                        return
                    }
                    newValue.forEach(m => {
                        const foundIndex = this.formData.members.findIndex(u => u.user.uuid === m.user.uuid)
                        if(foundIndex === -1) {
                            this.formData.members.push({ ...m })
                        }
                    })
                },
                deep: true
            },
            membersToRemove: {
                handler(newValue) {
                    if(! (newValue && newValue.length) ) {
                        return
                    }
                    newValue.forEach(m => {
                        const foundIndex = this.formData.members.findIndex(u => u.user.uuid === m.user.uuid)
                        if(foundIndex !== -1) {
                            this.formData.members.splice(foundIndex, 1)
                        }
                    })
                },
                deep: true
            },
        },
        computed: {
            ...mapGetters('user', [
                'hasRole',
            ]),
        },
        methods: {
            ...mapActions('chat', [
                'CreateRoom',
                'UpdateRoom',
                'GetRoomMembers',
            ]),
            goBack() {
                this.formData.uuid = null
                this.formData.name = ''
                this.formData.isPublicGroup = false
                this.formData.members = []
                this.$emit('goBack')
            },
            editName() {
                this.showEditNameForm = true
            },
            updateName() {
                this.isLoading = true

                this.UpdateRoom({
                        uuid: this.formData.uuid,
                        name: this.formData.name,
                    })
                    .then(response => {
                        this.isLoading = false
                        this.showEditNameForm = false
                    })
                    .catch(error => {
                        this.isLoading = false
                        formUtil.handleErrors(error)
                    })
            },
            createGroup() {
                this.isLoading = true

                this.CreateRoom({
                        name: this.formData.name,
                        isPublicGroup: this.formData.isPublicGroup,
                        members: this.formData.members.map(m => m.user)
                    })
                    .then(response => {
                        this.isLoading = false
                        this.$emit('goToConversation', {
                            room: response,
                            user: null
                        })
                    })
                    .catch(error => {
                        this.isLoading = false
                        formUtil.handleErrors(error)
                    })
            },
            getMembers() {
                if(!this.activeGroup) {
                    return
                }

                this.isLoading = true

                this.GetRoomMembers({
                        uuid: this.activeGroup.uuid
                    })
                    .then(response => {
                        this.isLoading = false
                        this.formData.members = response
                    })
                    .catch(error => {
                        this.isLoading = false
                        formUtil.handleErrors(error)
                    })
            },
        },
        mounted() {
            if(this.activeGroup) {
                this.getMembers()
            }
        }
    }
</script>

<style lang="scss">
    @import '~@js/core/assets/scss/imports.scss';
    .chatgroup-wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
        max-height: 100%;
        overflow: hidden;

        .chatgroup {
            display: flex;
            flex-grow: 1;
            justify-content: stretch;
            align-items: stretch;
            height: 100%;
            max-height: 100%;
            overflow: hidden;
            position: relative;

            // padding: 0.85rem;
            display: flex;
            flex-direction: row;

            .chatgroup-form {
                .chatgroup-name {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    padding: 0 0.85rem;

                    h6 {
                        line-height: 2rem;
                        color: rgba(255,255,255,0.8);
                        margin-bottom: 0;
                        flex-grow: 1;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                    }

                    input.form-control {
                        background: rgba(0, 0, 0, 0.1);
                        border: 1px solid transparent;
                        border-top-color: rgba(0, 0, 0, 0.05);
                        border-bottom-color: rgba(0, 0, 0, 0.05);
                        width: 100%;
                        height: 100%;
                        color: $white;

                        &:hover {
                            background: rgba(0, 0, 0, 0.15);
                        }

                        &:focus,
                        &:active {
                            background: rgba(0, 0, 0, 0.35);
                        }

                        &::placeholder {
                            color: $text-muted;
                        }
                    }

                    .chatgroup-actions {
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-end;

                        >button {
                            flex-grow: 1;
                            background: transparent;
                            border: none;
                            color: white;
                            white-space: nowrap;
                            width: 40px;
                            height: 40px;
                            border-radius: 30px;

                            &:hover {
                                background: rgba(0, 0, 0, 0.2);
                                padding-bottom: 2px;
                            }
                        }
                    }
                }

                .chatgroup-members-header {
                    border-bottom: 1px solid rgba(0,0,0,0.4);
                }
            }

        }

        .chatgroup-footer {
            box-shadow: 0 -2px 6px 0 rgba(0, 0, 0, 0.4);
            z-index: 1;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;

            button {
                flex: 1 0 auto;
                margin: 0;
            }
        }
    }
</style>