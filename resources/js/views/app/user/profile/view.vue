<template>
  <profile-page
    :is-loading="isLoading"
    :loader-color="vars.loaderColor"
    inner-sidebar-box-classes="h-100"
  >
    <template #sidebarMainContent>
      <profile-card
        v-if="entity"
        :name="entity.profile.name"
        :sub-heading="entity.username || '-'"
        :gender="entity.profile.gender"
        :image="entity.profile.avatar"
        :cover-image="entity.profile.cover"
        :age="entity.profile.age"
        :language="entity.profile.language"
        data-card-color="whitish"
        :user-status="isOnline"
        :user="entity"
        :horizontal="false"
        edit-image
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
        <template v-if="entity">
          <div class="row">
            <div class="col-12 col-md-6 mb-3">
              <view-single
                :label="$t('user.props.name')"
                :value="entity.profile.name"
              />
            </div>
            <div class="col-12 col-md-6 mb-3">
              <view-single
                :label="$t('user.props.gender')"
                :value="entity.profile.gender"
                showIfExists="name"
              />
            </div>
            <div class="col-12 col-md-6 mb-3">
              <view-single
                :label="$t('user.props.email')"
                :value="entity.email"
              />
            </div>
            <div class="col-12 col-md-6 mb-3">
              <view-single
                :label="$t('user.props.birth_date')"
                :value="
                  entity.profile.birthDate | moment(vars.defaultDateFormat)
                "
              />
            </div>
            <div class="col-12 col-md-6 mb-3">
              <view-single
                :label="$t('user.props.language')"
                :value="entity.profile.language"
                showIfExists="name"
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
            <base-button
              type="button"
              design="dark"
              @click.stop="
                $router.push({
                  name: 'appProfileViewImage',
                  params: { uuid: entity.uuid },
                })
              "
              ><i class="fas fa-image"></i>
              {{
                $t("global.edit", { attribute: $t("user.props.image") })
              }}</base-button
            >
            <base-button
              type="button"
              design="primary"
              @click.stop="
                $router.push({
                  name: 'appProfileEdit',
                  params: { uuid: entity.uuid },
                })
              "
              ><i class="fas fa-edit"></i>
              {{
                $t("global.edit", { attribute: $t("user.user") })
              }}</base-button
            >
          </div>
        </div>
      </base-container>
    </template>
  </profile-page>
</template>

<script>
import ProfilePage from "@components/ProfilePage";
import ProfilePageSidebox from "@components/ProfilePageSidebox";
import * as headerMixins from "@mixins/header";
import * as transformers from "@js/helpers/transformers";
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
      headerButtons: null,
      headerLinks: null,
    };
  },
  computed: {
    ...mapGetters("config", ["vars"]),
    ...mapGetters("user", ["uuid", "hasPermission", "liveUsers"]),
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
    ...mapActions("common", ["Init", "Get", "Custom", "SetPageHeader"]),
    ...mapActions("config", ["SetUiConfig", "SetConfig"]),
    changeStatus(status) {
      formUtil.confirmAction().then((result) => {
        if (result.value) {
          this.isLoading = true;
          let data = {
            status,
          };

          this.Custom({
            url: `/${this.initUrl}/${this.uuid}/status`,
            method: "post",
            data,
          })
            .then((response) => {
              this.isLoading = false;
              this.getInitialData();
            })
            .catch((error) => {
              this.isLoading = false;
              formUtil.handleErrors(error);
            });
        } else {
          result.dismiss === Swal.DismissReason.cancel;
        }
      });
    },
    setEntityData(response) {
      if (this.entityKey && response.hasOwnProperty(this.entityKey)) {
        this.entity = response[this.entityKey];
      } else {
        this.entity = response;
      }
    },
    async getInitialData() {
      this.isLoading = true;
      try {
        let response = await this.Get({ uuid: this.uuid });
        this.setEntityData(response);

        this.isLoading = false;
        return response;
      } catch (error) {
        this.isLoading = false;
        formUtil.handleErrors(error);
        this.$router.push({ name: this.fallBackRoute });
      }
    },
    getHeaderOptions() {
      let buttons = [];
      if (this.routesRequired && this.routesRequired.add) {
        if (
          typeof this.permissionsRequired === "object" &&
          this.permissionsRequired !== null &&
          this.permissionsRequired.add
        ) {
          buttons.push(
            headerMixins.addButton(
              this.routesRequired.add,
              this.permissionsRequired.add
            )
          );
        } else if (this.permissionsRequired) {
          buttons.push(
            headerMixins.addButton(
              this.routesRequired.add,
              this.permissionsRequired
            )
          );
        }
      }

      if (this.headerButtons) {
        buttons = buttons.concat(this.headerButtons);
      }

      let links = [];
      links.push(headerMixins.printOption());
      links.push(headerMixins.exportPdfOption());

      if (this.headerLinks) {
        links = links.concat(this.headerLinks);
      }

      return {
        hideLinks: this.hideHeaderLinks || false,
        buttons,
        links,
        title: this.pageTitle || "",
        subTitle: this.pageTitle ? this.subTitle || "" : "",
      };
    },
    getKeyBindingOptions() {
      let opts = {
        ...headerMixins.commonKeyBindings,
      };
      if (this.routesRequired && this.routesRequired.add) {
        opts["key_a"] = this.routesRequired.add;
      }
      if (this.routesRequired && this.routesRequired.edit) {
        opts["key_e"] = this.routesRequired.edit;
      }
      return opts;
    },
    applyPageHeader() {
      let pageHeaderOptions = Object.assign(
        {},
        this.getHeaderOptions(),
        this.header || {}
      );
      let keyBindings = Object.assign(
        {},
        this.getKeyBindingOptions(),
        this.keyBindings || {}
      );

      this.SetPageHeader(pageHeaderOptions);
      this.SetConfig({
        keyBindings: keyBindings,
      });
    },
    async export(options) {
      this.isLoading = true;
      try {
        let printTitle = `Printing ${this.dataTitle || ""}`;
        if (this.printTitle) {
          printTitle = this.printTitle;
        }
        const printPreview = this.configs.system.printPreview;
        this.$printComponent("printable", {
          title: printTitle,
          autoPrint: !printPreview,
          autoCloseAfterPrint: !printPreview,
        });
      } catch (e) {}
      this.isLoading = false;
    },
    doInit() {
      this.Init({ url: this.initUrl });

      this.getInitialData();
      this.applyPageHeader();
    },
  },
  mounted() {
    EventBus.$off("EXPORT", this.export);
    EventBus.$on("EXPORT", this.export);

    this.doInit();
  },
  destroyed() {
    EventBus.$off("EXPORT", this.export);
  },
};
</script>
