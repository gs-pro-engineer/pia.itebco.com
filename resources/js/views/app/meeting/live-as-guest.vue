<template>
    <base-container with-loader :is-loading="isLoading" :loader-color="vars.loaderColor" :overlay-color="uiConfigs.pageColorSchemeType" loader-size="screen" :class="['meeting-page', {'auto-hide-footer': pageConfigs.footerAutoHide && hasVideos}, {'pulse': recording}, {'mirrored-video': configs.meeting && configs.meeting.mirroredVideo}]" :data-page-background-color="uiConfigs.pageBackgroundColor" :data-card-background-color="uiConfigs.pageContainerBackgroundColor">

        <template v-if="!duplicateTab">
            <div :class="['meeting-footer', {'has-videos': hasVideos}]" :data-footer-background-color="uiConfigs.leftSidebarColor">

                <div class="logo-wrapper">
                    <app-logo place="sidebar" size="sm" tag="span" />
                </div>

                <div class="meeting-actions meeting-actions-center" v-if="entity && entity.status">

                    <template v-if="pageConfigs.showEnableAudioBtn">
                        <button v-if="pageConfigs.enableAudio" type="button" class="btn action" @click="toggleAudio" v-b-tooltip.hover.d500 :title="$t('meeting.mute_audio')"><i class="fas fa-microphone"></i></button>

                        <button v-else type="button" class="btn action disabled-text" @click="toggleAudio" v-b-tooltip.hover.d500 :title="$t('meeting.unmute_audio')"><i class="fas fa-microphone-slash"></i></button>
                    </template>

                    <template v-if="pageConfigs.showEnableVideoBtn">
                        <button v-if="pageConfigs.enableVideo" type="button" class="btn action" @click="toggleVideo" v-b-tooltip.hover.d500 :title="$t('meeting.mute_video')"><i class="fas fa-video"></i></button>

                        <button v-else type="button" class="btn action disabled-text" @click="toggleVideo" v-b-tooltip.hover.d500 :title="$t('meeting.unmute_video')"><i class="fas fa-video-slash"></i></button>
                    </template>

                    <button v-if="pageConfigs.showDeviceConfig" type="button" class="btn action d-sm-none d-md-inline-block" @click="toggleDevicesModal" v-b-tooltip.hover.d500 :title="$t('meeting.media_devices.setup')"><i class="fas fa-cogs"></i></button>

                    <template v-if="videoList.length">

                        <button type="button" class="btn action danger-text" @click="getOffline" v-b-tooltip.hover.d500 :title="$t('meeting.leave_meeting')"><i class="fas fa-phone-slash"></i></button>

                        <template v-if="pageConfigs.enableScreenSharing && pageConfigs.pamEnableScreenSharingForGuest">
                            <button v-if="localScreenStreamid" type="button" class="btn action disabled-text d-none d-lg-inline-block" @click="stopSharingScreen" v-b-tooltip.hover.d500 :title="$t('meeting.stop_sharing_screen')"><i class="fas fa-minus-square"></i></button>

                            <button v-else type="button" class="btn action d-none d-lg-inline-block" @click="shareScreen" v-b-tooltip.hover.d500 :title="$t('meeting.share_screen')"><i class="fas fa-desktop"></i></button>
                        </template>

                        <template v-if="pageConfigs.enableWhiteboard && pageConfigs.pamEnableWhiteboardForGuest">
                            <button v-if="showWhiteboard" type="button" class="btn action danger-text d-none d-md-inline-block" @click="toggleWhiteboard" v-b-tooltip.hover.d500 :title="$t('meeting.hide_whiteboard')"><i class="fas fa-chalkboard-teacher"></i></button>
                            <button v-if="showWhiteboard" type="button" class="btn action danger-text d-none d-md-inline-block" @click="hideAndDestroyWhiteboard" v-b-tooltip.hover.d500 :title="$t('meeting.clear_hide_whiteboard')"><i class="fas fa-chalkboard-teacher mr-0"></i><i class="fas fa-times font-size-xs ml-1 font-size-xs text-danger"></i></button>

                            <button v-else type="button" class="btn action d-none d-md-inline-block" @click="toggleWhiteboard" v-b-tooltip.hover.d500 :title="$t('meeting.show_whiteboard')"><i class="fas fa-chalkboard-teacher"></i></button>
                        </template>

                        <template v-if="pageConfigs.enableHandGesture">
                            <button v-if="isHandUp" type="button" class="btn action success-text" @click="toggleHandUp" v-b-tooltip.hover.d500 :title="$t('meeting.lower_hand')"><i class="far fa-hand-paper"></i></button>

                            <button v-else type="button" class="btn action" @click="toggleHandUp" v-b-tooltip.hover.d500 :title="$t('meeting.raise_hand')"><i class="fas fa-hand-paper"></i></button>
                        </template>
                    </template>
                </div>

                <div class="meeting-actions meeting-actions-right">
                    <template v-if="entity">

                        <base-dropdown v-if="entity.status && videoList.length && !(pageConfigs.enableWhiteboard && showWhiteboard)" tag="div" class="more-actions d-none d-md-inline-block" direction="up" menu-classes="show-dropdown-up" position="right">
                            <button slot="title" type="button" class="btn action grid-toggle-btn d-none d-md-inline-block" v-b-tooltip.hover.d500 :title="$t('meeting.change_layout')"><i class="fas fa-th-large"></i></button>

                            <button type="button" class="dropdown-item d-flex justify-content-between align-items-center" @click="toggleLayout('grid')">{{ $t('meeting.grid_layout') }} <i class="fas fa-check min-width-auto text-light" :class="{'text-dark': pageConfigs.layout === 'grid'}"></i></button>

                            <button type="button" class="dropdown-item d-flex justify-content-between align-items-center" @click="toggleLayout('gallery')">{{ $t('meeting.gallery_layout') }} <i class="fas fa-check min-width-auto text-light" :class="{'text-dark': pageConfigs.layout === 'gallery'}"></i></button>

                            <button v-if="pageConfigs.hasAgenda || (pageConfigs.enableWhiteboard && showWhiteboard)" type="button" class="dropdown-item d-flex justify-content-between align-items-center" @click="toggleLayout('presentation')">{{ $t('meeting.presentation_layout') }} <i class="fas fa-check min-width-auto text-light" :class="{'text-dark': pageConfigs.layout === 'presentation'}"></i></button>

                            <button type="button" class="dropdown-item d-flex justify-content-between align-items-center" @click="toggleLayout('fullpage')">{{ $t('meeting.fullpage_layout') }} <i v-if="pageConfigs.layout === 'fullpage'" class="fas fa-check min-width-auto text-light" :class="{'text-dark': pageConfigs.layout === 'fullpage'}"></i></button>
                        </base-dropdown>

                        <button v-if="pageConfigs.enableChat && configs.chat && configs.chat.enabled && subscriptions && subscriptions.userPrivate && !entity.isBlocked" type="button" :class="['btn action chats-toggle-btn', {'pulse': totalUnreadMessages && totalUnreadMessages > 0 && !isChatBoxShown}]" @click="toggleChatBox" v-b-tooltip.hover.d500 :title="$t((isChatBoxShown ? 'global.hide' : 'global.show'), { attribute: $t('chat.chats')})">
                            <i :class="[isChatBoxShown ? 'fas fa-comment-slash' : 'far fa-comment']"></i>

                            <span v-if="totalUnreadMessages && totalUnreadMessages > 0" class="text-success unread-count">{{ totalUnreadMessages }}</span>

                        </button>
                    </template>

                    <base-dropdown tag="div" class="more-actions" direction="up" menu-classes="show-dropdown-up" position="right">
                        <button slot="title" type="button" class="btn action more-actions-btn"><i class="fas fa-ellipsis-v"></i></button>

                        <button v-if="!(entity && entity.status && videoList.length)" type="button" class="dropdown-item" @click="$router.back()"><i class="fas fa-chevron-left"></i> {{ $t('general.back') }}</button>
                        <button v-else type="button" class="dropdown-item" @click="getOffline"><i class="fas fa-phone-slash"></i> {{ $t('meeting.leave_meeting') }}</button>

                        <button v-if="entity && entity.status && entity.canModerate && entity.status==='live'" type="button" class="dropdown-item" @click="endMeeting"><i class="fas fa-calendar-times"></i> {{ $t('meeting.end_meeting') }}</button>

                        <button type="button" class="dropdown-item" @click="updateUsername"><i class="fas fa-user"></i> {{ $t('meeting.update_username') }}</button>

                        <div role="separator" class="dropdown-divider my-1"></div>

                        <button v-if="pageConfigs.hasAgenda" type="button" class="dropdown-item agenda-toggle-btn" @click="toggleAgenda"><i class="fas fa-quote-left"></i> {{ $t((showAgenda ? 'global.hide' : 'global.show'), { attribute: $t('general.agenda')}) }}</button>

                        <button type="button" class="dropdown-item d-none d-md-block" @click="toggleFooterAutoHide"><i class="fas fa-hourglass-start"></i> {{ $t((pageConfigs.footerAutoHide ? 'meeting.toggle_autohide_off' : 'meeting.toggle_autohide_on')) }}</button>

                        <button v-if="uiConfigs.fullScreen" type="button" class="dropdown-item d-none d-md-block" @click="toggleFullScreen(false)"><i class="fas fa-compress"></i> {{ $t('config.ui.toggle_fullscreen') }}</button>
                        <button v-else type="button" class="dropdown-item d-none d-md-block" @click="toggleFullScreen(true)"><i class="fas fa-expand"></i> {{ $t('config.ui.toggle_fullscreen') }}</button>

                        <div role="separator" class="dropdown-divider d-md-none my-1"></div>

                        <button type="button" class="dropdown-item d-md-none" @click="toggleLayout('grid')"><i class="fas fa-check text-light" :class="{'text-dark': pageConfigs.layout === 'grid'}"></i> {{ $t('meeting.grid_layout') }}</button>

                        <button type="button" class="dropdown-item d-md-none" @click="toggleLayout('fullpage')"><i class="fas fa-check text-light" :class="{'text-dark': pageConfigs.layout === 'fullpage'}"></i> {{ $t('meeting.fullpage_layout') }}</button>

                        <div role="separator" class="dropdown-divider my-1"></div>

                        <button v-if="pageConfigs.showDeviceConfig" type="button" class="dropdown-item show-devices-btn" @click="toggleDevicesModal"><i class="fas fa-cogs"></i> {{ $t('meeting.media_devices.setup') }}</button>

                        <button v-if="pageConfigs.enableLinkSharing && pageConfigs.pamEnableLinkSharingForGuest" type="button" class="dropdown-item" @click="shareURL"><i class="fas fa-share-alt"></i> {{ $t('general.share_url') }}</button>

                    </base-dropdown>
                </div>
            </div>


            <div :class="['agenda-streams-container', {'has-agenda': pageConfigs.hasAgenda || (hasVideos && pageConfigs.enableWhiteboard)}, {'agenda-visible': showAgenda || (hasVideos && showWhiteboard)}, {'has-cover-image': entity && entity.cover && hasVideos} ]" :style="coverPageStyles">

                <template v-if="entity && !entity.isBlocked">
                    <template v-if="pageConfigs.hasAgenda">
                        <card shadow class="agenda-container" body-classes="agenda-wrapper">

                            <div class="meeting-agenda-container">
                                <vue-scroll ref="vue-scroll-agenda" id="vue-scroll-agenda">
                                    <template v-if="entity">
                                        <h4 class="meeting-title" v-once>{{ entity.title }}</h4>

                                        <div class="text-muted mt-3">
                                            <span v-once>{{ $t('meeting.props.type') }}: {{ entity.type.name }},</span>
                                            <span v-once>{{ $t('meeting.meeting_category.category') }}: {{ entity.category.name }}</span>
                                        </div>

                                        <view-paragraph class="mt-3" :label="$t('meeting.props.agenda')" :value="entity.agenda" />

                                        <view-paragraph v-if="entity.description" class="mt-3" :label="$t('meeting.props.description')" :value="entity.description" html />

                                        <view-uploads v-if="entity.attachments" :class="['mt-3', uiConfigs.colorSchemeType]" :label="$t('upload.attachments')" :name-label="$t('upload.attachment')" :value="entity.attachments" download-button-classes="text-gray" :url-prefix="`/meetings/${uuid}/downloads`" />
                                    </template>
                                </vue-scroll>
                            </div>

                        </card>
                    </template>

                    <template v-if="hasVideos && pageConfigs.enableWhiteboard">
                        <card shadow class="whiteboard-container" body-classes="whiteboard-wrapper">

                            <div class="meeting-whiteboard-container">
                                <vue-scroll ref="vue-scroll-whiteboard" id="vue-scroll-whiteboard">
                                    <div id="whiteboard" class="whiteboard" ref="whiteboard"></div>
                                </vue-scroll>
                            </div>

                        </card>
                    </template>
                </template>


                <div :class="['streams-container', hasVideos ? `stream-${pageConfigs.layout}-layout` : '']">

                    <div :class="['video-list', hasVideosClasses]" ref="videoListEle">

                        <template v-if="hasVideos">
                            <template v-for="(item, itemIndex) in videoList">
                                <div :key="`${item.uuid}${item.id}`" :class="['video-item video-card', {'maximized': item.maximized}, {'local': item.local}, {'screen': item.screen}, {'whiteboard': item.whiteboard}, {'fullscreen-item': item.id === fullScreenItemId}, {'hand-up': item.isHandUp}, {'user-speaking': item.speaking}, {'audio-muted': item.audioMuted}, {'video-muted': item.videoMuted || !item.hasVideo }, {'no-stream': !item.status}, {'disable-mirror': item.disableMirror}, {'has-full-user-avatar': pageConfigs.enableUserAvatar && pageConfigs.enableFullUserAvatar && item.extra && (item.extra.cover || item.extra.avatar) && (item.videoMuted || !item.hasVideo)}]" @dblclick="changeFocus(item)">
                                    <div class="video-wrapper">

                                        <video autoplay playsinline ref="videos" :muted="item.muted" :id="item.id" :poster="item.status  ? null : '/images/video/no-stream.jpg'" :class="[{'no-poster': item.status && !item.videoMuted}]"></video>

                                        <div v-if="pageConfigs.enableUserAvatar && pageConfigs.enableFullUserAvatar && item.extra && (item.extra.cover || item.extra.avatar) && (item.videoMuted || !item.hasVideo)" class="full-user-avatar" :style="`background-image: url(${ item.extra.cover || item.extra.avatar })`"></div>

                                        <div class="caption">
                                            <template v-if="pageConfigs.enableUserAvatar && !item.local">
                                                <user-avatar :user="item.extra ? item.extra : {name: item.name}" :size="40" class="mr-1" has-shadow />
                                            </template>

                                            <h6>
                                                <span :class="['text-xs mr-1', {'text-success': item.status}, {'text-danger': !item.status}]"><i class="fas fa-circle"></i></span>

                                                <template v-if="item.local">
                                                    {{ item.screen ? $t('meeting.your_screen') : (item.whiteboard ? $t('meeting.your_whiteboard') : $t('meeting.you')) }}
                                                </template>

                                                <template v-else>
                                                    {{ item.screen ? `${item.name}${$t('meeting.screen')}` : (item.whiteboard ? `${item.name}${$t('meeting.whiteboard')}` : item.name) }}
                                                </template>

                                                <span v-if="!item.status" class="bracketed text-danger">{{ $t('meeting.left') }}</span>
                                            </h6>
                                        </div>

                                        <div class="highlight-border"></div>
                                    </div>


                                    <div v-if="!item.local" class="custom-controls-wrapper">
                                        <div class="custom-controls">
                                            <div v-if="item.extra.isHost" class="status-icon" v-b-tooltip.hover.d500 :title="$t('meeting.host')">
                                                <i class="fas fa-user-tie text-info"></i>
                                            </div>
                                            <div v-else-if="item.extra.canModerate" class="status-icon" v-b-tooltip.hover.d500 :title="$t('meeting.moderator')">
                                                <i class="fas fa-user-cog text-info"></i>
                                            </div>

                                            <div class="status-icon" v-if="!item.whiteboard && !item.screen && item.isHandUp">
                                                <i class="fas fa-hand-paper enabled-text"></i>
                                            </div>

                                            <div class="status-icon" v-if="item.audioMuted">
                                                <i class="fas fa-microphone-slash disabled-text"></i>
                                            </div>

                                            <template v-if="pageConfigs.layout === 'fullpage' && !item.maximized">
                                                <button @click="toggleRemoteAudio(item, itemIndex)" v-b-tooltip.hover.d500 :title="$t('meeting.mute_for_me')" class="controls-btn">
                                                    <i :class="['fas', {'fa-volume-up enabled-text': item.muted}, {'fa-volume-off disabled-text': !item.muted}]"></i>
                                                </button>

                                                <button @click="changeFocus(item)" v-b-tooltip.hover.d500 :title="$t('meeting.maximize')" class="controls-btn">
                                                    <i class="fas fa-expand enabled-text"></i>
                                                </button>

                                                <button v-if="pageConfigs.enableSnapshot && (pageConfigs.anyoneCanTakeSnapshot || entity.canModerate)" @click="takeSnapshotOfStream(item, itemIndex)" v-b-tooltip.hover.d500 :title="$t('meeting.take_snapshot')" class="controls-btn">
                                                    <i class="fas fa-image enabled-text"></i>
                                                </button>

                                                <template v-if="entity.canModerate">
                                                    <button @click="kickRemoteUser(item, itemIndex)" v-b-tooltip.hover.d500 :title="$t('meeting.kick_ban_participant')" class="controls-btn">
                                                        <i class="fas fa-ban enabled-text"></i>
                                                    </button>

                                                    <button @click="toggleRemoteAudioSource(item, itemIndex)" v-b-tooltip.hover.d500 :title="$t('meeting.mute_for_everyone')" class="controls-btn">
                                                        <i :class="['fas', {'fa-microphone enabled-text': item.audioMuted}, {'fa-microphone-slash disabled-text': !item.audioMuted}]"></i>
                                                    </button>
                                                </template>
                                            </template>

                                            <base-dropdown v-else tag="div" class="custom-control-dropdown" position="right">
                                                <button slot="title" type="button" class="btn action custom-control-dropdown-btn btn-sm"><i class="fas fa-ellipsis-v"></i></button>


                                                <button type="button" class="dropdown-item btn-sm" @click="disableMirror(item, itemIndex)">
                                                    <i class="fas fa-exchange-alt enabled-text"></i> {{ $t('meeting.mirror_flip') }}
                                                </button>

                                                <button v-if="pageConfigs.layout === 'fullpage' && !item.maximized" type="button" class="dropdown-item btn-sm" @click="changeFocus(item)">
                                                    <i class="fas fa-expand enabled-text"></i> {{ $t('meeting.maximize') }}
                                                </button>

                                                <button type="button" class="dropdown-item btn-sm" @click="toggleRemoteAudio(item, itemIndex)">
                                                    <template v-if="item.muted">
                                                        <i class="fas fa-volume-up enabled-text"></i> {{ $t('meeting.unmute_for_me') }}
                                                    </template>
                                                    <template v-else>
                                                        <i class="fas fa-volume-off disabled-text"></i> {{ $t('meeting.mute_for_me') }}
                                                    </template>
                                                </button>

                                                <button v-if="pageConfigs.enableSnapshot && (pageConfigs.anyoneCanTakeSnapshot || entity.canModerate)" type="button" class="dropdown-item btn-sm" @click="takeSnapshotOfStream(item, itemIndex)">
                                                    <i class="fas fa-image enabled-text"></i> {{ $t('meeting.take_snapshot') }}
                                                </button>
                                            </base-dropdown>
                                        </div>
                                    </div>

                                    <div v-else-if="item.local && !item.whiteboard && !item.screen && item.isHandUp" class="custom-controls-wrapper">
                                        <div class="custom-controls">
                                            <div class="status-icon">
                                                <i class="fas fa-hand-paper enabled-text"></i>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </template>
                        </template>


                        <card v-else shadow class="video-item wait-box maximized">
                            <template v-if="entity && !entity.isBlocked">

                                <template v-if="entity.status === 'scheduled' || entity.status === 'live'">
                                    <div class="green-room text-center mt-3">
                                        <video autoplay playsinline ref="greenRoomVideo" muted id="greenRoomVideo"></video>
                                        <br>
                                        <canvas id="greenRoomAudio" ref="greenRoomAudio" width="250" height="15" :data-val="micVolumeActivity" style="margin: 0 auto;">No canvas</canvas>
                                    </div>
                                </template>

                                <template v-if="entity.status === 'scheduled'">

                                    <flip-countdown class="my-3" v-if="startDateTimeIsFuture" :deadline="entity.startDateTime" />

                                    <template v-else>
                                        <h5 class="text-muted text-center my-3">
                                            {{ $t('meeting.starting_any_time_now') }}
                                        </h5>
                                    </template>

                                    <div class="text-center my-3">
                                        <span class="text-muted">{{ $t('meeting.scheduled_for') }}</span><span class="text-muted-lg m-l-5" v-b-tooltip.hover.d500 :title="entity.startDateTime | momentDateTime">{{ entity.startDateTime | momentCalendar({ sameElse: vars.defaultDateTimeFormat }) }}</span>
                                    </div>

                                    <div v-if="liveMembersCount > 0" class="text-muted text-center my-3">
                                        <span class="text-xs text-success mr-1"><i class="fas fa-circle"></i></span>
                                        <animated-number :number="liveMembersCount" :delay="100" />
                                        <span v-if="liveMembersCount>1">{{ $t('meeting.members_online') }}</span>
                                        <span v-else>{{ $t('meeting.member_online') }}</span>
                                    </div>
                                </template>


                                <template v-else-if="entity.status === 'live'">
                                    <template v-if="roomIdAlive">
                                        <h5 class="text-muted text-center my-3">
                                            {{ $t('meeting.is_live_now') }}
                                        </h5>

                                        <div class="d-flex justify-content-center my-3">
                                            <base-button type="button" design="primary" size="lg" @click="getOnline">{{ $t('global.click_to', { attribute: $t('meeting.get_live') }) }}</base-button>
                                        </div>
                                    </template>

                                    <template v-else>
                                        <h5 class="text-muted text-center my-3">
                                            {{ $t('meeting.starting_any_time_now') }}
                                        </h5>
                                    </template>

                                    <div v-if="liveMembersCount > 0" class="text-muted text-center my-3">
                                        <span class="text-xs text-success mr-1"><i class="fas fa-circle"></i></span>
                                        <animated-number :number="liveMembersCount" :delay="100" />
                                        <span v-if="liveMembersCount>1">{{ $t('meeting.members_online') }}</span>
                                        <span v-else>{{ $t('meeting.member_online') }}</span>
                                    </div>
                                </template>


                                <template v-else-if="entity.status === 'cancelled'">
                                    <h4 class="text-muted text-center my-3">
                                        {{ $t('meeting.meeting_cancelled') }}
                                    </h4>

                                    <div class="d-flex justify-content-center">
                                        <base-button type="button" design="light" size="lg" @click="$router.back()">{{ $t('global.click_to', { attribute: $t('general.go_back') }) }}</base-button>
                                    </div>
                                </template>

                                <template v-else-if="entity.status === 'ended'">
                                    <h4 class="text-muted text-center my-3">
                                        {{ $t('meeting.meeting_ended') }}
                                    </h4>

                                    <div class="d-flex justify-content-center">
                                        <base-button type="button" design="light" size="lg" @click="$router.back()">{{ $t('global.click_to', { attribute: $t('general.go_back') }) }}</base-button>
                                    </div>
                                </template>

                            </template>

                            <template v-else>
                                <h3 v-if="entity" class="text-center text-danger my-3">
                                    {{ $t('meeting.not_allowed') }}
                                </h3>
                            </template>
                        </card>


                    </div>

                </div>
            </div>


            <b-modal size="md" centered lazy :busy="isLoading" id="devicesModal" v-model="showDevicesModal" no-close-on-backdrop no-close-on-esc @ok="onDevicesModalOK" @cancel="onDevicesModalCancel">
                <template slot="modal-header">
                    <h5 class="modal-title">{{ $t('meeting.media_devices.video_and_audio_devices') }}</h5>
                </template>
                <div>
                    <base-select :options="mediaDevices.audioInput" v-model="mediaConfigFormData.selectedAudioInput" :label="$t('meeting.media_devices.audio_input')" :allow-empty="false" preselect-first />

                    <base-select :options="mediaDevices.videoInput" v-model="mediaConfigFormData.selectedVideoInput" :label="$t('meeting.media_devices.video_input')" :allow-empty="false" preselect-first />

                    <div class="row">
                        <div class="col-12 col-md-4">
                            <base-select :options="mediaDevices.resolutions" v-model="mediaConfigFormData.selectedResolution" :label="$t('meeting.media_devices.video_resolution')" :allow-empty="false" preselect-first simple track-by="label" show-by="label" />
                        </div>
                        <div class="col-12 col-md-4">
                            <base-select :options="mediaDevices.frameRates" v-model="mediaConfigFormData.frameRate" :label="$t('meeting.media_devices.frame_rate')" :allow-empty="false" preselect-first simple track-by="uuid" show-by="label" />
                        </div>
                        <div class="col-12 col-md-4">
                            <base-select :options="mediaDevices.facingModes" v-model="mediaConfigFormData.facingMode" :label="$t('meeting.media_devices.facing_mode')" :allow-empty="false" preselect-first simple track-by="uuid" show-by="label" />
                        </div>

                        <div class="col-12"><h6 class="mt-2 pb-1">{{ $t('meeting.media_devices.bandwidth') }}</h6></div>

                        <div class="col-12 col-sm-4">
                            <base-select :options="audioBandwidthOpts" v-model="mediaConfigFormData.bandwidth.audio" :label="$t('meeting.media_devices.audio')" :allow-empty="false" preselect-first simple track-by="uuid" show-by="label" />
                        </div>

                        <div class="col-12 col-sm-4">
                            <base-select :options="videoBandwidthOpts" v-model="mediaConfigFormData.bandwidth.video" :label="$t('meeting.media_devices.video')" :allow-empty="false" preselect-first simple track-by="uuid" show-by="label" />
                        </div>

                        <div class="col-12 col-sm-4">
                            <base-select :options="screenBandwidthOpts" v-model="mediaConfigFormData.bandwidth.screen" :label="$t('meeting.media_devices.screen')" :allow-empty="false" preselect-first simple track-by="uuid" show-by="label" />
                        </div>
                    </div>
                </div>
            </b-modal>

        </template>

        <card v-else shadow class="duplicate-tab d-flex justify-content-center align-items-center min-height-90vh">
            <h2>{{ $t('meeting.duplicate_tab') }}</h2>
        </card>
    </base-container>
</template>

<script>
    import meeting from '@mixins/meeting-for-guest'
    import live from '@mixins/live-for-guest'

    import AppLogo from '@components/AppLogo'
    import AnimatedNumber from '@core/components/AnimatedNumber'
    import FlipCountdown from 'vue2-flip-countdown'

    export default {
        mixins: [live, meeting],
        components: {
            AppLogo,
            AnimatedNumber,
            FlipCountdown,
        },
        watch: {
            locked(newVal, oldVal) {
                if(newVal) {
                    const toPath = this.$route.fullPath
                    this.$router.push({ name: 'authLock', query: { ref: toPath } })
                }
            },
        },
        methods: {
        },
        mounted() {
        },
    }
</script>
