<template>
    <form @submit.prevent="submit">
        <animated-loader :is-loading="isLoading || isFetching" :loader-color="vars.loaderColor" />

        <base-input auto-focus class="mb-5" :label="$t('config.role.props.name')" type="text" name="name" v-model="formData.name" :error.sync="formErrors.name" />

        <div class="form-footer mt-3">
            <div class="left-side">
                <base-button type="button" design="light" @click="$router.back()" tabindex="-1"><i class="fas fa-chevron-left"></i> {{ $t('general.cancel') }}</base-button>

                <base-checkbox class="ml-3 mt-2" v-model="keepAdding" v-if="!editData">
                    {{ $t('general.keep_adding') }}
                </base-checkbox>
            </div>
            <div class="right-side">
                <base-button type="button" design="light" @click="reset">{{ $t('general.reset') }}</base-button>
                <base-button type="submit" design="primary">{{ $t('global.save', { attribute: $t('config.role.role') } ) }}</base-button>
            </div>
        </div>
    </form>
</template>

<script>
    import form from '@mixins/form'

    export default {
        extends: form,
        data() {
            return {
                formData: {
                    uuid: null,
                    name: '',
                },
                initUrl: 'config/roles',
            }
        },
        mounted() {
            this.isLoading = false
        },
    }

</script>
