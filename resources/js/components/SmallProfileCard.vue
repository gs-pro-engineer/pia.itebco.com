<template>
  <div :class="['small-profile-card', { 'horizontal-layout': horizontal }]">
    <div class="profile-details-wrapper">
      <div class="profile-image-wrapper" :class="{ placeholder: !image }">
        <template v-if="to">
          <router-link :to="to" class="profile-image pointer" v-if="image">
            <img v-lazy="image" class="img-fluid" />
          </router-link>

          <router-link :to="to" class="profile-image pointer" v-else>
            <img v-lazy="computedImage" class="img-fluid" />
          </router-link>
        </template>
        <template v-else>
          <div class="profile-image" v-if="image">
            <img v-lazy="image" class="img-fluid" />
          </div>

          <div class="profile-image" v-else>
            <img v-lazy="computedImage" class="img-fluid" />
          </div>
        </template>
      </div>

      <div class="profile-details">
        <router-link
          v-if="to"
          :to="to"
          tag="h5"
          class="profile-heading pointer"
          >{{ name }}</router-link
        >
        <h5 v-else class="profile-heading">{{ name }}</h5>
        <p v-if="subHeading" class="profile-sub-heading text-muted">
          {{ subHeading }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileImageMaleKid from "@images/avatars/default-profile-image-male-kid.png";
import ProfileImageFemaleKid from "@images/avatars/default-profile-image-female-kid.png";
import ProfileImageMaleTeen from "@images/avatars/default-profile-image-male-teen.png";
import ProfileImageFemaleTeen from "@images/avatars/default-profile-image-female-teen.png";
import ProfileImageMale from "@images/avatars/default-profile-image-male.png";
import ProfileImageFemale from "@images/avatars/default-profile-image-female.png";

export default {
  name: "small-profile-card",
  components: {},
  props: {
    options: {
      type: Object,
      default() {
        return {
          imageType: "adult", //kid, teen, adult
        };
      },
    },
    to: {
      type: Object,
      default: null,
    },
    name: {
      required: true,
    },
    subHeading: {
      type: String,
      default: "",
    },
    gender: {
      type: Object,
      default() {
        return { uuid: "male", name: "Male" };
      },
    },
    age: {
      type: Object,
      default() {
        return { years: 18, months: 0, days: 0 };
      },
    },
    language: {
      type: Object,
      default() {
        return { uuid: "japanese", name: "Japanese" };
      },
    },
    image: {
      type: String,
      default: "",
    },
    horizontal: {
      type: Boolean,
      default: true,
    },
    userStatus: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Object,
    },
  },
  computed: {
    computedImage() {
      if (!this.gender) {
        return ProfileImageMale;
      }

      if (this.gender.uuid === "male") {
        if (this.age) {
          if (this.age.years < 13) {
            return ProfileImageMaleKid;
          } else if (this.age.years < 18) {
            return ProfileImageMaleTeen;
          }
        }
        return ProfileImageMale;
      } else {
        if (this.age) {
          if (this.age.years < 13) {
            return ProfileImageFemaleKid;
          } else if (this.age.years < 18) {
            return ProfileImageFemaleTeen;
          }
        }
        return ProfileImageFemale;
      }
    },
  },
};
</script>
