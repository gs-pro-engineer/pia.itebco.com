<template>
    <form @submit.prevent="submit">
        <animated-loader :is-loading="isLoading || isFetching" :loader-color="vars.loaderColor" />

        <div class="row">
            <div class="col-12 mb-4">
                <base-input auto-focus :label="formLabels.title" type="text" v-model="formData.title" :error.sync="formErrors.title" required />
            </div>

            <div class="col-12 col-md-6 mb-4">
                <base-input :label="formLabels.date" addon-right-icon="far fa-calendar-alt" type="text" v-model="formData.date" :error.sync="formErrors.date" :is-wrapper="true" required>
                    <date-picker v-model="formData.date" :config="vars.datepickerConfig" class="form-control datepicker" />
                </base-input>
            </div>

            <div class="col-12 col-md-6 mb-4">
                <base-input :label="formLabels.time" addon-right-icon="far fa-calendar-alt" type="text" v-model="formData.time" :error.sync="formErrors.time" :is-wrapper="true">
                    <date-picker v-model="formData.time" :config="vars.timepickerConfig" class="form-control datepicker" />
                </base-input>
            </div>

            <div class="col-12 col-md-12 mb-4">
                <base-input :label="formLabels.description" type="text" v-model="formData.description" :error.sync="formErrors.description" />
            </div>
        </div>

        <div class="form-footer mt-3">
            <div class="left-side">
                <base-button type="button" design="light" @click="$router.back()" tabindex="-1"><i class="fas fa-chevron-left"></i> {{ $t('general.cancel') }}</base-button>

                <base-checkbox class="ml-3 mt-2" v-model="keepAdding" v-if="showKeepAdding">
                    {{ $t('general.keep_adding') }}
                </base-checkbox>
            </div>
            <div class="right-side">
                <base-button type="button" design="light" @click="reset">{{ $t('general.reset') }}</base-button>
                <base-button type="submit" design="primary">{{ $t('global.save', { attribute: $t('utility.todo.todo') } ) }}</base-button>
            </div>
        </div>

        <template v-if="showKeepAdding && keepAdding">
            <keep-adding-form :keep-adding-fields="keepAddingFields" :keep-adding-option="keepAddingOption" @optionUpdated="keepAddingOption=$event" :keep-adding-selected-fields="keepAddingSelectedFields" @fieldsUpdated="keepAddingSelectedFields=$event" :is-loading="isLoading" />
        </template>
    </form>
</template>

<script>
    import form from '@mixins/form'
    import store from '@js/store'
    import * as MomentTz from '@core/filters/momentz'

    const vars = store.getters['config/vars']

    export default {
        extends: form,
        data() {
            return {
                formData: {
                    uuid: null,
                    title: '',
                    date: MomentTz.now(vars.serverDateFormat),
                    time: null,
                    description: '',
                },
                formLabels: {
                    title: $t('utility.todo.props.title'),
                    description: $t('utility.todo.props.description'),
                    date: $t('utility.todo.props.date'),
                    time: $t('utility.todo.props.time'),
                },
                initUrl: 'utility/todos',
                timeFields: ['time'],
            }
        },
        mounted() {
            this.isLoading = false
        }
    }

</script>
