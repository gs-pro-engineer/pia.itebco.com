const path = require('path');
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const socket = require('./socket');
const env_path = path.resolve(__dirname, "../.env")
require('dotenv').config({ path: env_path })
const https = require('https');
const fs = require('fs');
const cors = require('cors');
const { Sequelize, QueryTypes } = require('@sequelize/core');

// const speechKey = process.env.AZURE_SPEECH_KEY1;
// const speechRegion = process.env.AZURE_SPEECH_REGION;
const { NODE_SOCKET_PORT, APP_URL, DB_CONNECTION, DB_HOST, DB_DATABASE, DB_USERNAME, DB_PASSWOR } = process.env;

// const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWOR, {
//     host: '127.0.0.1',
//     dialect: DB_CONNECTION,
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//     }
// });

// (async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// })()

// async function getAzureKey() {
//     try {
//         const rows = await sequelize.query(`SELECT value FROM configs WHERE name="system" limit 1`, {
//             type: QueryTypes.SELECT
//         });
//         const systemsetting = JSON.parse(rows[0].value);

//         console.log("systemsetting: ", systemsetting)
//         return systemsetting;
//     } catch (error) {
//         console.error(error);
//         return null;
//     }
// }

const options = {
    key: fs.readFileSync('/home/pia.itebco.com/pia.itebco.com.key'),
    cert: fs.readFileSync('/home/pia.itebco.com/pia.itebco.com.cer')
};

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Credentials', '*');
//     res.setHeader('Access-Control-Allow-Methods', '*');
//     next();
// });
app.use(cors({
    // origin: "*", 
    origin: [
        '*',
        'https://pia.itebco.com',
        'https://pia.itebco.com:27017',
        'pia.itebco.com'
    ],
    credentials: true
}));

app.get('/', async (req, res, next) => {
    res.send("Hello")
});

app.get('/api/get-speech-token', async (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader("Access-Control-Allow-Credentials", true);

    // const data = await getAzureKey();

    const speechKey = process.env.AZURE_SPEECH_KEY1;
    const speechRegion = process.env.AZURE_SPEECH_REGION;

    if (speechKey === 'paste-your-speech-key-here' || speechRegion === 'paste-your-speech-region-here') {
        res.status(400).send('You forgot to add your speech key or region to the .env file.');
    } else {
        const headers = {
            headers: {
                'Ocp-Apim-Subscription-Key': speechKey,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        try {
            const tokenResponse = await axios.post(`https://${speechRegion}.api.cognitive.microsoft.com/sts/v1.0/issueToken`, null, headers);
            res.send({ token: tokenResponse.data, region: speechRegion });
        } catch (err) {
            res.status(401).send('There was an error authorizing your speech key. Please replace with new key.');
        }
    }
});

// app.get('/api/get-voices', async (req, res, next) => {
//     var config = {
//         method: 'get',
//         url: `https://${speechRegion}.customvoice.api.speech.microsoft.com/api/texttospeech/v3.0/longaudiosynthesis/voices`,
//         headers: { 
//           'Ocp-Apim-Subscription-Key': speechKey
//         }
//     };

//     axios(config)
//         .then(function (response) {
//             res.json({
//                 ...response.data
//             })
//         })
//         .catch(function (err) {
//             console.log(err);
//             res.status(303).send({err})
//         });
// });

// app.listen(3001, () =>
//     console.log('Express server is running on localhost:3001')
// );


var httpsServer = https.createServer(options, app);

// socket server
const socketPort = NODE_SOCKET_PORT || 27017

httpsServer.listen(socketPort, function () {
    console.log('servre up and running at %s port', socketPort);
})
// const socketServer = app.listen(socketPort, () => {
//     console.log(`Sockert Server is running on port ${socketPort}.`);
// });
// const io = require('socket.io')(httpsServer, {
//     allowEIO3: false,
//     cors: {
//         origin: [
//             "https://pia.itebco.com",
//             "pia.itebco.com",
//             "https://pia.itebco.com:27017",
//             "*"
//         ]
//     },
//     credentials: false
// });

const io = require("socket.io")(httpsServer, {
    allowEIO3: true,
    cors: {
        origin: [
            '*',
            'https://pia.itebco.com',
            'https://pia.itebco.com:27017',
            'pia.itebco.com',
            APP_URL
        ],
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});

socket(app, io);
