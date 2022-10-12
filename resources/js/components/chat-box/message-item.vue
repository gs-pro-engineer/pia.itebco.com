<template>
    <div class="message-item-wrapper">
        <div :class="['message-item', {'has-attachments': hasAttachment}]">
            <span class="tail-in"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13"><path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path><path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path></svg></span>

            <div class="message-header">
                <h6 class="message-user">{{ message.user.profile.name }}</h6>
            </div>

            <div v-if="hasAttachment" class="message-content">

                <template v-for="attachment in message.attachments">
                    <div :class="['attachment', {'non-image-attachment': (attachment.mime !== 'image/png' && attachment.mime !== 'image/jpeg')}]" :key="attachment.uuid">

                        <template v-if="attachment.mime === 'image/png' || attachment.mime === 'image/jpeg'">
                            <a :href="attachment.fullUrl" target="_blank" class="attachment-link">
                                <img :src="attachment.fullUrl" class="img-fluid" :alt="attachment.filename">
                            </a>

                            <div class="attachment-shadow"></div>

                            <div class="message-footer small">
                                <span v-if="message.sentAt" class="message-created-at">{{ message.sentAt | momentCalendarTz }}</span>

                                <span :class="['message-status', message.status]"><i :class="messageStatusIcons[message.status]"></i></span>
                            </div>
                        </template>

                        <template v-else>
                            <a :href="attachment.fullUrl" target="_blank" class="attachment-link">
                                <div class="attachment-details">
                                    <div class="attachment-icon"><i :class="['fas', fileIcons[attachment.mime]]"></i></div>
                                    <div class="attachment-name"><h6>{{ attachment.filename }}</h6></div>
                                    <div class="download-icon"><i class="far fa-arrow-alt-circle-down"></i></div>
                                </div>
                            </a>

                            <div class="message-footer small">
                                <div class="left-side">
                                    <span class="attachment-type">{{ fileMimeTypes[attachment.mime] }}</span><span class="attachment-size">{{ attachment.humanReadableSize }}</span>
                                </div>

                                <div class="right-side">
                                    <span v-if="message.sentAt" class="message-created-at">{{ message.sentAt | momentCalendarTz }}</span>

                                    <span :class="['message-status', message.status]"><i :class="messageStatusIcons[message.status]"></i></span>
                                </div>
                            </div>
                        </template>

                    </div>
                </template>

            </div>

            <div v-else class="message-content">

                <div class="message-body">
                    <div class="message" v-if="message.status === 'sent'" v-html="message.message"></div>
                    <div class="message" v-else>{{ removeHtmlTags(message.message) }}</div>
                    <div class="footer-space"></div>
                </div>

                <div class="message-footer small">
                    <span v-if="message.sentAt" class="message-created-at">{{ message.sentAt | momentCalendarTz }}</span>

                    <span :class="['message-status', message.status]"><i :class="messageStatusIcons[message.status]"></i></span>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        props: {
            message: {
                type: Object,
                required: true
            },
            fileIcons: {
                type: Object,
                required: true
            },
            fileMimeTypes: {
                type: Object,
                required: true
            },
            vars: {
                type: Object,
                default() {
                    return {}
                }
            },
        },
        data() {
            return {
                messageStatusIcons: {
                    'sending': 'far fa-clock',
                    'sent': 'fas fa-check',
                    'delivered': 'fas fa-check-double',
                    'read': 'fas fa-check-double',
                    'error': 'fas fa-exclamation-triangle',
                },
            }
        },
        computed: {
            hasAttachment() {
                return (!this.message.message || this.message.message === '%%chat_attachment_%%') && this.message.attachments && this.message.attachments.length
            }
        },
        methods: {
            removeHtmlTags(content) {
                if(!content) {
                    return content
                }
                content = content.replace(/<[^>]+/gmi, (match) => match.replace(/ on\w+="[^"]*"/gmi, '')).replace(/<(?!\/?>)[^>]+>/gmi, ' ').replace(/\s+/gmi, ' ')
                let tmp = document.createElement("DIV")
                tmp.innerHTML = content
                return tmp.textContent || tmp.innerText || ""
            },
        },
    }
</script>
