<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor">

        <div class="row" v-if="loggedInUser">
            <div class="col-12">
                <h4 class="text-center mb-5">{{ $t('global.upload', { attribute: $t('user.props.image') }) }} for {{ loggedInUser.name }}</h4>
                <hr>
            </div>

            <div class="col-12 col-md-6 d-flex justify-content-center">
                <image-uploader :url="`/profile/avatar`" name-label="user.props.image" :existing-image="loggedInUser.avatar" :placeholder="getUserImage(loggedInUser.gender, loggedInUser.age)" @uploaded="getInitialData" remove-from-server @removed="getInitialData" profile />
            </div>

            <div class="col-12 col-md-6 d-flex justify-content-center">
                <image-uploader :url="`/profile/avatar?type=cover`" name-label="user.props.cover_image" :existing-image="loggedInUser.cover" :placeholder="getUserImage(loggedInUser.gender, loggedInUser.age)" @uploaded="getInitialData" remove-from-server @removed="getInitialData" />
            </div>
        </div>

        <div class="form-footer mt-5">
            <div class="left-side">
                <base-button type="button" design="light" @click="$router.back()" tabindex="-1"><i class="fas fa-chevron-left"></i> {{ $t('general.back') }}</base-button>
            </div>
        </div>

    </base-container>
</template>

<script>
    import ImageUploader from '@components/ImageUploader'
    import { mapGetters, mapActions } from 'vuex'
    import * as formUtil from '@js/core/utils/form'
    import ProfileImageMaleKid from '@resources/images/avatars/default-profile-image-male-kid.png'
    import ProfileImageFemaleKid from '@resources/images/avatars/default-profile-image-female-kid.png'
    import ProfileImageMaleTeen from '@resources/images/avatars/default-profile-image-male-teen.png'
    import ProfileImageFemaleTeen from '@resources/images/avatars/default-profile-image-female-teen.png'
    import ProfileImageMale from '@resources/images/avatars/default-profile-image-male.png'
    import ProfileImageFemale from '@resources/images/avatars/default-profile-image-female.png'

    export default {
        components: {
            ImageUploader,
        },
        data() {
            return {
                isLoading : false,
            }
        },
        computed: {
            ...mapGetters('config', [
                'configs',
                'vars',
            ]),
            ...mapGetters('user', [
                'loggedInUser',
            ]),
        },
        methods: {
            ...mapActions('common', [
                'Init',
                'Custom',
            ]),
            ...mapActions('user', [
                'GetUser',
            ]),
            handleUploadError(errorMessage) {
                this.$toasted.error(errorMessage, this.$toastConfig.error)
            },
            getUserImage(gender, age) {
                if(!gender) {
                    return ProfileImageMale
                }

                if (gender.uuid === 'male') {
                    if (age) {
                        if (age.years < 13) {
                            return ProfileImageMaleKid
                        } else if (age.years < 18) {
                            return ProfileImageMaleTeen
                        }
                    }
                    return ProfileImageMale
                } else {
                    if (age) {
                        if (age.years < 13) {
                            return ProfileImageFemaleKid
                        } else if (age.years < 18) {
                            return ProfileImageFemaleTeen
                        }
                    }
                    return ProfileImageFemale
                }
            },
            getInitialData() {
                this.isLoading = true
                this.GetUser()
                    .then(response => {
                        this.isLoading = false
                    })
                    .catch(error => {
                        this.isLoading = false
                        formUtil.handleErrors(error)
                    })
            },
        },
        mounted() {
            this.Init({ url: 'users' })
            this.getInitialData()
        },
    }
</script>
