<template>
    <div class="base-view view-user">
        <div class="view-group" :class="[
            {'has-label': label || $slots.label},
            {'not-empty': value || value===0},
            {'d-inline': inline},
            `size-${size}`
        ]">
            <slot name="label">
                <label v-if="label" :class="labelClasses">
                    {{label}}
                </label>
            </slot>
            <slot name="main">
                <template v-if="value && elementId">
                    <div :id="'Container' + elementId" :class="['popover-parent user-popover-parent', {'show-buttons': showButtons && hidePopover}]">

                        <router-link :to="computedLink" tag="button" :disabled="!hidePopover && showPopup" :id="'Button' + elementId" :ref="'Button' + elementId" class="btn-popover-link" :class="[{'focusable': focusable}]">
                            <div class="popover-element" @mouseover="hover" @mouseout="hoverOut">
                                <div class="user-image-wrapper" v-if="showImage">
                                    <img v-if="value.profile && value.profile.avatar" class="user-image" :src="value.profile.avatar">
                                    <img v-else class="user-image" :src="computedImage()">
                                </div>
                                <div class="user-details">
                                    <component :is="tag" :class="['view-data', {'inline-sub': inlineSub}, {'user-status': !isLoggedIn && showStatus && (!showStatusIfOnline || (showStatusIfOnline && isOnline))}, {'is-online': isOnline}, {'is-offline': !isOnline}, {'is-busy': isUserBusy}, dataClasses]">
                                        <span class="title">{{ value.profile.name }}</span>

                                        <small v-if="showSub && inlineSub" class="subtitle">
                                            <span v-if="subtitleKey" class="bracketed">{{ getSubValue(subtitleKey, value) }}</span>
                                        </small>
                                    </component>
                                    <slot name="sub">
                                        <slot name="submain">
                                            <div v-if="showSub && !inlineSub" class="subtitle comma-list">
                                                <span v-if="subtitleKey" class="bracketed">{{ getSubValue(subtitleKey, value) }}</span>
                                                <span v-if="subtitleSecondaryKey" class="bracketed">{{ getSubValue(subtitleSecondaryKey, value) }}</span>
                                            </div>
                                        </slot>
                                        <slot name="subextra">
                                        </slot>
                                    </slot>
                                </div>
                            </div>
                        </router-link>

                        <profile-buttons v-if="showButtons && hidePopover" :link="link" :user="value" />

                        <template v-if="!hidePopover && renderPopover">
                            <b-popover :target="'Button' + elementId" :show.sync="showPopup" placement="auto" :container="'Container' + elementId" :ref="'Popover' + elementId" @show="onShow" @shown="onShown" @hidden="onHidden">
                                <div class="user-popover dark-bg" @mouseover="hoverInfo" @mouseout="hoverOutInfo">
                                    <profile-card :name="value.profile.name" :sub-heading="value.username || '-'" :gender="value.profile.gender" :image="value.profile.avatar" :age="value.profile.age" data-card-color="whitish" :to="profileLink" :show-buttons="showPopoverButtons" :user-status="isOnline" :user="value" @buttonClicked="$root.$emit('bv::hide::popover', 'Button' + elementId)" />
                                </div>
                            </b-popover>
                        </template>

                    </div>
                </template>
                <span v-else>-</span>
            </slot>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'

    import ProfileImageMaleKid from '@images/avatars/default-profile-image-male-kid.png'
    import ProfileImageFemaleKid from '@images/avatars/default-profile-image-female-kid.png'
    import ProfileImageMaleTeen from '@images/avatars/default-profile-image-male-teen.png'
    import ProfileImageFemaleTeen from '@images/avatars/default-profile-image-female-teen.png'
    import ProfileImageMale from '@images/avatars/default-profile-image-male.png'
    import ProfileImageFemale from '@images/avatars/default-profile-image-female.png'

    import { BPopover } from 'bootstrap-vue'
    export default {
        name: "view-user",
        components: {
            BPopover,
        },
        props: {
            label: {
                type: String,
                description: "View label (text before input)"
            },
            labelClasses: {
                type: [String, Array],
                description: "View label css classes",
                default: 'd-block'
            },
            dataClasses: {
                type: [String, Array],
                description: "View css classes"
            },
            value: {
                type: [String, Number, Boolean, Object],
                description: "View value"
            },
            tag: {
                type: String,
                description: "Tag value",
                default: "h6"
            },
            subtitleKey: {
                type: String,
                default: "username"
            },
            subtitleSecondaryKey: {
                type: String,
                default: "email"
            },
            subArr: {
                type: Array,
            },
            showSub: {
                type: Boolean,
                default: true
            },
            showImage: {
                type: Boolean,
                default: true
            },
            size: {
                type: String,
                default: "md"
            },
            showStatus: {
                type: Boolean,
                default: true
            },
            showStatusIfOnline: {
                type: Boolean,
                default: true
            },
            showButtons: {
                type: Boolean,
                default: false
            },
            showPopoverButtons: {
                type: Boolean,
                default: true
            },
            focusable: {
                type: Boolean,
                default: false
            },
            hidePopover: {
                type: Boolean,
                default: false
            },
            inlineSub: {
                type: Boolean,
                default: false
            },
            inline: {
                type: Boolean,
                default: false
            },
            link: {
                type: Object,
                default: null
            },
            linkSecond: {
                type: Object,
                default: null
            },
        },
        data() {
            return {
                elementId: '',
                renderPopover: false,
                showPopup: false,
                timer: '',
                isInInfo: false
            }
        },
        computed: {
            ...mapGetters('user', [
                'liveUsers',
                'liveLoggedInUser',
            ]),
            isLoggedIn() {
                return this.value && this.liveLoggedInUser && this.value.uuid === this.liveLoggedInUser.uuid
            },
            liveUser() {
                return this.value && this.liveUsers.find(u => u.uuid === this.value.uuid)
            },
            isOnline() {
                return !!this.liveUser
            },
            isUserBusy() {
                return this.isOnline && !!this.liveUser.busy
            },
            computedLink() {
                return this.link ? this.link : (this.profileLink ? this.profileLink : null)
            },
            computedLinkSecond() {
                return this.linkSecond ? this.linkSecond : (this.ledgerLink ? this.ledgerLink : null)
            },
            profileLink() {
                return this.value ? { name: 'appUserView', params: { uuid: this.value.uuid, slug: this.value.slug } } : null
            },
        },
        methods: {
            getSubValue(keys, fromVal) {
                keys = keys.split('.')
                let val = fromVal
                keys.forEach(k => {
                    val = val[k]
                })
                return val
            },
            computedImage() {
                if(! (this.value.profile && this.value.profile.gender) ) {
                    return ProfileImageMale
                }

                const gender = this.value.profile.gender
                const age = this.value.profile.age

                if(gender === 'male' || gender.uuid === 'male') {
                    if(age) {
                        if(age.years < 13) {
                            return ProfileImageMaleKid
                        } else if(age.years < 18) {
                            return ProfileImageMaleTeen
                        }
                    }
                    return ProfileImageMale
                } else {
                    if(age) {
                        if(age.years < 13) {
                            return ProfileImageFemaleKid
                        } else if(age.years < 18) {
                            return ProfileImageFemaleTeen
                        }
                    }
                    return ProfileImageFemale
                }
            },
            hover() {
                let vm = this
                this.timer = setTimeout(() => {
                    vm.showPopover()
                }, 300)
            },
            hoverOut() {
                let vm = this
                clearTimeout(vm.timer)
                this.timer = setTimeout(() => {
                    if (!vm.isInInfo) {
                        vm.closePopover()
                    }
                }, 200)
            },
            hoverInfo() {
                this.isInInfo = true
            },
            hoverOutInfo() {
                this.isInInfo = false
                this.hoverOut()
            },
            showPopover() {
                this.showPopup = true
            },
            closePopover() {
                this.showPopup = false
            },
            onShow() {
                /* This is called just before the popover is shown */
                /* Reset our popover "form" variables */
            },
            onShown() {
                /* Called just after the popover has been shown */
                /* Transfer focus to the first input */
            },
            onHidden() {
                /* Called just after the popover has finished hiding */
                /* Bring focus back to the button */
            },
            focusRef(ref) {
                /* Some references may be a component, functional component, or plain element */
                /* This handles that check before focusing, assuming a focus() method exists */
                /* We do this in a double nextTick to ensure components have updated & popover positioned first */
                this.$nextTick(() => {
                    this.$nextTick(() => {
                        (ref.$el || ref)
                        .focus()
                    });
                });
            }
        },
        mounted() {
            this.$nextTick(() => {
                    this.renderPopover = true
                });
        },
        created() {
            this.elementId = Math.random()
                .toString(16)
                .slice(2);
        }
    }

</script>
