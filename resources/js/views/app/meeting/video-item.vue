<template>
    <div @dblclick="$emit('changeFocus')">
        <div class="video-wrapper">

            <slot />

            <div class="caption">
                <h6>
                    <span :class="['text-xs mr-1', {'text-success': video.status}, {'text-danger': !video.status}]"><i class="fas fa-circle"></i></span>

                    <template v-if="video.local">
                        {{ video.screen ? $t('meeting.your_screen') : $t('meeting.you') }}
                    </template>

                    <template v-else>
                        {{ video.screen ? `${video.name}${$t('meeting.screen')}` : video.name }}
                    </template>

                    <span v-if="!video.status" class="bracketed text-danger">{{ $t('meeting.left') }}</span>
                </h6>
            </div>

            <div class="highlight-border"></div>
        </div>


        <div v-if="!video.local" class="custom-controls-wrapper">
            <div class="custom-controls">
                <slot name="controls" />
            </div>
        </div>

        <div v-else-if="video.local && video.isHandUp" class="custom-controls-wrapper">
            <div class="custom-controls">
                <div class="status-icon">
                    <i class="fas fa-hand-paper enabled-text"></i>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props: {
            video: {
                type: Object,
                required: true
            },
        },
    }

</script>
