<template>
    <base-container boxed with-loader min-height="full" has-footer :is-loading="isLoading" :loader-color="vars.loaderColor" id="printable">

        <template v-if="entity">
            <div class="row" v-if="snapshots && snapshots.length">
                <div v-for="snapshot in snapshots" :key="snapshot.uuid" class="col-12 col-md-4 col-lg-3 mb-3 text-center">
                    <a :href="snapshot.fullUrl" target="_blank" class="d-block mb-2">
                        <img :src="snapshot.fullUrl" class="img-thumbnail img-responsive" :alt="snapshot.name" :title="snapshot.name">
                    </a>
                    <base-button type="button" design="light" size="sm" @click="deleteSnapshot(snapshot)"><i class="fas fa-trash"></i> {{ $t('general.delete') }}</base-button>
                </div>
            </div>

            <div class="text-center my-5" v-else>
                <h3 class="text-muted mb-3">{{ $t('global.could_not_find_any', {attribute: $t('meeting.snapshots')}) }}</h3>
            </div>
        </template>

        <div class="form-footer mt-3">
            <div class="left-side">
                <base-button type="button" design="light" @click="$router.back()" tabindex="-1"><i class="fas fa-chevron-left"></i> {{ $t('general.back') }}</base-button>
            </div>
        </div>
    </base-container>
</template>

<script>
    import view from '@mixins/view'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        extends: view,
        data() {
            return {
                initUrl: 'meetings',
                snapshots: [],
                fallBackRoute: 'appMeetingList',
            }
        },
        computed: {
            ...mapGetters('config', [
                'vars',
            ]),
        },
        methods: {
            ...mapActions('common', [
                'Custom',
            ]),
            getData() {
                this.isLoading = true

                this.Custom({
                        url: `/${this.initUrl}/${this.uuid}/snapshots`,
                        method: 'get',
                    })
                    .then(response => {
                        this.snapshots = response
                        this.isLoading = false
                    })
                    .catch(error => {
                        this.isLoading = false
                        formUtil.handleErrors(error)
                    })
            },
            deleteSnapshot(snapshot) {
                formUtil.confirmAction()
                    .then((result) => {
                        if (result.value) {
                            this.isLoading = true

                            this.Custom({
                                    url: `/${this.initUrl}/${this.uuid}/snapshots/${snapshot.uuid}`,
                                    method: 'delete',
                                })
                                .then(response => {
                                    this.isLoading = false
                                    this.$toasted.success(response.message, this.$toastConfig)
                                    this.getData()
                                })
                                .catch(error => {
                                    this.isLoading = false
                                    formUtil.handleErrors(error)
                                })
                        } else {
                            result.dismiss === Swal.DismissReason.cancel
                        }
                    })
            },
        },
        mounted() {
            this.getData()
        },
    }

</script>
