<template>
    <form @submit.prevent="submit" class="has-fixed-footer">

        <h5 class="text-center">{{ $t('global.add', {attribute: $t('contact.segment.segment')}) }}</h5>

        <hr>

        <animated-loader :is-loading="isLoading" :loader-color="vars.loaderColor" />
        <div class="row">
            <div class="col-12 mb-4">
                <base-input auto-focus :label="$t('contact.segment.props.name')" type="text" v-model="formData.name" :error.sync="formErrors.name" required />
            </div>
            <div class="col-12 mb-4">
                <base-input :label="$t('contact.segment.props.description')" type="text" v-model="formData.description" :error.sync="formErrors.description" />
            </div>
        </div>

        <div class="form-footer fixed-footer mt-5">
            <div class="left-side">
                <base-button type="button" design="light" @click="close()" tabindex="-1"><i class="fas fa-chevron-left"></i> {{ $t('general.cancel') }}</base-button>
            </div>
            <div class="right-side">
                <base-button type="submit" design="primary"><i class="fas fa-save"></i> {{ $t('global.save', { attribute: $t('contact.segment.segment') } ) }}</base-button>
            </div>
        </div>
    </form>
</template>

<script>
    import form from '@mixins/modal-form'

    export default {
        extends: form,
        data() {
            return {
                formData: {
                    uuid: null,
                    name: '',
                    description: '',
                },
                initUrl: 'segments',
                dataType: 'segment',
                dataTypeArr: 'segments',
                propertyToMatch: 'name',
            }
        },
        mounted() {
            this.isLoading = false
        },
    }

</script>
