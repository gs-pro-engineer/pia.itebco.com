import { mapGetters } from 'vuex'
import * as AzureSpeechApi from '@api/azure-speech'
import Cookie from 'universal-cookie';
// import io from 'socket.io-client';

// import VueSocketIO from "vue-socket.io";
import {
    SpeechSynthesizer,
    TranslationRecognizer,
    SpeechTranslationConfig,
    AudioConfig,
    ResultReason
} from 'microsoft-cognitiveservices-speech-sdk';
import * as speechsdk from 'microsoft-cognitiveservices-speech-sdk';

/**
 * 
 * @param {String} text 
 * @returns {Number} time in seconds
 */
function getDelayTimeOfText(text) {
    return `${text || " "}`.split(" ").length / 3 * 1000 + 3000 // read speed 200 words for a min
}

export default {
    components: {},
    data() {
        return {
            timer: null,
            recognizer: null,
            synthesizer: null,
            conversations: [
                /**
                {
                    user: UserId
                    translates: {
                        en: "something is okay"
                    }
                }
                */
            ],
            errors: [],
            displayText: 'INITIALIZED: ready to test speech...',
            isRecognizing: false,
            enableV2T: false, // enable voice to text
            enableV2V: false, // enable voice to voice
            languagesInRoom: [
                "en", // default value
                "ja",
                "vi",
                "zh",
            ],
            uuid: "", // room id for broadcast
            myLanguage: 'en', // must be language code
            // myLanguagePrefix: 'en', // commented at 2021-12-23  because we dont need to use this value
            supportedLanguages: [
                {
                    value: "en",
                    speechTransCode: "en",
                    text2SpeechCode: "en-US",
                    speech2TextCode: "en-US",
                    voiceNames: {
                        "male": "en-US-GuyNeural",
                        "female": "en-US-JennyNeural"
                    },
                    // voiceName: "en-US-AriaNeural",
                    text: "English",
                },
                {
                    value: "ja",
                    speechTransCode: "ja",
                    text2SpeechCode: "ja-JP",
                    speech2TextCode: "ja-JP",
                    voiceNames: {
                        "male": "ja-JP-KeitaNeural",
                        "female": "ja-JP-NanamiNeural"
                    },
                    // voiceName: "ja-JP-NanamiNeural",
                    text: "Japanese",
                },
                {
                    value: "vi",
                    speechTransCode: "vi",
                    text2SpeechCode: "vi-VN",
                    speech2TextCode: "vi-VN",
                    voiceNames: {
                        "male": "vi-VN-NamMinhNeural",
                        "female": "vi-VN-HoaiMyNeural"
                    },
                    // voiceName: "vi-VN-HoaiMyNeural",
                    text: "Vietnamese",
                },
                {
                    value: "zh",
                    speechTransCode: "zh-Hans",
                    text2SpeechCode: "zh-CN",
                    speech2TextCode: "zh-CN",
                    voiceNames: {
                        "male": "zh-CN-YunxiNeural",
                        "female": "zh-CN-XiaoruiNeural"
                    },
                    // voiceName: "zh-CN-XiaohanNeural",
                    text: "Chinese",
                },
            ],
            isMuted: false
        }
    },
    computed: {
        ...mapGetters('user', {
            getUserDetails: 'get',
            hasRole: 'hasRole',
            hasPermission: 'hasPermission',
            loggedInUser: 'loggedInUser',
            userUuid: 'uuid',
            profile: 'profile',
            username: 'username',
            liveUsers: 'liveUsers',
        }),
        currentLanguage: {
            get() {
                return this.myLanguage;
            },
            set(newValue) {
                this.myLanguage = newValue;
                this.myLanguagePrefix = newValue.split('-')[0];
                // console.log("this.myLanguage: ", this.myLanguage);
                // console.log("newValue: ", newValue);
                // this.myLanguage = newValue;
                // this.myLanguagePrefix = newValue.split('-')[0];
                // this.addLanguageToRoom(this.myLanguage)
            }
        }
    },
    watch: {
        myLanguage() {
            this.initContinuesSpeechToTextInMulti();
        }
    },
    sockets: {
        // socket event listeners
        broadcast_conversation(conversation) {
            // console.log("conversation from server: ", conversation)
            if (conversation.owner !== this.userUuid) {
                // let user = conversation.owner; // conversation.owner === UserId
                // let translations = conversation.translations;

                // let conversations = this.conversations.filter((value) => {
                //     return value.user !== user
                // });

                let text = conversation.translations[this.myLanguage]

                // console.log("conversation: ", text)

                if (this.enableV2T) {
                    this.conversations.push({ user: conversation.owner, translations: conversation.translations, messageId: conversation.messageId })
                    // this.conversations = [...conversations, {user, translations}]
                    // console.log("this.conversations: ", this.conversations)
                }

                if (this.enableV2V && text) {
                    const user = this.liveUsers.find((user) => user.uuid === conversation.owner)
                    let gender = user.gender.uuid || "male"

                    // console.log("gender: ", gender)
                    // console.log("user.gender.uuid: ", user.gender.uuid)

                    const supportedLanguage = this.supportedLanguages.find((sl) => sl.value === this.myLanguage);
                    this.textToSpeech(text, supportedLanguage.text2SpeechCode, supportedLanguage.voiceNames[gender]);
                }
            } else {
                // console.log(
                //     "this.userUuid: ", this.userUuid,
                //     "conversation.owner: ", conversation.owner
                // )
            }
        }
    },
    methods: {
        /**
         * 
         * @returns token
         */
        async getTokenOrRefresh() {
            const cookie = new Cookie();
            const speechToken = cookie.get('speech-token');

            if (speechToken === undefined) {
                try {
                    const res = await AzureSpeechApi.getToken();
                    const token = res.data.token;
                    const region = res.data.region;
                    cookie.set('speech-token', region + ':' + token, { maxAge: 540, path: '/' });

                    // console.log('Token fetched from back-end: ' + token);
                    return { authToken: token, region: region };
                } catch (err) {
                    // console.log("err.response.data: ", err);
                    return { authToken: null, error: err };
                }
            }

            // console.log('Token fetched from cookie: ' + speechToken);
            const idx = speechToken.indexOf(':');
            return { authToken: speechToken.slice(idx + 1), region: speechToken.slice(0, idx) };
        },
        /**
         * 
         * @returns 
         */
        async initContinuesSpeechToTextInMulti() {
            if (this.recognizer) {
                // console.log("stoping continuesSpeechToSpeech....")
                this.recognizer.stopContinuousRecognitionAsync();
            }
            // console.log("initing continuesSpeechToSpeech....")
            // console.log("this.languagesInRoom: ", this.languagesInRoom)
            // console.log("this.myLanguage: ", this.myLanguage)

            const tokenObj = await this.getTokenOrRefresh();
            // const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(tokenObj.authToken, tokenObj.region);
            const speechTranslationConfig = SpeechTranslationConfig.fromAuthorizationToken(tokenObj.authToken, tokenObj.region);
            let mySpeech2TextCode = this.supportedLanguages.find((sl) => sl.value === this.myLanguage)?.speech2TextCode;

            // console.log("mySpeechTransCode: ", mySpeech2TextCode)
            speechTranslationConfig.speechRecognitionLanguage = mySpeech2TextCode ? mySpeech2TextCode : "en-US"; // "en-US"

            // add languages in the room
            // speechTranslationConfig.addTargetLanguage(this.myLanguage);
            this.languagesInRoom.forEach((language) => {
                const supportedLanguage = this.supportedLanguages.find((sl) => sl.value === language)
                // console.log("speechTransCode: ", speechTransCode)
                if (supportedLanguage) {
                    const speechTransCode = supportedLanguage.speechTransCode;
                    speechTranslationConfig.addTargetLanguage(speechTransCode);
                }
            })

            const audioConfig = AudioConfig.fromDefaultMicrophoneInput();
            const recognizer = new TranslationRecognizer(speechTranslationConfig, audioConfig);

            recognizer.recognizing = (s, e) => {
                // console.log(`TRANSLATING: Text=${e.result.text}`);
            };

            recognizer.recognized = (s, e) => {

                // console.log("e.result.reason: ", e.result.reason)
                // console.log(e.result.reason != ResultReason.NoMatch);

                if (e.result.reason != ResultReason.NoMatch) {
                    let conversationResult = {
                        owner: this.userUuid,
                        resultReason: e.result.reason,
                        translations: {}
                    };


                    this.languagesInRoom.forEach((language) => {
                        const supportedLanguage = this.supportedLanguages.find((sl) => sl.value === language)
                        if (supportedLanguage) {
                            const speechTransCode = supportedLanguage.speechTransCode;
                            conversationResult.translations[language] = e.result.translations.get(speechTransCode)
                        }
                    })
                    // conversationResult.translations[this.myLanguage] = e.result.translations.get(this.myLanguage)

                    // console.log("sending converstation...", conversationResult)
                    // send conversation to users in the room
                    this.sendConversation(conversationResult)
                } else {
                    // console.log("Didnt recognized");
                }

            };

            recognizer.canceled = (s, e) => {
                // console.log(`CANCELED: Reason=${e.reason}`);
                if (e.reason == "CancellationReason.Error") {
                    // console.log(`"CANCELED: ErrorCode=${e.errorCode}`);
                    // console.log(`"CANCELED: ErrorDetails=${e.errorDetails}`);
                    // console.log("CANCELED: Did you update the subscription info?");
                }
                recognizer.stopContinuousRecognitionAsync();
            };

            recognizer.sessionStopped = (s, e) => {
                // console.log("\n    Session stopped event.");
                recognizer.stopContinuousRecognitionAsync();
            };


            recognizer.startContinuousRecognitionAsync((err) => {
                if (err) {
                    console.error("startContinuousRecognitionAsync: ", err)
                }
            });
            this.recognizer = recognizer
        },
        /**
         * 
         * @param {String} text 
         * @param {String} text2SpeechCode 
         * @param {String} voiceName // https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support
         */
        async textToSpeech(text, text2SpeechCode, voiceName) {
            const tokenObj = await this.getTokenOrRefresh();

            const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(tokenObj.authToken, tokenObj.region);
            const audioConfig = speechsdk.AudioConfig.fromDefaultSpeakerOutput();

            speechConfig.speechSynthesisLanguage = text2SpeechCode //supportedLanguage.text2SpeechCode; // e.g. "de-DE"
            // The voice setting will overwrite language setting.
            // The voice setting will not overwrite the voice element in input SSML.
            speechConfig.speechSynthesisVoiceName = voiceName //supportedLanguage.voiceNames[gender];

            const synthesizer = new SpeechSynthesizer(speechConfig, audioConfig);
            synthesizer.speakTextAsync(
                text,
                result => {
                    if (result) {
                        synthesizer.close();
                        return result.audioData;
                    } else {
                        console.error("Text to voice result: ", result)
                    }
                },
                error => {
                    console.error(error);
                    synthesizer.close();
                });
            this.synthesizer = synthesizer
        },
        joinToRoom() {
            this.$socket.emit('join', { room: this.uuid }, (err) => {
                if (err) {
                    return console.error("Join to room:", err)
                }
                // console.log("joined room: ", this.uuid)
            });
        },
        // addLanguageToRoom(language) {
        //     this.$socket.emit('add_or_update_language_to_room', { room: this.uuid, language: language, userId: this.userUuid }, (err) => {
        //         if (err) {
        //             return console.error("add_language to room:", err)
        //         }
        //     });
        // },
        sendConversation(conversationResult) {
            this.$socket.emit('send_conversation', { conversationResult, room: this.uuid }, (err) => {
                if (err) {
                    console.error("send_conversation: ", err);
                }
                // console.log("sent_conversation: ", conversationResult)
            });
        },
        _socketInit() {
            this.joinToRoom();
            this.$socket.on("connect_error", (err) => {
                // console.log(`connect_error due to ${err.message}`);
                // console.log(`trying again`);
                this.errors.push("connect_error: Could not connect to Socket Server for Traslations")
                // this.socket.close();
                // this.socket.open();
            });
            this.$socket.on('disconnect', (reason) => {
                // console.log("socket disconnect reason: ", reason);

                if (reason === "io server disconnect") {
                    // the disconnection was initiated by the server, you need to reconnect manually
                    this.$socket.connect();
                    this._socketInit();
                }
            });
        },
        toggleRecognition() {
            this.isMuted = !this.isMuted
            if (this.isMuted) {
                this.recognizer.stopContinuousRecognitionAsync();
            } else {
                this.initContinuesSpeechToTextInMulti()
            }
        },
        azure_toggleVoiceToText() {
            this.enableV2T = !this.enableV2T
            this.initContinuesSpeechToTextInMulti()

            if (this.enableV2T) {
                this.autoShiftConversations();
            } else {
                this.conversations = [];
                clearTimeout(this.timer)
            }
        },
        azure_toggleVoiceToVoice() {
            this.enableV2V = !this.enableV2V
            // if (!this.enableV2V) {
            //     try {
            //         this.synthesizer && this.synthesizer.close();
            //     } catch (err) {
            //         console.error("err: ", err)
            //     }
            // }
        },
        setLanguage(value) {
            this.currentLanguage = value;
            // this.myLanguagePrefix = newValue.split('-')[0];
            // this.addLanguageToRoom(this.myLanguage)
        },
        autoShiftConversations() {
            const conversation = this.conversations[0];
            if (conversation) {
                // console.log("removing...")

                const text = conversation && conversation.translations[this.myLanguage]
                const delaySeconds = getDelayTimeOfText(text || "");
                this.timer = setTimeout(() => {
                    this.conversations.shift();
                    this.autoShiftConversations();
                }, delaySeconds)
            } else {
                // console.log("delaying...")
                this.timer = setTimeout(() => {
                    this.autoShiftConversations();
                }, 800);
            }
        },
    },
    mounted() {
        if (this.$route.params.uuid) {
            this.uuid = this.$route.params.uuid;

            this._socketInit();
            this.getTokenOrRefresh();
            // this.addLanguageToRoom(this.myLanguage)
            if (!this.isMuted) {
                this.initContinuesSpeechToTextInMulti()
            }
        } else {
            this.errors.push("Uuid does not exists. You are not able to use translation feature")
            console.error("uuid does not exists");
        }
    },
    beforeDestroy() {
        try {
            clearTimeout(this.timer)
            this.recognizer.stopContinuousRecognitionAsync();
            this.$socket.emit('remove_user_on_room', { room: this.uuid, userId: this.userUuid })
        } catch (err) {
            console.error("stopContinuousRecognitionAsync: ", err)
        }
        console.log("socket.close event");
        // this.socket.close()
    }
}
