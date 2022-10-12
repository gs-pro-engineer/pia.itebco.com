<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor" class="p-0 flex-grow">

        <div class="text-right p-4">
            <base-dropdown tag="div" direction="down" menu-classes="show-dropdown-up" position="right">
                <base-button slot="title" type="button" data-toggle="dropdown" role="button" design="info" size="md"><i class="fas fa-boxes"></i> {{ $t(activeModule+'.'+activeModule) }} <i class="fas fa-chevron-down"></i></base-button>

                <a v-for="mod in preRequisite.modules" class="dropdown-item" @click="updateRouteQuery({module: mod})">
                    {{ $t(mod+'.'+mod) }}
                    <i v-if="mod == activeModule" class="fas fa-check pull-right"></i>
                </a>
            </base-dropdown>
        </div>

        <div class="table-responsive table-wrapper">
            <form @submit.prevent="submit">
                <table class="table b-table table-striped table-hover b-table-stacked-sm">
                    <thead>
                        <tr>
                            <th>{{ $t('config.permission.permissions') }}</th>
                            <th v-for="rolePermission in formData.roles">{{ humanize(rolePermission.name) }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="permission in preRequisite.permissions">
                            <td>{{ humanize(permission) }}</td>
                            <td v-for="rolePermission in formData.roles">
                                <base-checkbox class="ml-3" :value="permission" v-model="rolePermission.permissions" :disabled="rolePermission.name === 'admin'"></base-checkbox>
                            </td>
                        </tr>
                    </tbody>
                </table>


                <div class="text-right mt-5 px-4 mb-4">
                    <base-button type="submit" design="primary">{{ $t('global.save', { attribute: $t('config.permission.permissions') } ) }}</base-button>

                </div>
            </form>
        </div>
    </base-container>
</template>

<script>
    import * as PermissionAPI from '@api/permission'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        data() {
            return {
                activeModule: 'config',
                formData: {
                    roles: []
                },
                preRequisite: {
                    roles: [],
                    permissions: [],
                    modules: [],
                    assignedPermissions: [],
                },
                formErrors: {},
                initialFormData: null,
                isLoading: false
            }
        },
        computed: {
            ...mapGetters('config', [
                'vars',
            ]),
        },
        methods: {
            submit() {
                this.isLoading = true
                PermissionAPI.assign({...this.formData, module: this.activeModule})
                    .then(response => {
                        this.isLoading = false
                        this.$toasted.success(response.message, this.$toastConfig.success)
                    })
                    .catch(error => {
                        this.isLoading = false
                        this.formErrors = formUtil.handleErrors(error)
                    })
            },
            getInitialData() {
                this.isLoading = true
                if(this.$route.query && this.$route.query.module) {
                    this.activeModule = this.$route.query.module
                }
                PermissionAPI.getPreRequisite(this.activeModule)
                    .then(response => {
                        this.preRequisite = _.cloneDeep(response)
                        this.formData.roles = []
                        this.preRequisite.roles.forEach(role => {
                            let permissions = this.preRequisite.assignedPermissions.find(o => o.role.toUpperCase() === role.name.toUpperCase());
                            this.formData.roles.push({
                                name: role.name,
                                permissions: (permissions != 'undefined') ? permissions.permissions : []
                            });
                        });
                        this.isLoading = false
                    })
                    .catch(error => {
                        this.isLoading = false
                        this.formErrors = formUtil.handleErrors(error)
                    })
            },
            humanize(word) {
                return _.startCase(word)
            },
            updateRouteQuery(param){
                const newQuery = Object.assign({}, this.$route.query, param)
                this.$router.push({ path: this.$route.path, query: newQuery })
            },
        },
        mounted() {
            this.getInitialData()
        },
        watch: {
            $route() {
                this.getInitialData()
            },
        },
    }

</script>

<style lang="scss">
    .table-wrapper.has-checkbox .custom-control-label {
        &:before {
            top: -1rem;
        }
        &:after {
            top: -1rem;
        }
    }
</style>
