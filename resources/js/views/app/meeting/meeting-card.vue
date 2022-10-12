<template>
    <div class="post-item meeting-item" :class="{'d-flex': flex}">
        <card shadow :lift="lift" :raise="raise" no-body show-footer>

            <template #title>
                <router-link :to="computedLink">
                    <h6>{{ meeting.title }}</h6>
                </router-link>
            </template>

            <template #actions>
                <slot name="actions"></slot>
            </template>

            <template #bottomImage>
                <router-link :to="computedLink" class="meeting-image">
                    <img class="card-img-bottom" :src="computedImage" :alt="meeting.title" >
                </router-link>
            </template>

            <template v-if="meeting.agenda" #footer>
                <div class="meeting-badges">
                    <badge type="dark">{{ meeting.type.name }}</badge>
                    <badge type="dark">{{ meeting.category.name }}</badge>
                </div>

                <div class="d-flex justify-content-between">
                    <!-- <div v-if="meeting.status === 'live'">
                        <view-date :prefix="$t('meeting.started_at')" :value="meeting.startedAt" with-tz tag="span" class="mb-0" data-classes="text-sm" />
                    </div>
                    <div v-else-if="meeting.status === 'ended'">
                        <view-date :prefix="$t('meeting.ended_at')" :value="meeting.endedAt" with-tz tag="span" class="mb-0" data-classes="text-sm" />
                    </div> -->
                    <div>
                        <view-date :prefix="$t('meeting.props.scheduled_on')" :value="meeting.startDateTime" with-tz tag="span" class="meeting-date mb-0" data-classes="text-sm" prefix-classes="text-sm" />
                    </div>

                    <badge rounded :type="vars.colorsForStatus['meeting-'+meeting.status]">{{ meeting.status }}</badge>
                </div>
                <!-- <view-paragraph :value="excerpt" class="text-justify text-sm p-0 m-0" data-classes="p-0 m-0" /> -->

            </template>

        </card>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        props: {
            meeting: {
                type: Object,
                required: true
            },
            lift: {
                type: Boolean,
                default: false
            },
            raise: {
                type: Boolean,
                default: false
            },
            flex: {
                type: Boolean,
                default: true
            },
            link: {
                type: [Object, String],
                default: null
            },
        },
        computed: {
            ...mapGetters('config', [
                'vars',
                'configs',
            ]),
            computedLink() {
                return this.link ? this.link : this.meetingLink
            },
            meetingLink() {
                return { name: 'appMeetingView', params: { uuid: this.meeting.uuid } }
            },
            computedImage() {
                return this.meeting.cover ? this.meeting.cover : '/images/placeholder-dash.png'
            },
            // excerpt() {
            //     return formUtil.getExcerpt(this.meeting.agenda, null, 25) + '...'
            // },
        },
        methods: {
        }
    }

</script>
