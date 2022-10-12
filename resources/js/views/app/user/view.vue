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
              <view-date
                :label="$t('user.props.birth_date')"
                :value="entity.profile.birthDate"
              />
            </div>
            <div class="col-12 col-md-6 mb-3">
              <view-single
                :label="$t('user.props.language')"
                :value="entity.profile.language"
                showIfExists="name"
              />
            </div>
            <div class="col-12 col-md-6 mb-3">
              <view-single
                :label="$t('config.role.role')"
                :value="entity.role"
                show-if-exists="name"
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

          <div class="right-side" v-if="hasPermission('edit-user')">
            <template v-if="entity">
              <base-button
                v-if="entity.status === 'activated'"
                type="button"
                design="danger"
                @click="changeStatus('banned')"
                >{{ $t("user.user_action_ban") }}</base-button
              >
              <base-button
                v-if="entity.status === 'banned'"
                type="button"
                design="success"
                @click="changeStatus('activated')"
                >{{ $t("user.user_action_activate") }}</base-button
              >
              <base-button
                v-if="entity.status === 'pending_activation'"
                type="button"
                design="success"
                @click="changeStatus('activated')"
                >{{ $t("user.user_action_approve") }}</base-button
              >
              <base-button
                v-if="entity.status === 'pending_approval'"
                type="button"
                design="success"
                @click="changeStatus('activated')"
                >{{ $t("user.user_action_approve") }}</base-button
              >
              <base-button
                v-if="entity.status === 'pending_approval'"
                type="button"
                design="warning"
                @click="changeStatus('disapproved')"
                >{{ $t("user.user_action_disapprove") }}</base-button
              >
            </template>
          </div>
        </div>
      </base-container>
    </template>
  </profile-page>
</template>

<script>
import view from "@mixins/view";
import ProfilePage from "@components/ProfilePage";
import ProfilePageSidebox from "@components/ProfilePageSidebox";
import * as headerMixins from "@mixins/header";
import { mapGetters, mapActions } from "vuex";

export default {
  extends: view,
  components: {
    ProfilePage,
    ProfilePageSidebox,
  },
  data() {
    return {
      initUrl: "users",
      dataTitle: $t("user.user"),
      fallBackRoute: "appUserList",
      permissionsRequired: {
        add: "create-user",
        edit: "edit-user",
      },
      routesRequired: {
        add: "appUserAdd",
        edit: "appUserEdit",
      },
    };
  },
  computed: {
    ...mapGetters("config", ["vars"]),
    ...mapGetters("user", ["hasPermission", "liveUsers"]),
    liveUser() {
      return this.value && this.liveUsers.find((u) => u.uuid === this.uuid);
    },
    isOnline() {
      return !!this.liveUser;
    },
  },
  methods: {
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
  },
};
</script>
