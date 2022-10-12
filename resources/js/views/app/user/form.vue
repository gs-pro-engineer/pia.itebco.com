<template>
  <form @submit.prevent="submit">
    <animated-loader
      :is-loading="isLoading || isFetching"
      :loader-color="vars.loaderColor"
    />
    <div class="row">
      <div class="col-12 col-md-6 mb-3">
        <base-input
          auto-focus
          :label="formLabels.name"
          type="text"
          v-model="formData.profile.name"
          :error.sync="formErrors.profileName"
          required
          format="startCase"
        />
      </div>

      <div class="col-12 col-md-6 mb-3">
        <base-select
          :options="preRequisite.roles"
          v-model="formData.role"
          :label="formLabels.role"
          :error.sync="formErrors.role"
          required
          preselect-first
        />
      </div>

      <div class="col-12 col-md-6 mb-3">
        <base-input
          :label="formLabels.email"
          type="text"
          v-model="formData.email"
          :error.sync="formErrors.email"
          required
          format="lowercase"
        />
      </div>
      <div class="col-12 col-md-6 mb-3">
        <base-input
          :label="formLabels.username"
          type="text"
          v-model="formData.username"
          :error.sync="formErrors.username"
          required
        />
      </div>

      <div class="col-12 col-md-6 mb-3">
        <base-select
          :options="preRequisite.genders"
          v-model="formData.profile.gender"
          :label="formLabels.gender"
          :error.sync="formErrors.profileGender"
          required
          preselect-first
        />
      </div>

      <div class="col-12 col-md-6 mb-3">
        <base-input
          :label="formLabels.birthDate"
          addon-right-icon="far fa-calendar-alt"
          type="text"
          v-model="formData.profile.birthDate"
          :error.sync="formErrors.profileBirthDate"
          :is-wrapper="true"
        >
          <date-picker
            v-model="formData.profile.birthDate"
            :config="vars.datepickerConfig"
            class="form-control datepicker"
          >
          </date-picker>
        </base-input>
      </div>

      <template v-if="editData">
        <div class="col-12 mt-4 mb-3">
          <base-checkbox class="ml-3 mt-2" v-model="formData.forcePassword">
            {{ $t("user.force_password") }}
          </base-checkbox>
        </div>
      </template>

      <template v-if="!editData || formData.forcePassword">
        <div class="col-12 col-md-6 mb-3">
          <base-input
            :label="formLabels.password"
            type="password"
            v-model="formData.password"
            :error.sync="formErrors.password"
            required
          />
        </div>
        <div class="col-12 col-md-6 mb-3">
          <base-input
            :label="formLabels.passwordConfirmation"
            type="password"
            v-model="formData.passwordConfirmation"
            :error.sync="formErrors.passwordConfirmation"
            required
          />
        </div>
      </template>

      <div class="col-12 col-md-6 mb-3">
        <base-select
          :options="preRequisite.languages"
          v-model="formData.profile.language"
          :label="formLabels.language"
          :error.sync="formErrors.profileLanguage"
          required
        />
      </div>
    </div>

    <div v-if="formHasErrors" class="alert alert-danger my-3" role="alert">
      <h6 class="m-0">{{ $t("general.form_has_errors") }}</h6>
    </div>

    <div class="form-footer mt-3">
      <div class="left-side">
        <base-button
          type="button"
          design="light"
          @click="$router.back()"
          tabindex="-1"
          ><i class="fas fa-chevron-left"></i>
          {{ $t("general.cancel") }}</base-button
        >

        <base-checkbox
          class="ml-3 mt-2"
          v-model="keepAdding"
          v-if="showKeepAdding"
        >
          {{ $t("general.keep_adding") }}
        </base-checkbox>
      </div>
      <div class="right-side">
        <base-button type="button" design="light" @click="reset">{{
          $t("general.reset")
        }}</base-button>
        <base-button type="submit" design="primary"
          ><i class="fas fa-save"></i>
          {{ $t("global.save", { attribute: $t("user.user") }) }}</base-button
        >
      </div>
    </div>

    <template v-if="showKeepAdding && keepAdding">
      <keep-adding-form
        :keep-adding-fields="keepAddingFields"
        :keep-adding-option="keepAddingOption"
        @optionUpdated="keepAddingOption = $event"
        :keep-adding-selected-fields="keepAddingSelectedFields"
        @fieldsUpdated="keepAddingSelectedFields = $event"
        :is-loading="isLoading"
      />
    </template>
  </form>
</template>

<script>
import form from "@mixins/form";

export default {
  extends: form,
  data() {
    return {
      formData: {
        uuid: null,
        username: "",
        email: "",
        profile: {
          name: "",
          gender: null,
          language: null,
          birthDate: null,
        },
        password: "",
        passwordConfirmation: "",
        forcePassword: false,
        role: null,
      },
      formErrors: {},
      preRequisite: {
        genders: [],
        languages: [],
        roles: [],
      },
      formLabels: {
        name: $t("user.props.name"),
        email: $t("user.props.email"),
        gender: $t("user.props.gender"),
        language: $t("user.props.language"),
        role: $t("config.role.role"),
        birthDate: $t("user.props.birth_date"),
        username: $t("user.props.username"),
        password: $t("user.props.password"),
        passwordConfirmation: $t("user.props.password_confirmation"),
      },
      initUrl: "users",
    };
  },
  mounted() {
    this.getInitialData();
  },
};
</script>
