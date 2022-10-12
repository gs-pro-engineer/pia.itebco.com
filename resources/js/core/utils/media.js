import { copyToClipboard } from '@core/utils'

function hasGetUserMedia() {
    return !!(navigator.mediaDevices &&
        navigator.mediaDevices.getUserMedia);
}

if (!hasGetUserMedia()) {
    alert($t('misc.get_user_media_not_supported'));
}

if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
    // Firefox 38+ seems having support of enumerateDevicesx
    navigator.enumerateDevices = function(callback) {
        navigator.mediaDevices.enumerateDevices()
            .then(callback)
    }
}

const isHTTPs = location.protocol === 'https:'
let MediaDevices = []
let canEnumerate = false

if (typeof MediaStreamTrack !== 'undefined' && 'getSources' in MediaStreamTrack) {
    canEnumerate = true
} else if (navigator.mediaDevices && !!navigator.mediaDevices.enumerateDevices) {
    canEnumerate = true
}

export let mediaProps = {
    hasMicrophone: false,
    hasWebcam: false,
    isMicrophoneAlreadyCaptured: false,
    isWebcamAlreadyCaptured: false,
    permissionError: true,
}

export const getMediaProps = function() {
    return mediaProps
}

export const checkDeviceSupport = function(callback) {
    if (!canEnumerate) {
        return
    }

    if (!navigator.enumerateDevices && window.MediaStreamTrack && window.MediaStreamTrack.getSources) {
        navigator.enumerateDevices = window.MediaStreamTrack.getSources.bind(window.MediaStreamTrack)
    }

    if (!navigator.enumerateDevices && navigator.enumerateDevices) {
        navigator.enumerateDevices = navigator.enumerateDevices.bind(navigator)
    }

    if (!navigator.enumerateDevices) {
        if (callback) {
            callback(mediaProps)
        }
        return
    }

    MediaDevices = []
    navigator.enumerateDevices(function(devices) {
        devices.forEach(function(_device) {
            let device = {}
            for (let d in _device) {
                device[d] = _device[d]
            }

            if (device.kind === 'audio') {
                device.kind = 'audioinput'
            }

            if (device.kind === 'video') {
                device.kind = 'videoinput'
            }

            let skip
            MediaDevices.forEach(function(d) {
                if (d.id === device.id && d.kind === device.kind) {
                    skip = true
                }
            })

            if (skip) {
                return
            }

            if (!device.deviceId) {
                device.deviceId = device.id
            }

            if (!device.id) {
                device.id = device.deviceId
            }

            if (!device.label) {
                device.label = 'Please invoke getUserMedia once.'
                if (!isHTTPs) {
                    device.label = 'HTTPs is required to get label of this ' + device.kind + ' device.'
                }
            } else {
                if (device.kind === 'videoinput' && !mediaProps.isWebcamAlreadyCaptured) {
                    mediaProps.isWebcamAlreadyCaptured = true
                }

                if (device.kind === 'audioinput' && !mediaProps.isMicrophoneAlreadyCaptured) {
                    mediaProps.isMicrophoneAlreadyCaptured = true
                }
            }

            if (device.kind === 'audioinput') {
                mediaProps.hasMicrophone = true
            }

            if (device.kind === 'videoinput') {
                mediaProps.hasWebcam = true
            }

            // there is no 'videoouput' in the spec.

            MediaDevices.push(device)
        })

        if (callback) {
            callback(mediaProps)
        }
    })
}

export const getMediaPermission = function(withStream = false) {
    return new Promise((res, rej) => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((stream) => {
                mediaProps.permissionError = false
                debugger
                if (stream && withStream) {
                    res(stream)
                } else {
                    res(true)
                }
            })
            .catch(err => {
                mediaProps.permissionError = true
                rej(err)
            })
    })
}

export const initMedia = function(checkMic = true, checkCam = true) {
    checkDeviceSupport((mediaSupport) => {
        if (mediaSupport) {
            let showError = false
            if (checkMic && !mediaSupport.hasMicrophone) {
                showError = true
            }

            if (checkCam && !mediaSupport.hasWebcam) {
                showError = true
            }

            if (showError) {
                showNoDeviceError(mediaSupport)
            }
        }
    })
}

export const showMediaPermissionError = function(err) {
    let msg = {
        icon: 'error',
        html: '',
        footer: $t('misc.solve_and_refresh'),
    }
    if (!err) {
        return;
    }

    if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        msg.title = $t('misc.media.permission_denied')
        msg.html = $t('misc.media.permission_denied_text')
    } else if (err.name === 'NotFoundError') {
        msg.title = $t('misc.media.not_found')
        msg.html = $t('misc.media.not_found_text')
    } else if (err.name === 'NotReadableError' || err.name === 'OverconstrainedError') {
        msg.title = $t('misc.media.unreadable')
        msg.html = $t('misc.media.unreadable_text')
    } else if (err.name === 'SecurityError' || err.name === 'TypeError') {
        msg.title = $t('misc.media.security')
        msg.html = $t('misc.media.security_text')
    }

    msg.html += '<div><pre><code style="white-space: break-spaces;">' + err + '</code><pre></div>'

    const alrt = swtAlert.fire(msg)
    return { msg, alert: alrt }
}

export const showNoDeviceError = function(deviceList) {
    let missingDevices = []

    if (!deviceList.hasMicrophone) {
        missingDevices.push('Microphone')
    }
    if (!deviceList.hasWebcam) {
        missingDevices.push('WebCam')
    }

    const msg = {
        icon: 'error',
        title: $t('misc.media.missing'),
        text: $t('misc.media.missing_text', { attribute: missingDevices.join(', ') }),
        footer: $t('misc.solve_and_refresh')
    }

    swtAlert.fire(msg)
}

export const getDisplayMedia = function() {
    if (navigator.mediaDevices.getDisplayMedia) {
        return navigator.mediaDevices.getDisplayMedia({ video: true, audio: false })
    } else if (navigator.getDisplayMedia) {
        return navigator.getDisplayMedia({ video: true })
    }
}

export const playAudio = function(opts) {
    const defaultOpts = {
        type: null,
        loop: false,
        duration: 1000,
    }

    opts = Object.assign({}, defaultOpts, opts)

    if (!opts.type) {
        return
    }

    const audioEle = new Audio()
    audioEle.preload = 'auto'
    audioEle.autoplay = true
    audioEle.loop = opts.loop
    audioEle.src = `/sound/${opts.type}.mp3`
    audioEle.play()
        .then(() => {
            setTimeout(() => {
                audioEle && audioEle.pause()
            }, opts.duration)
        })
        .catch(error => {
            console.error(error)
        })
    return audioEle
}

export const playIncomingCall = function(onCondition = true) {
    if (document.hasFocus() && !onCondition) {
        return;
    }
    return playAudio({ type: 'incoming', loop: true, duration: 30000 })
}

export const playOutgoingCall = function(onCondition = true) {
    if (document.hasFocus() && !onCondition) {
        return;
    }
    return playAudio({ type: 'calling', loop: true, duration: 30000 })
}

export const playIncomingMessage = function(onCondition = true) {
    if (document.hasFocus() && !onCondition) {
        return;
    }
    return playAudio({ type: 'message', duration: 3000 })
}

export const playScreenshot = function(onCondition = true) {
    if (document.hasFocus() && !onCondition) {
        return;
    }
    return playAudio({ type: 'screenshot', duration: 3000 })
}

export const share = function(data = {}, callback, useNativeShare = true) {
    const currentUrl = document.querySelector('link[rel=canonical]') ? document.querySelector('link[rel=canonical]').href : document.location.href
    const url = data.url ? data.url : currentUrl

    if (useNativeShare && navigator.share) {
        navigator.share({
                title: data.title ? data.title : document.title,
                url: url
            })
            .then(() => {
            })
            .catch(console.error)
    } else {
        let alertContent = {
            showCancelButton: true,
            confirmButtonText: $t('misc.share_alert.confirm_btn'),
            cancelButtonText: $t('misc.share_alert.cancel_btn')
        }

        if(data.alertTitle) {
            alertContent.title = data.alertTitle
        }

        if(data.alertHtml) {
            alertContent.html = data.alertHtml
        } else {
            alertContent.text = $t('misc.share_alert.text')
        }

        swtAlert.fire(alertContent)
            .then((result) => {
                if (result.value) {
                    copyToClipboard(url)
                    setTimeout(() => {
                        callback()
                    }, 500)
                }
            })
    }
}
