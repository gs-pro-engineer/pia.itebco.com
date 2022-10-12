import { mapGetters, mapActions } from 'vuex'
const ss = require('socket.io-stream');
var socket = io.connect(`${location.origin}:27017`);
var ssStream = ss.createStream();
var audioContext;
var scriptNode;

export default {
  data() {
    return {
      timer: null,
      g_enableV2T: false, // enable voice to text
      g_enableV2V: false, // enable voice to voice
      uuid: "",
      originLanguage: 'en',
      resultError: false,
      textResult: "",
      errors: []
    }
  },
  computed: {
    ...mapGetters('user', {
      userUuid: 'uuid',
    }),
    ...mapActions('user', {
      GetAllUsers: 'GetAllUsers'
    })
  },
  methods: {
    async successCallback(stream) {
      const vm = this;
      audioContext = new AudioContext();
      console.log("successCallback:....IN");
      var input = audioContext.createMediaStreamSource(stream);
      var bufferSize = 2048;
      scriptNode = audioContext.createScriptProcessor(bufferSize, 1, 1);
      scriptNode.onaudioprocess = scriptNodeProcess;
      input.connect(scriptNode);

      async function scriptNodeProcess(audioProcessingEvent) {
        var inputBuffer = audioProcessingEvent.inputBuffer;
        var outputBuffer = audioProcessingEvent.outputBuffer;
        var inputData = inputBuffer.getChannelData(0);
        var outputData = outputBuffer.getChannelData(0);

        // Loop through the 4096 samples
        for (var sample = 0; sample < inputBuffer.length; sample++) {
          outputData[sample] = inputData[sample];
        }

        try {
          await ssStream.write(
            new ss.Buffer(vm.downsampleBuffer(inputData, 44100, 16000))
          );
        } catch (error) {
          console.log("ssStream writing error!");
        }
      }
    },
    downsampleBuffer(buffer, sampleRate, outSampleRate) {
      if (outSampleRate == sampleRate) {
        return buffer;
      }
      if (outSampleRate > sampleRate) {
        throw "downsampling rate show be smaller than original sample rate";
      }
      var sampleRateRatio = sampleRate / outSampleRate;
      var newLength = Math.round(buffer.length / sampleRateRatio);
      var result = new Int16Array(newLength);
      var offsetResult = 0;
      var offsetBuffer = 0;
      while (offsetResult < result.length) {
        var nextOffsetBuffer = Math.round((offsetResult + 1) * sampleRateRatio);
        var accum = 0,
          count = 0;
        for (
          var i = offsetBuffer;
          i < nextOffsetBuffer && i < buffer.length;
          i++
        ) {
          accum += buffer[i];
          count++;
        }
        result[offsetResult] = Math.min(1, accum / count) * 0x7fff;
        offsetResult++;
        offsetBuffer = nextOffsetBuffer;
      }
      return result.buffer;
    },
    async google_toggleVoiceToText(data) {
      if (data.V2V) {
        this.g_enableV2V = !this.g_enableV2V
      } else {
        this.g_enableV2T = !this.g_enableV2T
      }

      if (this.$route.params.uuid) {
        this.uuid = this.$route.params.uuid;

        if (this.g_enableV2T || this.g_enableV2V) {
          this.originLanguage = data.language;

          socket.emit("SELECT_LANGUAGE", {
            language: this.originLanguage,
            myUuid: this.userUuid,
            room: this.uuid
          });
          scriptNode.connect(audioContext.destination);
          ss(socket).emit('START_SPEECH', ssStream);
        } else {
          clearTimeout(this.timer);
          scriptNode.disconnect(audioContext.destination);
          ssStream.end();
          socket.emit("STOP_SPEECH", {});
        }
      } else {
        this.errors.push("Uuid does not exists. You are not able to use translation feature")
        console.error("uuid does not exists");
      }
    },
    errorCallback(error) {
      console.log('errorCallback:', error);
    },
  },
  created() {
    const that = this;

    if (that.$route.params.uuid) {
      that.uuid = that.$route.params.uuid;

      socket.emit("join", { room: that.uuid }, (err) => {
        if (err) {
          return console.error("Join to room:", err)
        }
      });

      socket.on("SPEECH2TEXT_RESULTS", function (result_data) {
        if (that.userUuid === result_data.uuid) {
          that.textResult = result_data.text;
          console.log("SPEECH2TEXT_RESULTS:", that.textResult);
        }
      });

      socket.on("TEXT2SPEECH_RESULTS", async function (result) {
        if (that.g_enableV2V && that.userUuid === result.uuid) {
          console.log("TEXT2SPEECH_RESULTS:", result.data);
          const audioContext = new AudioContext();
          const audio = await audioContext.decodeAudioData(result.data);
          const source = audioContext.createBufferSource();
          source.buffer = audio;
          source.connect(audioContext.destination);
          source.start(0);
        }
      });

      if (navigator.mediaDevices.getUserMedia) {
        console.log("getUserMedia supported...");
        navigator.webkitGetUserMedia(
          { audio: true },
          async function (stream) {
            try {
              await that.successCallback(stream);
            } catch (error) {
              that.errorCallback(error);
            }
          },
          function (error) {
            console.log("Error-Callback:", error);
          }
        );
      } else {
        console.log("getUserMedia not supported on your browser!");
      }
    } else {
      that.errors.push("Uuid does not exists. You are not able to use translation feature")
      console.error("uuid does not exists");
    }
  },
  beforeDestroy() {
    scriptNode.disconnect(audioContext.destination);
    ssStream.end();
    socket.emit("STOP_SPEECH", {});
  },
}