<template>
  <base-container
    boxed
    with-loader
    :is-loading="isLoading"
    :loader-color="vars.loaderColor"
  >
    <form @submit.prevent="submit">
      <div class="py-5" v-if="!formData.uploaded">
        <file-uploader
          name-label="upload.file"
          :options="uploaderConfig"
          @updated="handleFileUpload"
          :multiple="false"
          url="/contacts/import/start"
          button-classes="justify-content-center"
        />
      </div>

      <div class="mt-3" v-else>
        <h5 class="pb-4">{{ $t("general.choose_columns") }}</h5>

        <div class="row">
          <div
            class="col-12 col-md-3 mb-5"
            v-for="(column, index) in formData.columns"
          >
            <base-select
              :options="preRequisite.options"
              v-model="column.selected"
              :label="$t('general.column', { number: index + 1 })"
              :error.sync="formErrors['column' + index]"
              :allow-empty="false"
              :disabled="isLoading"
            />

            <h6 class="small text-muted px-2 font-weight-bold">
              {{ $t("general.sample") }}:

              <span class="text-muted px-2 comma-list">
                <template v-for="item in preRequisite.items">
                  <span v-if="item[index]">{{ item[index] }}</span>
                </template>
              </span>
            </h6>
          </div>
        </div>

        <div class="form-footer">
          <div class="right-side">
            <base-button type="submit" design="primary">{{
              $t("global.import", { attribute: $t("contact.contacts") })
            }}</base-button>
          </div>
        </div>
      </div>
    </form>
  </base-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import EventBus from "@js/event-bus";
import FileUploader from "@components/FileUploader";

export default {
  components: {
    FileUploader,
  },
  data() {
    return {
      formData: {
        uuid: null,
        columns: [],
        updated: false,
        uploaded: false,
      },
      formErrors: {},
      preRequisite: {
        items: [],
        options: [],
      },
      uploaderConfig: {
        allowedExtensions: ["csv"],
        maxNoOfFiles: 1,
      },
      initialFormData: null,
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters("config", ["vars"]),
  },
  methods: {
    ...mapActions("common", ["Store", "Init"]),
    submit() {
      if (formUtil.isUnchanged(this.initialFormData, this.formData)) {
        this.$toasted.info(
          this.$t("general.nothing_changed"),
          this.$toastConfig.info
        );
        return false;
      }

      formUtil.confirmAction().then((result) => {
        if (result.value) {
          this.isLoading = true;

          this.Store(this.formData)
            .then((response) => {
              this.$toasted.success(response.message, this.$toastConfig);
              this.clear();
              this.isLoading = false;
            })
            .catch((error) => {
              this.isLoading = false;
              this.formErrors = formUtil.handleErrors(error);
            });
        }
      });
    },
    unsavedCheck(next) {
      formUtil.unsavedCheckAlert(this.initialFormData, this.formData, next);
    },
    clear() {
      this.formData.uuid = null;
      this.preRequisite.items = [];
      this.preRequisite.options = [];
      this.formData.columns = [];
      this.formData.uploaded = false;
      this.formData.updated = false;
    },
    handleFileUpload(response) {
      console.log("Contact Import CSV File response==========", response);
      if (response.uuid) {
        this.formData.uuid = response.uuid;
        this.preRequisite.items = response.items;
        this.preRequisite.options = response.options;
        const itemsObj = response.items[0];
        const items = Array.from(Object.keys(itemsObj), (k) => itemsObj[k]);
        this.formData.columns = items.map((val, index) => {
          return {
            selected: response.options[index],
          };
        });
        this.formData.uploaded = true;
        this.formData.updated = true;
      }
    },
  },
  mounted() {
    EventBus.$off("ROUTE_LEAVING", this.unsavedCheck);
    EventBus.$on("ROUTE_LEAVING", this.unsavedCheck);
    this.Init({ url: "contacts/import/finish" });
  },
  destroyed() {
    EventBus.$off("ROUTE_LEAVING", this.unsavedCheck);
  },
  beforeRouteLeave(to, from, next) {
    EventBus.$emit("ROUTE_LEAVING", next);
  },
};
</script>
