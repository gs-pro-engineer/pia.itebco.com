/**
 * @param {Express.Application} app 
 * @param {Socket} io 
 */

const ss = require('socket.io-stream');
const ISO6391 = require('iso-639-1');

const KeyFileName = './google-apikey/nifty-linker-249702-5eecb6ae00b2.json';
const project_Id = 'nifty-linker-249702';

process.env.GOOGLE_APPLICATION_CREDENTIALS = KeyFileName;

// Translation
const { TranslationServiceClient } = require('@google-cloud/translate');
const translationClient = new TranslationServiceClient();

// Text To Speech
const textToSpeech = require('@google-cloud/text-to-speech');
const text_to_speech_client = new textToSpeech.TextToSpeechClient();

// Speech To Text
const Speech = require('@google-cloud/speech');
const speech = new Speech.SpeechClient({ keyFilename: KeyFileName });  // file json key

function socket(app, io) {
	console.log("socket initing...");

	io.on('connect', async function (socket) {
		console.log("connection...");

		/* Google Speech API */

		var request = {
			config: {
				encoding: 'LINEAR16',
				sampleRateHertz: 16000,
				languageCode: ["en", "ja", "vi", "zh"],
			},
			interimResults: true // If you want interim results, set this to true
		};
		
		var google_conversations = [];
		var room = "";

		socket.on('SELECT_LANGUAGE', function (data) {
			google_conversations.push({ myLanguageCode: data.language, myUuid: data.myUuid });
			room = data.room;
		});
		// Create a recognize stream
		const recognizeStream = speech.streamingRecognize(request)
			.on('error', function (error) {
				console.log('recognizeStream ERROR:', error);
			})
			.on('data', async function (data) {
				if (data.results[0] && data.results[0].alternatives[0]) {
					console.log("data:", data);
					var origin_text = data.results[0].alternatives[0].transcript;
					var sourceLanguageCode = data.results[0].languageCode;
					console.log("Origin Text:", origin_text);

					google_conversations.map(item => {

						if (item.myLanguageCode !== sourceLanguageCode.split('-')[0]) {
							const request = {
								parent: `projects/${project_Id}/locations/global`,
								contents: [`${data.results[0].alternatives[0].transcript}`],
								mimeType: 'text/plain', // mime types: text/plain, text/html
								sourceLanguageCode: sourceLanguageCode,
								targetLanguageCode: item.myLanguageCode,
							};
							translateFunc(item.myUuid, item.myLanguageCode, request);
						} 
					});
					async function translateFunc(myUuid, targetLanuageCode, request) {
						try {
							// Run Translation request
							const [response] = await translationClient.translateText(request);
							for (const translation of response.translations) {
								var resultOfText = { uuid: myUuid, text: translation.translatedText };
								console.log('resultOfText:', resultOfText);
								socket.broadcast.to(room).emit('SPEECH2TEXT_RESULTS', resultOfText);

								Text2Speech(translation.translatedText, targetLanuageCode, myUuid);
							}
						} catch (error) {
							console.log(error);
						}
					}
					async function Text2Speech(text, languageCode, uuid) {
						var text_to_speech_request = {
							input: { text: text },
							voice: { languageCode: languageCode, ssmlGender: 'NEUTRAL' },
							audioConfig: { audioEncoding: 'MP3' },
						};
						const response = await text_to_speech_client.synthesizeSpeech(text_to_speech_request);
						var resultOfText2Speech = { uuid: uuid, data: response[0].audioContent };
						console.log('resultOfText2Speech:', resultOfText2Speech);
						socket.broadcast.to(room).emit('TEXT2SPEECH_RESULTS', resultOfText2Speech);
						google_conversations = [];
					}
				} else {
					socket.broadcast.to(room).emit('SPEECH2TEXT_RESULTS', `Reached_transcription_time_limit`);
					console.log("There is no text content!");
				}
			})
			.on('unpipe', () => {
				delete this.recognizeStream;
			});

		ss(socket).on('START_SPEECH', function (stream) {
			console.log('Started Google Speech');
			stream.pipe(recognizeStream);
		});

		socket.on('STOP_SPEECH', function () {
			console.log('Disconnected!');
		});

		/* Microsoft Azure Speech API */

		socket.on('disconnecting', (reason) => {
			console.log(`${reason} is disconnecting`);
		});
		socket.on('disconnect', (reason) => {
			console.log(`${reason} has been disconnected`);
		});

		socket.on('join', ({ room }, cb) => {
			// Join to a room
			socket.join(room);
			if (typeof cb === 'function') cb();
		});

		// socket send_conversation
		socket.on('send_conversation', ({ conversationResult, room }, cb) => {
			// console.log("conversationResult: ", conversationResult);
			const id = new Date().getTime();
			conversationResult.messageId = id
			try {
				// io.to(room).emit('broadcast_conversation', conversationResult);
				socket.broadcast.to(room).emit('broadcast_conversation', conversationResult);
				if (typeof cb === 'function') cb();
			} catch (err) {
				if (typeof cb === 'function') cb(err);
			}
		});

		// // socket add language
		// socket.on('add_or_update_language_to_room', ({ room, language, userId }, cb) => {
		// 	console.log("add_language_to_room: ", language)
		// 	try {
		// 		addOrUpdateLanguage(room, userId, language)
		// 		io.to(room).emit('refresh_languages', { languages: getLanguage(room) });
		// 		if (typeof cb === 'function') cb();
		// 	} catch (err) {
		// 		console.error("add_or_update_language_to_room : ---- ", err);
		// 		if (typeof cb === 'function') cb(err);
		// 	}
		// });
	});
}

module.exports = socket
