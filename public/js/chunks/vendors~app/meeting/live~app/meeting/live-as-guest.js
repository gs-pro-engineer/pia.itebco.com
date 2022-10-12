(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~app/meeting/live~app/meeting/live-as-guest"],{

/***/ "./node_modules/fbr/FileBufferReader.js":
/*!**********************************************!*\
  !*** ./node_modules/fbr/FileBufferReader.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {// Last time updated: 2017-08-27 5:48:35 AM UTC

// ________________
// FileBufferReader

// Open-Sourced: https://github.com/muaz-khan/FileBufferReader

// --------------------------------------------------
// Muaz Khan     - www.MuazKhan.com
// MIT License   - www.WebRTC-Experiment.com/licence
// --------------------------------------------------



(function() {

    function FileBufferReader() {
        var fbr = this;
        var fbrHelper = new FileBufferReaderHelper();

        fbr.chunks = {};
        fbr.users = {};

        fbr.readAsArrayBuffer = function(file, callback, extra) {
            var options = {
                file: file,
                earlyCallback: function(chunk) {
                    callback(fbrClone(chunk, {
                        currentPosition: -1
                    }));
                },
                extra: extra || {
                    userid: 0
                }
            };

            if (file.extra && Object.keys(file.extra).length) {
                Object.keys(file.extra).forEach(function(key) {
                    options.extra[key] = file.extra[key];
                });
            }

            fbrHelper.readAsArrayBuffer(fbr, options);
        };

        fbr.getNextChunk = function(fileUUID, callback, userid) {
            var currentPosition;

            if (typeof fileUUID.currentPosition !== 'undefined') {
                currentPosition = fileUUID.currentPosition;
                fileUUID = fileUUID.uuid;
            }

            var allFileChunks = fbr.chunks[fileUUID];
            if (!allFileChunks) {
                return;
            }

            if (typeof userid !== 'undefined') {
                if (!fbr.users[userid + '']) {
                    fbr.users[userid + ''] = {
                        fileUUID: fileUUID,
                        userid: userid,
                        currentPosition: -1
                    };
                }

                if (typeof currentPosition !== 'undefined') {
                    fbr.users[userid + ''].currentPosition = currentPosition;
                }

                fbr.users[userid + ''].currentPosition++;
                currentPosition = fbr.users[userid + ''].currentPosition;
            } else {
                if (typeof currentPosition !== 'undefined') {
                    fbr.chunks[fileUUID].currentPosition = currentPosition;
                }

                fbr.chunks[fileUUID].currentPosition++;
                currentPosition = fbr.chunks[fileUUID].currentPosition;
            }

            var nextChunk = allFileChunks[currentPosition];
            if (!nextChunk) {
                delete fbr.chunks[fileUUID];
                fbr.convertToArrayBuffer({
                    chunkMissing: true,
                    currentPosition: currentPosition,
                    uuid: fileUUID
                }, callback);
                return;
            }

            nextChunk = fbrClone(nextChunk);

            if (typeof userid !== 'undefined') {
                nextChunk.remoteUserId = userid + '';
            }

            if (!!nextChunk.start) {
                fbr.onBegin(nextChunk);
            }

            if (!!nextChunk.end) {
                fbr.onEnd(nextChunk);
            }

            fbr.onProgress(nextChunk);

            fbr.convertToArrayBuffer(nextChunk, function(buffer) {
                if (nextChunk.currentPosition == nextChunk.maxChunks) {
                    callback(buffer, true);
                    return;
                }

                callback(buffer, false);
            });
        };

        var fbReceiver = new FileBufferReceiver(fbr);

        fbr.addChunk = function(chunk, callback) {
            if (!chunk) {
                return;
            }

            fbReceiver.receive(chunk, function(chunk) {
                fbr.convertToArrayBuffer({
                    readyForNextChunk: true,
                    currentPosition: chunk.currentPosition,
                    uuid: chunk.uuid
                }, callback);
            });
        };

        fbr.chunkMissing = function(chunk) {
            delete fbReceiver.chunks[chunk.uuid];
            delete fbReceiver.chunksWaiters[chunk.uuid];
        };

        fbr.onBegin = function() {};
        fbr.onEnd = function() {};
        fbr.onProgress = function() {};

        fbr.convertToObject = FileConverter.ConvertToObject;
        fbr.convertToArrayBuffer = FileConverter.ConvertToArrayBuffer

        // for backward compatibility----it is redundant.
        fbr.setMultipleUsers = function() {};

        // extends 'from' object with members from 'to'. If 'to' is null, a deep clone of 'from' is returned
        function fbrClone(from, to) {
            if (from == null || typeof from != "object") return from;
            if (from.constructor != Object && from.constructor != Array) return from;
            if (from.constructor == Date || from.constructor == RegExp || from.constructor == Function ||
                from.constructor == String || from.constructor == Number || from.constructor == Boolean)
                return new from.constructor(from);

            to = to || new from.constructor();

            for (var name in from) {
                to[name] = typeof to[name] == "undefined" ? fbrClone(from[name], null) : to[name];
            }

            return to;
        }
    }

    function FileBufferReaderHelper() {
        var fbrHelper = this;

        function processInWebWorker(_function) {
            var blob = URL.createObjectURL(new Blob([_function.toString(),
                'this.onmessage =  function (e) {' + _function.name + '(e.data);}'
            ], {
                type: 'application/javascript'
            }));

            var worker = new Worker(blob);
            return worker;
        }

        fbrHelper.readAsArrayBuffer = function(fbr, options) {
            var earlyCallback = options.earlyCallback;
            delete options.earlyCallback;

            function processChunk(chunk) {
                if (!fbr.chunks[chunk.uuid]) {
                    fbr.chunks[chunk.uuid] = {
                        currentPosition: -1
                    };
                }

                options.extra = options.extra || {
                    userid: 0
                };

                chunk.userid = options.userid || options.extra.userid || 0;
                chunk.extra = options.extra;

                fbr.chunks[chunk.uuid][chunk.currentPosition] = chunk;

                if (chunk.end && earlyCallback) {
                    earlyCallback(chunk.uuid);
                    earlyCallback = null;
                }

                // for huge files
                if ((chunk.maxChunks > 200 && chunk.currentPosition == 200) && earlyCallback) {
                    earlyCallback(chunk.uuid);
                    earlyCallback = null;
                }
            }
            if (false) { var webWorker; } else {
                fileReaderWrapper(options, processChunk);
            }
        };

        function fileReaderWrapper(options, callback) {
            callback = callback || function(chunk) {
                postMessage(chunk);
            };

            var file = options.file;
            if (!file.uuid) {
                file.uuid = (Math.random() * 100).toString().replace(/\./g, '');
            }

            var chunkSize = options.chunkSize || 15 * 1000;
            if (options.extra && options.extra.chunkSize) {
                chunkSize = options.extra.chunkSize;
            }

            var sliceId = 0;
            var cacheSize = chunkSize;

            var chunksPerSlice = Math.floor(Math.min(100000000, cacheSize) / chunkSize);
            var sliceSize = chunksPerSlice * chunkSize;
            var maxChunks = Math.ceil(file.size / chunkSize);

            file.maxChunks = maxChunks;

            var numOfChunksInSlice;
            var currentPosition = 0;
            var hasEntireFile;
            var chunks = [];

            callback({
                currentPosition: currentPosition,
                uuid: file.uuid,
                maxChunks: maxChunks,
                size: file.size,
                name: file.name,
                type: file.type,
                lastModifiedDate: (file.lastModifiedDate || new Date()).toString(),
                start: true
            });

            var blob, reader = new FileReader();

            reader.onloadend = function(evt) {
                if (evt.target.readyState == FileReader.DONE) {
                    addChunks(file.name, evt.target.result, function() {
                        sliceId++;
                        if ((sliceId + 1) * sliceSize < file.size) {
                            blob = file.slice(sliceId * sliceSize, (sliceId + 1) * sliceSize);
                            reader.readAsArrayBuffer(blob);
                        } else if (sliceId * sliceSize < file.size) {
                            blob = file.slice(sliceId * sliceSize, file.size);
                            reader.readAsArrayBuffer(blob);
                        } else {
                            file.url = URL.createObjectURL(file);
                            callback({
                                currentPosition: currentPosition,
                                uuid: file.uuid,
                                maxChunks: maxChunks,
                                size: file.size,
                                name: file.name,
                                lastModifiedDate: (file.lastModifiedDate || new Date()).toString(),
                                url: URL.createObjectURL(file),
                                type: file.type,
                                end: true
                            });
                        }
                    });
                }
            };

            currentPosition += 1;

            blob = file.slice(sliceId * sliceSize, (sliceId + 1) * sliceSize);
            reader.readAsArrayBuffer(blob);

            function addChunks(fileName, binarySlice, addChunkCallback) {
                numOfChunksInSlice = Math.ceil(binarySlice.byteLength / chunkSize);
                for (var i = 0; i < numOfChunksInSlice; i++) {
                    var start = i * chunkSize;
                    chunks[currentPosition] = binarySlice.slice(start, Math.min(start + chunkSize, binarySlice.byteLength));

                    callback({
                        uuid: file.uuid,
                        buffer: chunks[currentPosition],
                        currentPosition: currentPosition,
                        maxChunks: maxChunks,

                        size: file.size,
                        name: file.name,
                        lastModifiedDate: (file.lastModifiedDate || new Date()).toString(),
                        type: file.type
                    });

                    currentPosition++;
                }

                if (currentPosition == maxChunks) {
                    hasEntireFile = true;
                }

                addChunkCallback();
            }
        }
    }

    function FileSelector() {
        var selector = this;

        var noFileSelectedCallback = function() {};

        selector.selectSingleFile = function(callback, failure) {
            if (failure) {
                noFileSelectedCallback = failure;
            }

            selectFile(callback);
        };
        selector.selectMultipleFiles = function(callback, failure) {
            if (failure) {
                noFileSelectedCallback = failure;
            }

            selectFile(callback, true);
        };
        selector.selectDirectory = function(callback, failure) {
            if (failure) {
                noFileSelectedCallback = failure;
            }

            selectFile(callback, true, true);
        };

        selector.accept = '*.*';

        function selectFile(callback, multiple, directory) {
            callback = callback || function() {};

            var file = document.createElement('input');
            file.type = 'file';

            if (multiple) {
                file.multiple = true;
            }

            if (directory) {
                file.webkitdirectory = true;
            }

            file.accept = selector.accept;

            file.onclick = function() {
                file.clickStarted = true;
            };

            document.body.onfocus = function() {
                setTimeout(function() {
                    if (!file.clickStarted) return;
                    file.clickStarted = false;

                    if (!file.value) {
                        noFileSelectedCallback();
                    }
                }, 500);
            };

            file.onchange = function() {
                if (multiple) {
                    if (!file.files.length) {
                        console.error('No file selected.');
                        return;
                    }

                    var arr = [];
                    Array.from(file.files).forEach(function(file) {
                        file.url = file.webkitRelativePath;
                        arr.push(file);
                    });
                    callback(arr);
                    return;
                }

                if (!file.files[0]) {
                    console.error('No file selected.');
                    return;
                }

                callback(file.files[0]);

                file.parentNode.removeChild(file);
            };
            file.style.display = 'none';
            (document.body || document.documentElement).appendChild(file);
            fireClickEvent(file);
        }

        function getValidFileName(fileName) {
            if (!fileName) {
                fileName = 'file' + (new Date).toISOString().replace(/:|\.|-/g, '')
            }

            var a = fileName;
            a = a.replace(/^.*[\\\/]([^\\\/]*)$/i, "$1");
            a = a.replace(/\s/g, "_");
            a = a.replace(/,/g, '');
            a = a.toLowerCase();
            return a;
        }

        function fireClickEvent(element) {
            if (typeof element.click === 'function') {
                element.click();
                return;
            }

            if (typeof element.change === 'function') {
                element.change();
                return;
            }

            if (typeof document.createEvent('Event') !== 'undefined') {
                var event = document.createEvent('Event');

                if (typeof event.initEvent === 'function' && typeof element.dispatchEvent === 'function') {
                    event.initEvent('click', true, true);
                    element.dispatchEvent(event);
                    return;
                }
            }

            var event = new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true
            });

            element.dispatchEvent(event);
        }
    }

    function FileBufferReceiver(fbr) {
        var fbReceiver = this;

        fbReceiver.chunks = {};
        fbReceiver.chunksWaiters = {};

        function receive(chunk, callback) {
            if (!chunk.uuid) {
                fbr.convertToObject(chunk, function(object) {
                    receive(object);
                });
                return;
            }

            if (chunk.start && !fbReceiver.chunks[chunk.uuid]) {
                fbReceiver.chunks[chunk.uuid] = {};
                if (fbr.onBegin) fbr.onBegin(chunk);
            }

            if (!chunk.end && chunk.buffer) {
                fbReceiver.chunks[chunk.uuid][chunk.currentPosition] = chunk.buffer;
            }

            if (chunk.end) {
                var chunksObject = fbReceiver.chunks[chunk.uuid];
                var chunksArray = [];
                Object.keys(chunksObject).forEach(function(item, idx) {
                    chunksArray.push(chunksObject[item]);
                });

                var blob = new Blob(chunksArray, {
                    type: chunk.type
                });
                blob = merge(blob, chunk);
                blob.url = URL.createObjectURL(blob);
                blob.uuid = chunk.uuid;

                if (!blob.size) console.error('Something went wrong. Blob Size is 0.');

                if (fbr.onEnd) fbr.onEnd(blob);

                // clear system memory
                delete fbReceiver.chunks[chunk.uuid];
                delete fbReceiver.chunksWaiters[chunk.uuid];
            }

            if (chunk.buffer && fbr.onProgress) fbr.onProgress(chunk);

            if (!chunk.end) {
                callback(chunk);

                fbReceiver.chunksWaiters[chunk.uuid] = function() {
                    function looper() {
                        if (!chunk.buffer) {
                            return;
                        }

                        if (!fbReceiver.chunks[chunk.uuid]) {
                            return;
                        }

                        if (chunk.currentPosition != chunk.maxChunks && !fbReceiver.chunks[chunk.uuid][chunk.currentPosition]) {
                            callback(chunk);
                            setTimeout(looper, 5000);
                        }
                    }
                    setTimeout(looper, 5000);
                };

                fbReceiver.chunksWaiters[chunk.uuid]();
            }
        }

        fbReceiver.receive = receive;
    }

    var FileConverter = {
        ConvertToArrayBuffer: function(object, callback) {
            binarize.pack(object, function(dataView) {
                callback(dataView.buffer);
            });
        },
        ConvertToObject: function(buffer, callback) {
            binarize.unpack(buffer, callback);
        }
    };

    function merge(mergein, mergeto) {
        if (!mergein) mergein = {};
        if (!mergeto) return mergein;

        for (var item in mergeto) {
            try {
                mergein[item] = mergeto[item];
            } catch (e) {}
        }
        return mergein;
    }

    var debug = false;

    var BIG_ENDIAN = false,
        LITTLE_ENDIAN = true,
        TYPE_LENGTH = Uint8Array.BYTES_PER_ELEMENT,
        LENGTH_LENGTH = Uint16Array.BYTES_PER_ELEMENT,
        BYTES_LENGTH = Uint32Array.BYTES_PER_ELEMENT;

    var Types = {
        NULL: 0,
        UNDEFINED: 1,
        STRING: 2,
        NUMBER: 3,
        BOOLEAN: 4,
        ARRAY: 5,
        OBJECT: 6,
        INT8ARRAY: 7,
        INT16ARRAY: 8,
        INT32ARRAY: 9,
        UINT8ARRAY: 10,
        UINT16ARRAY: 11,
        UINT32ARRAY: 12,
        FLOAT32ARRAY: 13,
        FLOAT64ARRAY: 14,
        ARRAYBUFFER: 15,
        BLOB: 16,
        FILE: 16,
        BUFFER: 17 // Special type for node.js
    };

    if (debug) {
        var TypeNames = [
            'NULL',
            'UNDEFINED',
            'STRING',
            'NUMBER',
            'BOOLEAN',
            'ARRAY',
            'OBJECT',
            'INT8ARRAY',
            'INT16ARRAY',
            'INT32ARRAY',
            'UINT8ARRAY',
            'UINT16ARRAY',
            'UINT32ARRAY',
            'FLOAT32ARRAY',
            'FLOAT64ARRAY',
            'ARRAYBUFFER',
            'BLOB',
            'BUFFER'
        ];
    }

    var Length = [
        null, // Types.NULL
        null, // Types.UNDEFINED
        'Uint16', // Types.STRING
        'Float64', // Types.NUMBER
        'Uint8', // Types.BOOLEAN
        null, // Types.ARRAY
        null, // Types.OBJECT
        'Int8', // Types.INT8ARRAY
        'Int16', // Types.INT16ARRAY
        'Int32', // Types.INT32ARRAY
        'Uint8', // Types.UINT8ARRAY
        'Uint16', // Types.UINT16ARRAY
        'Uint32', // Types.UINT32ARRAY
        'Float32', // Types.FLOAT32ARRAY
        'Float64', // Types.FLOAT64ARRAY
        'Uint8', // Types.ARRAYBUFFER
        'Uint8', // Types.BLOB, Types.FILE
        'Uint8' // Types.BUFFER
    ];

    var binary_dump = function(view, start, length) {
        var table = [],
            endianness = BIG_ENDIAN,
            ROW_LENGTH = 40;
        table[0] = [];
        for (var i = 0; i < ROW_LENGTH; i++) {
            table[0][i] = i < 10 ? '0' + i.toString(10) : i.toString(10);
        }
        for (i = 0; i < length; i++) {
            var code = view.getUint8(start + i, endianness);
            var index = ~~(i / ROW_LENGTH) + 1;
            if (typeof table[index] === 'undefined') table[index] = [];
            table[index][i % ROW_LENGTH] = code < 16 ? '0' + code.toString(16) : code.toString(16);
        }
        console.log('%c' + table[0].join(' '), 'font-weight: bold;');
        for (i = 1; i < table.length; i++) {
            console.log(table[i].join(' '));
        }
    };

    var find_type = function(obj) {
        var type = undefined;

        if (obj === undefined) {
            type = Types.UNDEFINED;

        } else if (obj === null) {
            type = Types.NULL;

        } else {
            var const_name = obj.constructor.name;
            var const_name_reflection = obj.constructor.toString().match(/\w+/g)[1];
            if (const_name !== undefined && Types[const_name.toUpperCase()] !== undefined) {
                // return type by .constructor.name if possible
                type = Types[const_name.toUpperCase()];

            } else if (const_name_reflection !== undefined && Types[const_name_reflection.toUpperCase()] !== undefined) {
                type = Types[const_name_reflection.toUpperCase()];

            } else {
                // Work around when constructor.name is not defined
                switch (typeof obj) {
                    case 'string':
                        type = Types.STRING;
                        break;

                    case 'number':
                        type = Types.NUMBER;
                        break;

                    case 'boolean':
                        type = Types.BOOLEAN;
                        break;

                    case 'object':
                        if (obj instanceof Array) {
                            type = Types.ARRAY;

                        } else if (obj instanceof Int8Array) {
                            type = Types.INT8ARRAY;

                        } else if (obj instanceof Int16Array) {
                            type = Types.INT16ARRAY;

                        } else if (obj instanceof Int32Array) {
                            type = Types.INT32ARRAY;

                        } else if (obj instanceof Uint8Array) {
                            type = Types.UINT8ARRAY;

                        } else if (obj instanceof Uint16Array) {
                            type = Types.UINT16ARRAY;

                        } else if (obj instanceof Uint32Array) {
                            type = Types.UINT32ARRAY;

                        } else if (obj instanceof Float32Array) {
                            type = Types.FLOAT32ARRAY;

                        } else if (obj instanceof Float64Array) {
                            type = Types.FLOAT64ARRAY;

                        } else if (obj instanceof ArrayBuffer) {
                            type = Types.ARRAYBUFFER;

                        } else if (obj instanceof Blob) { // including File
                            type = Types.BLOB;

                        } else if (obj instanceof Buffer) { // node.js only
                            type = Types.BUFFER;

                        } else if (obj instanceof Object) {
                            type = Types.OBJECT;

                        }
                        break;

                    default:
                        break;
                }
            }
        }
        return type;
    };

    var utf16_utf8 = function(string) {
        return unescape(encodeURIComponent(string));
    };

    var utf8_utf16 = function(bytes) {
        return decodeURIComponent(escape(bytes));
    };

    /**
     * packs seriarized elements array into a packed ArrayBuffer
     * @param  {Array} serialized Serialized array of elements.
     * @return {DataView} view of packed binary
     */
    var pack = function(serialized) {
        var cursor = 0,
            i = 0,
            j = 0,
            endianness = BIG_ENDIAN;

        var ab = new ArrayBuffer(serialized[0].byte_length + serialized[0].header_size);
        var view = new DataView(ab);

        for (i = 0; i < serialized.length; i++) {
            var start = cursor,
                header_size = serialized[i].header_size,
                type = serialized[i].type,
                length = serialized[i].length,
                value = serialized[i].value,
                byte_length = serialized[i].byte_length,
                type_name = Length[type],
                unit = type_name === null ? 0 : window[type_name + 'Array'].BYTES_PER_ELEMENT;

            // Set type
            if (type === Types.BUFFER) {
                // on node.js Blob is emulated using Buffer type
                view.setUint8(cursor, Types.BLOB, endianness);
            } else {
                view.setUint8(cursor, type, endianness);
            }
            cursor += TYPE_LENGTH;

            if (debug) {
                console.info('Packing', type, TypeNames[type]);
            }

            // Set length if required
            if (type === Types.ARRAY || type === Types.OBJECT) {
                view.setUint16(cursor, length, endianness);
                cursor += LENGTH_LENGTH;

                if (debug) {
                    console.info('Content Length', length);
                }
            }

            // Set byte length
            view.setUint32(cursor, byte_length, endianness);
            cursor += BYTES_LENGTH;

            if (debug) {
                console.info('Header Size', header_size, 'bytes');
                console.info('Byte Length', byte_length, 'bytes');
            }

            switch (type) {
                case Types.NULL:
                case Types.UNDEFINED:
                    // NULL and UNDEFINED doesn't have any payload
                    break;

                case Types.STRING:
                    if (debug) {
                        console.info('Actual Content %c"' + value + '"', 'font-weight:bold;');
                    }
                    for (j = 0; j < length; j++, cursor += unit) {
                        view.setUint16(cursor, value.charCodeAt(j), endianness);
                    }
                    break;

                case Types.NUMBER:
                case Types.BOOLEAN:
                    if (debug) {
                        console.info('%c' + value.toString(), 'font-weight:bold;');
                    }
                    view['set' + type_name](cursor, value, endianness);
                    cursor += unit;
                    break;

                case Types.INT8ARRAY:
                case Types.INT16ARRAY:
                case Types.INT32ARRAY:
                case Types.UINT8ARRAY:
                case Types.UINT16ARRAY:
                case Types.UINT32ARRAY:
                case Types.FLOAT32ARRAY:
                case Types.FLOAT64ARRAY:
                    var _view = new Uint8Array(view.buffer, cursor, byte_length);
                    _view.set(new Uint8Array(value.buffer));
                    cursor += byte_length;
                    break;

                case Types.ARRAYBUFFER:
                case Types.BUFFER:
                    var _view = new Uint8Array(view.buffer, cursor, byte_length);
                    _view.set(new Uint8Array(value));
                    cursor += byte_length;
                    break;

                case Types.BLOB:
                case Types.ARRAY:
                case Types.OBJECT:
                    break;

                default:
                    throw 'TypeError: Unexpected type found.';
            }

            if (debug) {
                binary_dump(view, start, cursor - start);
            }
        }

        return view;
    };

    /**
     * Unpack binary data into an object with value and cursor
     * @param  {DataView} view [description]
     * @param  {Number} cursor [description]
     * @return {Object}
     */
    var unpack = function(view, cursor) {
        var i = 0,
            endianness = BIG_ENDIAN,
            start = cursor;
        var type, length, byte_length, value, elem;

        // Retrieve "type"
        type = view.getUint8(cursor, endianness);
        cursor += TYPE_LENGTH;

        if (debug) {
            console.info('Unpacking', type, TypeNames[type]);
        }

        // Retrieve "length"
        if (type === Types.ARRAY || type === Types.OBJECT) {
            length = view.getUint16(cursor, endianness);
            cursor += LENGTH_LENGTH;

            if (debug) {
                console.info('Content Length', length);
            }
        }

        // Retrieve "byte_length"
        byte_length = view.getUint32(cursor, endianness);
        cursor += BYTES_LENGTH;

        if (debug) {
            console.info('Byte Length', byte_length, 'bytes');
        }

        var type_name = Length[type];
        var unit = type_name === null ? 0 : window[type_name + 'Array'].BYTES_PER_ELEMENT;

        switch (type) {
            case Types.NULL:
            case Types.UNDEFINED:
                if (debug) {
                    binary_dump(view, start, cursor - start);
                }
                // NULL and UNDEFINED doesn't have any octet
                value = null;
                break;

            case Types.STRING:
                length = byte_length / unit;
                var string = [];
                for (i = 0; i < length; i++) {
                    var code = view.getUint16(cursor, endianness);
                    cursor += unit;
                    string.push(String.fromCharCode(code));
                }
                value = string.join('');
                if (debug) {
                    console.info('Actual Content %c"' + value + '"', 'font-weight:bold;');
                    binary_dump(view, start, cursor - start);
                }
                break;

            case Types.NUMBER:
                value = view.getFloat64(cursor, endianness);
                cursor += unit;
                if (debug) {
                    console.info('Actual Content %c"' + value.toString() + '"', 'font-weight:bold;');
                    binary_dump(view, start, cursor - start);
                }
                break;

            case Types.BOOLEAN:
                value = view.getUint8(cursor, endianness) === 1 ? true : false;
                cursor += unit;
                if (debug) {
                    console.info('Actual Content %c"' + value.toString() + '"', 'font-weight:bold;');
                    binary_dump(view, start, cursor - start);
                }
                break;

            case Types.INT8ARRAY:
            case Types.INT16ARRAY:
            case Types.INT32ARRAY:
            case Types.UINT8ARRAY:
            case Types.UINT16ARRAY:
            case Types.UINT32ARRAY:
            case Types.FLOAT32ARRAY:
            case Types.FLOAT64ARRAY:
            case Types.ARRAYBUFFER:
                elem = view.buffer.slice(cursor, cursor + byte_length);
                cursor += byte_length;

                // If ArrayBuffer
                if (type === Types.ARRAYBUFFER) {
                    value = elem;

                    // If other TypedArray
                } else {
                    value = new window[type_name + 'Array'](elem);
                }

                if (debug) {
                    binary_dump(view, start, cursor - start);
                }
                break;

            case Types.BLOB:
                if (debug) {
                    binary_dump(view, start, cursor - start);
                }
                // If Blob is available (on browser)
                if (window.Blob) {
                    var mime = unpack(view, cursor);
                    var buffer = unpack(view, mime.cursor);
                    cursor = buffer.cursor;
                    value = new Blob([buffer.value], {
                        type: mime.value
                    });
                } else {
                    // node.js implementation goes here
                    elem = view.buffer.slice(cursor, cursor + byte_length);
                    cursor += byte_length;
                    // node.js implementatino uses Buffer to help Blob
                    value = new Buffer(elem);
                }
                break;

            case Types.ARRAY:
                if (debug) {
                    binary_dump(view, start, cursor - start);
                }
                value = [];
                for (i = 0; i < length; i++) {
                    // Retrieve array element
                    elem = unpack(view, cursor);
                    cursor = elem.cursor;
                    value.push(elem.value);
                }
                break;

            case Types.OBJECT:
                if (debug) {
                    binary_dump(view, start, cursor - start);
                }
                value = {};
                for (i = 0; i < length; i++) {
                    // Retrieve object key and value in sequence
                    var key = unpack(view, cursor);
                    var val = unpack(view, key.cursor);
                    cursor = val.cursor;
                    value[key.value] = val.value;
                }
                break;

            default:
                throw 'TypeError: Type not supported.';
        }
        return {
            value: value,
            cursor: cursor
        };
    };

    /**
     * deferred function to process multiple serialization in order
     * @param  {array}   array    [description]
     * @param  {Function} callback [description]
     * @return {void} no return value
     */
    var deferredSerialize = function(array, callback) {
        var length = array.length,
            results = [],
            count = 0,
            byte_length = 0;
        for (var i = 0; i < array.length; i++) {
            (function(index) {
                serialize(array[index], function(result) {
                    // store results in order
                    results[index] = result;
                    // count byte length
                    byte_length += result[0].header_size + result[0].byte_length;
                    // when all results are on table
                    if (++count === length) {
                        // finally concatenate all reuslts into a single array in order
                        var array = [];
                        for (var j = 0; j < results.length; j++) {
                            array = array.concat(results[j]);
                        }
                        callback(array, byte_length);
                    }
                });
            })(i);
        }
    };

    /**
     * Serializes object and return byte_length
     * @param  {mixed} obj JavaScript object you want to serialize
     * @return {Array} Serialized array object
     */
    var serialize = function(obj, callback) {
        var subarray = [],
            unit = 1,
            header_size = TYPE_LENGTH + BYTES_LENGTH,
            type, byte_length = 0,
            length = 0,
            value = obj;

        type = find_type(obj);

        unit = Length[type] === undefined || Length[type] === null ? 0 :
            window[Length[type] + 'Array'].BYTES_PER_ELEMENT;

        switch (type) {
            case Types.UNDEFINED:
            case Types.NULL:
                break;

            case Types.NUMBER:
            case Types.BOOLEAN:
                byte_length = unit;
                break;

            case Types.STRING:
                length = obj.length;
                byte_length += length * unit;
                break;

            case Types.INT8ARRAY:
            case Types.INT16ARRAY:
            case Types.INT32ARRAY:
            case Types.UINT8ARRAY:
            case Types.UINT16ARRAY:
            case Types.UINT32ARRAY:
            case Types.FLOAT32ARRAY:
            case Types.FLOAT64ARRAY:
                length = obj.length;
                byte_length += length * unit;
                break;

            case Types.ARRAY:
                deferredSerialize(obj, function(subarray, byte_length) {
                    callback([{
                        type: type,
                        length: obj.length,
                        header_size: header_size + LENGTH_LENGTH,
                        byte_length: byte_length,
                        value: null
                    }].concat(subarray));
                });
                return;

            case Types.OBJECT:
                var deferred = [];
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        deferred.push(key);
                        deferred.push(obj[key]);
                        length++;
                    }
                }
                deferredSerialize(deferred, function(subarray, byte_length) {
                    callback([{
                        type: type,
                        length: length,
                        header_size: header_size + LENGTH_LENGTH,
                        byte_length: byte_length,
                        value: null
                    }].concat(subarray));
                });
                return;

            case Types.ARRAYBUFFER:
                byte_length += obj.byteLength;
                break;

            case Types.BLOB:
                var mime_type = obj.type;
                var reader = new FileReader();
                reader.onload = function(e) {
                    deferredSerialize([mime_type, e.target.result], function(subarray, byte_length) {
                        callback([{
                            type: type,
                            length: length,
                            header_size: header_size,
                            byte_length: byte_length,
                            value: null
                        }].concat(subarray));
                    });
                };
                reader.onerror = function(e) {
                    throw 'FileReader Error: ' + e;
                };
                reader.readAsArrayBuffer(obj);
                return;

            case Types.BUFFER:
                byte_length += obj.length;
                break;

            default:
                throw 'TypeError: Type "' + obj.constructor.name + '" not supported.';
        }

        callback([{
            type: type,
            length: length,
            header_size: header_size,
            byte_length: byte_length,
            value: value
        }].concat(subarray));
    };

    /**
     * Deserialize binary and return JavaScript object
     * @param  ArrayBuffer buffer ArrayBuffer you want to deserialize
     * @return mixed              Retrieved JavaScript object
     */
    var deserialize = function(buffer, callback) {
        var view = buffer instanceof DataView ? buffer : new DataView(buffer);
        var result = unpack(view, 0);
        return result.value;
    };

    if (debug) {
        window.Test = {
            BIG_ENDIAN: BIG_ENDIAN,
            LITTLE_ENDIAN: LITTLE_ENDIAN,
            Types: Types,
            pack: pack,
            unpack: unpack,
            serialize: serialize,
            deserialize: deserialize
        };
    }

    var binarize = {
        pack: function(obj, callback) {
            try {
                if (debug) console.info('%cPacking Start', 'font-weight: bold; color: red;', obj);
                serialize(obj, function(array) {
                    if (debug) console.info('Serialized Object', array);
                    callback(pack(array));
                });
            } catch (e) {
                throw e;
            }
        },
        unpack: function(buffer, callback) {
            try {
                if (debug) console.info('%cUnpacking Start', 'font-weight: bold; color: red;', buffer);
                var result = deserialize(buffer);
                if (debug) console.info('Deserialized Object', result);
                callback(result);
            } catch (e) {
                throw e;
            }
        }
    };

    window.FileConverter = FileConverter;
    window.FileSelector = FileSelector;
    window.FileBufferReader = FileBufferReader;
})();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/hark/hark.bundle.js":
/*!******************************************!*\
  !*** ./node_modules/hark/hark.bundle.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;(function(e){if("function"==typeof bootstrap)bootstrap("hark",e);else if(true)module.exports=e();else {}})(function(){var define,ses,bootstrap,module,exports;
return (function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return require(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
var WildEmitter = require('wildemitter');

function getMaxVolume (analyser, fftBins) {
  var maxVolume = -Infinity;
  analyser.getFloatFrequencyData(fftBins);

  for(var i=4, ii=fftBins.length; i < ii; i++) {
    if (fftBins[i] > maxVolume && fftBins[i] < 0) {
      maxVolume = fftBins[i];
    }
  };

  return maxVolume;
}


var audioContextType;
if (typeof window !== 'undefined') {
  audioContextType = window.AudioContext || window.webkitAudioContext;
}
// use a single audio context due to hardware limits
var audioContext = null;
module.exports = function(stream, options) {
  var harker = new WildEmitter();

  // make it not break in non-supported browsers
  if (!audioContextType) return harker;

  //Config
  var options = options || {},
      smoothing = (options.smoothing || 0.1),
      interval = (options.interval || 50),
      threshold = options.threshold,
      play = options.play,
      history = options.history || 10,
      running = true;

  // Ensure that just a single AudioContext is internally created
  audioContext = options.audioContext || audioContext || new audioContextType();

  var sourceNode, fftBins, analyser;

  analyser = audioContext.createAnalyser();
  analyser.fftSize = 512;
  analyser.smoothingTimeConstant = smoothing;
  fftBins = new Float32Array(analyser.frequencyBinCount);

  if (stream.jquery) stream = stream[0];
  if (stream instanceof HTMLAudioElement || stream instanceof HTMLVideoElement) {
    //Audio Tag
    sourceNode = audioContext.createMediaElementSource(stream);
    if (typeof play === 'undefined') play = true;
    threshold = threshold || -50;
  } else {
    //WebRTC Stream
    sourceNode = audioContext.createMediaStreamSource(stream);
    threshold = threshold || -50;
  }

  sourceNode.connect(analyser);
  if (play) analyser.connect(audioContext.destination);

  harker.speaking = false;

  harker.suspend = function() {
    return audioContext.suspend();
  }
  harker.resume = function() {
    return audioContext.resume();
  }
  Object.defineProperty(harker, 'state', { get: function() {
    return audioContext.state;
  }});
  audioContext.onstatechange = function() {
    harker.emit('state_change', audioContext.state);
  }

  harker.setThreshold = function(t) {
    threshold = t;
  };

  harker.setInterval = function(i) {
    interval = i;
  };

  harker.stop = function() {
    running = false;
    harker.emit('volume_change', -100, threshold);
    if (harker.speaking) {
      harker.speaking = false;
      harker.emit('stopped_speaking');
    }
    analyser.disconnect();
    sourceNode.disconnect();
  };
  harker.speakingHistory = [];
  for (var i = 0; i < history; i++) {
      harker.speakingHistory.push(0);
  }

  // Poll the analyser node to determine if speaking
  // and emit events if changed
  var looper = function() {
    setTimeout(function() {

      //check if stop has been called
      if(!running) {
        return;
      }

      var currentVolume = getMaxVolume(analyser, fftBins);

      harker.emit('volume_change', currentVolume, threshold);

      var history = 0;
      if (currentVolume > threshold && !harker.speaking) {
        // trigger quickly, short history
        for (var i = harker.speakingHistory.length - 3; i < harker.speakingHistory.length; i++) {
          history += harker.speakingHistory[i];
        }
        if (history >= 2) {
          harker.speaking = true;
          harker.emit('speaking');
        }
      } else if (currentVolume < threshold && harker.speaking) {
        for (var i = 0; i < harker.speakingHistory.length; i++) {
          history += harker.speakingHistory[i];
        }
        if (history == 0) {
          harker.speaking = false;
          harker.emit('stopped_speaking');
        }
      }
      harker.speakingHistory.shift();
      harker.speakingHistory.push(0 + (currentVolume > threshold));

      looper();
    }, interval);
  };
  looper();

  return harker;
}

},{"wildemitter":2}],2:[function(require,module,exports){
/*
WildEmitter.js is a slim little event emitter by @henrikjoreteg largely based
on @visionmedia's Emitter from UI Kit.

Why? I wanted it standalone.

I also wanted support for wildcard emitters like this:

emitter.on('*', function (eventName, other, event, payloads) {

});

emitter.on('somenamespace*', function (eventName, payloads) {

});

Please note that callbacks triggered by wildcard registered events also get
the event name as the first argument.
*/

module.exports = WildEmitter;

function WildEmitter() { }

WildEmitter.mixin = function (constructor) {
    var prototype = constructor.prototype || constructor;

    prototype.isWildEmitter= true;

    // Listen on the given `event` with `fn`. Store a group name if present.
    prototype.on = function (event, groupName, fn) {
        this.callbacks = this.callbacks || {};
        var hasGroup = (arguments.length === 3),
            group = hasGroup ? arguments[1] : undefined,
            func = hasGroup ? arguments[2] : arguments[1];
        func._groupName = group;
        (this.callbacks[event] = this.callbacks[event] || []).push(func);
        return this;
    };

    // Adds an `event` listener that will be invoked a single
    // time then automatically removed.
    prototype.once = function (event, groupName, fn) {
        var self = this,
            hasGroup = (arguments.length === 3),
            group = hasGroup ? arguments[1] : undefined,
            func = hasGroup ? arguments[2] : arguments[1];
        function on() {
            self.off(event, on);
            func.apply(this, arguments);
        }
        this.on(event, group, on);
        return this;
    };

    // Unbinds an entire group
    prototype.releaseGroup = function (groupName) {
        this.callbacks = this.callbacks || {};
        var item, i, len, handlers;
        for (item in this.callbacks) {
            handlers = this.callbacks[item];
            for (i = 0, len = handlers.length; i < len; i++) {
                if (handlers[i]._groupName === groupName) {
                    //console.log('removing');
                    // remove it and shorten the array we're looping through
                    handlers.splice(i, 1);
                    i--;
                    len--;
                }
            }
        }
        return this;
    };

    // Remove the given callback for `event` or all
    // registered callbacks.
    prototype.off = function (event, fn) {
        this.callbacks = this.callbacks || {};
        var callbacks = this.callbacks[event],
            i;

        if (!callbacks) return this;

        // remove all handlers
        if (arguments.length === 1) {
            delete this.callbacks[event];
            return this;
        }

        // remove specific handler
        i = callbacks.indexOf(fn);
        callbacks.splice(i, 1);
        if (callbacks.length === 0) {
            delete this.callbacks[event];
        }
        return this;
    };

    /// Emit `event` with the given args.
    // also calls any `*` handlers
    prototype.emit = function (event) {
        this.callbacks = this.callbacks || {};
        var args = [].slice.call(arguments, 1),
            callbacks = this.callbacks[event],
            specialCallbacks = this.getWildcardCallbacks(event),
            i,
            len,
            item,
            listeners;

        if (callbacks) {
            listeners = callbacks.slice();
            for (i = 0, len = listeners.length; i < len; ++i) {
                if (!listeners[i]) {
                    break;
                }
                listeners[i].apply(this, args);
            }
        }

        if (specialCallbacks) {
            len = specialCallbacks.length;
            listeners = specialCallbacks.slice();
            for (i = 0, len = listeners.length; i < len; ++i) {
                if (!listeners[i]) {
                    break;
                }
                listeners[i].apply(this, [event].concat(args));
            }
        }

        return this;
    };

    // Helper for for finding special wildcard event handlers that match the event
    prototype.getWildcardCallbacks = function (eventName) {
        this.callbacks = this.callbacks || {};
        var item,
            split,
            result = [];

        for (item in this.callbacks) {
            split = item.split('*');
            if (item === '*' || (split.length === 2 && eventName.slice(0, split[0].length) === split[0])) {
                result = result.concat(this.callbacks[item]);
            }
        }
        return result;
    };

};

WildEmitter.mixin(WildEmitter);

},{}]},{},[1])(1)
});
;

/***/ }),

/***/ "./node_modules/rtcmulticonnection/dist/RTCMultiConnection.js":
/*!********************************************************************!*\
  !*** ./node_modules/rtcmulticonnection/dist/RTCMultiConnection.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

// Last time updated: 2019-06-15 4:26:11 PM UTC

// _________________________
// RTCMultiConnection v3.6.9

// Open-Sourced: https://github.com/muaz-khan/RTCMultiConnection

// --------------------------------------------------
// Muaz Khan     - www.MuazKhan.com
// MIT License   - www.WebRTC-Experiment.com/licence
// --------------------------------------------------

var RTCMultiConnection = function(roomid, forceOptions) {

    var browserFakeUserAgent = 'Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45';

    (function(that) {
        if (!that) {
            return;
        }

        if (typeof window !== 'undefined') {
            return;
        }

        if (typeof global === 'undefined') {
            return;
        }

        global.navigator = {
            userAgent: browserFakeUserAgent,
            getUserMedia: function() {}
        };

        if (!global.console) {
            global.console = {};
        }

        if (typeof global.console.debug === 'undefined') {
            global.console.debug = global.console.info = global.console.error = global.console.log = global.console.log || function() {
                console.log(arguments);
            };
        }

        if (typeof document === 'undefined') {
            /*global document:true */
            that.document = {};

            document.createElement = document.captureStream = document.mozCaptureStream = function() {
                var obj = {
                    getContext: function() {
                        return obj;
                    },
                    play: function() {},
                    pause: function() {},
                    drawImage: function() {},
                    toDataURL: function() {
                        return '';
                    }
                };
                return obj;
            };

            document.addEventListener = document.removeEventListener = that.addEventListener = that.removeEventListener = function() {};

            that.HTMLVideoElement = that.HTMLMediaElement = function() {};
        }

        if (typeof io === 'undefined') {
            that.io = function() {
                return {
                    on: function(eventName, callback) {
                        callback = callback || function() {};

                        if (eventName === 'connect') {
                            callback();
                        }
                    },
                    emit: function(eventName, data, callback) {
                        callback = callback || function() {};
                        if (eventName === 'open-room' || eventName === 'join-room') {
                            callback(true, data.sessionid, null);
                        }
                    }
                };
            };
        }

        if (typeof location === 'undefined') {
            /*global location:true */
            that.location = {
                protocol: 'file:',
                href: '',
                hash: '',
                origin: 'self'
            };
        }

        if (typeof screen === 'undefined') {
            /*global screen:true */
            that.screen = {
                width: 0,
                height: 0
            };
        }

        if (typeof URL === 'undefined') {
            /*global screen:true */
            that.URL = {
                createObjectURL: function() {
                    return '';
                },
                revokeObjectURL: function() {
                    return '';
                }
            };
        }

        /*global window:true */
        that.window = global;
    })(typeof global !== 'undefined' ? global : null);

    function SocketConnection(connection, connectCallback) {
        function isData(session) {
            return !session.audio && !session.video && !session.screen && session.data;
        }

        var parameters = '';

        parameters += '?userid=' + connection.userid;
        parameters += '&sessionid=' + connection.sessionid;
        parameters += '&msgEvent=' + connection.socketMessageEvent;
        parameters += '&socketCustomEvent=' + connection.socketCustomEvent;
        parameters += '&autoCloseEntireSession=' + !!connection.autoCloseEntireSession;

        if (connection.session.broadcast === true) {
            parameters += '&oneToMany=true';
        }

        parameters += '&maxParticipantsAllowed=' + connection.maxParticipantsAllowed;

        if (connection.enableScalableBroadcast) {
            parameters += '&enableScalableBroadcast=true';
            parameters += '&maxRelayLimitPerUser=' + (connection.maxRelayLimitPerUser || 2);
        }

        parameters += '&extra=' + JSON.stringify(connection.extra || {});

        if (connection.socketCustomParameters) {
            parameters += connection.socketCustomParameters;
        }

        try {
            io.sockets = {};
        } catch (e) {};

        if (!connection.socketURL) {
            connection.socketURL = '/';
        }

        if (connection.socketURL.substr(connection.socketURL.length - 1, 1) != '/') {
            // connection.socketURL = 'https://domain.com:9001/';
            throw '"socketURL" MUST end with a slash.';
        }

        if (connection.enableLogs) {
            if (connection.socketURL == '/') {
                console.info('socket.io url is: ', location.origin + '/');
            } else {
                console.info('socket.io url is: ', connection.socketURL);
            }
        }

        try {
            connection.socket = io(connection.socketURL + parameters);
        } catch (e) {
            connection.socket = io.connect(connection.socketURL + parameters, connection.socketOptions);
        }

        var mPeer = connection.multiPeersHandler;

        connection.socket.on('extra-data-updated', function(remoteUserId, extra) {
            if (!connection.peers[remoteUserId]) return;
            connection.peers[remoteUserId].extra = extra;

            connection.onExtraDataUpdated({
                userid: remoteUserId,
                extra: extra
            });

            updateExtraBackup(remoteUserId, extra);
        });

        function updateExtraBackup(remoteUserId, extra) {
            if (!connection.peersBackup[remoteUserId]) {
                connection.peersBackup[remoteUserId] = {
                    userid: remoteUserId,
                    extra: {}
                };
            }

            connection.peersBackup[remoteUserId].extra = extra;
        }

        function onMessageEvent(message) {
            if (message.remoteUserId != connection.userid) return;

            if (connection.peers[message.sender] && connection.peers[message.sender].extra != message.message.extra) {
                connection.peers[message.sender].extra = message.extra;
                connection.onExtraDataUpdated({
                    userid: message.sender,
                    extra: message.extra
                });

                updateExtraBackup(message.sender, message.extra);
            }

            if (message.message.streamSyncNeeded && connection.peers[message.sender]) {
                var stream = connection.streamEvents[message.message.streamid];
                if (!stream || !stream.stream) {
                    return;
                }

                var action = message.message.action;

                if (action === 'ended' || action === 'inactive' || action === 'stream-removed') {
                    if (connection.peersBackup[stream.userid]) {
                        stream.extra = connection.peersBackup[stream.userid].extra;
                    }
                    connection.onstreamended(stream);
                    return;
                }

                var type = message.message.type != 'both' ? message.message.type : null;

                if (typeof stream.stream[action] == 'function') {
                    stream.stream[action](type);
                }
                return;
            }

            if (message.message === 'dropPeerConnection') {
                connection.deletePeer(message.sender);
                return;
            }

            if (message.message.allParticipants) {
                if (message.message.allParticipants.indexOf(message.sender) === -1) {
                    message.message.allParticipants.push(message.sender);
                }

                message.message.allParticipants.forEach(function(participant) {
                    mPeer[!connection.peers[participant] ? 'createNewPeer' : 'renegotiatePeer'](participant, {
                        localPeerSdpConstraints: {
                            OfferToReceiveAudio: connection.sdpConstraints.mandatory.OfferToReceiveAudio,
                            OfferToReceiveVideo: connection.sdpConstraints.mandatory.OfferToReceiveVideo
                        },
                        remotePeerSdpConstraints: {
                            OfferToReceiveAudio: connection.session.oneway ? !!connection.session.audio : connection.sdpConstraints.mandatory.OfferToReceiveAudio,
                            OfferToReceiveVideo: connection.session.oneway ? !!connection.session.video || !!connection.session.screen : connection.sdpConstraints.mandatory.OfferToReceiveVideo
                        },
                        isOneWay: !!connection.session.oneway || connection.direction === 'one-way',
                        isDataOnly: isData(connection.session)
                    });
                });
                return;
            }

            if (message.message.newParticipant) {
                if (message.message.newParticipant == connection.userid) return;
                if (!!connection.peers[message.message.newParticipant]) return;

                mPeer.createNewPeer(message.message.newParticipant, message.message.userPreferences || {
                    localPeerSdpConstraints: {
                        OfferToReceiveAudio: connection.sdpConstraints.mandatory.OfferToReceiveAudio,
                        OfferToReceiveVideo: connection.sdpConstraints.mandatory.OfferToReceiveVideo
                    },
                    remotePeerSdpConstraints: {
                        OfferToReceiveAudio: connection.session.oneway ? !!connection.session.audio : connection.sdpConstraints.mandatory.OfferToReceiveAudio,
                        OfferToReceiveVideo: connection.session.oneway ? !!connection.session.video || !!connection.session.screen : connection.sdpConstraints.mandatory.OfferToReceiveVideo
                    },
                    isOneWay: !!connection.session.oneway || connection.direction === 'one-way',
                    isDataOnly: isData(connection.session)
                });
                return;
            }

            if (message.message.readyForOffer) {
                if (connection.attachStreams.length) {
                    connection.waitingForLocalMedia = false;
                }

                if (connection.waitingForLocalMedia) {
                    // if someone is waiting to join you
                    // make sure that we've local media before making a handshake
                    setTimeout(function() {
                        onMessageEvent(message);
                    }, 1);
                    return;
                }
            }

            if (message.message.newParticipationRequest && message.sender !== connection.userid) {
                if (connection.peers[message.sender]) {
                    connection.deletePeer(message.sender);
                }

                var userPreferences = {
                    extra: message.extra || {},
                    localPeerSdpConstraints: message.message.remotePeerSdpConstraints || {
                        OfferToReceiveAudio: connection.sdpConstraints.mandatory.OfferToReceiveAudio,
                        OfferToReceiveVideo: connection.sdpConstraints.mandatory.OfferToReceiveVideo
                    },
                    remotePeerSdpConstraints: message.message.localPeerSdpConstraints || {
                        OfferToReceiveAudio: connection.session.oneway ? !!connection.session.audio : connection.sdpConstraints.mandatory.OfferToReceiveAudio,
                        OfferToReceiveVideo: connection.session.oneway ? !!connection.session.video || !!connection.session.screen : connection.sdpConstraints.mandatory.OfferToReceiveVideo
                    },
                    isOneWay: typeof message.message.isOneWay !== 'undefined' ? message.message.isOneWay : !!connection.session.oneway || connection.direction === 'one-way',
                    isDataOnly: typeof message.message.isDataOnly !== 'undefined' ? message.message.isDataOnly : isData(connection.session),
                    dontGetRemoteStream: typeof message.message.isOneWay !== 'undefined' ? message.message.isOneWay : !!connection.session.oneway || connection.direction === 'one-way',
                    dontAttachLocalStream: !!message.message.dontGetRemoteStream,
                    connectionDescription: message,
                    successCallback: function() {}
                };

                connection.onNewParticipant(message.sender, userPreferences);
                return;
            }

            if (message.message.changedUUID) {
                if (connection.peers[message.message.oldUUID]) {
                    connection.peers[message.message.newUUID] = connection.peers[message.message.oldUUID];
                    delete connection.peers[message.message.oldUUID];
                }
            }

            if (message.message.userLeft) {
                mPeer.onUserLeft(message.sender);

                if (!!message.message.autoCloseEntireSession) {
                    connection.leave();
                }

                return;
            }

            mPeer.addNegotiatedMessage(message.message, message.sender);
        }

        connection.socket.on(connection.socketMessageEvent, onMessageEvent);

        var alreadyConnected = false;

        connection.socket.resetProps = function() {
            alreadyConnected = false;
        };

        connection.socket.on('connect', function() {
            if (alreadyConnected) {
                return;
            }
            alreadyConnected = true;

            if (connection.enableLogs) {
                console.info('socket.io connection is opened.');
            }

            setTimeout(function() {
                connection.socket.emit('extra-data-updated', connection.extra);
            }, 1000);

            if (connectCallback) {
                connectCallback(connection.socket);
            }
        });

        connection.socket.on('disconnect', function(event) {
            connection.onSocketDisconnect(event);
        });

        connection.socket.on('error', function(event) {
            connection.onSocketError(event);
        });

        connection.socket.on('user-disconnected', function(remoteUserId) {
            if (remoteUserId === connection.userid) {
                return;
            }

            connection.onUserStatusChanged({
                userid: remoteUserId,
                status: 'offline',
                extra: connection.peers[remoteUserId] ? connection.peers[remoteUserId].extra || {} : {}
            });

            connection.deletePeer(remoteUserId);
        });

        connection.socket.on('user-connected', function(userid) {
            if (userid === connection.userid) {
                return;
            }

            connection.onUserStatusChanged({
                userid: userid,
                status: 'online',
                extra: connection.peers[userid] ? connection.peers[userid].extra || {} : {}
            });
        });

        connection.socket.on('closed-entire-session', function(sessionid, extra) {
            connection.leave();
            connection.onEntireSessionClosed({
                sessionid: sessionid,
                userid: sessionid,
                extra: extra
            });
        });

        connection.socket.on('userid-already-taken', function(useridAlreadyTaken, yourNewUserId) {
            connection.onUserIdAlreadyTaken(useridAlreadyTaken, yourNewUserId);
        });

        connection.socket.on('logs', function(log) {
            if (!connection.enableLogs) return;
            console.debug('server-logs', log);
        });

        connection.socket.on('number-of-broadcast-viewers-updated', function(data) {
            connection.onNumberOfBroadcastViewersUpdated(data);
        });

        connection.socket.on('set-isInitiator-true', function(sessionid) {
            if (sessionid != connection.sessionid) return;
            connection.isInitiator = true;
        });
    }

    function MultiPeers(connection) {
        var self = this;

        var skipPeers = ['getAllParticipants', 'getLength', 'selectFirst', 'streams', 'send', 'forEach'];
        connection.peers = {
            getLength: function() {
                var numberOfPeers = 0;
                for (var peer in this) {
                    if (skipPeers.indexOf(peer) == -1) {
                        numberOfPeers++;
                    }
                }
                return numberOfPeers;
            },
            selectFirst: function() {
                var firstPeer;
                for (var peer in this) {
                    if (skipPeers.indexOf(peer) == -1) {
                        firstPeer = this[peer];
                    }
                }
                return firstPeer;
            },
            getAllParticipants: function(sender) {
                var allPeers = [];
                for (var peer in this) {
                    if (skipPeers.indexOf(peer) == -1 && peer != sender) {
                        allPeers.push(peer);
                    }
                }
                return allPeers;
            },
            forEach: function(callbcak) {
                this.getAllParticipants().forEach(function(participant) {
                    callbcak(connection.peers[participant]);
                });
            },
            send: function(data, remoteUserId) {
                var that = this;

                if (!isNull(data.size) && !isNull(data.type)) {
                    if (connection.enableFileSharing) {
                        self.shareFile(data, remoteUserId);
                        return;
                    }

                    if (typeof data !== 'string') {
                        data = JSON.stringify(data);
                    }
                }

                if (data.type !== 'text' && !(data instanceof ArrayBuffer) && !(data instanceof DataView)) {
                    TextSender.send({
                        text: data,
                        channel: this,
                        connection: connection,
                        remoteUserId: remoteUserId
                    });
                    return;
                }

                if (data.type === 'text') {
                    data = JSON.stringify(data);
                }

                if (remoteUserId) {
                    var remoteUser = connection.peers[remoteUserId];
                    if (remoteUser) {
                        if (!remoteUser.channels.length) {
                            connection.peers[remoteUserId].createDataChannel();
                            connection.renegotiate(remoteUserId);
                            setTimeout(function() {
                                that.send(data, remoteUserId);
                            }, 3000);
                            return;
                        }

                        remoteUser.channels.forEach(function(channel) {
                            channel.send(data);
                        });
                        return;
                    }
                }

                this.getAllParticipants().forEach(function(participant) {
                    if (!that[participant].channels.length) {
                        connection.peers[participant].createDataChannel();
                        connection.renegotiate(participant);
                        setTimeout(function() {
                            that[participant].channels.forEach(function(channel) {
                                channel.send(data);
                            });
                        }, 3000);
                        return;
                    }

                    that[participant].channels.forEach(function(channel) {
                        channel.send(data);
                    });
                });
            }
        };

        this.uuid = connection.userid;

        this.getLocalConfig = function(remoteSdp, remoteUserId, userPreferences) {
            if (!userPreferences) {
                userPreferences = {};
            }

            return {
                streamsToShare: userPreferences.streamsToShare || {},
                rtcMultiConnection: connection,
                connectionDescription: userPreferences.connectionDescription,
                userid: remoteUserId,
                localPeerSdpConstraints: userPreferences.localPeerSdpConstraints,
                remotePeerSdpConstraints: userPreferences.remotePeerSdpConstraints,
                dontGetRemoteStream: !!userPreferences.dontGetRemoteStream,
                dontAttachLocalStream: !!userPreferences.dontAttachLocalStream,
                renegotiatingPeer: !!userPreferences.renegotiatingPeer,
                peerRef: userPreferences.peerRef,
                channels: userPreferences.channels || [],
                onLocalSdp: function(localSdp) {
                    self.onNegotiationNeeded(localSdp, remoteUserId);
                },
                onLocalCandidate: function(localCandidate) {
                    localCandidate = OnIceCandidateHandler.processCandidates(connection, localCandidate)
                    if (localCandidate) {
                        self.onNegotiationNeeded(localCandidate, remoteUserId);
                    }
                },
                remoteSdp: remoteSdp,
                onDataChannelMessage: function(message) {
                    if (!connection.fbr && connection.enableFileSharing) initFileBufferReader();

                    if (typeof message == 'string' || !connection.enableFileSharing) {
                        self.onDataChannelMessage(message, remoteUserId);
                        return;
                    }

                    var that = this;

                    if (message instanceof ArrayBuffer || message instanceof DataView) {
                        connection.fbr.convertToObject(message, function(object) {
                            that.onDataChannelMessage(object);
                        });
                        return;
                    }

                    if (message.readyForNextChunk) {
                        connection.fbr.getNextChunk(message, function(nextChunk, isLastChunk) {
                            connection.peers[remoteUserId].channels.forEach(function(channel) {
                                channel.send(nextChunk);
                            });
                        }, remoteUserId);
                        return;
                    }

                    if (message.chunkMissing) {
                        connection.fbr.chunkMissing(message);
                        return;
                    }

                    connection.fbr.addChunk(message, function(promptNextChunk) {
                        connection.peers[remoteUserId].peer.channel.send(promptNextChunk);
                    });
                },
                onDataChannelError: function(error) {
                    self.onDataChannelError(error, remoteUserId);
                },
                onDataChannelOpened: function(channel) {
                    self.onDataChannelOpened(channel, remoteUserId);
                },
                onDataChannelClosed: function(event) {
                    self.onDataChannelClosed(event, remoteUserId);
                },
                onRemoteStream: function(stream) {
                    if (connection.peers[remoteUserId]) {
                        connection.peers[remoteUserId].streams.push(stream);
                    }

                    self.onGettingRemoteMedia(stream, remoteUserId);
                },
                onRemoteStreamRemoved: function(stream) {
                    self.onRemovingRemoteMedia(stream, remoteUserId);
                },
                onPeerStateChanged: function(states) {
                    self.onPeerStateChanged(states);

                    if (states.iceConnectionState === 'new') {
                        self.onNegotiationStarted(remoteUserId, states);
                    }

                    if (states.iceConnectionState === 'connected') {
                        self.onNegotiationCompleted(remoteUserId, states);
                    }

                    if (states.iceConnectionState.search(/closed|failed/gi) !== -1) {
                        self.onUserLeft(remoteUserId);
                        self.disconnectWith(remoteUserId);
                    }
                }
            };
        };

        this.createNewPeer = function(remoteUserId, userPreferences) {
            if (connection.maxParticipantsAllowed <= connection.getAllParticipants().length) {
                return;
            }

            userPreferences = userPreferences || {};

            if (connection.isInitiator && !!connection.session.audio && connection.session.audio === 'two-way' && !userPreferences.streamsToShare) {
                userPreferences.isOneWay = false;
                userPreferences.isDataOnly = false;
                userPreferences.session = connection.session;
            }

            if (!userPreferences.isOneWay && !userPreferences.isDataOnly) {
                userPreferences.isOneWay = true;
                this.onNegotiationNeeded({
                    enableMedia: true,
                    userPreferences: userPreferences
                }, remoteUserId);
                return;
            }

            userPreferences = connection.setUserPreferences(userPreferences, remoteUserId);
            var localConfig = this.getLocalConfig(null, remoteUserId, userPreferences);
            connection.peers[remoteUserId] = new PeerInitiator(localConfig);
        };

        this.createAnsweringPeer = function(remoteSdp, remoteUserId, userPreferences) {
            userPreferences = connection.setUserPreferences(userPreferences || {}, remoteUserId);

            var localConfig = this.getLocalConfig(remoteSdp, remoteUserId, userPreferences);
            connection.peers[remoteUserId] = new PeerInitiator(localConfig);
        };

        this.renegotiatePeer = function(remoteUserId, userPreferences, remoteSdp) {
            if (!connection.peers[remoteUserId]) {
                if (connection.enableLogs) {
                    console.error('Peer (' + remoteUserId + ') does not exist. Renegotiation skipped.');
                }
                return;
            }

            if (!userPreferences) {
                userPreferences = {};
            }

            userPreferences.renegotiatingPeer = true;
            userPreferences.peerRef = connection.peers[remoteUserId].peer;
            userPreferences.channels = connection.peers[remoteUserId].channels;

            var localConfig = this.getLocalConfig(remoteSdp, remoteUserId, userPreferences);

            connection.peers[remoteUserId] = new PeerInitiator(localConfig);
        };

        this.replaceTrack = function(track, remoteUserId, isVideoTrack) {
            if (!connection.peers[remoteUserId]) {
                throw 'This peer (' + remoteUserId + ') does not exist.';
            }

            var peer = connection.peers[remoteUserId].peer;

            if (!!peer.getSenders && typeof peer.getSenders === 'function' && peer.getSenders().length) {
                peer.getSenders().forEach(function(rtpSender) {
                    if (isVideoTrack && rtpSender.track.kind === 'video') {
                        connection.peers[remoteUserId].peer.lastVideoTrack = rtpSender.track;
                        rtpSender.replaceTrack(track);
                    }

                    if (!isVideoTrack && rtpSender.track.kind === 'audio') {
                        connection.peers[remoteUserId].peer.lastAudioTrack = rtpSender.track;
                        rtpSender.replaceTrack(track);
                    }
                });
                return;
            }

            console.warn('RTPSender.replaceTrack is NOT supported.');
            this.renegotiatePeer(remoteUserId);
        };

        this.onNegotiationNeeded = function(message, remoteUserId) {};
        this.addNegotiatedMessage = function(message, remoteUserId) {
            if (message.type && message.sdp) {
                if (message.type == 'answer') {
                    if (connection.peers[remoteUserId]) {
                        connection.peers[remoteUserId].addRemoteSdp(message);
                    }
                }

                if (message.type == 'offer') {
                    if (message.renegotiatingPeer) {
                        this.renegotiatePeer(remoteUserId, null, message);
                    } else {
                        this.createAnsweringPeer(message, remoteUserId);
                    }
                }

                if (connection.enableLogs) {
                    console.log('Remote peer\'s sdp:', message.sdp);
                }
                return;
            }

            if (message.candidate) {
                if (connection.peers[remoteUserId]) {
                    connection.peers[remoteUserId].addRemoteCandidate(message);
                }

                if (connection.enableLogs) {
                    console.log('Remote peer\'s candidate pairs:', message.candidate);
                }
                return;
            }

            if (message.enableMedia) {
                connection.session = message.userPreferences.session || connection.session;

                if (connection.session.oneway && connection.attachStreams.length) {
                    connection.attachStreams = [];
                }

                if (message.userPreferences.isDataOnly && connection.attachStreams.length) {
                    connection.attachStreams.length = [];
                }

                var streamsToShare = {};
                connection.attachStreams.forEach(function(stream) {
                    streamsToShare[stream.streamid] = {
                        isAudio: !!stream.isAudio,
                        isVideo: !!stream.isVideo,
                        isScreen: !!stream.isScreen
                    };
                });
                message.userPreferences.streamsToShare = streamsToShare;

                self.onNegotiationNeeded({
                    readyForOffer: true,
                    userPreferences: message.userPreferences
                }, remoteUserId);
            }

            if (message.readyForOffer) {
                connection.onReadyForOffer(remoteUserId, message.userPreferences);
            }

            function cb(stream) {
                gumCallback(stream, message, remoteUserId);
            }
        };

        function gumCallback(stream, message, remoteUserId) {
            var streamsToShare = {};
            connection.attachStreams.forEach(function(stream) {
                streamsToShare[stream.streamid] = {
                    isAudio: !!stream.isAudio,
                    isVideo: !!stream.isVideo,
                    isScreen: !!stream.isScreen
                };
            });
            message.userPreferences.streamsToShare = streamsToShare;

            self.onNegotiationNeeded({
                readyForOffer: true,
                userPreferences: message.userPreferences
            }, remoteUserId);
        }

        this.onGettingRemoteMedia = function(stream, remoteUserId) {};
        this.onRemovingRemoteMedia = function(stream, remoteUserId) {};
        this.onGettingLocalMedia = function(localStream) {};
        this.onLocalMediaError = function(error, constraints) {
            connection.onMediaError(error, constraints);
        };

        function initFileBufferReader() {
            connection.fbr = new FileBufferReader();
            connection.fbr.onProgress = function(chunk) {
                connection.onFileProgress(chunk);
            };
            connection.fbr.onBegin = function(file) {
                connection.onFileStart(file);
            };
            connection.fbr.onEnd = function(file) {
                connection.onFileEnd(file);
            };
        }

        this.shareFile = function(file, remoteUserId) {
            initFileBufferReader();

            connection.fbr.readAsArrayBuffer(file, function(uuid) {
                var arrayOfUsers = connection.getAllParticipants();

                if (remoteUserId) {
                    arrayOfUsers = [remoteUserId];
                }

                arrayOfUsers.forEach(function(participant) {
                    connection.fbr.getNextChunk(uuid, function(nextChunk) {
                        connection.peers[participant].channels.forEach(function(channel) {
                            channel.send(nextChunk);
                        });
                    }, participant);
                });
            }, {
                userid: connection.userid,
                // extra: connection.extra,
                chunkSize: DetectRTC.browser.name === 'Firefox' ? 15 * 1000 : connection.chunkSize || 0
            });
        };

        if (true) {
            var textReceiver = new TextReceiver(connection);
        }

        this.onDataChannelMessage = function(message, remoteUserId) {
            textReceiver.receive(JSON.parse(message), remoteUserId, connection.peers[remoteUserId] ? connection.peers[remoteUserId].extra : {});
        };

        this.onDataChannelClosed = function(event, remoteUserId) {
            event.userid = remoteUserId;
            event.extra = connection.peers[remoteUserId] ? connection.peers[remoteUserId].extra : {};
            connection.onclose(event);
        };

        this.onDataChannelError = function(error, remoteUserId) {
            error.userid = remoteUserId;
            event.extra = connection.peers[remoteUserId] ? connection.peers[remoteUserId].extra : {};
            connection.onerror(error);
        };

        this.onDataChannelOpened = function(channel, remoteUserId) {
            // keep last channel only; we are not expecting parallel/channels channels
            if (connection.peers[remoteUserId].channels.length) {
                connection.peers[remoteUserId].channels = [channel];
                return;
            }

            connection.peers[remoteUserId].channels.push(channel);
            connection.onopen({
                userid: remoteUserId,
                extra: connection.peers[remoteUserId] ? connection.peers[remoteUserId].extra : {},
                channel: channel
            });
        };

        this.onPeerStateChanged = function(state) {
            connection.onPeerStateChanged(state);
        };

        this.onNegotiationStarted = function(remoteUserId, states) {};
        this.onNegotiationCompleted = function(remoteUserId, states) {};

        this.getRemoteStreams = function(remoteUserId) {
            remoteUserId = remoteUserId || connection.peers.getAllParticipants()[0];
            return connection.peers[remoteUserId] ? connection.peers[remoteUserId].streams : [];
        };
    }

    'use strict';

    // Last Updated On: 2019-01-10 5:32:55 AM UTC

    // ________________
    // DetectRTC v1.3.9

    // Open-Sourced: https://github.com/muaz-khan/DetectRTC

    // --------------------------------------------------
    // Muaz Khan     - www.MuazKhan.com
    // MIT License   - www.WebRTC-Experiment.com/licence
    // --------------------------------------------------

    (function() {

        var browserFakeUserAgent = 'Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45';

        var isNodejs = typeof process === 'object' && typeof process.versions === 'object' && process.versions.node && /*node-process*/ !process.browser;
        if (isNodejs) {
            var version = process.versions.node.toString().replace('v', '');
            browserFakeUserAgent = 'Nodejs/' + version + ' (NodeOS) AppleWebKit/' + version + ' (KHTML, like Gecko) Nodejs/' + version + ' Nodejs/' + version
        }

        (function(that) {
            if (typeof window !== 'undefined') {
                return;
            }

            if (typeof window === 'undefined' && typeof global !== 'undefined') {
                global.navigator = {
                    userAgent: browserFakeUserAgent,
                    getUserMedia: function() {}
                };

                /*global window:true */
                that.window = global;
            } else if (typeof window === 'undefined') {
                // window = this;
            }

            if (typeof location === 'undefined') {
                /*global location:true */
                that.location = {
                    protocol: 'file:',
                    href: '',
                    hash: ''
                };
            }

            if (typeof screen === 'undefined') {
                /*global screen:true */
                that.screen = {
                    width: 0,
                    height: 0
                };
            }
        })(typeof global !== 'undefined' ? global : window);

        /*global navigator:true */
        var navigator = window.navigator;

        if (typeof navigator !== 'undefined') {
            if (typeof navigator.webkitGetUserMedia !== 'undefined') {
                navigator.getUserMedia = navigator.webkitGetUserMedia;
            }

            if (typeof navigator.mozGetUserMedia !== 'undefined') {
                navigator.getUserMedia = navigator.mozGetUserMedia;
            }
        } else {
            navigator = {
                getUserMedia: function() {},
                userAgent: browserFakeUserAgent
            };
        }

        var isMobileDevice = !!(/Android|webOS|iPhone|iPad|iPod|BB10|BlackBerry|IEMobile|Opera Mini|Mobile|mobile/i.test(navigator.userAgent || ''));

        var isEdge = navigator.userAgent.indexOf('Edge') !== -1 && (!!navigator.msSaveOrOpenBlob || !!navigator.msSaveBlob);

        var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
        var isFirefox = typeof window.InstallTrigger !== 'undefined';
        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        var isChrome = !!window.chrome && !isOpera;
        var isIE = typeof document !== 'undefined' && !!document.documentMode && !isEdge;

        // this one can also be used:
        // https://www.websocket.org/js/stuff.js (DetectBrowser.js)

        function getBrowserInfo() {
            var nVer = navigator.appVersion;
            var nAgt = navigator.userAgent;
            var browserName = navigator.appName;
            var fullVersion = '' + parseFloat(navigator.appVersion);
            var majorVersion = parseInt(navigator.appVersion, 10);
            var nameOffset, verOffset, ix;

            // both and safri and chrome has same userAgent
            if (isSafari && !isChrome && nAgt.indexOf('CriOS') !== -1) {
                isSafari = false;
                isChrome = true;
            }

            // In Opera, the true version is after 'Opera' or after 'Version'
            if (isOpera) {
                browserName = 'Opera';
                try {
                    fullVersion = navigator.userAgent.split('OPR/')[1].split(' ')[0];
                    majorVersion = fullVersion.split('.')[0];
                } catch (e) {
                    fullVersion = '0.0.0.0';
                    majorVersion = 0;
                }
            }
            // In MSIE version <=10, the true version is after 'MSIE' in userAgent
            // In IE 11, look for the string after 'rv:'
            else if (isIE) {
                verOffset = nAgt.indexOf('rv:');
                if (verOffset > 0) { //IE 11
                    fullVersion = nAgt.substring(verOffset + 3);
                } else { //IE 10 or earlier
                    verOffset = nAgt.indexOf('MSIE');
                    fullVersion = nAgt.substring(verOffset + 5);
                }
                browserName = 'IE';
            }
            // In Chrome, the true version is after 'Chrome' 
            else if (isChrome) {
                verOffset = nAgt.indexOf('Chrome');
                browserName = 'Chrome';
                fullVersion = nAgt.substring(verOffset + 7);
            }
            // In Safari, the true version is after 'Safari' or after 'Version' 
            else if (isSafari) {
                verOffset = nAgt.indexOf('Safari');

                browserName = 'Safari';
                fullVersion = nAgt.substring(verOffset + 7);

                if ((verOffset = nAgt.indexOf('Version')) !== -1) {
                    fullVersion = nAgt.substring(verOffset + 8);
                }

                if (navigator.userAgent.indexOf('Version/') !== -1) {
                    fullVersion = navigator.userAgent.split('Version/')[1].split(' ')[0];
                }
            }
            // In Firefox, the true version is after 'Firefox' 
            else if (isFirefox) {
                verOffset = nAgt.indexOf('Firefox');
                browserName = 'Firefox';
                fullVersion = nAgt.substring(verOffset + 8);
            }

            // In most other browsers, 'name/version' is at the end of userAgent 
            else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
                browserName = nAgt.substring(nameOffset, verOffset);
                fullVersion = nAgt.substring(verOffset + 1);

                if (browserName.toLowerCase() === browserName.toUpperCase()) {
                    browserName = navigator.appName;
                }
            }

            if (isEdge) {
                browserName = 'Edge';
                fullVersion = navigator.userAgent.split('Edge/')[1];
                // fullVersion = parseInt(navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)[2], 10).toString();
            }

            // trim the fullVersion string at semicolon/space/bracket if present
            if ((ix = fullVersion.search(/[; \)]/)) !== -1) {
                fullVersion = fullVersion.substring(0, ix);
            }

            majorVersion = parseInt('' + fullVersion, 10);

            if (isNaN(majorVersion)) {
                fullVersion = '' + parseFloat(navigator.appVersion);
                majorVersion = parseInt(navigator.appVersion, 10);
            }

            return {
                fullVersion: fullVersion,
                version: majorVersion,
                name: browserName,
                isPrivateBrowsing: false
            };
        }

        // via: https://gist.github.com/cou929/7973956

        function retry(isDone, next) {
            var currentTrial = 0,
                maxRetry = 50,
                interval = 10,
                isTimeout = false;
            var id = window.setInterval(
                function() {
                    if (isDone()) {
                        window.clearInterval(id);
                        next(isTimeout);
                    }
                    if (currentTrial++ > maxRetry) {
                        window.clearInterval(id);
                        isTimeout = true;
                        next(isTimeout);
                    }
                },
                10
            );
        }

        function isIE10OrLater(userAgent) {
            var ua = userAgent.toLowerCase();
            if (ua.indexOf('msie') === 0 && ua.indexOf('trident') === 0) {
                return false;
            }
            var match = /(?:msie|rv:)\s?([\d\.]+)/.exec(ua);
            if (match && parseInt(match[1], 10) >= 10) {
                return true;
            }
            return false;
        }

        function detectPrivateMode(callback) {
            var isPrivate;

            try {

                if (window.webkitRequestFileSystem) {
                    window.webkitRequestFileSystem(
                        window.TEMPORARY, 1,
                        function() {
                            isPrivate = false;
                        },
                        function(e) {
                            isPrivate = true;
                        }
                    );
                } else if (window.indexedDB && /Firefox/.test(window.navigator.userAgent)) {
                    var db;
                    try {
                        db = window.indexedDB.open('test');
                        db.onerror = function() {
                            return true;
                        };
                    } catch (e) {
                        isPrivate = true;
                    }

                    if (typeof isPrivate === 'undefined') {
                        retry(
                            function isDone() {
                                return db.readyState === 'done' ? true : false;
                            },
                            function next(isTimeout) {
                                if (!isTimeout) {
                                    isPrivate = db.result ? false : true;
                                }
                            }
                        );
                    }
                } else if (isIE10OrLater(window.navigator.userAgent)) {
                    isPrivate = false;
                    try {
                        if (!window.indexedDB) {
                            isPrivate = true;
                        }
                    } catch (e) {
                        isPrivate = true;
                    }
                } else if (window.localStorage && /Safari/.test(window.navigator.userAgent)) {
                    try {
                        window.localStorage.setItem('test', 1);
                    } catch (e) {
                        isPrivate = true;
                    }

                    if (typeof isPrivate === 'undefined') {
                        isPrivate = false;
                        window.localStorage.removeItem('test');
                    }
                }

            } catch (e) {
                isPrivate = false;
            }

            retry(
                function isDone() {
                    return typeof isPrivate !== 'undefined' ? true : false;
                },
                function next(isTimeout) {
                    callback(isPrivate);
                }
            );
        }

        var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry|BB10/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            },
            getOsName: function() {
                var osName = 'Unknown OS';
                if (isMobile.Android()) {
                    osName = 'Android';
                }

                if (isMobile.BlackBerry()) {
                    osName = 'BlackBerry';
                }

                if (isMobile.iOS()) {
                    osName = 'iOS';
                }

                if (isMobile.Opera()) {
                    osName = 'Opera Mini';
                }

                if (isMobile.Windows()) {
                    osName = 'Windows';
                }

                return osName;
            }
        };

        // via: http://jsfiddle.net/ChristianL/AVyND/
        function detectDesktopOS() {
            var unknown = '-';

            var nVer = navigator.appVersion;
            var nAgt = navigator.userAgent;

            var os = unknown;
            var clientStrings = [{
                s: 'Windows 10',
                r: /(Windows 10.0|Windows NT 10.0)/
            }, {
                s: 'Windows 8.1',
                r: /(Windows 8.1|Windows NT 6.3)/
            }, {
                s: 'Windows 8',
                r: /(Windows 8|Windows NT 6.2)/
            }, {
                s: 'Windows 7',
                r: /(Windows 7|Windows NT 6.1)/
            }, {
                s: 'Windows Vista',
                r: /Windows NT 6.0/
            }, {
                s: 'Windows Server 2003',
                r: /Windows NT 5.2/
            }, {
                s: 'Windows XP',
                r: /(Windows NT 5.1|Windows XP)/
            }, {
                s: 'Windows 2000',
                r: /(Windows NT 5.0|Windows 2000)/
            }, {
                s: 'Windows ME',
                r: /(Win 9x 4.90|Windows ME)/
            }, {
                s: 'Windows 98',
                r: /(Windows 98|Win98)/
            }, {
                s: 'Windows 95',
                r: /(Windows 95|Win95|Windows_95)/
            }, {
                s: 'Windows NT 4.0',
                r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
            }, {
                s: 'Windows CE',
                r: /Windows CE/
            }, {
                s: 'Windows 3.11',
                r: /Win16/
            }, {
                s: 'Android',
                r: /Android/
            }, {
                s: 'Open BSD',
                r: /OpenBSD/
            }, {
                s: 'Sun OS',
                r: /SunOS/
            }, {
                s: 'Linux',
                r: /(Linux|X11)/
            }, {
                s: 'iOS',
                r: /(iPhone|iPad|iPod)/
            }, {
                s: 'Mac OS X',
                r: /Mac OS X/
            }, {
                s: 'Mac OS',
                r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
            }, {
                s: 'QNX',
                r: /QNX/
            }, {
                s: 'UNIX',
                r: /UNIX/
            }, {
                s: 'BeOS',
                r: /BeOS/
            }, {
                s: 'OS/2',
                r: /OS\/2/
            }, {
                s: 'Search Bot',
                r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
            }];
            for (var i = 0, cs; cs = clientStrings[i]; i++) {
                if (cs.r.test(nAgt)) {
                    os = cs.s;
                    break;
                }
            }

            var osVersion = unknown;

            if (/Windows/.test(os)) {
                if (/Windows (.*)/.test(os)) {
                    osVersion = /Windows (.*)/.exec(os)[1];
                }
                os = 'Windows';
            }

            switch (os) {
                case 'Mac OS X':
                    if (/Mac OS X (10[\.\_\d]+)/.test(nAgt)) {
                        osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
                    }
                    break;
                case 'Android':
                    if (/Android ([\.\_\d]+)/.test(nAgt)) {
                        osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
                    }
                    break;
                case 'iOS':
                    if (/OS (\d+)_(\d+)_?(\d+)?/.test(nAgt)) {
                        osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                        osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                    }
                    break;
            }

            return {
                osName: os,
                osVersion: osVersion
            };
        }

        var osName = 'Unknown OS';
        var osVersion = 'Unknown OS Version';

        function getAndroidVersion(ua) {
            ua = (ua || navigator.userAgent).toLowerCase();
            var match = ua.match(/android\s([0-9\.]*)/);
            return match ? match[1] : false;
        }

        var osInfo = detectDesktopOS();

        if (osInfo && osInfo.osName && osInfo.osName != '-') {
            osName = osInfo.osName;
            osVersion = osInfo.osVersion;
        } else if (isMobile.any()) {
            osName = isMobile.getOsName();

            if (osName == 'Android') {
                osVersion = getAndroidVersion();
            }
        }

        var isNodejs = typeof process === 'object' && typeof process.versions === 'object' && process.versions.node;

        if (osName === 'Unknown OS' && isNodejs) {
            osName = 'Nodejs';
            osVersion = process.versions.node.toString().replace('v', '');
        }

        var isCanvasSupportsStreamCapturing = false;
        var isVideoSupportsStreamCapturing = false;
        ['captureStream', 'mozCaptureStream', 'webkitCaptureStream'].forEach(function(item) {
            if (typeof document === 'undefined' || typeof document.createElement !== 'function') {
                return;
            }

            if (!isCanvasSupportsStreamCapturing && item in document.createElement('canvas')) {
                isCanvasSupportsStreamCapturing = true;
            }

            if (!isVideoSupportsStreamCapturing && item in document.createElement('video')) {
                isVideoSupportsStreamCapturing = true;
            }
        });

        var regexIpv4Local = /^(192\.168\.|169\.254\.|10\.|172\.(1[6-9]|2\d|3[01]))/,
            regexIpv4 = /([0-9]{1,3}(\.[0-9]{1,3}){3})/,
            regexIpv6 = /[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7}/;

        // via: https://github.com/diafygi/webrtc-ips
        function DetectLocalIPAddress(callback, stream) {
            if (!DetectRTC.isWebRTCSupported) {
                return;
            }

            var isPublic = true,
                isIpv4 = true;
            getIPs(function(ip) {
                if (!ip) {
                    callback(); // Pass nothing to tell that ICE-gathering-ended
                } else if (ip.match(regexIpv4Local)) {
                    isPublic = false;
                    callback('Local: ' + ip, isPublic, isIpv4);
                } else if (ip.match(regexIpv6)) { //via https://ourcodeworld.com/articles/read/257/how-to-get-the-client-ip-address-with-javascript-only
                    isIpv4 = false;
                    callback('Public: ' + ip, isPublic, isIpv4);
                } else {
                    callback('Public: ' + ip, isPublic, isIpv4);
                }
            }, stream);
        }

        function getIPs(callback, stream) {
            if (typeof document === 'undefined' || typeof document.getElementById !== 'function') {
                return;
            }

            var ipDuplicates = {};

            var RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;

            if (!RTCPeerConnection) {
                var iframe = document.getElementById('iframe');
                if (!iframe) {
                    return;
                }
                var win = iframe.contentWindow;
                RTCPeerConnection = win.RTCPeerConnection || win.mozRTCPeerConnection || win.webkitRTCPeerConnection;
            }

            if (!RTCPeerConnection) {
                return;
            }

            var peerConfig = null;

            if (DetectRTC.browser === 'Chrome' && DetectRTC.browser.version < 58) {
                // todo: add support for older Opera
                peerConfig = {
                    optional: [{
                        RtpDataChannels: true
                    }]
                };
            }

            var servers = {
                iceServers: [{
                    urls: 'stun:stun.l.google.com:19302'
                }]
            };

            var pc = new RTCPeerConnection(servers, peerConfig);

            if (stream) {
                if (pc.addStream) {
                    pc.addStream(stream);
                } else if (pc.addTrack && stream.getTracks()[0]) {
                    pc.addTrack(stream.getTracks()[0], stream);
                }
            }

            function handleCandidate(candidate) {
                if (!candidate) {
                    callback(); // Pass nothing to tell that ICE-gathering-ended
                    return;
                }

                var match = regexIpv4.exec(candidate);
                if (!match) {
                    return;
                }
                var ipAddress = match[1];
                var isPublic = (candidate.match(regexIpv4Local)),
                    isIpv4 = true;

                if (ipDuplicates[ipAddress] === undefined) {
                    callback(ipAddress, isPublic, isIpv4);
                }

                ipDuplicates[ipAddress] = true;
            }

            // listen for candidate events
            pc.onicecandidate = function(event) {
                if (event.candidate && event.candidate.candidate) {
                    handleCandidate(event.candidate.candidate);
                } else {
                    handleCandidate(); // Pass nothing to tell that ICE-gathering-ended
                }
            };

            // create data channel
            if (!stream) {
                try {
                    pc.createDataChannel('sctp', {});
                } catch (e) {}
            }

            // create an offer sdp
            if (DetectRTC.isPromisesSupported) {
                pc.createOffer().then(function(result) {
                    pc.setLocalDescription(result).then(afterCreateOffer);
                });
            } else {
                pc.createOffer(function(result) {
                    pc.setLocalDescription(result, afterCreateOffer, function() {});
                }, function() {});
            }

            function afterCreateOffer() {
                var lines = pc.localDescription.sdp.split('\n');

                lines.forEach(function(line) {
                    if (line && line.indexOf('a=candidate:') === 0) {
                        handleCandidate(line);
                    }
                });
            }
        }

        var MediaDevices = [];

        var audioInputDevices = [];
        var audioOutputDevices = [];
        var videoInputDevices = [];

        if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
            // Firefox 38+ seems having support of enumerateDevices
            // Thanks @xdumaine/enumerateDevices
            navigator.enumerateDevices = function(callback) {
                var enumerateDevices = navigator.mediaDevices.enumerateDevices();
                if (enumerateDevices && enumerateDevices.then) {
                    navigator.mediaDevices.enumerateDevices().then(callback).catch(function() {
                        callback([]);
                    });
                } else {
                    callback([]);
                }
            };
        }

        // Media Devices detection
        var canEnumerate = false;

        /*global MediaStreamTrack:true */
        if (typeof MediaStreamTrack !== 'undefined' && 'getSources' in MediaStreamTrack) {
            canEnumerate = true;
        } else if (navigator.mediaDevices && !!navigator.mediaDevices.enumerateDevices) {
            canEnumerate = true;
        }

        var hasMicrophone = false;
        var hasSpeakers = false;
        var hasWebcam = false;

        var isWebsiteHasMicrophonePermissions = false;
        var isWebsiteHasWebcamPermissions = false;

        // http://dev.w3.org/2011/webrtc/editor/getusermedia.html#mediadevices
        function checkDeviceSupport(callback) {
            if (!canEnumerate) {
                if (callback) {
                    callback();
                }
                return;
            }

            if (!navigator.enumerateDevices && window.MediaStreamTrack && window.MediaStreamTrack.getSources) {
                navigator.enumerateDevices = window.MediaStreamTrack.getSources.bind(window.MediaStreamTrack);
            }

            if (!navigator.enumerateDevices && navigator.enumerateDevices) {
                navigator.enumerateDevices = navigator.enumerateDevices.bind(navigator);
            }

            if (!navigator.enumerateDevices) {
                if (callback) {
                    callback();
                }
                return;
            }

            MediaDevices = [];

            audioInputDevices = [];
            audioOutputDevices = [];
            videoInputDevices = [];

            hasMicrophone = false;
            hasSpeakers = false;
            hasWebcam = false;

            isWebsiteHasMicrophonePermissions = false;
            isWebsiteHasWebcamPermissions = false;

            // to prevent duplication
            var alreadyUsedDevices = {};

            navigator.enumerateDevices(function(devices) {
                devices.forEach(function(_device) {
                    var device = {};
                    for (var d in _device) {
                        try {
                            if (typeof _device[d] !== 'function') {
                                device[d] = _device[d];
                            }
                        } catch (e) {}
                    }

                    if (alreadyUsedDevices[device.deviceId + device.label + device.kind]) {
                        return;
                    }

                    // if it is MediaStreamTrack.getSources
                    if (device.kind === 'audio') {
                        device.kind = 'audioinput';
                    }

                    if (device.kind === 'video') {
                        device.kind = 'videoinput';
                    }

                    if (!device.deviceId) {
                        device.deviceId = device.id;
                    }

                    if (!device.id) {
                        device.id = device.deviceId;
                    }

                    if (!device.label) {
                        device.isCustomLabel = true;

                        if (device.kind === 'videoinput') {
                            device.label = 'Camera ' + (videoInputDevices.length + 1);
                        } else if (device.kind === 'audioinput') {
                            device.label = 'Microphone ' + (audioInputDevices.length + 1);
                        } else if (device.kind === 'audiooutput') {
                            device.label = 'Speaker ' + (audioOutputDevices.length + 1);
                        } else {
                            device.label = 'Please invoke getUserMedia once.';
                        }

                        if (typeof DetectRTC !== 'undefined' && DetectRTC.browser.isChrome && DetectRTC.browser.version >= 46 && !/^(https:|chrome-extension:)$/g.test(location.protocol || '')) {
                            if (typeof document !== 'undefined' && typeof document.domain === 'string' && document.domain.search && document.domain.search(/localhost|127.0./g) === -1) {
                                device.label = 'HTTPs is required to get label of this ' + device.kind + ' device.';
                            }
                        }
                    } else {
                        // Firefox on Android still returns empty label
                        if (device.kind === 'videoinput' && !isWebsiteHasWebcamPermissions) {
                            isWebsiteHasWebcamPermissions = true;
                        }

                        if (device.kind === 'audioinput' && !isWebsiteHasMicrophonePermissions) {
                            isWebsiteHasMicrophonePermissions = true;
                        }
                    }

                    if (device.kind === 'audioinput') {
                        hasMicrophone = true;

                        if (audioInputDevices.indexOf(device) === -1) {
                            audioInputDevices.push(device);
                        }
                    }

                    if (device.kind === 'audiooutput') {
                        hasSpeakers = true;

                        if (audioOutputDevices.indexOf(device) === -1) {
                            audioOutputDevices.push(device);
                        }
                    }

                    if (device.kind === 'videoinput') {
                        hasWebcam = true;

                        if (videoInputDevices.indexOf(device) === -1) {
                            videoInputDevices.push(device);
                        }
                    }

                    // there is no 'videoouput' in the spec.
                    MediaDevices.push(device);

                    alreadyUsedDevices[device.deviceId + device.label + device.kind] = device;
                });

                if (typeof DetectRTC !== 'undefined') {
                    // to sync latest outputs
                    DetectRTC.MediaDevices = MediaDevices;
                    DetectRTC.hasMicrophone = hasMicrophone;
                    DetectRTC.hasSpeakers = hasSpeakers;
                    DetectRTC.hasWebcam = hasWebcam;

                    DetectRTC.isWebsiteHasWebcamPermissions = isWebsiteHasWebcamPermissions;
                    DetectRTC.isWebsiteHasMicrophonePermissions = isWebsiteHasMicrophonePermissions;

                    DetectRTC.audioInputDevices = audioInputDevices;
                    DetectRTC.audioOutputDevices = audioOutputDevices;
                    DetectRTC.videoInputDevices = videoInputDevices;
                }

                if (callback) {
                    callback();
                }
            });
        }

        var DetectRTC = window.DetectRTC || {};

        // ----------
        // DetectRTC.browser.name || DetectRTC.browser.version || DetectRTC.browser.fullVersion
        DetectRTC.browser = getBrowserInfo();

        detectPrivateMode(function(isPrivateBrowsing) {
            DetectRTC.browser.isPrivateBrowsing = !!isPrivateBrowsing;
        });

        // DetectRTC.isChrome || DetectRTC.isFirefox || DetectRTC.isEdge
        DetectRTC.browser['is' + DetectRTC.browser.name] = true;

        // -----------
        DetectRTC.osName = osName;
        DetectRTC.osVersion = osVersion;

        var isNodeWebkit = typeof process === 'object' && typeof process.versions === 'object' && process.versions['node-webkit'];

        // --------- Detect if system supports WebRTC 1.0 or WebRTC 1.1.
        var isWebRTCSupported = false;
        ['RTCPeerConnection', 'webkitRTCPeerConnection', 'mozRTCPeerConnection', 'RTCIceGatherer'].forEach(function(item) {
            if (isWebRTCSupported) {
                return;
            }

            if (item in window) {
                isWebRTCSupported = true;
            }
        });
        DetectRTC.isWebRTCSupported = isWebRTCSupported;

        //-------
        DetectRTC.isORTCSupported = typeof RTCIceGatherer !== 'undefined';

        // --------- Detect if system supports screen capturing API
        var isScreenCapturingSupported = false;
        if (DetectRTC.browser.isChrome && DetectRTC.browser.version >= 35) {
            isScreenCapturingSupported = true;
        } else if (DetectRTC.browser.isFirefox && DetectRTC.browser.version >= 34) {
            isScreenCapturingSupported = true;
        } else if (DetectRTC.browser.isEdge && DetectRTC.browser.version >= 17) {
            isScreenCapturingSupported = true; // navigator.getDisplayMedia
        } else if (DetectRTC.osName === 'Android' && DetectRTC.browser.isChrome) {
            isScreenCapturingSupported = true;
        }

        if (!/^(https:|chrome-extension:)$/g.test(location.protocol || '')) {
            var isNonLocalHost = typeof document !== 'undefined' && typeof document.domain === 'string' && document.domain.search && document.domain.search(/localhost|127.0./g) === -1;
            if (isNonLocalHost && (DetectRTC.browser.isChrome || DetectRTC.browser.isEdge || DetectRTC.browser.isOpera)) {
                isScreenCapturingSupported = false;
            } else if (DetectRTC.browser.isFirefox) {
                isScreenCapturingSupported = false;
            }
        }
        DetectRTC.isScreenCapturingSupported = isScreenCapturingSupported;

        // --------- Detect if WebAudio API are supported
        var webAudio = {
            isSupported: false,
            isCreateMediaStreamSourceSupported: false
        };

        ['AudioContext', 'webkitAudioContext', 'mozAudioContext', 'msAudioContext'].forEach(function(item) {
            if (webAudio.isSupported) {
                return;
            }

            if (item in window) {
                webAudio.isSupported = true;

                if (window[item] && 'createMediaStreamSource' in window[item].prototype) {
                    webAudio.isCreateMediaStreamSourceSupported = true;
                }
            }
        });
        DetectRTC.isAudioContextSupported = webAudio.isSupported;
        DetectRTC.isCreateMediaStreamSourceSupported = webAudio.isCreateMediaStreamSourceSupported;

        // ---------- Detect if SCTP/RTP channels are supported.

        var isRtpDataChannelsSupported = false;
        if (DetectRTC.browser.isChrome && DetectRTC.browser.version > 31) {
            isRtpDataChannelsSupported = true;
        }
        DetectRTC.isRtpDataChannelsSupported = isRtpDataChannelsSupported;

        var isSCTPSupportd = false;
        if (DetectRTC.browser.isFirefox && DetectRTC.browser.version > 28) {
            isSCTPSupportd = true;
        } else if (DetectRTC.browser.isChrome && DetectRTC.browser.version > 25) {
            isSCTPSupportd = true;
        } else if (DetectRTC.browser.isOpera && DetectRTC.browser.version >= 11) {
            isSCTPSupportd = true;
        }
        DetectRTC.isSctpDataChannelsSupported = isSCTPSupportd;

        // ---------

        DetectRTC.isMobileDevice = isMobileDevice; // "isMobileDevice" boolean is defined in "getBrowserInfo.js"

        // ------
        var isGetUserMediaSupported = false;
        if (navigator.getUserMedia) {
            isGetUserMediaSupported = true;
        } else if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            isGetUserMediaSupported = true;
        }

        if (DetectRTC.browser.isChrome && DetectRTC.browser.version >= 46 && !/^(https:|chrome-extension:)$/g.test(location.protocol || '')) {
            if (typeof document !== 'undefined' && typeof document.domain === 'string' && document.domain.search && document.domain.search(/localhost|127.0./g) === -1) {
                isGetUserMediaSupported = 'Requires HTTPs';
            }
        }

        if (DetectRTC.osName === 'Nodejs') {
            isGetUserMediaSupported = false;
        }
        DetectRTC.isGetUserMediaSupported = isGetUserMediaSupported;

        var displayResolution = '';
        if (screen.width) {
            var width = (screen.width) ? screen.width : '';
            var height = (screen.height) ? screen.height : '';
            displayResolution += '' + width + ' x ' + height;
        }
        DetectRTC.displayResolution = displayResolution;

        function getAspectRatio(w, h) {
            function gcd(a, b) {
                return (b == 0) ? a : gcd(b, a % b);
            }
            var r = gcd(w, h);
            return (w / r) / (h / r);
        }

        DetectRTC.displayAspectRatio = getAspectRatio(screen.width, screen.height).toFixed(2);

        // ----------
        DetectRTC.isCanvasSupportsStreamCapturing = isCanvasSupportsStreamCapturing;
        DetectRTC.isVideoSupportsStreamCapturing = isVideoSupportsStreamCapturing;

        if (DetectRTC.browser.name == 'Chrome' && DetectRTC.browser.version >= 53) {
            if (!DetectRTC.isCanvasSupportsStreamCapturing) {
                DetectRTC.isCanvasSupportsStreamCapturing = 'Requires chrome flag: enable-experimental-web-platform-features';
            }

            if (!DetectRTC.isVideoSupportsStreamCapturing) {
                DetectRTC.isVideoSupportsStreamCapturing = 'Requires chrome flag: enable-experimental-web-platform-features';
            }
        }

        // ------
        DetectRTC.DetectLocalIPAddress = DetectLocalIPAddress;

        DetectRTC.isWebSocketsSupported = 'WebSocket' in window && 2 === window.WebSocket.CLOSING;
        DetectRTC.isWebSocketsBlocked = !DetectRTC.isWebSocketsSupported;

        if (DetectRTC.osName === 'Nodejs') {
            DetectRTC.isWebSocketsSupported = true;
            DetectRTC.isWebSocketsBlocked = false;
        }

        DetectRTC.checkWebSocketsSupport = function(callback) {
            callback = callback || function() {};
            try {
                var starttime;
                var websocket = new WebSocket('wss://echo.websocket.org:443/');
                websocket.onopen = function() {
                    DetectRTC.isWebSocketsBlocked = false;
                    starttime = (new Date).getTime();
                    websocket.send('ping');
                };
                websocket.onmessage = function() {
                    DetectRTC.WebsocketLatency = (new Date).getTime() - starttime + 'ms';
                    callback();
                    websocket.close();
                    websocket = null;
                };
                websocket.onerror = function() {
                    DetectRTC.isWebSocketsBlocked = true;
                    callback();
                };
            } catch (e) {
                DetectRTC.isWebSocketsBlocked = true;
                callback();
            }
        };

        // -------
        DetectRTC.load = function(callback) {
            callback = callback || function() {};
            checkDeviceSupport(callback);
        };

        // check for microphone/camera support!
        if (typeof checkDeviceSupport === 'function') {
            // checkDeviceSupport();
        }

        if (typeof MediaDevices !== 'undefined') {
            DetectRTC.MediaDevices = MediaDevices;
        } else {
            DetectRTC.MediaDevices = [];
        }

        DetectRTC.hasMicrophone = hasMicrophone;
        DetectRTC.hasSpeakers = hasSpeakers;
        DetectRTC.hasWebcam = hasWebcam;

        DetectRTC.isWebsiteHasWebcamPermissions = isWebsiteHasWebcamPermissions;
        DetectRTC.isWebsiteHasMicrophonePermissions = isWebsiteHasMicrophonePermissions;

        DetectRTC.audioInputDevices = audioInputDevices;
        DetectRTC.audioOutputDevices = audioOutputDevices;
        DetectRTC.videoInputDevices = videoInputDevices;

        // ------
        var isSetSinkIdSupported = false;
        if (typeof document !== 'undefined' && typeof document.createElement === 'function' && 'setSinkId' in document.createElement('video')) {
            isSetSinkIdSupported = true;
        }
        DetectRTC.isSetSinkIdSupported = isSetSinkIdSupported;

        // -----
        var isRTPSenderReplaceTracksSupported = false;
        if (DetectRTC.browser.isFirefox && typeof mozRTCPeerConnection !== 'undefined' /*&& DetectRTC.browser.version > 39*/ ) {
            /*global mozRTCPeerConnection:true */
            if ('getSenders' in mozRTCPeerConnection.prototype) {
                isRTPSenderReplaceTracksSupported = true;
            }
        } else if (DetectRTC.browser.isChrome && typeof webkitRTCPeerConnection !== 'undefined') {
            /*global webkitRTCPeerConnection:true */
            if ('getSenders' in webkitRTCPeerConnection.prototype) {
                isRTPSenderReplaceTracksSupported = true;
            }
        }
        DetectRTC.isRTPSenderReplaceTracksSupported = isRTPSenderReplaceTracksSupported;

        //------
        var isRemoteStreamProcessingSupported = false;
        if (DetectRTC.browser.isFirefox && DetectRTC.browser.version > 38) {
            isRemoteStreamProcessingSupported = true;
        }
        DetectRTC.isRemoteStreamProcessingSupported = isRemoteStreamProcessingSupported;

        //-------
        var isApplyConstraintsSupported = false;

        /*global MediaStreamTrack:true */
        if (typeof MediaStreamTrack !== 'undefined' && 'applyConstraints' in MediaStreamTrack.prototype) {
            isApplyConstraintsSupported = true;
        }
        DetectRTC.isApplyConstraintsSupported = isApplyConstraintsSupported;

        //-------
        var isMultiMonitorScreenCapturingSupported = false;
        if (DetectRTC.browser.isFirefox && DetectRTC.browser.version >= 43) {
            // version 43 merely supports platforms for multi-monitors
            // version 44 will support exact multi-monitor selection i.e. you can select any monitor for screen capturing.
            isMultiMonitorScreenCapturingSupported = true;
        }
        DetectRTC.isMultiMonitorScreenCapturingSupported = isMultiMonitorScreenCapturingSupported;

        DetectRTC.isPromisesSupported = !!('Promise' in window);

        // version is generated by "grunt"
        DetectRTC.version = '1.3.9';

        if (typeof DetectRTC === 'undefined') {
            window.DetectRTC = {};
        }

        var MediaStream = window.MediaStream;

        if (typeof MediaStream === 'undefined' && typeof webkitMediaStream !== 'undefined') {
            MediaStream = webkitMediaStream;
        }

        if (typeof MediaStream !== 'undefined' && typeof MediaStream === 'function') {
            DetectRTC.MediaStream = Object.keys(MediaStream.prototype);
        } else DetectRTC.MediaStream = false;

        if (typeof MediaStreamTrack !== 'undefined') {
            DetectRTC.MediaStreamTrack = Object.keys(MediaStreamTrack.prototype);
        } else DetectRTC.MediaStreamTrack = false;

        var RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;

        if (typeof RTCPeerConnection !== 'undefined') {
            DetectRTC.RTCPeerConnection = Object.keys(RTCPeerConnection.prototype);
        } else DetectRTC.RTCPeerConnection = false;

        window.DetectRTC = DetectRTC;

        if (true /* && !!module.exports*/ ) {
            module.exports = DetectRTC;
        }

        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                return DetectRTC;
            }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        }
    })();

    // globals.js

    if (typeof cordova !== 'undefined') {
        DetectRTC.isMobileDevice = true;
        DetectRTC.browser.name = 'Chrome';
    }

    if (navigator && navigator.userAgent && navigator.userAgent.indexOf('Crosswalk') !== -1) {
        DetectRTC.isMobileDevice = true;
        DetectRTC.browser.name = 'Chrome';
    }

    function fireEvent(obj, eventName, args) {
        if (typeof CustomEvent === 'undefined') {
            return;
        }

        var eventDetail = {
            arguments: args,
            __exposedProps__: args
        };

        var event = new CustomEvent(eventName, eventDetail);
        obj.dispatchEvent(event);
    }

    function setHarkEvents(connection, streamEvent) {
        if (!streamEvent.stream || !getTracks(streamEvent.stream, 'audio').length) return;

        if (!connection || !streamEvent) {
            throw 'Both arguments are required.';
        }

        if (!connection.onspeaking || !connection.onsilence) {
            return;
        }

        if (typeof hark === 'undefined') {
            throw 'hark.js not found.';
        }

        hark(streamEvent.stream, {
            onspeaking: function() {
                connection.onspeaking(streamEvent);
            },
            onsilence: function() {
                connection.onsilence(streamEvent);
            },
            onvolumechange: function(volume, threshold) {
                if (!connection.onvolumechange) {
                    return;
                }
                connection.onvolumechange(merge({
                    volume: volume,
                    threshold: threshold
                }, streamEvent));
            }
        });
    }

    function setMuteHandlers(connection, streamEvent) {
        if (!streamEvent.stream || !streamEvent.stream || !streamEvent.stream.addEventListener) return;

        streamEvent.stream.addEventListener('mute', function(event) {
            event = connection.streamEvents[streamEvent.streamid];

            event.session = {
                audio: event.muteType === 'audio',
                video: event.muteType === 'video'
            };

            connection.onmute(event);
        }, false);

        streamEvent.stream.addEventListener('unmute', function(event) {
            event = connection.streamEvents[streamEvent.streamid];

            event.session = {
                audio: event.unmuteType === 'audio',
                video: event.unmuteType === 'video'
            };

            connection.onunmute(event);
        }, false);
    }

    function getRandomString() {
        if (window.crypto && window.crypto.getRandomValues && navigator.userAgent.indexOf('Safari') === -1) {
            var a = window.crypto.getRandomValues(new Uint32Array(3)),
                token = '';
            for (var i = 0, l = a.length; i < l; i++) {
                token += a[i].toString(36);
            }
            return token;
        } else {
            return (Math.random() * new Date().getTime()).toString(36).replace(/\./g, '');
        }
    }

    // Get HTMLAudioElement/HTMLVideoElement accordingly
    // todo: add API documentation for connection.autoCreateMediaElement

    function getRMCMediaElement(stream, callback, connection) {
        if (!connection.autoCreateMediaElement) {
            callback({});
            return;
        }

        var isAudioOnly = false;
        if (!getTracks(stream, 'video').length && !stream.isVideo && !stream.isScreen) {
            isAudioOnly = true;
        }

        if (DetectRTC.browser.name === 'Firefox') {
            if (connection.session.video || connection.session.screen) {
                isAudioOnly = false;
            }
        }

        var mediaElement = document.createElement(isAudioOnly ? 'audio' : 'video');

        mediaElement.srcObject = stream;

        mediaElement.setAttribute('autoplay', true);
        mediaElement.setAttribute('playsinline', true);
        mediaElement.setAttribute('controls', true);
        mediaElement.setAttribute('muted', false);
        mediaElement.setAttribute('volume', 1);

        // http://goo.gl/WZ5nFl
        // Firefox don't yet support onended for any stream (remote/local)
        if (DetectRTC.browser.name === 'Firefox') {
            var streamEndedEvent = 'ended';

            if ('oninactive' in mediaElement) {
                streamEndedEvent = 'inactive';
            }

            mediaElement.addEventListener(streamEndedEvent, function() {
                // fireEvent(stream, streamEndedEvent, stream);
                currentUserMediaRequest.remove(stream.idInstance);

                if (stream.type === 'local') {
                    streamEndedEvent = 'ended';

                    if ('oninactive' in stream) {
                        streamEndedEvent = 'inactive';
                    }

                    StreamsHandler.onSyncNeeded(stream.streamid, streamEndedEvent);

                    connection.attachStreams.forEach(function(aStream, idx) {
                        if (stream.streamid === aStream.streamid) {
                            delete connection.attachStreams[idx];
                        }
                    });

                    var newStreamsArray = [];
                    connection.attachStreams.forEach(function(aStream) {
                        if (aStream) {
                            newStreamsArray.push(aStream);
                        }
                    });
                    connection.attachStreams = newStreamsArray;

                    var streamEvent = connection.streamEvents[stream.streamid];

                    if (streamEvent) {
                        connection.onstreamended(streamEvent);
                        return;
                    }
                    if (this.parentNode) {
                        this.parentNode.removeChild(this);
                    }
                }
            }, false);
        }

        var played = mediaElement.play();
        if (typeof played !== 'undefined') {
            var cbFired = false;
            setTimeout(function() {
                if (!cbFired) {
                    cbFired = true;
                    callback(mediaElement);
                }
            }, 1000);
            played.then(function() {
                if (cbFired) return;
                cbFired = true;
                callback(mediaElement);
            }).catch(function(error) {
                if (cbFired) return;
                cbFired = true;
                callback(mediaElement);
            });
        } else {
            callback(mediaElement);
        }
    }

    // if IE
    if (!window.addEventListener) {
        window.addEventListener = function(el, eventName, eventHandler) {
            if (!el.attachEvent) {
                return;
            }
            el.attachEvent('on' + eventName, eventHandler);
        };
    }

    function listenEventHandler(eventName, eventHandler) {
        window.removeEventListener(eventName, eventHandler);
        window.addEventListener(eventName, eventHandler, false);
    }

    window.attachEventListener = function(video, type, listener, useCapture) {
        video.addEventListener(type, listener, useCapture);
    };

    function removeNullEntries(array) {
        var newArray = [];
        array.forEach(function(item) {
            if (item) {
                newArray.push(item);
            }
        });
        return newArray;
    }


    function isData(session) {
        return !session.audio && !session.video && !session.screen && session.data;
    }

    function isNull(obj) {
        return typeof obj === 'undefined';
    }

    function isString(obj) {
        return typeof obj === 'string';
    }

    var MediaStream = window.MediaStream;

    if (typeof MediaStream === 'undefined' && typeof webkitMediaStream !== 'undefined') {
        MediaStream = webkitMediaStream;
    }

    /*global MediaStream:true */
    if (typeof MediaStream !== 'undefined') {
        if (!('stop' in MediaStream.prototype)) {
            MediaStream.prototype.stop = function() {
                this.getTracks().forEach(function(track) {
                    track.stop();
                });
            };
        }
    }

    function isAudioPlusTab(connection, audioPlusTab) {
        if (connection.session.audio && connection.session.audio === 'two-way') {
            return false;
        }

        if (DetectRTC.browser.name === 'Firefox' && audioPlusTab !== false) {
            return true;
        }

        if (DetectRTC.browser.name !== 'Chrome' || DetectRTC.browser.version < 50) return false;

        if (typeof audioPlusTab === true) {
            return true;
        }

        if (typeof audioPlusTab === 'undefined' && connection.session.audio && connection.session.screen && !connection.session.video) {
            audioPlusTab = true;
            return true;
        }

        return false;
    }

    function getAudioScreenConstraints(screen_constraints) {
        if (DetectRTC.browser.name === 'Firefox') {
            return true;
        }

        if (DetectRTC.browser.name !== 'Chrome') return false;

        return {
            mandatory: {
                chromeMediaSource: screen_constraints.mandatory.chromeMediaSource,
                chromeMediaSourceId: screen_constraints.mandatory.chromeMediaSourceId
            }
        };
    }

    window.iOSDefaultAudioOutputDevice = window.iOSDefaultAudioOutputDevice || 'speaker'; // earpiece or speaker

    function getTracks(stream, kind) {
        if (!stream || !stream.getTracks) {
            return [];
        }

        return stream.getTracks().filter(function(t) {
            return t.kind === (kind || 'audio');
        });
    }

    function isUnifiedPlanSupportedDefault() {
        var canAddTransceiver = false;

        try {
            if (typeof RTCRtpTransceiver === 'undefined') return false;
            if (!('currentDirection' in RTCRtpTransceiver.prototype)) return false;

            var tempPc = new RTCPeerConnection();

            try {
                tempPc.addTransceiver('audio');
                canAddTransceiver = true;
            } catch (e) {}

            tempPc.close();
        } catch (e) {
            canAddTransceiver = false;
        }

        return canAddTransceiver && isUnifiedPlanSuppored();
    }

    function isUnifiedPlanSuppored() {
        var isUnifiedPlanSupported = false;

        try {
            var pc = new RTCPeerConnection({
                sdpSemantics: 'unified-plan'
            });

            try {
                var config = pc.getConfiguration();
                if (config.sdpSemantics == 'unified-plan')
                    isUnifiedPlanSupported = true;
                else if (config.sdpSemantics == 'plan-b')
                    isUnifiedPlanSupported = false;
                else
                    isUnifiedPlanSupported = false;
            } catch (e) {
                isUnifiedPlanSupported = false;
            }
        } catch (e) {
            isUnifiedPlanSupported = false;
        }

        return isUnifiedPlanSupported;
    }

    // ios-hacks.js

    function setCordovaAPIs() {
        // if (DetectRTC.osName !== 'iOS') return;
        if (typeof cordova === 'undefined' || typeof cordova.plugins === 'undefined' || typeof cordova.plugins.iosrtc === 'undefined') return;

        var iosrtc = cordova.plugins.iosrtc;
        window.webkitRTCPeerConnection = iosrtc.RTCPeerConnection;
        window.RTCSessionDescription = iosrtc.RTCSessionDescription;
        window.RTCIceCandidate = iosrtc.RTCIceCandidate;
        window.MediaStream = iosrtc.MediaStream;
        window.MediaStreamTrack = iosrtc.MediaStreamTrack;
        navigator.getUserMedia = navigator.webkitGetUserMedia = iosrtc.getUserMedia;

        iosrtc.debug.enable('iosrtc*');
        if (typeof iosrtc.selectAudioOutput == 'function') {
            iosrtc.selectAudioOutput(window.iOSDefaultAudioOutputDevice || 'speaker'); // earpiece or speaker
        }
        iosrtc.registerGlobals();
    }

    document.addEventListener('deviceready', setCordovaAPIs, false);
    setCordovaAPIs();

    // RTCPeerConnection.js

    var defaults = {};

    function setSdpConstraints(config) {
        var sdpConstraints = {
            OfferToReceiveAudio: !!config.OfferToReceiveAudio,
            OfferToReceiveVideo: !!config.OfferToReceiveVideo
        };

        return sdpConstraints;
    }

    var RTCPeerConnection;
    if (typeof window.RTCPeerConnection !== 'undefined') {
        RTCPeerConnection = window.RTCPeerConnection;
    } else if (typeof mozRTCPeerConnection !== 'undefined') {
        RTCPeerConnection = mozRTCPeerConnection;
    } else if (typeof webkitRTCPeerConnection !== 'undefined') {
        RTCPeerConnection = webkitRTCPeerConnection;
    }

    var RTCSessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription;
    var RTCIceCandidate = window.RTCIceCandidate || window.mozRTCIceCandidate;
    var MediaStreamTrack = window.MediaStreamTrack;

    function PeerInitiator(config) {
        if (typeof window.RTCPeerConnection !== 'undefined') {
            RTCPeerConnection = window.RTCPeerConnection;
        } else if (typeof mozRTCPeerConnection !== 'undefined') {
            RTCPeerConnection = mozRTCPeerConnection;
        } else if (typeof webkitRTCPeerConnection !== 'undefined') {
            RTCPeerConnection = webkitRTCPeerConnection;
        }

        RTCSessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription;
        RTCIceCandidate = window.RTCIceCandidate || window.mozRTCIceCandidate;
        MediaStreamTrack = window.MediaStreamTrack;

        if (!RTCPeerConnection) {
            throw 'WebRTC 1.0 (RTCPeerConnection) API are NOT available in this browser.';
        }

        var connection = config.rtcMultiConnection;

        this.extra = config.remoteSdp ? config.remoteSdp.extra : connection.extra;
        this.userid = config.userid;
        this.streams = [];
        this.channels = config.channels || [];
        this.connectionDescription = config.connectionDescription;

        this.addStream = function(session) {
            connection.addStream(session, self.userid);
        };

        this.removeStream = function(streamid) {
            connection.removeStream(streamid, self.userid);
        };

        var self = this;

        if (config.remoteSdp) {
            this.connectionDescription = config.remoteSdp.connectionDescription;
        }

        var allRemoteStreams = {};

        defaults.sdpConstraints = setSdpConstraints({
            OfferToReceiveAudio: true,
            OfferToReceiveVideo: true
        });

        var peer;

        var renegotiatingPeer = !!config.renegotiatingPeer;
        if (config.remoteSdp) {
            renegotiatingPeer = !!config.remoteSdp.renegotiatingPeer;
        }

        var localStreams = [];
        connection.attachStreams.forEach(function(stream) {
            if (!!stream) {
                localStreams.push(stream);
            }
        });

        if (!renegotiatingPeer) {
            var iceTransports = 'all';
            if (connection.candidates.turn || connection.candidates.relay) {
                if (!connection.candidates.stun && !connection.candidates.reflexive && !connection.candidates.host) {
                    iceTransports = 'relay';
                }
            }

            try {
                // ref: developer.mozilla.org/en-US/docs/Web/API/RTCConfiguration
                var params = {
                    iceServers: connection.iceServers,
                    iceTransportPolicy: connection.iceTransportPolicy || iceTransports
                };

                if (typeof connection.iceCandidatePoolSize !== 'undefined') {
                    params.iceCandidatePoolSize = connection.iceCandidatePoolSize;
                }

                if (typeof connection.bundlePolicy !== 'undefined') {
                    params.bundlePolicy = connection.bundlePolicy;
                }

                if (typeof connection.rtcpMuxPolicy !== 'undefined') {
                    params.rtcpMuxPolicy = connection.rtcpMuxPolicy;
                }

                if (!!connection.sdpSemantics) {
                    params.sdpSemantics = connection.sdpSemantics || 'unified-plan';
                }

                if (!connection.iceServers || !connection.iceServers.length) {
                    params = null;
                    connection.optionalArgument = null;
                }

                peer = new RTCPeerConnection(params, connection.optionalArgument);
            } catch (e) {
                try {
                    var params = {
                        iceServers: connection.iceServers
                    };

                    peer = new RTCPeerConnection(params);
                } catch (e) {
                    peer = new RTCPeerConnection();
                }
            }
        } else {
            peer = config.peerRef;
        }

        if (!peer.getRemoteStreams && peer.getReceivers) {
            peer.getRemoteStreams = function() {
                var stream = new MediaStream();
                peer.getReceivers().forEach(function(receiver) {
                    stream.addTrack(receiver.track);
                });
                return [stream];
            };
        }

        if (!peer.getLocalStreams && peer.getSenders) {
            peer.getLocalStreams = function() {
                var stream = new MediaStream();
                peer.getSenders().forEach(function(sender) {
                    stream.addTrack(sender.track);
                });
                return [stream];
            };
        }

        peer.onicecandidate = function(event) {
            if (!event.candidate) {
                if (!connection.trickleIce) {
                    var localSdp = peer.localDescription;
                    config.onLocalSdp({
                        type: localSdp.type,
                        sdp: localSdp.sdp,
                        remotePeerSdpConstraints: config.remotePeerSdpConstraints || false,
                        renegotiatingPeer: !!config.renegotiatingPeer || false,
                        connectionDescription: self.connectionDescription,
                        dontGetRemoteStream: !!config.dontGetRemoteStream,
                        extra: connection ? connection.extra : {},
                        streamsToShare: streamsToShare
                    });
                }
                return;
            }

            if (!connection.trickleIce) return;
            config.onLocalCandidate({
                candidate: event.candidate.candidate,
                sdpMid: event.candidate.sdpMid,
                sdpMLineIndex: event.candidate.sdpMLineIndex
            });
        };

        localStreams.forEach(function(localStream) {
            if (config.remoteSdp && config.remoteSdp.remotePeerSdpConstraints && config.remoteSdp.remotePeerSdpConstraints.dontGetRemoteStream) {
                return;
            }

            if (config.dontAttachLocalStream) {
                return;
            }

            localStream = connection.beforeAddingStream(localStream, self);

            if (!localStream) return;

            peer.getLocalStreams().forEach(function(stream) {
                if (localStream && stream.id == localStream.id) {
                    localStream = null;
                }
            });

            if (localStream && localStream.getTracks) {
                localStream.getTracks().forEach(function(track) {
                    try {
                        // last parameter is redundant for unified-plan
                        // starting from chrome version 72
                        peer.addTrack(track, localStream);
                    } catch (e) {}
                });
            }
        });

        peer.oniceconnectionstatechange = peer.onsignalingstatechange = function() {
            var extra = self.extra;
            if (connection.peers[self.userid]) {
                extra = connection.peers[self.userid].extra || extra;
            }

            if (!peer) {
                return;
            }

            config.onPeerStateChanged({
                iceConnectionState: peer.iceConnectionState,
                iceGatheringState: peer.iceGatheringState,
                signalingState: peer.signalingState,
                extra: extra,
                userid: self.userid
            });

            if (peer && peer.iceConnectionState && peer.iceConnectionState.search(/closed|failed/gi) !== -1 && self.streams instanceof Array) {
                self.streams.forEach(function(stream) {
                    var streamEvent = connection.streamEvents[stream.id] || {
                        streamid: stream.id,
                        stream: stream,
                        type: 'remote'
                    };

                    connection.onstreamended(streamEvent);
                });
            }
        };

        var sdpConstraints = {
            OfferToReceiveAudio: !!localStreams.length,
            OfferToReceiveVideo: !!localStreams.length
        };

        if (config.localPeerSdpConstraints) sdpConstraints = config.localPeerSdpConstraints;

        defaults.sdpConstraints = setSdpConstraints(sdpConstraints);

        var streamObject;
        var dontDuplicate = {};

        peer.ontrack = function(event) {
            if (!event || event.type !== 'track') return;

            event.stream = event.streams[event.streams.length - 1];

            if (!event.stream.id) {
                event.stream.id = event.track.id;
            }

            if (dontDuplicate[event.stream.id] && DetectRTC.browser.name !== 'Safari') {
                if (event.track) {
                    event.track.onended = function() { // event.track.onmute = 
                        peer && peer.onremovestream(event);
                    };
                }
                return;
            }

            dontDuplicate[event.stream.id] = event.stream.id;

            var streamsToShare = {};
            if (config.remoteSdp && config.remoteSdp.streamsToShare) {
                streamsToShare = config.remoteSdp.streamsToShare;
            } else if (config.streamsToShare) {
                streamsToShare = config.streamsToShare;
            }

            var streamToShare = streamsToShare[event.stream.id];
            if (streamToShare) {
                event.stream.isAudio = streamToShare.isAudio;
                event.stream.isVideo = streamToShare.isVideo;
                event.stream.isScreen = streamToShare.isScreen;
            } else {
                event.stream.isVideo = !!getTracks(event.stream, 'video').length;
                event.stream.isAudio = !event.stream.isVideo;
                event.stream.isScreen = false;
            }

            event.stream.streamid = event.stream.id;

            allRemoteStreams[event.stream.id] = event.stream;
            config.onRemoteStream(event.stream);

            event.stream.getTracks().forEach(function(track) {
                track.onended = function() { // track.onmute = 
                    peer && peer.onremovestream(event);
                };
            });

            event.stream.onremovetrack = function() {
                peer && peer.onremovestream(event);
            };
        };

        peer.onremovestream = function(event) {
            // this event doesn't works anymore
            event.stream.streamid = event.stream.id;

            if (allRemoteStreams[event.stream.id]) {
                delete allRemoteStreams[event.stream.id];
            }

            config.onRemoteStreamRemoved(event.stream);
        };

        if (typeof peer.removeStream !== 'function') {
            // removeStream backward compatibility
            peer.removeStream = function(stream) {
                stream.getTracks().forEach(function(track) {
                    peer.removeTrack(track, stream);
                });
            };
        }

        this.addRemoteCandidate = function(remoteCandidate) {
            peer.addIceCandidate(new RTCIceCandidate(remoteCandidate));
        };

        function oldAddRemoteSdp(remoteSdp, cb) {
            cb = cb || function() {};

            if (DetectRTC.browser.name !== 'Safari') {
                remoteSdp.sdp = connection.processSdp(remoteSdp.sdp);
            }
            peer.setRemoteDescription(new RTCSessionDescription(remoteSdp), cb, function(error) {
                if (!!connection.enableLogs) {
                    console.error('setRemoteDescription failed', '\n', error, '\n', remoteSdp.sdp);
                }

                cb();
            });
        }

        this.addRemoteSdp = function(remoteSdp, cb) {
            cb = cb || function() {};

            if (DetectRTC.browser.name !== 'Safari') {
                remoteSdp.sdp = connection.processSdp(remoteSdp.sdp);
            }

            peer.setRemoteDescription(new RTCSessionDescription(remoteSdp)).then(cb, function(error) {
                if (!!connection.enableLogs) {
                    console.error('setRemoteDescription failed', '\n', error, '\n', remoteSdp.sdp);
                }

                cb();
            }).catch(function(error) {
                if (!!connection.enableLogs) {
                    console.error('setRemoteDescription failed', '\n', error, '\n', remoteSdp.sdp);
                }

                cb();
            });
        };

        var isOfferer = true;

        if (config.remoteSdp) {
            isOfferer = false;
        }

        this.createDataChannel = function() {
            var channel = peer.createDataChannel('sctp', {});
            setChannelEvents(channel);
        };

        if (connection.session.data === true && !renegotiatingPeer) {
            if (!isOfferer) {
                peer.ondatachannel = function(event) {
                    var channel = event.channel;
                    setChannelEvents(channel);
                };
            } else {
                this.createDataChannel();
            }
        }

        this.enableDisableVideoEncoding = function(enable) {
            var rtcp;
            peer.getSenders().forEach(function(sender) {
                if (!rtcp && sender.track.kind === 'video') {
                    rtcp = sender;
                }
            });

            if (!rtcp || !rtcp.getParameters) return;

            var parameters = rtcp.getParameters();
            parameters.encodings[1] && (parameters.encodings[1].active = !!enable);
            parameters.encodings[2] && (parameters.encodings[2].active = !!enable);
            rtcp.setParameters(parameters);
        };

        if (config.remoteSdp) {
            if (config.remoteSdp.remotePeerSdpConstraints) {
                sdpConstraints = config.remoteSdp.remotePeerSdpConstraints;
            }
            defaults.sdpConstraints = setSdpConstraints(sdpConstraints);
            this.addRemoteSdp(config.remoteSdp, function() {
                createOfferOrAnswer('createAnswer');
            });
        }

        function setChannelEvents(channel) {
            // force ArrayBuffer in Firefox; which uses "Blob" by default.
            channel.binaryType = 'arraybuffer';

            channel.onmessage = function(event) {
                config.onDataChannelMessage(event.data);
            };

            channel.onopen = function() {
                config.onDataChannelOpened(channel);
            };

            channel.onerror = function(error) {
                config.onDataChannelError(error);
            };

            channel.onclose = function(event) {
                config.onDataChannelClosed(event);
            };

            channel.internalSend = channel.send;
            channel.send = function(data) {
                if (channel.readyState !== 'open') {
                    return;
                }

                channel.internalSend(data);
            };

            peer.channel = channel;
        }

        if (connection.session.audio == 'two-way' || connection.session.video == 'two-way' || connection.session.screen == 'two-way') {
            defaults.sdpConstraints = setSdpConstraints({
                OfferToReceiveAudio: connection.session.audio == 'two-way' || (config.remoteSdp && config.remoteSdp.remotePeerSdpConstraints && config.remoteSdp.remotePeerSdpConstraints.OfferToReceiveAudio),
                OfferToReceiveVideo: connection.session.video == 'two-way' || connection.session.screen == 'two-way' || (config.remoteSdp && config.remoteSdp.remotePeerSdpConstraints && config.remoteSdp.remotePeerSdpConstraints.OfferToReceiveAudio)
            });
        }

        var streamsToShare = {};
        peer.getLocalStreams().forEach(function(stream) {
            streamsToShare[stream.streamid] = {
                isAudio: !!stream.isAudio,
                isVideo: !!stream.isVideo,
                isScreen: !!stream.isScreen
            };
        });

        function oldCreateOfferOrAnswer(_method) {
            peer[_method](function(localSdp) {
                if (DetectRTC.browser.name !== 'Safari') {
                    localSdp.sdp = connection.processSdp(localSdp.sdp);
                }
                peer.setLocalDescription(localSdp, function() {
                    if (!connection.trickleIce) return;

                    config.onLocalSdp({
                        type: localSdp.type,
                        sdp: localSdp.sdp,
                        remotePeerSdpConstraints: config.remotePeerSdpConstraints || false,
                        renegotiatingPeer: !!config.renegotiatingPeer || false,
                        connectionDescription: self.connectionDescription,
                        dontGetRemoteStream: !!config.dontGetRemoteStream,
                        extra: connection ? connection.extra : {},
                        streamsToShare: streamsToShare
                    });

                    connection.onSettingLocalDescription(self);
                }, function(error) {
                    if (!!connection.enableLogs) {
                        console.error('setLocalDescription-error', error);
                    }
                });
            }, function(error) {
                if (!!connection.enableLogs) {
                    console.error('sdp-' + _method + '-error', error);
                }
            }, defaults.sdpConstraints);
        }

        function createOfferOrAnswer(_method) {
            peer[_method](defaults.sdpConstraints).then(function(localSdp) {
                if (DetectRTC.browser.name !== 'Safari') {
                    localSdp.sdp = connection.processSdp(localSdp.sdp);
                }
                peer.setLocalDescription(localSdp).then(function() {
                    if (!connection.trickleIce) return;

                    config.onLocalSdp({
                        type: localSdp.type,
                        sdp: localSdp.sdp,
                        remotePeerSdpConstraints: config.remotePeerSdpConstraints || false,
                        renegotiatingPeer: !!config.renegotiatingPeer || false,
                        connectionDescription: self.connectionDescription,
                        dontGetRemoteStream: !!config.dontGetRemoteStream,
                        extra: connection ? connection.extra : {},
                        streamsToShare: streamsToShare
                    });

                    connection.onSettingLocalDescription(self);
                }, function(error) {
                    if (!connection.enableLogs) return;
                    console.error('setLocalDescription error', error);
                });
            }, function(error) {
                if (!!connection.enableLogs) {
                    console.error('sdp-error', error);
                }
            });
        }

        if (isOfferer) {
            createOfferOrAnswer('createOffer');
        }

        peer.nativeClose = peer.close;
        peer.close = function() {
            if (!peer) {
                return;
            }

            try {
                if (peer.nativeClose !== peer.close) {
                    peer.nativeClose();
                }
            } catch (e) {}

            peer = null;
            self.peer = null;
        };

        this.peer = peer;
    }

    // CodecsHandler.js

    var CodecsHandler = (function() {
        function preferCodec(sdp, codecName) {
            var info = splitLines(sdp);

            if (!info.videoCodecNumbers) {
                return sdp;
            }

            if (codecName === 'vp8' && info.vp8LineNumber === info.videoCodecNumbers[0]) {
                return sdp;
            }

            if (codecName === 'vp9' && info.vp9LineNumber === info.videoCodecNumbers[0]) {
                return sdp;
            }

            if (codecName === 'h264' && info.h264LineNumber === info.videoCodecNumbers[0]) {
                return sdp;
            }

            sdp = preferCodecHelper(sdp, codecName, info);

            return sdp;
        }

        function preferCodecHelper(sdp, codec, info, ignore) {
            var preferCodecNumber = '';

            if (codec === 'vp8') {
                if (!info.vp8LineNumber) {
                    return sdp;
                }
                preferCodecNumber = info.vp8LineNumber;
            }

            if (codec === 'vp9') {
                if (!info.vp9LineNumber) {
                    return sdp;
                }
                preferCodecNumber = info.vp9LineNumber;
            }

            if (codec === 'h264') {
                if (!info.h264LineNumber) {
                    return sdp;
                }

                preferCodecNumber = info.h264LineNumber;
            }

            var newLine = info.videoCodecNumbersOriginal.split('SAVPF')[0] + 'SAVPF ';

            var newOrder = [preferCodecNumber];

            if (ignore) {
                newOrder = [];
            }

            info.videoCodecNumbers.forEach(function(codecNumber) {
                if (codecNumber === preferCodecNumber) return;
                newOrder.push(codecNumber);
            });

            newLine += newOrder.join(' ');

            sdp = sdp.replace(info.videoCodecNumbersOriginal, newLine);
            return sdp;
        }

        function splitLines(sdp) {
            var info = {};
            sdp.split('\n').forEach(function(line) {
                if (line.indexOf('m=video') === 0) {
                    info.videoCodecNumbers = [];
                    line.split('SAVPF')[1].split(' ').forEach(function(codecNumber) {
                        codecNumber = codecNumber.trim();
                        if (!codecNumber || !codecNumber.length) return;
                        info.videoCodecNumbers.push(codecNumber);
                        info.videoCodecNumbersOriginal = line;
                    });
                }

                if (line.indexOf('VP8/90000') !== -1 && !info.vp8LineNumber) {
                    info.vp8LineNumber = line.replace('a=rtpmap:', '').split(' ')[0];
                }

                if (line.indexOf('VP9/90000') !== -1 && !info.vp9LineNumber) {
                    info.vp9LineNumber = line.replace('a=rtpmap:', '').split(' ')[0];
                }

                if (line.indexOf('H264/90000') !== -1 && !info.h264LineNumber) {
                    info.h264LineNumber = line.replace('a=rtpmap:', '').split(' ')[0];
                }
            });

            return info;
        }

        function removeVPX(sdp) {
            var info = splitLines(sdp);

            // last parameter below means: ignore these codecs
            sdp = preferCodecHelper(sdp, 'vp9', info, true);
            sdp = preferCodecHelper(sdp, 'vp8', info, true);

            return sdp;
        }

        function disableNACK(sdp) {
            if (!sdp || typeof sdp !== 'string') {
                throw 'Invalid arguments.';
            }

            sdp = sdp.replace('a=rtcp-fb:126 nack\r\n', '');
            sdp = sdp.replace('a=rtcp-fb:126 nack pli\r\n', 'a=rtcp-fb:126 pli\r\n');
            sdp = sdp.replace('a=rtcp-fb:97 nack\r\n', '');
            sdp = sdp.replace('a=rtcp-fb:97 nack pli\r\n', 'a=rtcp-fb:97 pli\r\n');

            return sdp;
        }

        function prioritize(codecMimeType, peer) {
            if (!peer || !peer.getSenders || !peer.getSenders().length) {
                return;
            }

            if (!codecMimeType || typeof codecMimeType !== 'string') {
                throw 'Invalid arguments.';
            }

            peer.getSenders().forEach(function(sender) {
                var params = sender.getParameters();
                for (var i = 0; i < params.codecs.length; i++) {
                    if (params.codecs[i].mimeType == codecMimeType) {
                        params.codecs.unshift(params.codecs.splice(i, 1));
                        break;
                    }
                }
                sender.setParameters(params);
            });
        }

        function removeNonG722(sdp) {
            return sdp.replace(/m=audio ([0-9]+) RTP\/SAVPF ([0-9 ]*)/g, 'm=audio $1 RTP\/SAVPF 9');
        }

        function setBAS(sdp, bandwidth, isScreen) {
            if (!bandwidth) {
                return sdp;
            }

            if (typeof isFirefox !== 'undefined' && isFirefox) {
                return sdp;
            }

            if (isScreen) {
                if (!bandwidth.screen) {
                    console.warn('It seems that you are not using bandwidth for screen. Screen sharing is expected to fail.');
                } else if (bandwidth.screen < 300) {
                    console.warn('It seems that you are using wrong bandwidth value for screen. Screen sharing is expected to fail.');
                }
            }

            // if screen; must use at least 300kbs
            if (bandwidth.screen && isScreen) {
                sdp = sdp.replace(/b=AS([^\r\n]+\r\n)/g, '');
                sdp = sdp.replace(/a=mid:video\r\n/g, 'a=mid:video\r\nb=AS:' + bandwidth.screen + '\r\n');
            }

            // remove existing bandwidth lines
            if (bandwidth.audio || bandwidth.video) {
                sdp = sdp.replace(/b=AS([^\r\n]+\r\n)/g, '');
            }

            if (bandwidth.audio) {
                sdp = sdp.replace(/a=mid:audio\r\n/g, 'a=mid:audio\r\nb=AS:' + bandwidth.audio + '\r\n');
            }

            if (bandwidth.screen) {
                sdp = sdp.replace(/a=mid:video\r\n/g, 'a=mid:video\r\nb=AS:' + bandwidth.screen + '\r\n');
            } else if (bandwidth.video) {
                sdp = sdp.replace(/a=mid:video\r\n/g, 'a=mid:video\r\nb=AS:' + bandwidth.video + '\r\n');
            }

            return sdp;
        }

        // Find the line in sdpLines that starts with |prefix|, and, if specified,
        // contains |substr| (case-insensitive search).
        function findLine(sdpLines, prefix, substr) {
            return findLineInRange(sdpLines, 0, -1, prefix, substr);
        }

        // Find the line in sdpLines[startLine...endLine - 1] that starts with |prefix|
        // and, if specified, contains |substr| (case-insensitive search).
        function findLineInRange(sdpLines, startLine, endLine, prefix, substr) {
            var realEndLine = endLine !== -1 ? endLine : sdpLines.length;
            for (var i = startLine; i < realEndLine; ++i) {
                if (sdpLines[i].indexOf(prefix) === 0) {
                    if (!substr ||
                        sdpLines[i].toLowerCase().indexOf(substr.toLowerCase()) !== -1) {
                        return i;
                    }
                }
            }
            return null;
        }

        // Gets the codec payload type from an a=rtpmap:X line.
        function getCodecPayloadType(sdpLine) {
            var pattern = new RegExp('a=rtpmap:(\\d+) \\w+\\/\\d+');
            var result = sdpLine.match(pattern);
            return (result && result.length === 2) ? result[1] : null;
        }

        function setVideoBitrates(sdp, params) {
            params = params || {};
            var xgoogle_min_bitrate = params.min;
            var xgoogle_max_bitrate = params.max;

            var sdpLines = sdp.split('\r\n');

            // VP8
            var vp8Index = findLine(sdpLines, 'a=rtpmap', 'VP8/90000');
            var vp8Payload;
            if (vp8Index) {
                vp8Payload = getCodecPayloadType(sdpLines[vp8Index]);
            }

            if (!vp8Payload) {
                return sdp;
            }

            var rtxIndex = findLine(sdpLines, 'a=rtpmap', 'rtx/90000');
            var rtxPayload;
            if (rtxIndex) {
                rtxPayload = getCodecPayloadType(sdpLines[rtxIndex]);
            }

            if (!rtxIndex) {
                return sdp;
            }

            var rtxFmtpLineIndex = findLine(sdpLines, 'a=fmtp:' + rtxPayload.toString());
            if (rtxFmtpLineIndex !== null) {
                var appendrtxNext = '\r\n';
                appendrtxNext += 'a=fmtp:' + vp8Payload + ' x-google-min-bitrate=' + (xgoogle_min_bitrate || '228') + '; x-google-max-bitrate=' + (xgoogle_max_bitrate || '228');
                sdpLines[rtxFmtpLineIndex] = sdpLines[rtxFmtpLineIndex].concat(appendrtxNext);
                sdp = sdpLines.join('\r\n');
            }

            return sdp;
        }

        function setOpusAttributes(sdp, params) {
            params = params || {};

            var sdpLines = sdp.split('\r\n');

            // Opus
            var opusIndex = findLine(sdpLines, 'a=rtpmap', 'opus/48000');
            var opusPayload;
            if (opusIndex) {
                opusPayload = getCodecPayloadType(sdpLines[opusIndex]);
            }

            if (!opusPayload) {
                return sdp;
            }

            var opusFmtpLineIndex = findLine(sdpLines, 'a=fmtp:' + opusPayload.toString());
            if (opusFmtpLineIndex === null) {
                return sdp;
            }

            var appendOpusNext = '';
            appendOpusNext += '; stereo=' + (typeof params.stereo != 'undefined' ? params.stereo : '1');
            appendOpusNext += '; sprop-stereo=' + (typeof params['sprop-stereo'] != 'undefined' ? params['sprop-stereo'] : '1');

            if (typeof params.maxaveragebitrate != 'undefined') {
                appendOpusNext += '; maxaveragebitrate=' + (params.maxaveragebitrate || 128 * 1024 * 8);
            }

            if (typeof params.maxplaybackrate != 'undefined') {
                appendOpusNext += '; maxplaybackrate=' + (params.maxplaybackrate || 128 * 1024 * 8);
            }

            if (typeof params.cbr != 'undefined') {
                appendOpusNext += '; cbr=' + (typeof params.cbr != 'undefined' ? params.cbr : '1');
            }

            if (typeof params.useinbandfec != 'undefined') {
                appendOpusNext += '; useinbandfec=' + params.useinbandfec;
            }

            if (typeof params.usedtx != 'undefined') {
                appendOpusNext += '; usedtx=' + params.usedtx;
            }

            if (typeof params.maxptime != 'undefined') {
                appendOpusNext += '\r\na=maxptime:' + params.maxptime;
            }

            sdpLines[opusFmtpLineIndex] = sdpLines[opusFmtpLineIndex].concat(appendOpusNext);

            sdp = sdpLines.join('\r\n');
            return sdp;
        }

        // forceStereoAudio => via webrtcexample.com
        // requires getUserMedia => echoCancellation:false
        function forceStereoAudio(sdp) {
            var sdpLines = sdp.split('\r\n');
            var fmtpLineIndex = null;
            for (var i = 0; i < sdpLines.length; i++) {
                if (sdpLines[i].search('opus/48000') !== -1) {
                    var opusPayload = extractSdp(sdpLines[i], /:(\d+) opus\/48000/i);
                    break;
                }
            }
            for (var i = 0; i < sdpLines.length; i++) {
                if (sdpLines[i].search('a=fmtp') !== -1) {
                    var payload = extractSdp(sdpLines[i], /a=fmtp:(\d+)/);
                    if (payload === opusPayload) {
                        fmtpLineIndex = i;
                        break;
                    }
                }
            }
            if (fmtpLineIndex === null) return sdp;
            sdpLines[fmtpLineIndex] = sdpLines[fmtpLineIndex].concat('; stereo=1; sprop-stereo=1');
            sdp = sdpLines.join('\r\n');
            return sdp;
        }

        return {
            removeVPX: removeVPX,
            disableNACK: disableNACK,
            prioritize: prioritize,
            removeNonG722: removeNonG722,
            setApplicationSpecificBandwidth: function(sdp, bandwidth, isScreen) {
                return setBAS(sdp, bandwidth, isScreen);
            },
            setVideoBitrates: function(sdp, params) {
                return setVideoBitrates(sdp, params);
            },
            setOpusAttributes: function(sdp, params) {
                return setOpusAttributes(sdp, params);
            },
            preferVP9: function(sdp) {
                return preferCodec(sdp, 'vp9');
            },
            preferCodec: preferCodec,
            forceStereoAudio: forceStereoAudio
        };
    })();

    // backward compatibility
    window.BandwidthHandler = CodecsHandler;

    // OnIceCandidateHandler.js

    var OnIceCandidateHandler = (function() {
        function processCandidates(connection, icePair) {
            var candidate = icePair.candidate;

            var iceRestrictions = connection.candidates;
            var stun = iceRestrictions.stun;
            var turn = iceRestrictions.turn;

            if (!isNull(iceRestrictions.reflexive)) {
                stun = iceRestrictions.reflexive;
            }

            if (!isNull(iceRestrictions.relay)) {
                turn = iceRestrictions.relay;
            }

            if (!iceRestrictions.host && !!candidate.match(/typ host/g)) {
                return;
            }

            if (!turn && !!candidate.match(/typ relay/g)) {
                return;
            }

            if (!stun && !!candidate.match(/typ srflx/g)) {
                return;
            }

            var protocol = connection.iceProtocols;

            if (!protocol.udp && !!candidate.match(/ udp /g)) {
                return;
            }

            if (!protocol.tcp && !!candidate.match(/ tcp /g)) {
                return;
            }

            if (connection.enableLogs) {
                console.debug('Your candidate pairs:', candidate);
            }

            return {
                candidate: candidate,
                sdpMid: icePair.sdpMid,
                sdpMLineIndex: icePair.sdpMLineIndex
            };
        }

        return {
            processCandidates: processCandidates
        };
    })();

    // IceServersHandler.js

    var IceServersHandler = (function() {
        function getIceServers(connection) {
            // resiprocate: 3344+4433
            // pions: 7575
            var iceServers = [{
                'urls': [
                    'stun:stun.l.google.com:19302',
                    'stun:stun1.l.google.com:19302',
                    'stun:stun2.l.google.com:19302',
                    'stun:stun.l.google.com:19302?transport=udp',
                ]
            }];

            return iceServers;
        }

        return {
            getIceServers: getIceServers
        };
    })();

    // getUserMediaHandler.js

    function setStreamType(constraints, stream) {
        if (constraints.mandatory && constraints.mandatory.chromeMediaSource) {
            stream.isScreen = true;
        } else if (constraints.mozMediaSource || constraints.mediaSource) {
            stream.isScreen = true;
        } else if (constraints.video) {
            stream.isVideo = true;
        } else if (constraints.audio) {
            stream.isAudio = true;
        }
    }

    // allow users to manage this object (to support re-capturing of screen/etc.)
    window.currentUserMediaRequest = {
        streams: [],
        mutex: false,
        queueRequests: [],
        remove: function(idInstance) {
            this.mutex = false;

            var stream = this.streams[idInstance];
            if (!stream) {
                return;
            }

            stream = stream.stream;

            var options = stream.currentUserMediaRequestOptions;

            if (this.queueRequests.indexOf(options)) {
                delete this.queueRequests[this.queueRequests.indexOf(options)];
                this.queueRequests = removeNullEntries(this.queueRequests);
            }

            this.streams[idInstance].stream = null;
            delete this.streams[idInstance];
        }
    };

    function getUserMediaHandler(options) {
        if (currentUserMediaRequest.mutex === true) {
            currentUserMediaRequest.queueRequests.push(options);
            return;
        }
        currentUserMediaRequest.mutex = true;

        // easy way to match
        var idInstance = JSON.stringify(options.localMediaConstraints);

        function streaming(stream, returnBack) {
            setStreamType(options.localMediaConstraints, stream);

            var streamEndedEvent = 'ended';

            if ('oninactive' in stream) {
                streamEndedEvent = 'inactive';
            }
            stream.addEventListener(streamEndedEvent, function() {
                delete currentUserMediaRequest.streams[idInstance];

                currentUserMediaRequest.mutex = false;
                if (currentUserMediaRequest.queueRequests.indexOf(options)) {
                    delete currentUserMediaRequest.queueRequests[currentUserMediaRequest.queueRequests.indexOf(options)];
                    currentUserMediaRequest.queueRequests = removeNullEntries(currentUserMediaRequest.queueRequests);
                }
            }, false);

            currentUserMediaRequest.streams[idInstance] = {
                stream: stream
            };
            currentUserMediaRequest.mutex = false;

            if (currentUserMediaRequest.queueRequests.length) {
                getUserMediaHandler(currentUserMediaRequest.queueRequests.shift());
            }

            // callback
            options.onGettingLocalMedia(stream, returnBack);
        }

        if (currentUserMediaRequest.streams[idInstance]) {
            streaming(currentUserMediaRequest.streams[idInstance].stream, true);
        } else {
            var isBlackBerry = !!(/BB10|BlackBerry/i.test(navigator.userAgent || ''));
            if (isBlackBerry || typeof navigator.mediaDevices === 'undefined' || typeof navigator.mediaDevices.getUserMedia !== 'function') {
                navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
                navigator.getUserMedia(options.localMediaConstraints, function(stream) {
                    stream.streamid = stream.streamid || stream.id || getRandomString();
                    stream.idInstance = idInstance;
                    streaming(stream);
                }, function(error) {
                    options.onLocalMediaError(error, options.localMediaConstraints);
                });
                return;
            }

            if (typeof navigator.mediaDevices === 'undefined') {
                navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
                var getUserMediaSuccess = function() {};
                var getUserMediaFailure = function() {};

                var getUserMediaStream, getUserMediaError;
                navigator.mediaDevices = {
                    getUserMedia: function(hints) {
                        navigator.getUserMedia(hints, function(getUserMediaSuccess) {
                            getUserMediaSuccess(stream);
                            getUserMediaStream = stream;
                        }, function(error) {
                            getUserMediaFailure(error);
                            getUserMediaError = error;
                        });

                        return {
                            then: function(successCB) {
                                if (getUserMediaStream) {
                                    successCB(getUserMediaStream);
                                    return;
                                }

                                getUserMediaSuccess = successCB;

                                return {
                                    then: function(failureCB) {
                                        if (getUserMediaError) {
                                            failureCB(getUserMediaError);
                                            return;
                                        }

                                        getUserMediaFailure = failureCB;
                                    }
                                }
                            }
                        }
                    }
                };
            }

            if (options.localMediaConstraints.isScreen === true) {
                if (navigator.mediaDevices.getDisplayMedia) {
                    navigator.mediaDevices.getDisplayMedia(options.localMediaConstraints).then(function(stream) {
                        stream.streamid = stream.streamid || stream.id || getRandomString();
                        stream.idInstance = idInstance;

                        streaming(stream);
                    }).catch(function(error) {
                        options.onLocalMediaError(error, options.localMediaConstraints);
                    });
                } else if (navigator.getDisplayMedia) {
                    navigator.getDisplayMedia(options.localMediaConstraints).then(function(stream) {
                        stream.streamid = stream.streamid || stream.id || getRandomString();
                        stream.idInstance = idInstance;

                        streaming(stream);
                    }).catch(function(error) {
                        options.onLocalMediaError(error, options.localMediaConstraints);
                    });
                } else {
                    throw new Error('getDisplayMedia API is not availabe in this browser.');
                }
                return;
            }

            navigator.mediaDevices.getUserMedia(options.localMediaConstraints).then(function(stream) {
                stream.streamid = stream.streamid || stream.id || getRandomString();
                stream.idInstance = idInstance;

                streaming(stream);
            }).catch(function(error) {
                options.onLocalMediaError(error, options.localMediaConstraints);
            });
        }
    }

    // StreamsHandler.js

    var StreamsHandler = (function() {
        function handleType(type) {
            if (!type) {
                return;
            }

            if (typeof type === 'string' || typeof type === 'undefined') {
                return type;
            }

            if (type.audio && type.video) {
                return null;
            }

            if (type.audio) {
                return 'audio';
            }

            if (type.video) {
                return 'video';
            }

            return;
        }

        function setHandlers(stream, syncAction, connection) {
            if (!stream || !stream.addEventListener) return;

            if (typeof syncAction == 'undefined' || syncAction == true) {
                var streamEndedEvent = 'ended';

                if ('oninactive' in stream) {
                    streamEndedEvent = 'inactive';
                }

                stream.addEventListener(streamEndedEvent, function() {
                    StreamsHandler.onSyncNeeded(this.streamid, streamEndedEvent);
                }, false);
            }

            stream.mute = function(type, isSyncAction) {
                type = handleType(type);

                if (typeof isSyncAction !== 'undefined') {
                    syncAction = isSyncAction;
                }

                if (typeof type == 'undefined' || type == 'audio') {
                    getTracks(stream, 'audio').forEach(function(track) {
                        track.enabled = false;
                        connection.streamEvents[stream.streamid].isAudioMuted = true;
                    });
                }

                if (typeof type == 'undefined' || type == 'video') {
                    getTracks(stream, 'video').forEach(function(track) {
                        track.enabled = false;
                    });
                }

                if (typeof syncAction == 'undefined' || syncAction == true) {
                    StreamsHandler.onSyncNeeded(stream.streamid, 'mute', type);
                }

                connection.streamEvents[stream.streamid].muteType = type || 'both';

                fireEvent(stream, 'mute', type);
            };

            stream.unmute = function(type, isSyncAction) {
                type = handleType(type);

                if (typeof isSyncAction !== 'undefined') {
                    syncAction = isSyncAction;
                }

                graduallyIncreaseVolume();

                if (typeof type == 'undefined' || type == 'audio') {
                    getTracks(stream, 'audio').forEach(function(track) {
                        track.enabled = true;
                        connection.streamEvents[stream.streamid].isAudioMuted = false;
                    });
                }

                if (typeof type == 'undefined' || type == 'video') {
                    getTracks(stream, 'video').forEach(function(track) {
                        track.enabled = true;
                    });

                    // make sure that video unmute doesn't affects audio
                    if (typeof type !== 'undefined' && type == 'video' && connection.streamEvents[stream.streamid].isAudioMuted) {
                        (function looper(times) {
                            if (!times) {
                                times = 0;
                            }

                            times++;

                            // check until five-seconds
                            if (times < 100 && connection.streamEvents[stream.streamid].isAudioMuted) {
                                stream.mute('audio');

                                setTimeout(function() {
                                    looper(times);
                                }, 50);
                            }
                        })();
                    }
                }

                if (typeof syncAction == 'undefined' || syncAction == true) {
                    StreamsHandler.onSyncNeeded(stream.streamid, 'unmute', type);
                }

                connection.streamEvents[stream.streamid].unmuteType = type || 'both';

                fireEvent(stream, 'unmute', type);
            };

            function graduallyIncreaseVolume() {
                if (!connection.streamEvents[stream.streamid].mediaElement) {
                    return;
                }

                var mediaElement = connection.streamEvents[stream.streamid].mediaElement;
                mediaElement.volume = 0;
                afterEach(200, 5, function() {
                    try {
                        mediaElement.volume += .20;
                    } catch (e) {
                        mediaElement.volume = 1;
                    }
                });
            }
        }

        function afterEach(setTimeoutInteval, numberOfTimes, callback, startedTimes) {
            startedTimes = (startedTimes || 0) + 1;
            if (startedTimes >= numberOfTimes) return;

            setTimeout(function() {
                callback();
                afterEach(setTimeoutInteval, numberOfTimes, callback, startedTimes);
            }, setTimeoutInteval);
        }

        return {
            setHandlers: setHandlers,
            onSyncNeeded: function(streamid, action, type) {}
        };
    })();

    // TextReceiver.js & TextSender.js

    function TextReceiver(connection) {
        var content = {};

        function receive(data, userid, extra) {
            // uuid is used to uniquely identify sending instance
            var uuid = data.uuid;
            if (!content[uuid]) {
                content[uuid] = [];
            }

            content[uuid].push(data.message);

            if (data.last) {
                var message = content[uuid].join('');
                if (data.isobject) {
                    message = JSON.parse(message);
                }

                // latency detection
                var receivingTime = new Date().getTime();
                var latency = receivingTime - data.sendingTime;

                var e = {
                    data: message,
                    userid: userid,
                    extra: extra,
                    latency: latency
                };

                if (connection.autoTranslateText) {
                    e.original = e.data;
                    connection.Translator.TranslateText(e.data, function(translatedText) {
                        e.data = translatedText;
                        connection.onmessage(e);
                    });
                } else {
                    connection.onmessage(e);
                }

                delete content[uuid];
            }
        }

        return {
            receive: receive
        };
    }

    // TextSender.js
    var TextSender = {
        send: function(config) {
            var connection = config.connection;

            var channel = config.channel,
                remoteUserId = config.remoteUserId,
                initialText = config.text,
                packetSize = connection.chunkSize || 1000,
                textToTransfer = '',
                isobject = false;

            if (!isString(initialText)) {
                isobject = true;
                initialText = JSON.stringify(initialText);
            }

            // uuid is used to uniquely identify sending instance
            var uuid = getRandomString();
            var sendingTime = new Date().getTime();

            sendText(initialText);

            function sendText(textMessage, text) {
                var data = {
                    type: 'text',
                    uuid: uuid,
                    sendingTime: sendingTime
                };

                if (textMessage) {
                    text = textMessage;
                    data.packets = parseInt(text.length / packetSize);
                }

                if (text.length > packetSize) {
                    data.message = text.slice(0, packetSize);
                } else {
                    data.message = text;
                    data.last = true;
                    data.isobject = isobject;
                }

                channel.send(data, remoteUserId);

                textToTransfer = text.slice(data.message.length);

                if (textToTransfer.length) {
                    setTimeout(function() {
                        sendText(null, textToTransfer);
                    }, connection.chunkInterval || 100);
                }
            }
        }
    };

    // FileProgressBarHandler.js

    var FileProgressBarHandler = (function() {
        function handle(connection) {
            var progressHelper = {};

            // www.RTCMultiConnection.org/docs/onFileStart/
            connection.onFileStart = function(file) {
                var div = document.createElement('div');
                div.title = file.name;
                div.innerHTML = '<label>0%</label> <progress></progress>';

                if (file.remoteUserId) {
                    div.innerHTML += ' (Sharing with:' + file.remoteUserId + ')';
                }

                if (!connection.filesContainer) {
                    connection.filesContainer = document.body || document.documentElement;
                }

                connection.filesContainer.insertBefore(div, connection.filesContainer.firstChild);

                if (!file.remoteUserId) {
                    progressHelper[file.uuid] = {
                        div: div,
                        progress: div.querySelector('progress'),
                        label: div.querySelector('label')
                    };
                    progressHelper[file.uuid].progress.max = file.maxChunks;
                    return;
                }

                if (!progressHelper[file.uuid]) {
                    progressHelper[file.uuid] = {};
                }

                progressHelper[file.uuid][file.remoteUserId] = {
                    div: div,
                    progress: div.querySelector('progress'),
                    label: div.querySelector('label')
                };
                progressHelper[file.uuid][file.remoteUserId].progress.max = file.maxChunks;
            };

            // www.RTCMultiConnection.org/docs/onFileProgress/
            connection.onFileProgress = function(chunk) {
                var helper = progressHelper[chunk.uuid];
                if (!helper) {
                    return;
                }
                if (chunk.remoteUserId) {
                    helper = progressHelper[chunk.uuid][chunk.remoteUserId];
                    if (!helper) {
                        return;
                    }
                }

                helper.progress.value = chunk.currentPosition || chunk.maxChunks || helper.progress.max;
                updateLabel(helper.progress, helper.label);
            };

            // www.RTCMultiConnection.org/docs/onFileEnd/
            connection.onFileEnd = function(file) {
                var helper = progressHelper[file.uuid];
                if (!helper) {
                    console.error('No such progress-helper element exist.', file);
                    return;
                }

                if (file.remoteUserId) {
                    helper = progressHelper[file.uuid][file.remoteUserId];
                    if (!helper) {
                        return;
                    }
                }

                var div = helper.div;
                if (file.type.indexOf('image') != -1) {
                    div.innerHTML = '<a href="' + file.url + '" download="' + file.name + '">Download <strong style="color:red;">' + file.name + '</strong> </a><br /><img src="' + file.url + '" title="' + file.name + '" style="max-width: 80%;">';
                } else {
                    div.innerHTML = '<a href="' + file.url + '" download="' + file.name + '">Download <strong style="color:red;">' + file.name + '</strong> </a><br /><iframe src="' + file.url + '" title="' + file.name + '" style="width: 80%;border: 0;height: inherit;margin-top:1em;"></iframe>';
                }
            };

            function updateLabel(progress, label) {
                if (progress.position === -1) {
                    return;
                }

                var position = +progress.position.toFixed(2).split('.')[1] || 100;
                label.innerHTML = position + '%';
            }
        }

        return {
            handle: handle
        };
    })();

    // TranslationHandler.js

    var TranslationHandler = (function() {
        function handle(connection) {
            connection.autoTranslateText = false;
            connection.language = 'en';
            connection.googKey = 'AIzaSyCgB5hmFY74WYB-EoWkhr9cAGr6TiTHrEE';

            // www.RTCMultiConnection.org/docs/Translator/
            connection.Translator = {
                TranslateText: function(text, callback) {
                    // if(location.protocol === 'https:') return callback(text);

                    var newScript = document.createElement('script');
                    newScript.type = 'text/javascript';

                    var sourceText = encodeURIComponent(text); // escape

                    var randomNumber = 'method' + connection.token();
                    window[randomNumber] = function(response) {
                        if (response.data && response.data.translations[0] && callback) {
                            callback(response.data.translations[0].translatedText);
                            return;
                        }

                        if (response.error && response.error.message === 'Daily Limit Exceeded') {
                            console.error('Text translation failed. Error message: "Daily Limit Exceeded."');
                            return;
                        }

                        if (response.error) {
                            console.error(response.error.message);
                            return;
                        }

                        console.error(response);
                    };

                    var source = 'https://www.googleapis.com/language/translate/v2?key=' + connection.googKey + '&target=' + (connection.language || 'en-US') + '&callback=window.' + randomNumber + '&q=' + sourceText;
                    newScript.src = source;
                    document.getElementsByTagName('head')[0].appendChild(newScript);
                },
                getListOfLanguages: function(callback) {
                    var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange = function() {
                        if (xhr.readyState == XMLHttpRequest.DONE) {
                            var response = JSON.parse(xhr.responseText);

                            if (response && response.data && response.data.languages) {
                                callback(response.data.languages);
                                return;
                            }

                            if (response.error && response.error.message === 'Daily Limit Exceeded') {
                                console.error('Text translation failed. Error message: "Daily Limit Exceeded."');
                                return;
                            }

                            if (response.error) {
                                console.error(response.error.message);
                                return;
                            }

                            console.error(response);
                        }
                    }
                    var url = 'https://www.googleapis.com/language/translate/v2/languages?key=' + connection.googKey + '&target=en';
                    xhr.open('GET', url, true);
                    xhr.send(null);
                }
            };
        }

        return {
            handle: handle
        };
    })();

    // _____________________
    // RTCMultiConnection.js

    (function(connection) {
        forceOptions = forceOptions || {
            useDefaultDevices: true
        };

        connection.channel = connection.sessionid = (roomid || location.href.replace(/\/|:|#|\?|\$|\^|%|\.|`|~|!|\+|@|\[|\||]|\|*. /g, '').split('\n').join('').split('\r').join('')) + '';

        var mPeer = new MultiPeers(connection);

        var preventDuplicateOnStreamEvents = {};
        mPeer.onGettingLocalMedia = function(stream, callback) {
            callback = callback || function() {};

            if (preventDuplicateOnStreamEvents[stream.streamid]) {
                callback();
                return;
            }
            preventDuplicateOnStreamEvents[stream.streamid] = true;

            try {
                stream.type = 'local';
            } catch (e) {}

            connection.setStreamEndHandler(stream);

            getRMCMediaElement(stream, function(mediaElement) {
                mediaElement.id = stream.streamid;
                mediaElement.muted = true;
                mediaElement.volume = 0;

                if (connection.attachStreams.indexOf(stream) === -1) {
                    connection.attachStreams.push(stream);
                }

                if (typeof StreamsHandler !== 'undefined') {
                    StreamsHandler.setHandlers(stream, true, connection);
                }

                connection.streamEvents[stream.streamid] = {
                    stream: stream,
                    type: 'local',
                    mediaElement: mediaElement,
                    userid: connection.userid,
                    extra: connection.extra,
                    streamid: stream.streamid,
                    isAudioMuted: true
                };

                try {
                    setHarkEvents(connection, connection.streamEvents[stream.streamid]);
                    setMuteHandlers(connection, connection.streamEvents[stream.streamid]);

                    connection.onstream(connection.streamEvents[stream.streamid]);
                } catch (e) {
                    //
                }

                callback();
            }, connection);
        };

        mPeer.onGettingRemoteMedia = function(stream, remoteUserId) {
            try {
                stream.type = 'remote';
            } catch (e) {}

            connection.setStreamEndHandler(stream, 'remote-stream');

            getRMCMediaElement(stream, function(mediaElement) {
                mediaElement.id = stream.streamid;

                if (typeof StreamsHandler !== 'undefined') {
                    StreamsHandler.setHandlers(stream, false, connection);
                }

                connection.streamEvents[stream.streamid] = {
                    stream: stream,
                    type: 'remote',
                    userid: remoteUserId,
                    extra: connection.peers[remoteUserId] ? connection.peers[remoteUserId].extra : {},
                    mediaElement: mediaElement,
                    streamid: stream.streamid
                };

                setMuteHandlers(connection, connection.streamEvents[stream.streamid]);

                connection.onstream(connection.streamEvents[stream.streamid]);
            }, connection);
        };

        mPeer.onRemovingRemoteMedia = function(stream, remoteUserId) {
            var streamEvent = connection.streamEvents[stream.streamid];
            if (!streamEvent) {
                streamEvent = {
                    stream: stream,
                    type: 'remote',
                    userid: remoteUserId,
                    extra: connection.peers[remoteUserId] ? connection.peers[remoteUserId].extra : {},
                    streamid: stream.streamid,
                    mediaElement: connection.streamEvents[stream.streamid] ? connection.streamEvents[stream.streamid].mediaElement : null
                };
            }

            if (connection.peersBackup[streamEvent.userid]) {
                streamEvent.extra = connection.peersBackup[streamEvent.userid].extra;
            }

            connection.onstreamended(streamEvent);

            delete connection.streamEvents[stream.streamid];
        };

        mPeer.onNegotiationNeeded = function(message, remoteUserId, callback) {
            callback = callback || function() {};

            remoteUserId = remoteUserId || message.remoteUserId;
            message = message || '';

            // usually a message looks like this
            var messageToDeliver = {
                remoteUserId: remoteUserId,
                message: message,
                sender: connection.userid
            };

            if (message.remoteUserId && message.message && message.sender) {
                // if a code is manually passing required data
                messageToDeliver = message;
            }

            connectSocket(function() {
                connection.socket.emit(connection.socketMessageEvent, messageToDeliver, callback);
            });
        };

        function onUserLeft(remoteUserId) {
            connection.deletePeer(remoteUserId);
        }

        mPeer.onUserLeft = onUserLeft;
        mPeer.disconnectWith = function(remoteUserId, callback) {
            if (connection.socket) {
                connection.socket.emit('disconnect-with', remoteUserId, callback || function() {});
            }

            connection.deletePeer(remoteUserId);
        };

        connection.socketOptions = {
            // 'force new connection': true, // For SocketIO version < 1.0
            // 'forceNew': true, // For SocketIO version >= 1.0
            'transport': 'polling' // fixing transport:unknown issues
        };

        function connectSocket(connectCallback) {
            connection.socketAutoReConnect = true;

            if (connection.socket) { // todo: check here readySate/etc. to make sure socket is still opened
                if (connectCallback) {
                    connectCallback(connection.socket);
                }
                return;
            }

            if (typeof SocketConnection === 'undefined') {
                if (typeof FirebaseConnection !== 'undefined') {
                    window.SocketConnection = FirebaseConnection;
                } else if (typeof PubNubConnection !== 'undefined') {
                    window.SocketConnection = PubNubConnection;
                } else {
                    throw 'SocketConnection.js seems missed.';
                }
            }

            new SocketConnection(connection, function(s) {
                if (connectCallback) {
                    connectCallback(connection.socket);
                }
            });
        }

        // 1st paramter is roomid
        // 2rd paramter is a callback function
        connection.openOrJoin = function(roomid, callback) {
            callback = callback || function() {};

            connection.checkPresence(roomid, function(isRoomExist, roomid) {
                if (isRoomExist) {
                    connection.sessionid = roomid;

                    var localPeerSdpConstraints = false;
                    var remotePeerSdpConstraints = false;
                    var isOneWay = !!connection.session.oneway;
                    var isDataOnly = isData(connection.session);

                    remotePeerSdpConstraints = {
                        OfferToReceiveAudio: connection.sdpConstraints.mandatory.OfferToReceiveAudio,
                        OfferToReceiveVideo: connection.sdpConstraints.mandatory.OfferToReceiveVideo
                    }

                    localPeerSdpConstraints = {
                        OfferToReceiveAudio: isOneWay ? !!connection.session.audio : connection.sdpConstraints.mandatory.OfferToReceiveAudio,
                        OfferToReceiveVideo: isOneWay ? !!connection.session.video || !!connection.session.screen : connection.sdpConstraints.mandatory.OfferToReceiveVideo
                    }

                    var connectionDescription = {
                        remoteUserId: connection.sessionid,
                        message: {
                            newParticipationRequest: true,
                            isOneWay: isOneWay,
                            isDataOnly: isDataOnly,
                            localPeerSdpConstraints: localPeerSdpConstraints,
                            remotePeerSdpConstraints: remotePeerSdpConstraints
                        },
                        sender: connection.userid
                    };

                    beforeJoin(connectionDescription.message, function() {
                        joinRoom(connectionDescription, callback);
                    });
                    return;
                }

                connection.waitingForLocalMedia = true;
                connection.isInitiator = true;

                connection.sessionid = roomid || connection.sessionid;

                if (isData(connection.session)) {
                    openRoom(callback);
                    return;
                }

                connection.captureUserMedia(function() {
                    openRoom(callback);
                });
            });
        };

        // don't allow someone to join this person until he has the media
        connection.waitingForLocalMedia = false;

        connection.open = function(roomid, callback) {
            callback = callback || function() {};

            connection.waitingForLocalMedia = true;
            connection.isInitiator = true;

            connection.sessionid = roomid || connection.sessionid;

            connectSocket(function() {
                if (isData(connection.session)) {
                    openRoom(callback);
                    return;
                }

                connection.captureUserMedia(function() {
                    openRoom(callback);
                });
            });
        };

        // this object keeps extra-data records for all connected users
        // this object is never cleared so you can always access extra-data even if a user left
        connection.peersBackup = {};

        connection.deletePeer = function(remoteUserId) {
            if (!remoteUserId || !connection.peers[remoteUserId]) {
                return;
            }

            var eventObject = {
                userid: remoteUserId,
                extra: connection.peers[remoteUserId] ? connection.peers[remoteUserId].extra : {}
            };

            if (connection.peersBackup[eventObject.userid]) {
                eventObject.extra = connection.peersBackup[eventObject.userid].extra;
            }

            connection.onleave(eventObject);

            if (!!connection.peers[remoteUserId]) {
                connection.peers[remoteUserId].streams.forEach(function(stream) {
                    stream.stop();
                });

                var peer = connection.peers[remoteUserId].peer;
                if (peer && peer.iceConnectionState !== 'closed') {
                    try {
                        peer.close();
                    } catch (e) {}
                }

                if (connection.peers[remoteUserId]) {
                    connection.peers[remoteUserId].peer = null;
                    delete connection.peers[remoteUserId];
                }
            }
        }

        connection.rejoin = function(connectionDescription) {
            if (connection.isInitiator || !connectionDescription || !Object.keys(connectionDescription).length) {
                return;
            }

            var extra = {};

            if (connection.peers[connectionDescription.remoteUserId]) {
                extra = connection.peers[connectionDescription.remoteUserId].extra;
                connection.deletePeer(connectionDescription.remoteUserId);
            }

            if (connectionDescription && connectionDescription.remoteUserId) {
                connection.join(connectionDescription.remoteUserId);

                connection.onReConnecting({
                    userid: connectionDescription.remoteUserId,
                    extra: extra
                });
            }
        };

        connection.join = function(remoteUserId, options) {
            connection.sessionid = (remoteUserId ? remoteUserId.sessionid || remoteUserId.remoteUserId || remoteUserId : false) || connection.sessionid;
            connection.sessionid += '';

            var localPeerSdpConstraints = false;
            var remotePeerSdpConstraints = false;
            var isOneWay = false;
            var isDataOnly = false;

            if ((remoteUserId && remoteUserId.session) || !remoteUserId || typeof remoteUserId === 'string') {
                var session = remoteUserId ? remoteUserId.session || connection.session : connection.session;

                isOneWay = !!session.oneway;
                isDataOnly = isData(session);

                remotePeerSdpConstraints = {
                    OfferToReceiveAudio: connection.sdpConstraints.mandatory.OfferToReceiveAudio,
                    OfferToReceiveVideo: connection.sdpConstraints.mandatory.OfferToReceiveVideo
                };

                localPeerSdpConstraints = {
                    OfferToReceiveAudio: isOneWay ? !!connection.session.audio : connection.sdpConstraints.mandatory.OfferToReceiveAudio,
                    OfferToReceiveVideo: isOneWay ? !!connection.session.video || !!connection.session.screen : connection.sdpConstraints.mandatory.OfferToReceiveVideo
                };
            }

            options = options || {};

            var cb = function() {};
            if (typeof options === 'function') {
                cb = options;
                options = {};
            }

            if (typeof options.localPeerSdpConstraints !== 'undefined') {
                localPeerSdpConstraints = options.localPeerSdpConstraints;
            }

            if (typeof options.remotePeerSdpConstraints !== 'undefined') {
                remotePeerSdpConstraints = options.remotePeerSdpConstraints;
            }

            if (typeof options.isOneWay !== 'undefined') {
                isOneWay = options.isOneWay;
            }

            if (typeof options.isDataOnly !== 'undefined') {
                isDataOnly = options.isDataOnly;
            }

            var connectionDescription = {
                remoteUserId: connection.sessionid,
                message: {
                    newParticipationRequest: true,
                    isOneWay: isOneWay,
                    isDataOnly: isDataOnly,
                    localPeerSdpConstraints: localPeerSdpConstraints,
                    remotePeerSdpConstraints: remotePeerSdpConstraints
                },
                sender: connection.userid
            };

            beforeJoin(connectionDescription.message, function() {
                connectSocket(function() {
                    joinRoom(connectionDescription, cb);
                });
            });
            return connectionDescription;
        };

        function joinRoom(connectionDescription, cb) {
            connection.socket.emit('join-room', {
                sessionid: connection.sessionid,
                session: connection.session,
                mediaConstraints: connection.mediaConstraints,
                sdpConstraints: connection.sdpConstraints,
                streams: getStreamInfoForAdmin(),
                extra: connection.extra,
                password: typeof connection.password !== 'undefined' && typeof connection.password !== 'object' ? connection.password : ''
            }, function(isRoomJoined, error) {
                if (isRoomJoined === true) {
                    if (connection.enableLogs) {
                        console.log('isRoomJoined: ', isRoomJoined, ' roomid: ', connection.sessionid);
                    }

                    if (!!connection.peers[connection.sessionid]) {
                        // on socket disconnect & reconnect
                        return;
                    }

                    mPeer.onNegotiationNeeded(connectionDescription);
                }

                if (isRoomJoined === false) {
                    if (connection.enableLogs) {
                        console.warn('isRoomJoined: ', error, ' roomid: ', connection.sessionid);
                    }

                    // [disabled] retry after 3 seconds
                     false && false;
                }

                cb(isRoomJoined, connection.sessionid, error);
            });
        }

        connection.publicRoomIdentifier = '';

        function openRoom(callback) {
            if (connection.enableLogs) {
                console.log('Sending open-room signal to socket.io');
            }

            connection.waitingForLocalMedia = false;
            connection.socket.emit('open-room', {
                sessionid: connection.sessionid,
                session: connection.session,
                mediaConstraints: connection.mediaConstraints,
                sdpConstraints: connection.sdpConstraints,
                streams: getStreamInfoForAdmin(),
                extra: connection.extra,
                identifier: connection.publicRoomIdentifier,
                password: typeof connection.password !== 'undefined' && typeof connection.password !== 'object' ? connection.password : ''
            }, function(isRoomOpened, error) {
                if (isRoomOpened === true) {
                    if (connection.enableLogs) {
                        console.log('isRoomOpened: ', isRoomOpened, ' roomid: ', connection.sessionid);
                    }
                    callback(isRoomOpened, connection.sessionid);
                }

                if (isRoomOpened === false) {
                    if (connection.enableLogs) {
                        console.warn('isRoomOpened: ', error, ' roomid: ', connection.sessionid);
                    }

                    callback(isRoomOpened, connection.sessionid, error);
                }
            });
        }

        function getStreamInfoForAdmin() {
            try {
                return connection.streamEvents.selectAll('local').map(function(event) {
                    return {
                        streamid: event.streamid,
                        tracks: event.stream.getTracks().length
                    };
                });
            } catch (e) {
                return [];
            }
        }

        function beforeJoin(userPreferences, callback) {
            if (connection.dontCaptureUserMedia || userPreferences.isDataOnly) {
                callback();
                return;
            }

            var localMediaConstraints = {};

            if (userPreferences.localPeerSdpConstraints.OfferToReceiveAudio) {
                localMediaConstraints.audio = connection.mediaConstraints.audio;
            }

            if (userPreferences.localPeerSdpConstraints.OfferToReceiveVideo) {
                localMediaConstraints.video = connection.mediaConstraints.video;
            }

            var session = userPreferences.session || connection.session;

            if (session.oneway && session.audio !== 'two-way' && session.video !== 'two-way' && session.screen !== 'two-way') {
                callback();
                return;
            }

            if (session.oneway && session.audio && session.audio === 'two-way') {
                session = {
                    audio: true
                };
            }

            if (session.audio || session.video || session.screen) {
                if (session.screen) {
                    if (DetectRTC.browser.name === 'Edge') {
                        navigator.getDisplayMedia({
                            video: true,
                            audio: isAudioPlusTab(connection)
                        }).then(function(screen) {
                            screen.isScreen = true;
                            mPeer.onGettingLocalMedia(screen);

                            if ((session.audio || session.video) && !isAudioPlusTab(connection)) {
                                connection.invokeGetUserMedia(null, callback);
                            } else {
                                callback(screen);
                            }
                        }, function(error) {
                            console.error('Unable to capture screen on Edge. HTTPs and version 17+ is required.');
                        });
                    } else {
                        connection.invokeGetUserMedia({
                            audio: isAudioPlusTab(connection),
                            video: true,
                            isScreen: true
                        }, (session.audio || session.video) && !isAudioPlusTab(connection) ? connection.invokeGetUserMedia(null, callback) : callback);
                    }
                } else if (session.audio || session.video) {
                    connection.invokeGetUserMedia(null, callback, session);
                }
            }
        }

        connection.getUserMedia = connection.captureUserMedia = function(callback, sessionForced) {
            callback = callback || function() {};
            var session = sessionForced || connection.session;

            if (connection.dontCaptureUserMedia || isData(session)) {
                callback();
                return;
            }

            if (session.audio || session.video || session.screen) {
                if (session.screen) {
                    if (DetectRTC.browser.name === 'Edge') {
                        navigator.getDisplayMedia({
                            video: true,
                            audio: isAudioPlusTab(connection)
                        }).then(function(screen) {
                            screen.isScreen = true;
                            mPeer.onGettingLocalMedia(screen);

                            if ((session.audio || session.video) && !isAudioPlusTab(connection)) {
                                var nonScreenSession = {};
                                for (var s in session) {
                                    if (s !== 'screen') {
                                        nonScreenSession[s] = session[s];
                                    }
                                }
                                connection.invokeGetUserMedia(sessionForced, callback, nonScreenSession);
                                return;
                            }
                            callback(screen);
                        }, function(error) {
                            console.error('Unable to capture screen on Edge. HTTPs and version 17+ is required.');
                        });
                    } else {
                        connection.invokeGetUserMedia({
                            audio: isAudioPlusTab(connection),
                            video: true,
                            isScreen: true
                        }, function(stream) {
                            if ((session.audio || session.video) && !isAudioPlusTab(connection)) {
                                var nonScreenSession = {};
                                for (var s in session) {
                                    if (s !== 'screen') {
                                        nonScreenSession[s] = session[s];
                                    }
                                }
                                connection.invokeGetUserMedia(sessionForced, callback, nonScreenSession);
                                return;
                            }
                            callback(stream);
                        });
                    }
                } else if (session.audio || session.video) {
                    connection.invokeGetUserMedia(sessionForced, callback, session);
                }
            }
        };

        connection.onbeforeunload = function(arg1, dontCloseSocket) {
            if (!connection.closeBeforeUnload) {
                return;
            }

            connection.peers.getAllParticipants().forEach(function(participant) {
                mPeer.onNegotiationNeeded({
                    userLeft: true
                }, participant);

                if (connection.peers[participant] && connection.peers[participant].peer) {
                    connection.peers[participant].peer.close();
                }

                delete connection.peers[participant];
            });

            if (!dontCloseSocket) {
                connection.closeSocket();
            }

            connection.isInitiator = false;
        };

        if (!window.ignoreBeforeUnload) {
            // user can implement its own version of window.onbeforeunload
            connection.closeBeforeUnload = true;
            window.addEventListener('beforeunload', connection.onbeforeunload, false);
        } else {
            connection.closeBeforeUnload = false;
        }

        connection.userid = getRandomString();
        connection.changeUserId = function(newUserId, callback) {
            callback = callback || function() {};
            connection.userid = newUserId || getRandomString();
            connection.socket.emit('changed-uuid', connection.userid, callback);
        };

        connection.extra = {};
        connection.attachStreams = [];

        connection.session = {
            audio: true,
            video: true
        };

        connection.enableFileSharing = false;

        // all values in kbps
        connection.bandwidth = {
            screen: false,
            audio: false,
            video: false
        };

        connection.codecs = {
            audio: 'opus',
            video: 'VP9'
        };

        connection.processSdp = function(sdp) {
            // ignore SDP modification if unified-pan is supported
            if (isUnifiedPlanSupportedDefault()) {
                return sdp;
            }

            if (DetectRTC.browser.name === 'Safari') {
                return sdp;
            }

            if (connection.codecs.video.toUpperCase() === 'VP8') {
                sdp = CodecsHandler.preferCodec(sdp, 'vp8');
            }

            if (connection.codecs.video.toUpperCase() === 'VP9') {
                sdp = CodecsHandler.preferCodec(sdp, 'vp9');
            }

            if (connection.codecs.video.toUpperCase() === 'H264') {
                sdp = CodecsHandler.preferCodec(sdp, 'h264');
            }

            if (connection.codecs.audio === 'G722') {
                sdp = CodecsHandler.removeNonG722(sdp);
            }

            if (DetectRTC.browser.name === 'Firefox') {
                return sdp;
            }

            if (connection.bandwidth.video || connection.bandwidth.screen) {
                sdp = CodecsHandler.setApplicationSpecificBandwidth(sdp, connection.bandwidth, !!connection.session.screen);
            }

            if (connection.bandwidth.video) {
                sdp = CodecsHandler.setVideoBitrates(sdp, {
                    min: connection.bandwidth.video * 8 * 1024,
                    max: connection.bandwidth.video * 8 * 1024
                });
            }

            if (connection.bandwidth.audio) {
                sdp = CodecsHandler.setOpusAttributes(sdp, {
                    maxaveragebitrate: connection.bandwidth.audio * 8 * 1024,
                    maxplaybackrate: connection.bandwidth.audio * 8 * 1024,
                    stereo: 1,
                    maxptime: 3
                });
            }

            return sdp;
        };

        if (typeof CodecsHandler !== 'undefined') {
            connection.BandwidthHandler = connection.CodecsHandler = CodecsHandler;
        }

        connection.mediaConstraints = {
            audio: {
                mandatory: {},
                optional: connection.bandwidth.audio ? [{
                    bandwidth: connection.bandwidth.audio * 8 * 1024 || 128 * 8 * 1024
                }] : []
            },
            video: {
                mandatory: {},
                optional: connection.bandwidth.video ? [{
                    bandwidth: connection.bandwidth.video * 8 * 1024 || 128 * 8 * 1024
                }, {
                    facingMode: 'user'
                }] : [{
                    facingMode: 'user'
                }]
            }
        };

        if (DetectRTC.browser.name === 'Firefox') {
            connection.mediaConstraints = {
                audio: true,
                video: true
            };
        }

        if (!forceOptions.useDefaultDevices && !DetectRTC.isMobileDevice) {
            DetectRTC.load(function() {
                var lastAudioDevice, lastVideoDevice;
                // it will force RTCMultiConnection to capture last-devices
                // i.e. if external microphone is attached to system, we should prefer it over built-in devices.
                DetectRTC.MediaDevices.forEach(function(device) {
                    if (device.kind === 'audioinput' && connection.mediaConstraints.audio !== false) {
                        lastAudioDevice = device;
                    }

                    if (device.kind === 'videoinput' && connection.mediaConstraints.video !== false) {
                        lastVideoDevice = device;
                    }
                });

                if (lastAudioDevice) {
                    if (DetectRTC.browser.name === 'Firefox') {
                        if (connection.mediaConstraints.audio !== true) {
                            connection.mediaConstraints.audio.deviceId = lastAudioDevice.id;
                        } else {
                            connection.mediaConstraints.audio = {
                                deviceId: lastAudioDevice.id
                            }
                        }
                        return;
                    }

                    if (connection.mediaConstraints.audio == true) {
                        connection.mediaConstraints.audio = {
                            mandatory: {},
                            optional: []
                        }
                    }

                    if (!connection.mediaConstraints.audio.optional) {
                        connection.mediaConstraints.audio.optional = [];
                    }

                    var optional = [{
                        sourceId: lastAudioDevice.id
                    }];

                    connection.mediaConstraints.audio.optional = optional.concat(connection.mediaConstraints.audio.optional);
                }

                if (lastVideoDevice) {
                    if (DetectRTC.browser.name === 'Firefox') {
                        if (connection.mediaConstraints.video !== true) {
                            connection.mediaConstraints.video.deviceId = lastVideoDevice.id;
                        } else {
                            connection.mediaConstraints.video = {
                                deviceId: lastVideoDevice.id
                            }
                        }
                        return;
                    }

                    if (connection.mediaConstraints.video == true) {
                        connection.mediaConstraints.video = {
                            mandatory: {},
                            optional: []
                        }
                    }

                    if (!connection.mediaConstraints.video.optional) {
                        connection.mediaConstraints.video.optional = [];
                    }

                    var optional = [{
                        sourceId: lastVideoDevice.id
                    }];

                    connection.mediaConstraints.video.optional = optional.concat(connection.mediaConstraints.video.optional);
                }
            });
        }

        connection.sdpConstraints = {
            mandatory: {
                OfferToReceiveAudio: true,
                OfferToReceiveVideo: true
            },
            optional: [{
                VoiceActivityDetection: false
            }]
        };

        connection.sdpSemantics = null; // "unified-plan" or "plan-b", ref: webrtc.org/web-apis/chrome/unified-plan/
        connection.iceCandidatePoolSize = null; // 0
        connection.bundlePolicy = null; // max-bundle
        connection.rtcpMuxPolicy = null; // "require" or "negotiate"
        connection.iceTransportPolicy = null; // "relay" or "all"
        connection.optionalArgument = {
            optional: [{
                DtlsSrtpKeyAgreement: true
            }, {
                googImprovedWifiBwe: true
            }, {
                googScreencastMinBitrate: 300
            }, {
                googIPv6: true
            }, {
                googDscp: true
            }, {
                googCpuUnderuseThreshold: 55
            }, {
                googCpuOveruseThreshold: 85
            }, {
                googSuspendBelowMinBitrate: true
            }, {
                googCpuOveruseDetection: true
            }],
            mandatory: {}
        };

        connection.iceServers = IceServersHandler.getIceServers(connection);

        connection.candidates = {
            host: true,
            stun: true,
            turn: true
        };

        connection.iceProtocols = {
            tcp: true,
            udp: true
        };

        // EVENTs
        connection.onopen = function(event) {
            if (!!connection.enableLogs) {
                console.info('Data connection has been opened between you & ', event.userid);
            }
        };

        connection.onclose = function(event) {
            if (!!connection.enableLogs) {
                console.warn('Data connection has been closed between you & ', event.userid);
            }
        };

        connection.onerror = function(error) {
            if (!!connection.enableLogs) {
                console.error(error.userid, 'data-error', error);
            }
        };

        connection.onmessage = function(event) {
            if (!!connection.enableLogs) {
                console.debug('data-message', event.userid, event.data);
            }
        };

        connection.send = function(data, remoteUserId) {
            connection.peers.send(data, remoteUserId);
        };

        connection.close = connection.disconnect = connection.leave = function() {
            connection.onbeforeunload(false, true);
        };

        connection.closeEntireSession = function(callback) {
            callback = callback || function() {};
            connection.socket.emit('close-entire-session', function looper() {
                if (connection.getAllParticipants().length) {
                    setTimeout(looper, 100);
                    return;
                }

                connection.onEntireSessionClosed({
                    sessionid: connection.sessionid,
                    userid: connection.userid,
                    extra: connection.extra
                });

                connection.changeUserId(null, function() {
                    connection.close();
                    callback();
                });
            });
        };

        connection.onEntireSessionClosed = function(event) {
            if (!connection.enableLogs) return;
            console.info('Entire session is closed: ', event.sessionid, event.extra);
        };

        connection.onstream = function(e) {
            var parentNode = connection.videosContainer;
            parentNode.insertBefore(e.mediaElement, parentNode.firstChild);
            var played = e.mediaElement.play();

            if (typeof played !== 'undefined') {
                played.catch(function() {
                    /*** iOS 11 doesn't allow automatic play and rejects ***/
                }).then(function() {
                    setTimeout(function() {
                        e.mediaElement.play();
                    }, 2000);
                });
                return;
            }

            setTimeout(function() {
                e.mediaElement.play();
            }, 2000);
        };

        connection.onstreamended = function(e) {
            if (!e.mediaElement) {
                e.mediaElement = document.getElementById(e.streamid);
            }

            if (!e.mediaElement || !e.mediaElement.parentNode) {
                return;
            }

            e.mediaElement.parentNode.removeChild(e.mediaElement);
        };

        connection.direction = 'many-to-many';

        connection.removeStream = function(streamid, remoteUserId) {
            var stream;
            connection.attachStreams.forEach(function(localStream) {
                if (localStream.id === streamid) {
                    stream = localStream;
                }
            });

            if (!stream) {
                console.warn('No such stream exist.', streamid);
                return;
            }

            connection.peers.getAllParticipants().forEach(function(participant) {
                if (remoteUserId && participant !== remoteUserId) {
                    return;
                }

                var user = connection.peers[participant];
                try {
                    user.peer.removeStream(stream);
                } catch (e) {}
            });

            connection.renegotiate();
        };

        connection.addStream = function(session, remoteUserId) {
            if (!!session.getTracks) {
                if (connection.attachStreams.indexOf(session) === -1) {
                    if (!session.streamid) {
                        session.streamid = session.id;
                    }

                    connection.attachStreams.push(session);
                }
                connection.renegotiate(remoteUserId);
                return;
            }

            if (isData(session)) {
                connection.renegotiate(remoteUserId);
                return;
            }

            if (session.audio || session.video || session.screen) {
                if (session.screen) {
                    if (DetectRTC.browser.name === 'Edge') {
                        navigator.getDisplayMedia({
                            video: true,
                            audio: isAudioPlusTab(connection)
                        }).then(function(screen) {
                            screen.isScreen = true;
                            mPeer.onGettingLocalMedia(screen);

                            if ((session.audio || session.video) && !isAudioPlusTab(connection)) {
                                connection.invokeGetUserMedia(null, function(stream) {
                                    gumCallback(stream);
                                });
                            } else {
                                gumCallback(screen);
                            }
                        }, function(error) {
                            console.error('Unable to capture screen on Edge. HTTPs and version 17+ is required.');
                        });
                    } else {
                        connection.invokeGetUserMedia({
                            audio: isAudioPlusTab(connection),
                            video: true,
                            isScreen: true
                        }, function(stream) {
                            if ((session.audio || session.video) && !isAudioPlusTab(connection)) {
                                connection.invokeGetUserMedia(null, function(stream) {
                                    gumCallback(stream);
                                });
                            } else {
                                gumCallback(stream);
                            }
                        });
                    }
                } else if (session.audio || session.video) {
                    connection.invokeGetUserMedia(null, gumCallback);
                }
            }

            function gumCallback(stream) {
                if (session.streamCallback) {
                    session.streamCallback(stream);
                }

                connection.renegotiate(remoteUserId);
            }
        };

        connection.invokeGetUserMedia = function(localMediaConstraints, callback, session) {
            if (!session) {
                session = connection.session;
            }

            if (!localMediaConstraints) {
                localMediaConstraints = connection.mediaConstraints;
            }

            getUserMediaHandler({
                onGettingLocalMedia: function(stream) {
                    var videoConstraints = localMediaConstraints.video;
                    if (videoConstraints) {
                        if (videoConstraints.mediaSource || videoConstraints.mozMediaSource) {
                            stream.isScreen = true;
                        } else if (videoConstraints.mandatory && videoConstraints.mandatory.chromeMediaSource) {
                            stream.isScreen = true;
                        }
                    }

                    if (!stream.isScreen) {
                        stream.isVideo = !!getTracks(stream, 'video').length;
                        stream.isAudio = !stream.isVideo && getTracks(stream, 'audio').length;
                    }

                    mPeer.onGettingLocalMedia(stream, function() {
                        if (typeof callback === 'function') {
                            callback(stream);
                        }
                    });
                },
                onLocalMediaError: function(error, constraints) {
                    mPeer.onLocalMediaError(error, constraints);
                },
                localMediaConstraints: localMediaConstraints || {
                    audio: session.audio ? localMediaConstraints.audio : false,
                    video: session.video ? localMediaConstraints.video : false
                }
            });
        };

        function applyConstraints(stream, mediaConstraints) {
            if (!stream) {
                if (!!connection.enableLogs) {
                    console.error('No stream to applyConstraints.');
                }
                return;
            }

            if (mediaConstraints.audio) {
                getTracks(stream, 'audio').forEach(function(track) {
                    track.applyConstraints(mediaConstraints.audio);
                });
            }

            if (mediaConstraints.video) {
                getTracks(stream, 'video').forEach(function(track) {
                    track.applyConstraints(mediaConstraints.video);
                });
            }
        }

        connection.applyConstraints = function(mediaConstraints, streamid) {
            if (!MediaStreamTrack || !MediaStreamTrack.prototype.applyConstraints) {
                alert('track.applyConstraints is NOT supported in your browser.');
                return;
            }

            if (streamid) {
                var stream;
                if (connection.streamEvents[streamid]) {
                    stream = connection.streamEvents[streamid].stream;
                }
                applyConstraints(stream, mediaConstraints);
                return;
            }

            connection.attachStreams.forEach(function(stream) {
                applyConstraints(stream, mediaConstraints);
            });
        };

        function replaceTrack(track, remoteUserId, isVideoTrack) {
            if (remoteUserId) {
                mPeer.replaceTrack(track, remoteUserId, isVideoTrack);
                return;
            }

            connection.peers.getAllParticipants().forEach(function(participant) {
                mPeer.replaceTrack(track, participant, isVideoTrack);
            });
        }

        connection.replaceTrack = function(session, remoteUserId, isVideoTrack) {
            session = session || {};

            if (!RTCPeerConnection.prototype.getSenders) {
                connection.addStream(session);
                return;
            }

            if (session instanceof MediaStreamTrack) {
                replaceTrack(session, remoteUserId, isVideoTrack);
                return;
            }

            if (session instanceof MediaStream) {
                if (getTracks(session, 'video').length) {
                    replaceTrack(getTracks(session, 'video')[0], remoteUserId, true);
                }

                if (getTracks(session, 'audio').length) {
                    replaceTrack(getTracks(session, 'audio')[0], remoteUserId, false);
                }
                return;
            }

            if (isData(session)) {
                throw 'connection.replaceTrack requires audio and/or video and/or screen.';
                return;
            }

            if (session.audio || session.video || session.screen) {
                if (session.screen) {
                    if (DetectRTC.browser.name === 'Edge') {
                        navigator.getDisplayMedia({
                            video: true,
                            audio: isAudioPlusTab(connection)
                        }).then(function(screen) {
                            screen.isScreen = true;
                            mPeer.onGettingLocalMedia(screen);

                            if ((session.audio || session.video) && !isAudioPlusTab(connection)) {
                                connection.invokeGetUserMedia(null, gumCallback);
                            } else {
                                gumCallback(screen);
                            }
                        }, function(error) {
                            console.error('Unable to capture screen on Edge. HTTPs and version 17+ is required.');
                        });
                    } else {
                        connection.invokeGetUserMedia({
                            audio: isAudioPlusTab(connection),
                            video: true,
                            isScreen: true
                        }, (session.audio || session.video) && !isAudioPlusTab(connection) ? connection.invokeGetUserMedia(null, gumCallback) : gumCallback);
                    }
                } else if (session.audio || session.video) {
                    connection.invokeGetUserMedia(null, gumCallback);
                }
            }

            function gumCallback(stream) {
                connection.replaceTrack(stream, remoteUserId, isVideoTrack || session.video || session.screen);
            }
        };

        connection.resetTrack = function(remoteUsersIds, isVideoTrack) {
            if (!remoteUsersIds) {
                remoteUsersIds = connection.getAllParticipants();
            }

            if (typeof remoteUsersIds == 'string') {
                remoteUsersIds = [remoteUsersIds];
            }

            remoteUsersIds.forEach(function(participant) {
                var peer = connection.peers[participant].peer;

                if ((typeof isVideoTrack === 'undefined' || isVideoTrack === true) && peer.lastVideoTrack) {
                    connection.replaceTrack(peer.lastVideoTrack, participant, true);
                }

                if ((typeof isVideoTrack === 'undefined' || isVideoTrack === false) && peer.lastAudioTrack) {
                    connection.replaceTrack(peer.lastAudioTrack, participant, false);
                }
            });
        };

        connection.renegotiate = function(remoteUserId) {
            if (remoteUserId) {
                mPeer.renegotiatePeer(remoteUserId);
                return;
            }

            connection.peers.getAllParticipants().forEach(function(participant) {
                mPeer.renegotiatePeer(participant);
            });
        };

        connection.setStreamEndHandler = function(stream, isRemote) {
            if (!stream || !stream.addEventListener) return;

            isRemote = !!isRemote;

            if (stream.alreadySetEndHandler) {
                return;
            }
            stream.alreadySetEndHandler = true;

            var streamEndedEvent = 'ended';

            if ('oninactive' in stream) {
                streamEndedEvent = 'inactive';
            }

            stream.addEventListener(streamEndedEvent, function() {
                if (stream.idInstance) {
                    currentUserMediaRequest.remove(stream.idInstance);
                }

                if (!isRemote) {
                    // reset attachStreams
                    var streams = [];
                    connection.attachStreams.forEach(function(s) {
                        if (s.id != stream.id) {
                            streams.push(s);
                        }
                    });
                    connection.attachStreams = streams;
                }

                // connection.renegotiate();

                var streamEvent = connection.streamEvents[stream.streamid];
                if (!streamEvent) {
                    streamEvent = {
                        stream: stream,
                        streamid: stream.streamid,
                        type: isRemote ? 'remote' : 'local',
                        userid: connection.userid,
                        extra: connection.extra,
                        mediaElement: connection.streamEvents[stream.streamid] ? connection.streamEvents[stream.streamid].mediaElement : null
                    };
                }

                if (isRemote && connection.peers[streamEvent.userid]) {
                    // reset remote "streams"
                    var peer = connection.peers[streamEvent.userid].peer;
                    var streams = [];
                    peer.getRemoteStreams().forEach(function(s) {
                        if (s.id != stream.id) {
                            streams.push(s);
                        }
                    });
                    connection.peers[streamEvent.userid].streams = streams;
                }

                if (streamEvent.userid === connection.userid && streamEvent.type === 'remote') {
                    return;
                }

                if (connection.peersBackup[streamEvent.userid]) {
                    streamEvent.extra = connection.peersBackup[streamEvent.userid].extra;
                }

                connection.onstreamended(streamEvent);

                delete connection.streamEvents[stream.streamid];
            }, false);
        };

        connection.onMediaError = function(error, constraints) {
            if (!!connection.enableLogs) {
                console.error(error, constraints);
            }
        };

        connection.autoCloseEntireSession = false;

        connection.filesContainer = connection.videosContainer = document.body || document.documentElement;
        connection.isInitiator = false;

        connection.shareFile = mPeer.shareFile;
        if (typeof FileProgressBarHandler !== 'undefined') {
            FileProgressBarHandler.handle(connection);
        }

        if (typeof TranslationHandler !== 'undefined') {
            TranslationHandler.handle(connection);
        }

        connection.token = getRandomString;

        connection.onNewParticipant = function(participantId, userPreferences) {
            connection.acceptParticipationRequest(participantId, userPreferences);
        };

        connection.acceptParticipationRequest = function(participantId, userPreferences) {
            if (userPreferences.successCallback) {
                userPreferences.successCallback();
                delete userPreferences.successCallback;
            }

            mPeer.createNewPeer(participantId, userPreferences);
        };

        if (typeof StreamsHandler !== 'undefined') {
            connection.StreamsHandler = StreamsHandler;
        }

        connection.onleave = function(userid) {};

        connection.invokeSelectFileDialog = function(callback) {
            var selector = new FileSelector();
            selector.accept = '*.*';
            selector.selectSingleFile(callback);
        };

        connection.onmute = function(e) {
            if (!e || !e.mediaElement) {
                return;
            }

            if (e.muteType === 'both' || e.muteType === 'video') {
                e.mediaElement.src = null;
                var paused = e.mediaElement.pause();
                if (typeof paused !== 'undefined') {
                    paused.then(function() {
                        e.mediaElement.poster = e.snapshot || 'https://cdn.webrtc-experiment.com/images/muted.png';
                    });
                } else {
                    e.mediaElement.poster = e.snapshot || 'https://cdn.webrtc-experiment.com/images/muted.png';
                }
            } else if (e.muteType === 'audio') {
                e.mediaElement.muted = true;
            }
        };

        connection.onunmute = function(e) {
            if (!e || !e.mediaElement || !e.stream) {
                return;
            }

            if (e.unmuteType === 'both' || e.unmuteType === 'video') {
                e.mediaElement.poster = null;
                e.mediaElement.srcObject = e.stream;
                e.mediaElement.play();
            } else if (e.unmuteType === 'audio') {
                e.mediaElement.muted = false;
            }
        };

        connection.onExtraDataUpdated = function(event) {
            event.status = 'online';
            connection.onUserStatusChanged(event, true);
        };

        connection.getAllParticipants = function(sender) {
            return connection.peers.getAllParticipants(sender);
        };

        if (typeof StreamsHandler !== 'undefined') {
            StreamsHandler.onSyncNeeded = function(streamid, action, type) {
                connection.peers.getAllParticipants().forEach(function(participant) {
                    mPeer.onNegotiationNeeded({
                        streamid: streamid,
                        action: action,
                        streamSyncNeeded: true,
                        type: type || 'both'
                    }, participant);
                });
            };
        }

        connection.connectSocket = function(callback) {
            connectSocket(callback);
        };

        connection.closeSocket = function() {
            try {
                io.sockets = {};
            } catch (e) {};

            if (!connection.socket) return;

            if (typeof connection.socket.disconnect === 'function') {
                connection.socket.disconnect();
            }

            if (typeof connection.socket.resetProps === 'function') {
                connection.socket.resetProps();
            }

            connection.socket = null;
        };

        connection.getSocket = function(callback) {
            if (!callback && connection.enableLogs) {
                console.warn('getSocket.callback paramter is required.');
            }

            callback = callback || function() {};

            if (!connection.socket) {
                connectSocket(function() {
                    callback(connection.socket);
                });
            } else {
                callback(connection.socket);
            }

            return connection.socket; // callback is preferred over return-statement
        };

        connection.getRemoteStreams = mPeer.getRemoteStreams;

        var skipStreams = ['selectFirst', 'selectAll', 'forEach'];

        connection.streamEvents = {
            selectFirst: function(options) {
                return connection.streamEvents.selectAll(options)[0];
            },
            selectAll: function(options) {
                if (!options) {
                    // default will always be all streams
                    options = {
                        local: true,
                        remote: true,
                        isScreen: true,
                        isAudio: true,
                        isVideo: true
                    };
                }

                if (options == 'local') {
                    options = {
                        local: true
                    };
                }

                if (options == 'remote') {
                    options = {
                        remote: true
                    };
                }

                if (options == 'screen') {
                    options = {
                        isScreen: true
                    };
                }

                if (options == 'audio') {
                    options = {
                        isAudio: true
                    };
                }

                if (options == 'video') {
                    options = {
                        isVideo: true
                    };
                }

                var streams = [];
                Object.keys(connection.streamEvents).forEach(function(key) {
                    var event = connection.streamEvents[key];

                    if (skipStreams.indexOf(key) !== -1) return;
                    var ignore = true;

                    if (options.local && event.type === 'local') {
                        ignore = false;
                    }

                    if (options.remote && event.type === 'remote') {
                        ignore = false;
                    }

                    if (options.isScreen && event.stream.isScreen) {
                        ignore = false;
                    }

                    if (options.isVideo && event.stream.isVideo) {
                        ignore = false;
                    }

                    if (options.isAudio && event.stream.isAudio) {
                        ignore = false;
                    }

                    if (options.userid && event.userid === options.userid) {
                        ignore = false;
                    }

                    if (ignore === false) {
                        streams.push(event);
                    }
                });

                return streams;
            }
        };

        connection.socketURL = '/'; // generated via config.json
        connection.socketMessageEvent = 'RTCMultiConnection-Message'; // generated via config.json
        connection.socketCustomEvent = 'RTCMultiConnection-Custom-Message'; // generated via config.json
        connection.DetectRTC = DetectRTC;

        connection.setCustomSocketEvent = function(customEvent) {
            if (customEvent) {
                connection.socketCustomEvent = customEvent;
            }

            if (!connection.socket) {
                return;
            }

            connection.socket.emit('set-custom-socket-event-listener', connection.socketCustomEvent);
        };

        connection.getNumberOfBroadcastViewers = function(broadcastId, callback) {
            if (!connection.socket || !broadcastId || !callback) return;

            connection.socket.emit('get-number-of-users-in-specific-broadcast', broadcastId, callback);
        };

        connection.onNumberOfBroadcastViewersUpdated = function(event) {
            if (!connection.enableLogs || !connection.isInitiator) return;
            console.info('Number of broadcast (', event.broadcastId, ') viewers', event.numberOfBroadcastViewers);
        };

        connection.onUserStatusChanged = function(event, dontWriteLogs) {
            if (!!connection.enableLogs && !dontWriteLogs) {
                console.info(event.userid, event.status);
            }
        };

        connection.getUserMediaHandler = getUserMediaHandler;
        connection.multiPeersHandler = mPeer;
        connection.enableLogs = true;
        connection.setCustomSocketHandler = function(customSocketHandler) {
            if (typeof SocketConnection !== 'undefined') {
                SocketConnection = customSocketHandler;
            }
        };

        // default value should be 15k because [old]Firefox's receiving limit is 16k!
        // however 64k works chrome-to-chrome
        connection.chunkSize = 40 * 1000;

        connection.maxParticipantsAllowed = 1000;

        // eject or leave single user
        connection.disconnectWith = mPeer.disconnectWith;

        // check if room exist on server
        // we will pass roomid to the server and wait for callback (i.e. server's response)
        connection.checkPresence = function(roomid, callback) {
            roomid = roomid || connection.sessionid;

            if (SocketConnection.name === 'SSEConnection') {
                SSEConnection.checkPresence(roomid, function(isRoomExist, _roomid, extra) {
                    if (!connection.socket) {
                        if (!isRoomExist) {
                            connection.userid = _roomid;
                        }

                        connection.connectSocket(function() {
                            callback(isRoomExist, _roomid, extra);
                        });
                        return;
                    }
                    callback(isRoomExist, _roomid);
                });
                return;
            }

            if (!connection.socket) {
                connection.connectSocket(function() {
                    connection.checkPresence(roomid, callback);
                });
                return;
            }

            connection.socket.emit('check-presence', roomid + '', function(isRoomExist, _roomid, extra) {
                if (connection.enableLogs) {
                    console.log('checkPresence.isRoomExist: ', isRoomExist, ' roomid: ', _roomid);
                }
                callback(isRoomExist, _roomid, extra);
            });
        };

        connection.onReadyForOffer = function(remoteUserId, userPreferences) {
            connection.multiPeersHandler.createNewPeer(remoteUserId, userPreferences);
        };

        connection.setUserPreferences = function(userPreferences) {
            if (connection.dontAttachStream) {
                userPreferences.dontAttachLocalStream = true;
            }

            if (connection.dontGetRemoteStream) {
                userPreferences.dontGetRemoteStream = true;
            }

            return userPreferences;
        };

        connection.updateExtraData = function() {
            connection.socket.emit('extra-data-updated', connection.extra);
        };

        connection.enableScalableBroadcast = false;
        connection.maxRelayLimitPerUser = 3; // each broadcast should serve only 3 users

        connection.dontCaptureUserMedia = false;
        connection.dontAttachStream = false;
        connection.dontGetRemoteStream = false;

        connection.onReConnecting = function(event) {
            if (connection.enableLogs) {
                console.info('ReConnecting with', event.userid, '...');
            }
        };

        connection.beforeAddingStream = function(stream) {
            return stream;
        };

        connection.beforeRemovingStream = function(stream) {
            return stream;
        };

        if (typeof isChromeExtensionAvailable !== 'undefined') {
            connection.checkIfChromeExtensionAvailable = isChromeExtensionAvailable;
        }

        if (typeof isFirefoxExtensionAvailable !== 'undefined') {
            connection.checkIfChromeExtensionAvailable = isFirefoxExtensionAvailable;
        }

        if (typeof getChromeExtensionStatus !== 'undefined') {
            connection.getChromeExtensionStatus = getChromeExtensionStatus;
        }

        connection.modifyScreenConstraints = function(screen_constraints) {
            return screen_constraints;
        };

        connection.onPeerStateChanged = function(state) {
            if (connection.enableLogs) {
                if (state.iceConnectionState.search(/closed|failed/gi) !== -1) {
                    console.error('Peer connection is closed between you & ', state.userid, state.extra, 'state:', state.iceConnectionState);
                }
            }
        };

        connection.isOnline = true;

        listenEventHandler('online', function() {
            connection.isOnline = true;
        });

        listenEventHandler('offline', function() {
            connection.isOnline = false;
        });

        connection.isLowBandwidth = false;
        if (navigator && navigator.connection && navigator.connection.type) {
            connection.isLowBandwidth = navigator.connection.type.toString().toLowerCase().search(/wifi|cell/g) !== -1;
            if (connection.isLowBandwidth) {
                connection.bandwidth = {
                    audio: false,
                    video: false,
                    screen: false
                };

                if (connection.mediaConstraints.audio && connection.mediaConstraints.audio.optional && connection.mediaConstraints.audio.optional.length) {
                    var newArray = [];
                    connection.mediaConstraints.audio.optional.forEach(function(opt) {
                        if (typeof opt.bandwidth === 'undefined') {
                            newArray.push(opt);
                        }
                    });
                    connection.mediaConstraints.audio.optional = newArray;
                }

                if (connection.mediaConstraints.video && connection.mediaConstraints.video.optional && connection.mediaConstraints.video.optional.length) {
                    var newArray = [];
                    connection.mediaConstraints.video.optional.forEach(function(opt) {
                        if (typeof opt.bandwidth === 'undefined') {
                            newArray.push(opt);
                        }
                    });
                    connection.mediaConstraints.video.optional = newArray;
                }
            }
        }

        connection.getExtraData = function(remoteUserId, callback) {
            if (!remoteUserId) throw 'remoteUserId is required.';

            if (typeof callback === 'function') {
                connection.socket.emit('get-remote-user-extra-data', remoteUserId, function(extra, remoteUserId, error) {
                    callback(extra, remoteUserId, error);
                });
                return;
            }

            if (!connection.peers[remoteUserId]) {
                if (connection.peersBackup[remoteUserId]) {
                    return connection.peersBackup[remoteUserId].extra;
                }
                return {};
            }

            return connection.peers[remoteUserId].extra;
        };

        if (!!forceOptions.autoOpenOrJoin) {
            connection.openOrJoin(connection.sessionid);
        }

        connection.onUserIdAlreadyTaken = function(useridAlreadyTaken, yourNewUserId) {
            // via #683
            connection.close();
            connection.closeSocket();

            connection.isInitiator = false;
            connection.userid = connection.token();

            connection.join(connection.sessionid);

            if (connection.enableLogs) {
                console.warn('Userid already taken.', useridAlreadyTaken, 'Your new userid:', connection.userid);
            }
        };

        connection.trickleIce = true;
        connection.version = '3.6.9';

        connection.onSettingLocalDescription = function(event) {
            if (connection.enableLogs) {
                console.info('Set local description for remote user', event.userid);
            }
        };

        connection.resetScreen = function() {
            sourceId = null;
            if (DetectRTC && DetectRTC.screen) {
                delete DetectRTC.screen.sourceId;
            }

            currentUserMediaRequest = {
                streams: [],
                mutex: false,
                queueRequests: []
            };
        };

        // if disabled, "event.mediaElement" for "onstream" will be NULL
        connection.autoCreateMediaElement = true;

        // set password
        connection.password = null;

        // set password
        connection.setPassword = function(password, callback) {
            callback = callback || function() {};
            if (connection.socket) {
                connection.socket.emit('set-password', password, callback);
            } else {
                connection.password = password;
                callback(true, connection.sessionid, null);
            }
        };

        connection.onSocketDisconnect = function(event) {
            if (connection.enableLogs) {
                console.warn('socket.io connection is closed');
            }
        };

        connection.onSocketError = function(event) {
            if (connection.enableLogs) {
                console.warn('socket.io connection is failed');
            }
        };

        // error messages
        connection.errors = {
            ROOM_NOT_AVAILABLE: 'Room not available',
            INVALID_PASSWORD: 'Invalid password',
            USERID_NOT_AVAILABLE: 'User ID does not exist',
            ROOM_PERMISSION_DENIED: 'Room permission denied',
            ROOM_FULL: 'Room full',
            DID_NOT_JOIN_ANY_ROOM: 'Did not join any room yet',
            INVALID_SOCKET: 'Invalid socket',
            PUBLIC_IDENTIFIER_MISSING: 'publicRoomIdentifier is required',
            INVALID_ADMIN_CREDENTIAL: 'Invalid username or password attempted'
        };
    })(this);

};

if (true /* && !!module.exports*/ ) {
    module.exports = exports = RTCMultiConnection;
}

if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return RTCMultiConnection;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/vue2-flip-countdown/dist/vue2-flip-countdown.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vue2-flip-countdown/dist/vue2-flip-countdown.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}("undefined"!=typeof self?self:this,function(){return function(t){function e(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(7);e.default={name:"flipCountdown",props:{deadline:{type:String},stop:{type:Boolean},showDays:{type:Boolean,required:!1,default:!0},showHours:{type:Boolean,required:!1,default:!0},showMinutes:{type:Boolean,required:!1,default:!0},showSeconds:{type:Boolean,required:!1,default:!0},labels:{type:Object,required:!1,default:function(){return{days:"Days",hours:"Hours",minutes:"Minutes",seconds:"Seconds"}}}},data:function(){var t=a();return{now:Math.trunc((new Date).getTime()/1e3),date:null,interval:null,diff:0,show:!1,timeData:[{current:0,previous:0,label:this.labels.days,elementId:"flip-card-days-"+t,show:this.showDays},{current:0,previous:0,label:this.labels.hours,elementId:"flip-card-hours-"+t,show:this.showHours},{current:0,previous:0,label:this.labels.minutes,elementId:"flip-card-minutes-"+t,show:this.showMinutes},{current:0,previous:0,label:this.labels.seconds,elementId:"flip-card-seconds-"+t,show:this.showSeconds}]}},created:function(){var t=this;if(!this.deadline)throw new Error("Missing props 'deadline'");var e=this.deadline;if(this.date=Math.trunc(Date.parse(e.replace(/-/g,"/"))/1e3),!this.date)throw new Error("Invalid props value, correct the 'deadline'");this.interval=setInterval(function(){t.now=Math.trunc((new Date).getTime()/1e3)},1e3)},mounted:function(){0!==this.diff&&(this.show=!0)},computed:{seconds:function(){return Math.trunc(this.diff)%60},minutes:function(){return Math.trunc(this.diff/60)%60},hours:function(){return Math.trunc(this.diff/60/60)%24},days:function(){return Math.trunc(this.diff/60/60/24)}},watch:{deadline:function(t,e){var n=this.deadline;if(this.date=Math.trunc(Date.parse(n.replace(/-/g,"/"))/1e3),!this.date)throw new Error("Invalid props value, correct the 'deadline'")},now:function(t){this.diff=this.date-this.now,this.diff<=0||this.stop?(this.diff=0,this.updateTime(3,0)):this.updateAllCards()},diff:function(t){0===t&&(this.$emit("timeElapsed"),this.updateAllCards())}},filters:{twoDigits:function(t){return t.toString().length<=1?"0"+t.toString():t.toString()}},methods:{updateAllCards:function(){this.updateTime(0,this.days),this.updateTime(1,this.hours),this.updateTime(2,this.minutes),this.updateTime(3,this.seconds)},updateTime:function(t,e){if(!(t>=this.timeData.length||void 0===e)){window.requestAnimationFrame&&(this.frame=requestAnimationFrame(this.updateTime.bind(this)));var n=this.timeData[t],a=e<0?0:e,i=document.querySelector("#"+n.elementId);if(a!==n.current&&(n.previous=n.current,n.current=a,i&&(i.classList.remove("flip"),i.offsetWidth,i.classList.add("flip")),0===t)){var r=i.querySelectorAll("span b");if(r){var o=!0,s=!1,d=void 0;try{for(var c,f=r[Symbol.iterator]();!(o=(c=f.next()).done);o=!0){var l=c.value,u=l.classList[0];if(e/1e3>=1){if(!u.includes("-4digits")){var p=u+"-4digits";l.classList.add(p),l.classList.remove(u)}}else if(u.includes("-4digits")){var b=u.replace("-4digits","");l.classList.add(b),l.classList.remove(u)}}}catch(t){s=!0,d=t}finally{try{!o&&f.return&&f.return()}finally{if(s)throw d}}}}}}},beforeDestroy:function(){window.cancelAnimationFrame&&cancelAnimationFrame(this.frame)},destroyed:function(){clearInterval(this.interval)}}},function(t,e,n){"use strict";function a(t){n(2)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var s=n(10),d=n(11),c=a,f=Object(d.a)(r.a,s.a,s.b,!1,c,"data-v-8f91b0b6",null);e.default=f.exports},function(t,e,n){var a=n(3);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n(5).default;i("40ab9c5d",a,!0,{})},function(t,e,n){e=t.exports=n(4)(!1),e.push([t.i,"\n.flip-clock[data-v-8f91b0b6] {\n  text-align: center;\n  perspective: 600px;\n  margin: 0 auto;\n}\n.flip-clock *[data-v-8f91b0b6],\n.flip-clock *[data-v-8f91b0b6]:before,\n.flip-clock *[data-v-8f91b0b6]:after {\n  box-sizing: border-box;\n}\n.flip-clock__piece[data-v-8f91b0b6] {\n  display: inline-block;\n  margin: 0 0.2vw;\n}\n@media (min-width: 1000px) {\n.flip-clock__piece[data-v-8f91b0b6] {\n    margin: 0 5px;\n}\n}\n.flip-clock__slot[data-v-8f91b0b6] {\n  font-size: 1rem;\n  line-height: 1.5;\n  display: block;\n}\n.flip-card[data-v-8f91b0b6] {\n  display: block;\n  position: relative;\n  padding-bottom: 0.72em;\n  font-size: 2.25rem;\n  line-height: 0.95;\n}\n@media (min-width: 1000px) {\n.flip-clock__slot[data-v-8f91b0b6] {\n    font-size: 1.2rem;\n}\n.flip-card[data-v-8f91b0b6] {\n    font-size: 3rem;\n}\n}\n.flip-card__top[data-v-8f91b0b6],\n.flip-card__bottom[data-v-8f91b0b6],\n.flip-card__back-bottom[data-v-8f91b0b6],\n.flip-card__back[data-v-8f91b0b6]::before,\n.flip-card__back[data-v-8f91b0b6]::after {\n  display: block;\n  color: #cca900;\n  background: #222;\n  padding: 0.23em 0.15em 0.4em;\n  border-radius: 0.15em 0.15em 0 0;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  transform-style: preserve-3d;\n  width: 2.1em;\n  height: 0.72em;\n}\n.flip-card__top-4digits[data-v-8f91b0b6],\n.flip-card__bottom-4digits[data-v-8f91b0b6],\n.flip-card__back-bottom-4digits[data-v-8f91b0b6],\n.flip-card__back-4digits[data-v-8f91b0b6]::before,\n.flip-card__back-4digits[data-v-8f91b0b6]::after {\n  display: block;\n  color: #cca900;\n  background: #222;\n  padding: 0.23em 0.15em 0.4em;\n  border-radius: 0.15em 0.15em 0 0;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  transform-style: preserve-3d;\n  width: 2.65em;\n  height: 0.72em;\n}\n.flip-card__bottom[data-v-8f91b0b6],\n.flip-card__back-bottom[data-v-8f91b0b6],\n.flip-card__bottom-4digits[data-v-8f91b0b6],\n.flip-card__back-bottom-4digits[data-v-8f91b0b6] {\n  color: #ffdc00;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  border-top: solid 1px #000;\n  background: #393939;\n  border-radius: 0 0 0.15em 0.15em;\n  pointer-events: none;\n  overflow: hidden;\n  z-index: 2;\n}\n.flip-card__back-bottom[data-v-8f91b0b6],\n.flip-card__back-bottom-4digits[data-v-8f91b0b6] {\n  z-index: 1;\n}\n.flip-card__bottom[data-v-8f91b0b6]::after,\n.flip-card__back-bottom[data-v-8f91b0b6]::after,\n.flip-card__bottom-4digits[data-v-8f91b0b6]::after,\n.flip-card__back-bottom-4digits[data-v-8f91b0b6]::after {\n  display: block;\n  margin-top: -0.72em;\n}\n.flip-card__back[data-v-8f91b0b6]::before,\n.flip-card__bottom[data-v-8f91b0b6]::after,\n.flip-card__back-bottom[data-v-8f91b0b6]::after,\n.flip-card__back-4digits[data-v-8f91b0b6]::before,\n.flip-card__bottom-4digits[data-v-8f91b0b6]::after,\n.flip-card__back-bottom-4digits[data-v-8f91b0b6]::after {\n  content: attr(data-value);\n}\n.flip-card__back[data-v-8f91b0b6],\n.flip-card__back-4digits[data-v-8f91b0b6] {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  left: 0%;\n  pointer-events: none;\n}\n.flip-card__back[data-v-8f91b0b6]::before,\n.flip-card__back-4digits[data-v-8f91b0b6]::before {\n  position: relative;\n  overflow: hidden;\n  z-index: -1;\n}\n.flip .flip-card__back[data-v-8f91b0b6]::before,\n.flip .flip-card__back-4digits[data-v-8f91b0b6]::before {\n  z-index: 1;\n  animation: flipTop-data-v-8f91b0b6 0.3s cubic-bezier(0.37, 0.01, 0.94, 0.35);\n  animation-fill-mode: both;\n  transform-origin: center bottom;\n}\n.flip .flip-card__bottom[data-v-8f91b0b6],\n.flip .flip-card__bottom-4digits[data-v-8f91b0b6] {\n  transform-origin: center top;\n  animation-fill-mode: both;\n  animation: flipBottom-data-v-8f91b0b6 0.6s cubic-bezier(0.15, 0.45, 0.28, 1);\n}\n@keyframes flipTop-data-v-8f91b0b6 {\n0% {\n    transform: rotateX(0deg);\n    z-index: 2;\n}\n0%,\n  99% {\n    opacity: 1;\n}\n100% {\n    transform: rotateX(-90deg);\n    opacity: 0;\n}\n}\n@keyframes flipBottom-data-v-8f91b0b6 {\n0%,\n  50% {\n    z-index: -1;\n    transform: rotateX(90deg);\n    opacity: 0;\n}\n51% {\n    opacity: 1;\n}\n100% {\n    opacity: 1;\n    transform: rotateX(0deg);\n    z-index: 5;\n}\n}\n",""])},function(t,e,n){"use strict";function a(t,e){var n=t[1]||"",a=t[3];if(!a)return n;if(e&&"function"==typeof btoa){var r=i(a);return[n].concat(a.sources.map(function(t){return"/*# sourceURL=".concat(a.sourceRoot).concat(t," */")})).concat([r]).join("\n")}return[n].join("\n")}function i(t){return"/*# ".concat("sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t)))))," */")}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=a(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},i=0;i<this.length;i++){var r=this[i][0];null!=r&&(a[r]=!0)}for(var o=0;o<t.length;o++){var s=t[o];null!=s[0]&&a[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),e.push(s))}},e}},function(t,e,n){"use strict";function a(t,e,n,a){v=n,m=a||{};var r=Object(c.a)(t,e);return i(r),function(e){for(var n=[],a=0;a<r.length;a++){var o=r[a],s=l[o.id];s.refs--,n.push(s)}e?(r=Object(c.a)(t,e),i(r)):r=[];for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete l[s.id]}}}}function i(t){for(var e=0;e<t.length;e++){var n=t[e],a=l[n.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](n.parts[i]);for(;i<n.parts.length;i++)a.parts.push(o(n.parts[i]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{for(var r=[],i=0;i<n.parts.length;i++)r.push(o(n.parts[i]));l[n.id]={id:n.id,refs:1,parts:r}}}}function r(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function o(t){var e,n,a=document.querySelector("style["+_+'~="'+t.id+'"]');if(a){if(v)return h;a.parentNode.removeChild(a)}if(g){var i=b++;a=p||(p=r()),e=s.bind(null,a,i,!1),n=s.bind(null,a,i,!0)}else a=r(),e=d.bind(null,a),n=function(){a.parentNode.removeChild(a)};return e(t),function(a){if(a){if(a.css===t.css&&a.media===t.media&&a.sourceMap===t.sourceMap)return;e(t=a)}else n()}}function s(t,e,n,a){var i=n?"":a.css;if(t.styleSheet)t.styleSheet.cssText=y(e,i);else{var r=document.createTextNode(i),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}function d(t,e){var n=e.css,a=e.media,i=e.sourceMap;if(a&&t.setAttribute("media",a),m.ssrId&&t.setAttribute(_,e.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var c=n(6),f="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!f)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l={},u=f&&(document.head||document.getElementsByTagName("head")[0]),p=null,b=0,v=!1,h=function(){},m=null,_="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase()),y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){"use strict";function a(t,e){for(var n=[],a={},i=0;i<e.length;i++){var r=e[i],o=r[0],s=r[1],d=r[2],c=r[3],f={id:t+":"+i,css:s,media:d,sourceMap:c};a[o]?a[o].parts.push(f):n.push(a[o]={id:o,parts:[f]})}return n}e.a=a},function(t,e,n){function a(t,e,n){var a=e&&n||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null),t=t||{};var o=t.random||(t.rng||i)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e)for(var s=0;s<16;++s)e[a+s]=o[s];return e||r(o)}var i=n(8),r=n(9);t.exports=a},function(t,e){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var a=new Uint8Array(16);t.exports=function(){return n(a),a}}else{var i=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),i[e]=t>>>((3&e)<<3)&255;return i}}},function(t,e){function n(t,e){var n=e||0,i=a;return[i[t[n++]],i[t[n++]],i[t[n++]],i[t[n++]],"-",i[t[n++]],i[t[n++]],"-",i[t[n++]],i[t[n++]],"-",i[t[n++]],i[t[n++]],"-",i[t[n++]],i[t[n++]],i[t[n++]],i[t[n++]],i[t[n++]],i[t[n++]]].join("")}for(var a=[],i=0;i<256;++i)a[i]=(i+256).toString(16).substr(1);t.exports=n},function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container flip-clock"},[t._l(t.timeData,function(e){return[n("span",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"data.show"}],key:e.label,staticClass:"flip-clock__piece",attrs:{id:e.elementId}},[n("span",{staticClass:"flip-clock__card flip-card"},[n("b",{staticClass:"flip-card__top"},[t._v(t._s(t._f("twoDigits")(e.current)))]),t._v(" "),n("b",{staticClass:"flip-card__bottom",attrs:{"data-value":t._f("twoDigits")(e.current)}}),t._v(" "),n("b",{staticClass:"flip-card__back",attrs:{"data-value":t._f("twoDigits")(e.previous)}}),t._v(" "),n("b",{staticClass:"flip-card__back-bottom",attrs:{"data-value":t._f("twoDigits")(e.previous)}})]),t._v(" "),n("span",{staticClass:"flip-clock__slot"},[t._v(t._s(e.label))])])]})],2)},i=[]},function(t,e,n){"use strict";function a(t,e,n,a,i,r,o,s){t=t||{};var d=typeof t.default;"object"!==d&&"function"!==d||(t=t.default);var c="function"==typeof t?t.options:t;e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),a&&(c.functional=!0),r&&(c._scopeId=r);var f;if(o?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=f):i&&(f=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),f)if(c.functional){c._injectStyles=f;var l=c.render;c.render=function(t,e){return f.call(e),l(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,f):[f]}return{exports:t,options:c}}e.a=a}])});

/***/ })

}]);
//# sourceMappingURL=live-as-guest.js.map?id=f0b1290db4ebd385c972