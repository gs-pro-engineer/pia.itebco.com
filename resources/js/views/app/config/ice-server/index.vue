<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor">
        <form @submit.prevent="submit">

            <collapse-transition tag="div" :group="true" :duration="300">
                <item-row v-for="(item, index) in formData.servers" :key="index" :form-data="item" :form-errors="formErrors[`servers${index}`]" :index="index" @remove="removeRow(index)" />
            </collapse-transition>


            <div class="form-footer mt-5">
                <div class="left-side">
                    <base-button type="button" design="light" @click="addNewRow">{{ $t('general.add') }}</base-button>
                </div>
                <div class="right-side">
                    <base-button type="button" design="light" @click="reset">{{ $t('general.reset') }}</base-button>
                    <base-button type="submit" design="primary">{{ $t('general.save') }}</base-button>
                </div>
            </div>

        </form>
    </base-container>
</template>

<script>
    import form from '@mixins/config-form'
    import ItemRow from './item-row'

    export default {
        extends: form,
        components: {
            ItemRow,
        },
        data() {
            return {
                formData: {
                    servers: [],
                    type: 'ice'
                },
                newRowObj: {
                    urls: '',
                    requiresCredential: false,
                    expirableCredentials: false,
                    username: '',
                    credential: '',
                    secret: '',
                    expiresIn: 43200,
                    timeDifference: 0,
                },
            }
        },
        methods: {
            addNewRow() {
                const newObj = _.cloneDeep(this.newRowObj)
                this.formData.servers.push(newObj)
            },
            removeRow(index) {
                formUtil.confirmAction()
                    .then((result) => {
                        if (result.value) {
                            this.formData.servers.splice(index, 1)
                            this.addNewRowIfNone()
                        }
                    })
            },
            addNewRowIfNone() {
                this.initianLength = this.formData.servers.length
                if(this.formData.servers.length < 1) {
                    this.addNewRow()
                }
            },
            beforeSubmit() {
                this.formData.servers = this.formData.servers.filter(server => server.urls !== '')
            },
            afterSubmit() {
                this.addNewRowIfNone()
            },
        },
        mounted() {
            this.addNewRowIfNone()
        },
    }

</script>
<style lang="scss" scoped>
    .server-row + .server-row {
        margin-top: 1.5rem;
    }
</style>