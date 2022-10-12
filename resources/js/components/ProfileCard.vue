<template>
    <div :class="['profile-card', {'horizontal-layout': horizontal}, {'has-edit-image': editImage}]">

        <div :class="['profile-image-background', {'has-cover-image': coverImage}]" :style="coverPageStyles">
            <router-link v-if="editImage" class="edit-image-wrapper" :to="{ name: 'appProfileViewImage', params: { uuid: user.uuid } }"><i class="fas fa-image"></i></router-link>
        </div>

        <div class="profile-details-wrapper">

            <div :class="['profile-image-wrapper', {'placeholder': !image}]">
                <template v-if="to">
                    <router-link :to="to" class="profile-image pointer" v-if="image" tabindex="-1">
                        <template v-if="image">
                            <img v-lazy="image" class="img-fluid">
                        </template>
                        <template v-else>
                            <img v-lazy="computedImage" class="img-fluid">
                        </template>
                    </router-link>
                </template>
                <template v-else>
                    <div class="profile-image">
                        <template v-if="image">
                            <img v-lazy="image" class="img-fluid">
                        </template>
                        <template v-else>
                            <img v-lazy="computedImage" class="img-fluid">
                        </template>
                    </div>
                </template>

                <router-link v-if="editImage" class="edit-image-wrapper" :to="{ name: 'appProfileViewImage', params: { uuid: user.uuid } }"><i class="fas fa-image"></i></router-link>
            </div>

            <div class="profile-details">
                <router-link v-if="to" :to="to" tag="h5" class="profile-heading pointer" tabindex="-1">{{ name }}</router-link>
                <h5 v-else class="profile-heading">{{ name }}</h5>

                <p class="profile-sub-heading text-muted">{{ subHeading }}</p>

                <p class="profile-extras text-muted comma-list" v-if="!$slots.extras && !nonPerson">
                    <span v-if="gender">{{ gender.name }}</span>
                    <span v-if="age">{{ $t('global.years_old', { attribute: age.years }) }}</span>
                </p>
                <div :class="['profile-extras has-slot', profileExtraStyles]" v-else>
                    <slot name="extras" />
                </div>
            </div>
        </div>

        <popover-buttons v-if="nonPerson && showButtons && (linkOne || linkTwo)" :link-one="linkOne" :link-two="linkTwo" @buttonClicked="$emit('buttonClicked')" />
        <profile-buttons v-else-if="showButtons && user" :link="to" :user="user" @buttonClicked="$emit('buttonClicked')" />

    </div>
</template>

<script>
    import ProfileImageMaleKid from '@images/avatars/default-profile-image-male-kid.png'
    import ProfileImageFemaleKid from '@images/avatars/default-profile-image-female-kid.png'
    import ProfileImageMaleTeen from '@images/avatars/default-profile-image-male-teen.png'
    import ProfileImageFemaleTeen from '@images/avatars/default-profile-image-female-teen.png'
    import ProfileImageMale from '@images/avatars/default-profile-image-male.png'
    import ProfileImageFemale from '@images/avatars/default-profile-image-female.png'

    export default {
        name: "profile-card",
        components: {},
        props: {
            options: {
                type: Object,
                default () {
                    return {
                        imageType: 'adult' //kid, teen, adult
                    }
                }
            },
            to: {
                type: Object,
                default: null
            },
            linkOne: {
                type: Object,
                default: null
            },
            linkTwo: {
                type: Object,
                default: null
            },
            name: {
                required: true
            },
            subHeading: {
                type: String,
                default: ''
            },
            profileExtraStyles: {
                type: String,
                default: ''
            },
            gender: {
                type: Object,
                default() {
                    return {uuid: "male", name: "Male"}
                }
            },
            age: {
                type: Object,
                default() {
                    return { years: 18, months: 0, days: 0}
                }
            },
            image: {
                type: String,
                default: ''
            },
            coverImage: {
                type: String,
                default: ''
            },
            editImage: {
                type: Boolean,
                default: false
            },
            horizontal: {
                type: Boolean,
                default: true
            },
            showButtons: {
                type: Boolean,
                default: false
            },
            userStatus: {
                type: Boolean,
                default: false
            },
            nonPerson: {
                type: Boolean,
                default: false
            },
            user: {
                type: Object,
            },
        },
        computed: {
            computedImage() {
                if(! this.gender) {
                    return ProfileImageMale
                }

                if(this.gender.uuid === 'male') {
                    if(this.age) {
                        if(this.age.years < 13) {
                            return ProfileImageMaleKid
                        } else if(this.age.years < 18) {
                            return ProfileImageMaleTeen
                        }
                    }
                    return ProfileImageMale
                } else {
                    if(this.age) {
                        if(this.age.years < 13) {
                            return ProfileImageFemaleKid
                        } else if(this.age.years < 18) {
                            return ProfileImageFemaleTeen
                        }
                    }
                    return ProfileImageFemale
                }
            },
            coverPageStyles() {
                return this.coverImage ? {
                    backgroundImage: 'url(' + this.coverImage + ')',
                } : {}
            }
        },
    }

</script>
