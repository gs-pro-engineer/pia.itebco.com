<template>
  <base-container
    boxed
    with-loader
    :is-loading="isLoading"
    :loader-color="vars.loaderColor"
  >
    <form @submit.prevent="submit">
      <div class="row">
        <div class="col-12 col-md-4 mb-3">
          <switch-wrapper :label="$t('config.system.enable_todo')">
            <base-switch v-model="formData.todo"></base-switch>
          </switch-wrapper>
        </div>

        <div class="col-12 col-md-4 mb-3">
          <switch-wrapper :label="$t('config.system.enable_maintenance_mode')">
            <base-switch v-model="formData.maintenanceMode"></base-switch>
          </switch-wrapper>
        </div>

        <div class="col-12 col-md-4 mb-3">
          <switch-wrapper :label="$t('config.system.enable_aths_alert')">
            <base-switch v-model="formData.enableAthsAlert"></base-switch>
          </switch-wrapper>
        </div>

        <div class="col-12 col-md-4 mb-3">
          <switch-wrapper :label="$t('config.system.allow_date_input')">
            <base-switch v-model="formData.allowDateInput"></base-switch>
          </switch-wrapper>
        </div>

        <div class="col-12 col-md-4 mb-3">
          <switch-wrapper :label="$t('config.system.enable_tour')">
            <base-switch v-model="formData.enableTour"></base-switch>
          </switch-wrapper>
        </div>

        <div class="col-12 col-md-4 mb-3">
          <switch-wrapper :label="$t('config.system.enable_print_preview')">
            <base-switch v-model="formData.printPreview"></base-switch>
          </switch-wrapper>
        </div>

        <div class="col-12 col-md-4 mb-3 secure-content">
          <switch-wrapper :label="$t('config.system.enable_mes')">
            <base-switch v-model="formData.enableMes"></base-switch>
          </switch-wrapper>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-12 col-md-4 mb-4">
          <base-select
            :options="preRequisite.dateFormats"
            v-model="formData.dateFormat"
            :label="$t('config.system.date_format')"
            :allow-empty="false"
            simple
            :disabled="isLoading"
            required
          >
            <template slot="selectedOption" slot-scope="{ option }"
              >{{ now | moment(option.uuid) }}
              <small class="bracketed text-muted">{{
                option.name
              }}</small></template
            >

            <template slot="listOption" slot-scope="{ option }">
              {{ now | moment(option.uuid) }}
              <small class="bracketed text-muted">{{ option.name }}</small>
            </template>
          </base-select>
        </div>

        <div class="col-12 col-md-4 mb-4">
          <base-select
            :options="preRequisite.timeFormats"
            v-model="formData.timeFormat"
            :label="$t('config.system.time_format')"
            :allow-empty="false"
            simple
            :disabled="isLoading"
            required
          >
            <template slot="selectedOption" slot-scope="{ option }"
              >{{ now | moment(option.uuid) }}
              <small class="bracketed text-muted">{{
                option.name
              }}</small></template
            >

            <template slot="listOption" slot-scope="{ option }">
              {{ now | moment(option.uuid) }}
              <small class="bracketed text-muted">{{ option.name }}</small>
            </template>
          </base-select>
        </div>

        <div class="col-12 col-md-4 mb-4">
          <base-select
            :options="preRequisite.timezones"
            v-model="formData.timezone"
            :label="$t('config.system.timezone')"
            :allow-empty="false"
            simple
            :disabled="isLoading"
            required
          />
        </div>

        <div class="col-12 col-md-4 mb-4">
          <base-select
            :options="preRequisite.locales"
            v-model="formData.locale"
            :label="$t('config.system.locale')"
            :allow-empty="false"
            simple
            :disabled="isLoading"
            required
          />
        </div>

        <div class="col-12 col-md-4 mb-4">
          <base-select
            :options="preRequisite.currencies"
            track-by="name"
            show-by="description"
            v-model="formData.currency"
            :label="$t('config.system.currency')"
            :allow-empty="false"
            :disabled="isLoading"
            required
          />
        </div>

        <div class="col-12 col-md-4 mb-4">
          <base-select
            :options="preRequisite.paginations"
            v-model="formData.perPage"
            :label="$t('config.system.page_length')"
            :allow-empty="false"
            simple
            :disabled="isLoading"
            required
          >
            <template slot="selectedOption" slot-scope="{ option }">{{
              $t("config.system.per_page", { attribute: option.name })
            }}</template>

            <template slot="listOption" slot-scope="{ option }">{{ 
              $t("config.system.per_page", { attribute: option.name })
            }}</template>
          </base-select>
        </div>

        <collapse-transition>
          <div class="col-12">
            <base-input
              class="mb-5"
              :label="$t('config.system.azure_api_key')"
              type="text"
              v-model="formData.azureApikey"
              :error.sync="formErrors.azureApikey"
            />
            <label class="input-group-material-label">
              {{ $t("config.system.google_api_key") }}
            </label>
            <file-uploader
              class="mb-5"
              name-label="config.system.google_api_key"
              :options="uploaderConfig"
              @updated="handleFileUpload"
              :multiple="false"
              url="/config/system/google_api_key_json/start"
              button-classes="justify-content-center"
              :hideAfterUpload="false"
            />
          </div>
        </collapse-transition>

        <collapse-transition>
          <div class="col-12">
            <base-input
              class="mb-5"
              :label="$t('config.system.footer_credit')"
              type="text"
              v-model="formData.footerCredit"
              :error.sync="formErrors.footerCredit"
            />
          </div>
        </collapse-transition>

        <collapse-transition>
          <div class="col-12">
            <base-textarea
              rows="4"
              :label="$t('config.system.allowed_file_extensions')"
              v-model="formData.allowedFileExtensions"
              :error.sync="formErrors.allowedFileExtensions"
              class="mb-4"
            />
          </div>
        </collapse-transition>

        <collapse-transition>
          <div class="col-12" v-if="formData.maintenanceMode">
            <base-textarea
              rows="4"
              :label="$t('config.system.maintenance_mode_message')"
              v-model="formData.maintenanceModeMessage"
              :error.sync="formErrors.maintenanceModeMessage"
              class="mb-4"
            />
          </div>
        </collapse-transition>
      </div>

      <div class="text-right mt-5">
        <base-button type="button" design="light" @click="reset">{{
          $t("general.reset")
        }}</base-button>
        <base-button type="submit" design="primary">{{
          $t("general.save")
        }}</base-button>
      </div>
    </form>
  </base-container>
</template>

<script>
import form from "@mixins/config-form";
import { CollapseTransition } from "vue2-transitions";
import FileUploader from "@components/FileUploader";
import { mapGetters, mapActions } from "vuex";

export default {
  extends: form,
  components: {
    CollapseTransition,
    FileUploader,
  },
  data() {
    return {
      now: moment(),
      formData: {
        dateFormat: "",
        timeFormat: "",
        timezone: "",
        fyStart: "",
        perPage: 10,
        locale: "",
        currency: "",
        azureApikey: "",
        googleApikey: "",
        footerCredit: "",
        https: false,
        errorDisplay: false,
        printPreview: true,
        frontendWebsite: false,
        ipFilter: false,
        emailLog: false,
        emailTemplate: false,
        todo: false,
        enableAthsAlert: false,
        backup: false,
        dateTimeAlwaysEng: false,
        maintenanceMode: false,
        allowDateInput: false,
        enableTour: false,
        enableMes: false,
        allowedFileExtensions: "",
        maintenanceModeMessage: "",
        type: "system",
      },
      preRequisite: {
        dateFormats: [],
        timeFormats: [],
        timezones: [],
        locales: [],
        currencies: [],
        paginations: [],
      },
      uploaderConfig: {
        allowedExtensions: ["json"],
        maxNoOfFiles: 1,
      },
    };
  },
  computed: {
    ...mapGetters("config", ["vars"]),
  },
  methods: {
    ...mapActions("common", ["Store", "Init"]),
    regenerateNavigation() {
      this.Generate().then(() => {
        this.isLoading = false;

        if (this.formData.azureApikey.length > 0) {
          let asterisk_str = this.formData.azureApikey.substr(
            0,
            this.formData.azureApikey.length - 4
          ); // this.formData.azureApikey;
          asterisk_str = asterisk_str.replace(/[a-z0-9-]/gi, "*");
          let nonAsterisk_str = this.formData.azureApikey.substr(
            this.formData.azureApikey.length - 4,
            this.formData.azureApikey.length
          );
          this.formData.azureApikey = asterisk_str + nonAsterisk_str;
        }
      });
    },
    beforeSubmit() {
      this.formData.allowedFileExtensions = this.formData.allowedFileExtensions.replace(/\s+|\r?\n|\r/gim, "");

      if (!this.formData.allowedFileExtensions) {
        this.$toasted.error(
          this.$t("global.required", {
            attribute: $t("config.system.allowed_file_extensions"),
          }),
          this.$toastConfig.error
        );
        return false;
      }
    },
    afterSubmit() {
      this.regenerateNavigation();
    },
    handleFileUpload(response) {
      if (response.uuid) {
        this.formData.googleApikey = response.uuid;
      } else if (response === true) {
        this.formData.googleApikey = "";
      }
    },
  },
  mounted() {
    this.getInitialData();

    if (this.formData.azureApikey.length > 0) {
      let asterisk_str = this.formData.azureApikey.substr(
        0,
        this.formData.azureApikey.length - 4
      ); // this.formData.azureApikey;
      asterisk_str = asterisk_str.replace(/[a-z0-9-]/gi, "*");
      let nonAsterisk_str = this.formData.azureApikey.substr(
        this.formData.azureApikey.length - 4,
        this.formData.azureApikey.length
      );
      this.formData.azureApikey = asterisk_str + nonAsterisk_str;
    }
  },
};
</script>
