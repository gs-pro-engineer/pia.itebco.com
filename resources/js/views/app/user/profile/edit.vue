<template>
  <profile-page :is-loading="isLoading" :loader-color="vars.loaderColor">
    <template #sidebarMainContent>
      <profile-card
        v-if="entity"
        :name="entity.profile.name"
        :sub-heading="entity.username || '-'"
        :gender="entity.profile.gender"
        :language="entity.profile.language"
        :image="entity.profile.avatar"
        :age="entity.profile.age"
        data-card-color="whitish"
        :user-status="isOnline"
        :user="entity"
        :horizontal="false"
      />
    </template>

    <template #mainContent>
      <base-container
        boxed
        with-loader
        has-footer
        min-height="full"
        :is-loading="isLoading"
        :loader-color="vars.loaderColor"
      >
        <form @submit.prevent="submit">
          <template v-if="entity">
            <div class="row">
              <div class="col-12 mb-3">
                <base-input
                  auto-focus
                  :label="formLabels.name"
                  type="text"
                  v-model="formData.name"
                  :error.sync="formErrors.name"
                  required
                  format="startCase"
                />
              </div>

              <div class="col-12 col-md-6 mb-3">
                <base-select
                  :options="preRequisite.genders"
                  v-model="formData.gender"
                  :label="formLabels.gender"
                  :error.sync="formErrors.gender"
                  required
                />
              </div>

              <div class="col-12 col-md-6 mb-3">
                <base-input
                  :label="formLabels.birthDate"
                  addon-right-icon="far fa-calendar-alt"
                  type="text"
                  v-model="formData.birthDate"
                  :error.sync="formErrors.birthDate"
                  :is-wrapper="true"
                >
                  <date-picker
                    v-model="formData.birthDate"
                    :config="vars.datepickerConfig"
                    class="form-control datepicker"
                  >
                  </date-picker>
                </base-input>
              </div>

              <div class="col-12 col-md-6 mb-3">
                <base-select
                  :options="preRequisite.languages"
                  v-model="formData.language"
                  :label="formLabels.language"
                  :error.sync="formErrors.language"
                  required
                />
              </div>
            </div>
          </template>

          <div class="form-footer mt-5">
            <div class="left-side">
              <base-button
                type="button"
                design="light"
                @click="$router.back()"
                tabindex="-1"
                ><i class="fas fa-chevron-left"></i>
                {{ $t("general.back") }}</base-button
              >
            </div>
            <div class="right-side">
              <base-button type="button" design="light" @click="reset">{{
                $t("general.reset")
              }}</base-button>
              <base-button type="submit" design="primary"
                ><i class="fas fa-save"></i>
                {{
                  $t("global.save", { attribute: $t("user.profile") })
                }}</base-button
              >
            </div>
          </div>
        </form>
      </base-container>
    </template>
  </profile-page>
</template>

<script>
import ProfilePage from "@components/ProfilePage";
import ProfilePageSidebox from "@components/ProfilePageSidebox";
import * as headerMixins from "@mixins/header";
import { mapGetters, mapActions } from "vuex";
import EventBus from "@js/event-bus";

export default {
  components: {
    ProfilePage,
    ProfilePageSidebox,
  },
  data() {
    return {
      entity: null,
      isLoading: false,
      initUrl: "users",
      dataTitle: $t("user.user"),
      fallBackRoute: "appUserList",
      formData: {
        name: "",
        gender: null,
        language: null,
        birthDate: null,
      },
      formErrors: {},
      formLabels: {
        name: $t("user.props.name"),
        gender: $t("user.props.gender"),
        language: $t("user.props.language"),
        birthDate: $t("user.props.birth_date"),
      },
      initianLength: 0,
      initialFormData: null,
      emptyFormData: null,
      preRequisite: {
        genders: [],
        languages: [],
      },
    };
  },
  computed: {
    ...mapGetters("config", ["vars"]),
    ...mapGetters("user", ["uuid", "liveUsers"]),
    liveUser() {
      return (
        this.value && this.liveUsers.find((u) => u.uuid === this.value.uuid)
      );
    },
    isOnline() {
      return !!this.liveUser;
    },
  },
  methods: {
    ...mapActions("common", ["Init", "Get", "Custom", "GetPreRequisite"]),
    ...mapActions("user", ["GetUser"]),
    submit() {
      if (formUtil.isUnchanged(this.initialFormData, this.formData)) {
        this.$toasted.info(
          this.$t("general.nothing_changed"),
          this.$toastConfig.info
        );
        return false;
      }

      this.isLoading = true;

      this.Custom({
        method: "post",
        url: "/profile",
        data: this.formData,
      })
        .then((response) => {
          this.$toasted.success(response.message, this.$toastConfig);
          this.GetUser();
          this.initialFormData = _.cloneDeep(this.formData);
          this.$router.back();

          this.isLoading = false;
        })
        .catch((error) => {
          this.isLoading = false;
          this.formErrors = formUtil.handleErrors(error);
        });
    },
    reset() {
      formUtil.confirmAction().then((result) => {
        if (result.value) {
          this.formData = Object.assign(
            {},
            this.formData,
            _.cloneDeep(this.initialFormData)
          );
        }
      });
    },
    unsavedCheck(next) {
      formUtil.unsavedCheckAlert(this.initialFormData, this.formData, next);
    },
    fillPreRequisite(response) {
      this.preRequisite.objForEach((value, key) => {
        this.preRequisite[key] = response.hasOwnProperty(key)
          ? response[key]
          : value;
      });
    },
    setEntityData(response) {
      this.entity = response;
      this.formData.objForEach((value, key) => {
        this.formData[key] = response.profile.hasOwnProperty(key)
          ? response.profile[key]
          : value;
      });
    },
    async getInitialData() {
      this.isLoading = true;
      try {
        const response = await this.Get({ uuid: this.uuid });
        this.setEntityData(response);

        const response2 = await this.GetPreRequisite();

        this.fillPreRequisite(response2);

        this.isLoading = false;
        return response;
      } catch (error) {
        this.isLoading = false;
        formUtil.handleErrors(error);
        this.$router.push({ name: this.fallBackRoute });
      }
    },
    doInit() {
      this.Init({ url: this.initUrl });
      this.getInitialData();
    },
  },
  mounted() {
    EventBus.$off("ROUTE_LEAVING", this.unsavedCheck);
    EventBus.$on("ROUTE_LEAVING", this.unsavedCheck);
    this.doInit();
  },
  beforeDestroy() {
    delete this.formData;
    delete this.formErrors;
    delete this.formLabels;
    delete this.preRequisite;
    delete this.keepAddingFields;
  },
  destroyed() {
    EventBus.$off("ROUTE_LEAVING", this.unsavedCheck);
  },
};
</script>
