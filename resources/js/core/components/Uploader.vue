<template>
    <div :class="['sm-uploader', 'dropzone-wrapper']">
        <vue-dropzone ref="myVueDropzone" :options="dropzoneOptions" :useCustomSlot="true">
            <slot name="custom-content">
                <div class="dropzone-custom-content">
                    <h3 class="dropzone-custom-title">Drag and drop to upload content!</h3>
                    <div class="subtitle">...or click to select a file from your computer</div>

                    <base-button design="secondary" class="mt-element">
                        <span>Click to Select</span>
                    </base-button>
                </div>
            </slot>
        </vue-dropzone>
    </div>
</template>

<script>
    export default {
        name: "uploader",
        props: {
            error: {
                type: String,
                description: "Select error (below select)"
            },
        },
        watch: {
            value: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('update:error', '')
                }
            }
        },
    }

</script>
