// /* eslint-disable no-console */
// /* eslint-disable max-len */
// /* eslint-disable camelcase */

// // import swan_ai from 'swan.ai'
// // import CanvasContext from "./api/CanvasContext"
// import CameraContext from './api/CameraContext'
// import InnerAudioContext from './api/InnerAudioContext'
// import VideoContext from './api/VideoContext'
// import LivePlayerContext from './api/LivePlayerContext'
// import OneKit from './js/OneKit'
// import FileSystemManager from './api/FileSystemManager'

// // import Context from "./api/Context"
// export default class swan {
//   static getData(that, key) {
//     return that.data[key]
//   }

//   static setData(that, key, data) {
//     if (typeof (key) === 'string') {
//       const json = {}
//       json[key] = data
//       return that.setData(json)
//     } else {
//       return that.setData(key)
//     }
//   }

//   // ///////////////// animation //////////////////////////
//   static createAnimation(object) {
//     return uni.createAnimation(object)
//   }

//   // /////////////// basic ////////////////////////////////
//   static canIUse() {
//     return true
//   }

//   static getSystemInfo(object) {
//     return uni.getSystemInfo(object)
//   }

//   static getSystemInfoSync() {
//     return uni.getSystemInfoSync()
//   }

//   static getEnvInfoSync() {
//     return uni.getEnvInfoSync()
//   }

//   static base64ToArrayBuffer(base64) {
//     return uni.base64ToArrayBuffer(base64)
//   }


//   static arrayBufferToBase64(arrayBuffer) {
//     return uni.arrayBufferToBase64(arrayBuffer)
//   }

//   static getUpdateManager(object) {
//     return uni.getUpdateManager(object)
//   }

//   static getLaunchOptionsSync(object) {
//     return uni.getLaunchOptionsSync(object)
//   }

//   // static offPageNotFound(swan_callback) {
//   //   const wx_callback  =function(wx_res){
//   //     swan_callback(swan_res);
//   //   }
//   //   return uni.offPageNotFound(wx_callback)
//   // }
//   static offPageNotFound(callback) {
//     return uni.offPageNotFound(callback)
//   }

//   static onPageNotFound(callback) {
//     return uni.onPageNotFound(callback)
//   }

//   static offError(callback) {
//     return uni.offError(callback)
//   }

//   static onError(callback) {
//     return uni.onError(callback)
//   }

//   static offAppShow(callback) {
//     return uni.offAppShow(callback)
//   }

//   static onAppShow(callback) {
//     return uni.onAppShow(callback)
//   }

//   static offAppHide(callback) {
//     return uni.offAppHide(callback)
//   }

//   static onAppHide(callback) {
//     return uni.onAppHide(callback)
//   }

//   static setEnableDebug(object) {
//     return uni.setEnableDebug(object)
//   }

//   static getLogManager(object) {
//     return uni.getLogManager(object)
//   }

//   /*
//   static createCanvasContext(canvasId, ui) {
//     return new CanvasContext(uni.createCanvasContext(canvasId))
//   } */


//   static createCameraContext(cameraId) {
//     return new CameraContext(uni.createCameraContext(cameraId))
//   }


//   static createInnerAudioContext(audioId) {
//     return new InnerAudioContext(uni.createInnerAudioContext(audioId))
//   }


//   static createLivePlayerContext(playerId) {
//     return new LivePlayerContext(uni.createLivePlayerContext(playerId))
//   }


//   static createVideoContext(videoId) {
//     return new VideoContext(uni.createVideoContext(videoId))
//   }


//   static canvasToTempFilePath(object) {
//     return uni.canvasToTempFilePath(object)
//   }

//   static canvasPutImageData(object) {
//     return uni.canvasPutImageData(object)
//   }

//   static canvasGetImageData(object) {
//     return uni.canvasGetImageData(object)
//   }

//   // //////////// Device //////////////////
//   static onBeaconServiceChange(callback) {
//     return uni.onBeaconServiceChange(callback)
//   }

//   static onBeaconUpdate(callback) {
//     return uni.onBeaconUpdate(callback)
//   }

//   static getBeacons(object) {
//     return uni.getBeacons(object)
//   }

//   static stopBeaconDiscovery(object) {
//     return uni.stopBeaconDiscovery(object)
//   }

//   static startBeaconDiscovery(object) {
//     return uni.startBeaconDiscovery(object)
//   }

//   static stopWifi(object) {
//     return uni.stopWifi(object)
//   }

//   static startWifi(object) {
//     return uni.startWifi(object)
//   }

//   static setWifiList(object) {
//     return uni.setWifiList(object)
//   }

//   static onWifiConnected(callback) {
//     return uni.onWifiConnected(callback)
//   }

//   static onGetWifiList(callback) {
//     return uni.onGetWifiList(callback)
//   }

//   static getWifiList(object) {
//     return uni.getWifiList(object)
//   }

//   static getConnectedWifi(object) {
//     return uni.getConnectedWifi(object)
//   }

//   static connectWifi(object) {
//     return uni.connectWifi(object)
//   }

//   //
//   static onAccelerometerChange(callback) {
//     return uni.onAccelerometerChange(callback)
//   }

//   static stopAccelerometer(object) {
//     return uni.stopAccelerometer(object)
//   }

//   static startAccelerometer(object) {
//     return uni.startAccelerometer(object)
//   }

//   static getBatteryInfoSync(object) {
//     return uni.getBatteryInfoSync(object)
//   }

//   static getBatteryInfo(object) {
//     return uni.getBatteryInfo(object)
//   }

//   //
//   static getClipboardData(object) {
//     return uni.getClipboardData(object)
//   }

//   static setClipboardData(object) {
//     return uni.setClipboardData(object)
//   }

//   static onCompassChange(callback) {
//     return uni.onCompassChange(callback)
//   }

//   static stopCompass(object) {
//     return uni.stopCompass(object)
//   }

//   static startCompass(object) {
//     return uni.startCompass(object)
//   }

//   static addPhoneContact(object) {
//     return uni.addPhoneContact(object)
//   }


//   static onGyroscopeChange(callback) {
//     return uni.onGyroscopeChange(callback)
//   }

//   static stopGyroscope(object) {
//     return uni.stopGyroscope(object)
//   }

//   static startGyroscope(object) {
//     return uni.startGyroscope(object)
//   }

//   //
//   static onDeviceMotionChange(callback) {
//     return uni.onDeviceMotionChange(callback)
//   }

//   static stopDeviceMotionListening(object) {
//     return uni.stopDeviceMotionListening(object)
//   }

//   static startDeviceMotionListening(object) {
//     return uni.startDeviceMotionListening(object)
//   }


//   static getNetworkType(object) {
//     return uni.getNetworkType(object)
//   }

//   static onNetworkStatusChange(callback) {
//     return uni.onNetworkStatusChange(callback)
//   }

//   //
//   static makePhoneCall(object) {
//     return uni.makePhoneCall(object)
//   }

//   static scanCode(object) {
//     return uni.scanCode(object)
//   }

//   //
//   static vibrateLong(object) {
//     return uni.vibrateLong(object)
//   }

//   static vibrateShort(object) {
//     return uni.vibrateShort(object)
//   }

//   //
//   static onMemoryWarning(callback) {
//     return uni.onMemoryWarning(callback)
//   }

//   //
//   static writeBLECharacteristicValue(object) {
//     return uni.writeBLECharacteristicValue(object)
//   }

//   static readBLECharacteristicValue(object) {
//     return uni.readBLECharacteristicValue(object)
//   }

//   static onBLEConnectionStateChange(callback) {
//     return uni.onBLEConnectionStateChange(callback)
//   }

//   static onBLECharacteristicValueChange(callback) {
//     return uni.onBLECharacteristicValueChange(callback)
//   }

//   static notifyBLECharacteristicValueChange(object) {
//     return uni.notifyBLECharacteristicValueChange(object)
//   }

//   static getBLEDeviceServices(object) {
//     return uni.getBLEDeviceServices(object)
//   }

//   static getBLEDeviceCharacteristics(object) {
//     return uni.getBLEDeviceCharacteristics(object)
//   }

//   static createBLEConnection(object) {
//     return uni.createBLEConnection(object)
//   }

//   static closeBLEConnection(object) {
//     return uni.closeBLEConnection(object)
//   }


//   static stopBluetoothDevicesDiscovery(object) { return uni.stopBluetoothDevicesDiscovery(object) }

//   static startBluetoothDevicesDiscovery(object) {
//     return uni.startBluetoothDevicesDiscovery(object)
//   }


//   static openBluetoothAdapter(object) { return uni.openBluetoothAdapter(object) }

//   static onBluetoothDeviceFound(callback) {
//     return uni.onBluetoothDeviceFound(callback)
//   }

//   static onBluetoothAdapterStateChange(callback) {
//     return uni.onBluetoothAdapterStateChange(callback)
//   }

//   static getConnectedBluetoothDevices(object) {
//     return uni.getConnectedBluetoothDevices(object)
//   }

//   static getBluetoothDevices(object) {
//     return uni.getBluetoothDevices(object)
//   }

//   static getBluetoothAdapterState(object) {
//     return uni.getBluetoothAdapterState(object)
//   }

//   static closeBluetoothAdapter(object) {
//     return uni.closeBluetoothAdapter(object)
//   }

//   //
//   static stopHCE(object) {
//     return uni.stopHCE(object)
//   }

//   static startHCE(object) {
//     return uni.startHCE(object)
//   }

//   static sendHCEMessage(object) {
//     return uni.sendHCEMessage(object)
//   }

//   static onHCEMessage(callback) {
//     return uni.onHCEMessage(callback)
//   }

//   static getHCEState(object) {
//     return uni.getHCEState(object)
//   }

//   //
//   static setScreenBrightness(object) {
//     return uni.setScreenBrightness(object)
//   }

//   static setKeepScreenOn(object) {
//     return uni.setKeepScreenOn(object)
//   }

//   static onUserCaptureScreen(callback) {
//     return uni.onUserCaptureScreen(callback)
//   }

//   static getScreenBrightness(object) {
//     return uni.getScreenBrightness(object)
//   }

//   // ///////////////// Ext //////////////
//   static getExtConfigSync(object) {
//     return uni.getExtConfigSync(object)
//   }

//   static getExtConfig(object) {
//     return uni.getExtConfig(object)
//   }

//   // ////////////////// File //////////
//   static getFileSystemManager(object) {
//     return new FileSystemManager(object)
//   }

//   static getFileInfo(bd_object) {
//     const bd_filePath = bd_object.filePath
//     const bd_digestAlgorithm = bd_object.digestAlgorithm
//     const bd_success = bd_object.success
//     const bd_fail = bd_object.fail
//     const bd_complete = bd_object.complete
//     bd_object = null
//     //
//     const wx_filePath = OneKit.bd_filePath2wx_filePath(bd_filePath)
//     const wx_digestAlgorithm = bd_digestAlgorithm
//     const swan_object = {
//       filePath: wx_filePath,
//       digestAlgorithm: wx_digestAlgorithm,
//       success(wx_res) {
//         const bd_res = {
//           size: wx_res.size,
//           digest: wx_res.digest
//         }
//         if (bd_success) {
//           bd_success(bd_res)
//         }
//         if (bd_complete) {
//           bd_complete(bd_res)
//         }
//       },
//       fail(wx_res) {
//         const bd_res = wx_res
//         if (bd_fail) {
//           bd_fail(bd_res)
//         }
//         if (bd_complete) {
//           bd_complete(bd_res)
//         }
//       }
//     }
//     return uni.getFileInfo(swan_object)
//   }

//   static removeSavedFile(bd_object) {
//     const bd_filePath = bd_object.filePath
//     const bd_success = bd_object.success
//     const bd_fail = bd_object.fail
//     const bd_complete = bd_object.complete
//     bd_object = null
//     //
//     const wx_filePath = OneKit.bd_filePath2wx_filePath(bd_filePath)
//     const swan_object = {
//       filePath: wx_filePath,
//       success(wx_res) {
//         const bd_res = {
//           errMsg: wx_res.errMsg
//         }
//         if (bd_success) {
//           bd_success(bd_res)
//         }
//         if (bd_complete) {
//           bd_complete(bd_res)
//         }
//       },
//       fail(wx_res) {
//         const bd_res = wx_res
//         if (bd_fail) {
//           bd_fail(bd_res)
//         }
//         if (bd_complete) {
//           bd_complete(bd_res)
//         }
//       }
//     }
//     return uni.removeSavedFile(swan_object)
//   }

//   static getSavedFileInfo(object) {
//     return uni.getSavedFileInfo(object)
//   }

//   static getSavedFileList(bd_object) {
//     const bd_success = bd_object.success
//     const bd_fail = bd_object.fail
//     const bd_complete = bd_object.complete
//     bd_object = null
//     //
//     const swan_object = {
//       success(wx_res) {
//         const bd_res = {
//           fileList: wx_res.fileList.map(function (wx_file) {
//             const bd_file = {
//               // eslint-disable-next-line no-undef
//               filePath: getApp().wxStorePath2bdSavePath[wx_file.filePath],
//               createTime: wx_file.createTime,
//               size: wx_file.size
//             }
//             return bd_file
//           })
//         }
//         if (bd_success) {
//           bd_success(bd_res)
//         }
//         if (bd_complete) {
//           bd_complete(bd_res)
//         }
//       },
//       fail(wx_res) {
//         const bd_res = wx_res
//         if (bd_fail) {
//           bd_fail(bd_res)
//         }
//         if (bd_complete) {
//           bd_complete(bd_res)
//         }
//       }
//     }
//     return uni.getSavedFileList(swan_object)
//   }

//   static openDocument(object) {
//     return uni.openDocument(object)
//   }

//   static saveFile(bd_object) {
//     const bd_tempFilePath = bd_object.tempFilePath
//     const ext = bd_tempFilePath.substring(bd_tempFilePath.lastIndexOf('.'))
//     const bd_filePath = bd_object.filePath || OneKit.new_bd_filePath(ext)
//     const bd_success = bd_object.success
//     const bd_fail = bd_object.fail
//     const bd_complete = bd_object.complete
//     bd_object = null
//     //
//     const wx_tempFilePath = bd_tempFilePath
//     const swan_object = {
//       tempFilePath: wx_tempFilePath,
//       success(wx_res) {
//         OneKit.save_wx_storePath(bd_filePath, wx_res.savedFilePath)
//         const bd_res = {
//           savedFilePath: bd_filePath,
//         }
//         if (bd_success) {
//           bd_success(bd_res)
//         }
//         if (bd_complete) {
//           bd_complete(bd_res)
//         }
//       },
//       fail(wx_res) {
//         const bd_res = wx_res
//         if (bd_fail) {
//           bd_fail(bd_res)
//         }
//         if (bd_complete) {
//           bd_complete(bd_res)
//         }
//       }
//     }
//     uni.saveFile(swan_object)
//   }

//   // ////////// Location ///////////////
//   static openLocation(object) {
//     return uni.openLocation(object)
//   }

//   static getLocation(object) {
//     return uni.getLocation(object)
//   }

//   static chooseLocation(object) {
//     return uni.chooseLocation(object)
//   }

//   // //////// Media ////////////////////
//   static createMapContext(object) {
//     return uni.createMapContext(object)
//   }

//   static compressImage(object) {
//     return uni.compressImage(object)
//   }

//   static saveImageToPhotosAlbum(object) {
//     return uni.saveImageToPhotosAlbum(object)
//   }

//   static getImageInfo(object) {
//     return uni.getImageInfo(object)
//   }

//   static previewImage(object) {
//     return uni.previewImage(object)
//   }

//   static chooseImage(object) {
//     return uni.chooseImage(object)
//   }

//   static saveVideoToPhotosAlbum(object) {
//     return uni.saveVideoToPhotosAlbum(object)
//   }

//   static chooseVideo(object) {
//     return uni.chooseVideo(object)
//   }

//   // eslint-disable-next-line no-dupe-class-members
//   static createVideoContext(object) {
//     return uni.createVideoContext(object)
//   }

//   static stopVoice(object) {
//     return uni.stopVoice(object)
//   }

//   static pauseVoice(object) {
//     return uni.pauseVoice(object)
//   }

//   static playVoice(object) {
//     return uni.playVoice(object)
//   }

//   static setInnerAudioOption(object) {
//     return uni.setInnerAudioOption(object)
//   }

//   static getAvailableAudioSources(object) {
//     return uni.getAvailableAudioSources(object)
//   }

//   // eslint-disable-next-line no-dupe-class-members
//   static createInnerAudioContext(object) {
//     return uni.createInnerAudioContext(object)
//   }

//   static createAudioContext(object) {
//     return uni.createAudioContext(object)
//   }

//   static onBackgroundAudioStop(callback) {
//     return uni.onBackgroundAudioStop(callback)
//   }

//   static onBackgroundAudioPause(callback) {
//     return uni.onBackgroundAudioPause(callback)
//   }

//   static onBackgroundAudioPlay(callback) {
//     return uni.onBackgroundAudioPlay(callback)
//   }

//   static stopBackgroundAudio(object) {
//     return uni.stopBackgroundAudio(object)
//   }

//   static seekBackgroundAudio(object) {
//     return uni.seekBackgroundAudio(object)
//   }

//   static pauseBackgroundAudio(object) {
//     return uni.pauseBackgroundAudio(object)
//   }

//   static playBackgroundAudio(object) {
//     return uni.playBackgroundAudio(object)
//   }

//   static getBackgroundAudioPlayerState(object) {
//     return uni.getBackgroundAudioPlayerState(object)
//   }

//   static getBackgroundAudioManager(object) {
//     return uni.getBackgroundAudioManager(object)
//   }

//   static createLivePusherContext(object) {
//     return uni.createLivePusherContext(object)
//   }

//   static getRecorderManager(object) {
//     return uni.getRecorderManager(object)
//   }

//   // ////////////// Network ///////////////
//   static request(object) {
//     return uni.request(object)
//   }

//   static downloadFile(object) {
//     return uni.downloadFile(object)
//   }

//   static uploadFile(bd_object) {
//     return uni.uploadFile(bd_object)
//   }

//   //
//   static connectSocket(object) {
//     return uni.connectSocket(object)
//   }

//   static onSocketError(callback) {
//     return uni.onSocketError(callback)
//   }

//   static onSocketMessage(swan_callback) {
//     if (!swan_callback) {
//       return
//     }
//     const wx_callback = function (wx_res) {
//       const swan_res = {
//         data: wx_res.data,
//         dataType: wx_res.dataType
//       }

//       swan_callback(swan_res)
//     }
//     uni.onSocketMessage(wx_callback)
//   }

//   static onSocketClose(callback) {
//     return uni.onSocketClose(callback)
//   }

//   static onSocketOpen(callback) {
//     return uni.connectSocket(callback)
//   }

//   static sendSocketMessage(object) {
//     return uni.sendSocketMessage(object)
//   }

//   static closeSocket(object) {
//     return uni.closeSocket(object)
//   }

//   static offLocalServiceResolveFail(callback) {
//     return uni.offLocalServiceResolveFail(callback)
//   }

//   static onLocalServiceResolveFail(callback) {
//     return uni.onLocalServiceResolveFail(callback)
//   }

//   static offLocalServiceDiscoveryStop(callback) {
//     return uni.offLocalServiceDiscoveryStop(callback)
//   }

//   static onLocalServiceDiscoveryStop(callback) {
//     return uni.onLocalServiceDiscoveryStop(callback)
//   }

//   static offLocalServiceLost(callback) {
//     return uni.offLocalServiceLost(callback)
//   }

//   static onLocalServiceLost(callback) {
//     return uni.onLocalServiceLost(callback)
//   }

//   static offLocalServiceFound(callback) {
//     return uni.offLocalServiceFound(callback)
//   }

//   static onLocalServiceFound(callback) {
//     return uni.onLocalServiceFound(callback)
//   }

//   static stopLocalServiceDiscovery(object) {
//     return uni.stopLocalServiceDiscovery(object)
//   }

//   static startLocalServiceDiscovery(object) {
//     return uni.startLocalServiceDiscovery(object)
//   }

//   // eslint-disable-next-line no-dupe-class-members
//   static stopLocalServiceDiscovery(object) {
//     return uni.stopLocalServiceDiscovery(object)
//   }

//   // eslint-disable-next-line no-dupe-class-members
//   static startLocalServiceDiscovery(object) {
//     return uni.startLocalServiceDiscovery(object)
//   }

//   // eslint-disable-next-line no-dupe-class-members
//   static onLocalServiceResolveFail(callback) {
//     return uni.onLocalServiceResolveFail(callback)
//   }

//   // eslint-disable-next-line no-dupe-class-members
//   static onLocalServiceLost(callback) {
//     return uni.onLocalServiceLost(callback)
//   }

//   // eslint-disable-next-line no-dupe-class-members
//   static onLocalServiceFound(callback) {
//     return uni.onLocalServiceFound(callback)
//   }

//   // eslint-disable-next-line no-dupe-class-members
//   static onLocalServiceDiscoveryStop(callback) {
//     return uni.onLocalServiceDiscoveryStop(callback)
//   }

//   // eslint-disable-next-line no-dupe-class-members
//   static offLocalServiceResolveFail(callback) {
//     return uni.offLocalServiceResolveFail(callback)
//   }

//   // eslint-disable-next-line no-dupe-class-members
//   static offLocalServiceLost(callback) {
//     return uni.offLocalServiceLost(callback)
//   }

//   // eslint-disable-next-line no-dupe-class-members
//   static offLocalServiceFound(callback) {
//     return uni.offLocalServiceFound(callback)
//   }

//   // eslint-disable-next-line no-dupe-class-members
//   static offLocalServiceDiscoveryStop(callback) {
//     return uni.offLocalServiceDiscoveryStop(callback)
//   }

//   // /////// Open Interface //////////
//   static _checkSession() {
//     const now = new Date().getTime()

//     // eslint-disable-next-line no-undef
//     return getApp().onekitwx._jscode && getApp().onekitwx._login && now <= getApp().onekitwx._login + 1000 * 60 * 60 * 24 * 3
//   }

//   static checkSession(object) {
//     if (swan._checkSession()) {
//       if (object.success) {
//         object.success()
//       }
//       if (object.complete) {
//         object.complete()
//       }
//     } else {
//       if (object.fail) {
//         object.fail()
//       }
//       if (object.complete) {
//         object.complete()
//       }
//     }
//   }

//   // eslint-disable-next-line consistent-return
//   // static login(object) {
//   //   const that = this
//   //   if (!object) {
//   //     return uni.login(object)
//   //   }
//   //   const object2 = {}
//   //   object2.success = function (res) {
//   //     // eslint-disable-next-line no-undef
//   //     getApp().onekitwx._code = res.code

//   //     // eslint-disable-next-line no-undef
//   //     getApp().onekitwx._login = new Date().getTime()
//   //     const result = {
//   //       code: res.code
//   //     }
//   //     if (object.success) {
//   //       object.success(result)
//   //     }
//   //     if (object.complete) {
//   //       object.complete(result)
//   //     }
//   //   }
//   //   object2.fail = function (res) {
//   //     if (object.fail) {
//   //       object.fail(res)
//   //     }
//   //     if (object.complete) {
//   //       object.complete(res)
//   //     }
//   //   }
//   //   if (swan._checkSession()) {
//   //     object2.success({

//   //       // eslint-disable-next-line no-undef
//   //       code: getApp().onekitwx._code
//   //     })
//   //   } else {
//   //     uni.login(object2)
//   //   }
//   // }

//   static requestPolymerPayment(object) {
//     swan.login({
//       success(res) {
//         const code = res.code

//         // eslint-disable-next-line no-undef
//         const url = getApp().onekitwx.server + 'orderinfo'
//         uni.request({
//           url,
//           header: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//           },
//           method: 'POST',
//           data: {
//             orderInfo: JSON.stringify(object.orderInfo),
//             code
//           },
//           success(res) {
//             uni.requestPayment({
//               appId: res.data.appId,
//               timeStamp: res.data.timeStamp,
//               nonceStr: res.data.nonceStr,
//               package: res.data.package,
//               signType: res.data.signType,
//               paySign: res.data.paySign,
//             })
//             if (object.success) {
//               object.success(res)
//             }
//             if (object.complete) {
//               object.complete(res)
//             }
//           },
//           fail(res) {
//             if (object.fail) {
//               object.fail(res)
//             }
//           }
//         })
//       }
//     })
//   }

//   static _getUserInfo(data, callback, isAPI) {
//     console.log(data)
//     swan.login({
//       success(res) {
//         const code = res.code

//         // eslint-disable-next-line no-undef
//         const url = getApp().onekitwx.server + 'userinfo'
//         uni.request({
//           url,
//           header: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//           },
//           method: 'POST',
//           data: {
//             isAPI,
//             withCredentials: true,
//             data: JSON.stringify(data),
//             code
//           },
//           success(res) {
//             callback(res.data)
//           },
//           fail(res) {
//             console.error(res)
//           }
//         })
//       }
//     })
//   }

//   static getUserInfo(object) {
//     // eslint-disable-next-line no-undef
//     getApp().onekitwx.getuserinfo = (data) => {
//       swan._getUserInfo(data, (res) => {
//         if (object.success) {
//           object.success(res)
//         }
//         if (object.complete) {
//           object.complete(res)
//         }
//       }, true)
//     }
//     uni.navigateTo({
//       url: '/onekitwx/page/getuserinfo/getuserinfo'
//     })
//   }

//   // static getOpenData(object) {
//   //   function success(res) {
//   //     const opendata = res.userInfo

//   //     // eslint-disable-next-line no-undef
//   //     getApp().onekitwx.opendata = opendata

//   //     // eslint-disable-next-line no-undef
//   //     getApp().onekitwx.opendataCallbacks = []

//   //     // eslint-disable-next-line no-undef
//   //     for (let cb = 0; cb < getApp().onekitwx.opendataCallbacks.length; cb++) {
//   //       // eslint-disable-next-line no-undef
//   //       getApp().onekitwx.opendataCallbacks[cb](opendata)
//   //     }
//   //     if (object.success) {
//   //       object.success(opendata)
//   //     }
//   //     if (object.complete) {
//   //       object.complete(opendata)
//   //     }
//   //   }

//   //   // eslint-disable-next-line no-undef
//   //   const opendata = getApp().onekitwx.opendata
//   //   if (opendata) {
//   //     if (Object.keys(opendata) > 0) {
//   //       object.success(opendata)
//   //     } else if (object.success) {
//   //       // eslint-disable-next-line no-undef
//   //       getApp().onekitwx.opendataCallbacks.push(object.success)
//   //     }
//   //     return
//   //   }

//   //   // eslint-disable-next-line no-undef
//   //   getApp().onekitwx.opendata = {}
//   //   swan.login({
//   //     success(res) {
//   //       const code = res.code
//   //       swan.getUserInfo({

//   //         success(res) {
//   //           // eslint-disable-next-line no-undef
//   //           const url = getApp().onekitwx.server + 'userinfo'
//   //           uni.httpRequest({
//   //             url,
//   //             header: {
//   //               'Content-Type': 'application/x-www-form-urlencoded'
//   //             },
//   //             method: 'POST',
//   //             data: {
//   //               withCredentials: false,
//   //               isAPI: false,
//   //               code
//   //             },
//   //             success(res) {
//   //               success(res.data)
//   //             },
//   //             fail(res) {
//   //               console.log(res)
//   //             }
//   //           })
//   //         }
//   //       })
//   //     }
//   //   })
//   // }

//   static getPhoneNumber(data, callback) {
//     swan.login({
//       success(res) {
//         const code = res.code

//         // eslint-disable-next-line no-undef
//         const url = getApp().onekitwx.server + 'phonenumber'
//         uni.request({
//           url,
//           header: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//           },
//           method: 'POST',
//           data: {
//             code,
//             data: JSON.stringify(data)
//           },
//           success(res) {
//             callback(res.data)
//           }
//         })
//       }
//     })
//   }

//   static navigateToMiniProgram(object) {
//     return uni.navigateToMiniProgram(object)
//   }

//   static navigateBackMiniProgram(object) {
//     return uni.navigateBackMiniProgram(object)
//   }

//   static getAccountInfoSync(object) {
//     return uni.getAccountInfoSync(object)
//   }

//   static reportMonitor(object) {
//     return uni.reportMonitor(object)
//   }

//   static reportAnalytics(object, eventName) {
//     return uni.reportAnalytics(object, eventName)
//   }

//   static requestPayment(object) {
//     return uni.requestPayment(object)
//   }

//   static authorize(object) {
//     return uni.authorize(object)
//   }

//   static openSetting(object) {
//     return uni.openSetting(object)
//   }

//   static getSetting(object) {
//     return uni.getSetting(object)
//   }

//   static chooseAddress(object) {
//     return uni.chooseAddress(object)
//   }

//   static openCard(object) {
//     return uni.openCard(object)
//   }

//   static addCard(object) {
//     return uni.addCard(object)
//   }

//   static chooseInvoiceTitle(object) {
//     return uni.chooseInvoiceTitle(object)
//   }

//   static chooseInvoice(object) {
//     return uni.chooseInvoice(object)
//   }

//   static startSoterAuthentication(object) {
//     return uni.startSoterAuthentication(object)
//   }

//   static checkIsSupportSoterAuthentication(object) {
//     return uni.checkIsSupportSoterAuthentication(object)
//   }

//   static checkIsSoterEnrolledInDevice(object) {
//     return uni.checkIsSoterEnrolledInDevice(object)
//   }

//   static getWeRunData(object) {
//     return uni.getWeRunData(object)
//   }

//   // eslint-disable-next-line no-dupe-class-members
//   static reportMonitor(name, value) {
//     // eslint-disable-next-line no-undef
//     const js_code = getApp().OneKit.jscode
//     uni.httpRequest({
//       url: 'http://192.168.0.106:8080/onekit_adapter/reportMonitor',
//       header: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       method: 'POST',
//       data: {
//         js_code,
//         name,
//         number: value
//       },
//       success: (res) => {
//         console.log('success')

//         console.log(res.data)
//       },
//       fail(res) {
//         console.log(res)
//       },
//       complete(res) {
//         console.log(res)
//       }

//     })
//   }

//   // //////// Router //////////////
//   static navigateBack(object) {
//     return uni.navigateBack(object)
//   }

//   static switchTab(object) {
//     return uni.switchTab(object)
//   }

//   static navigateTo(object) {
//     return uni.navigateTo(object)
//   }

//   static reLaunch(object) {
//     return uni.reLaunch(object)
//   }

//   static redirectTo(object) {
//     return uni.redirectTo(object)
//   }

//   // /////////// Share /////////////
//   static updateShareMenu(object) {
//     return uni.updateShareMenu(object)
//   }

//   static showShareMenu(object) {
//     return uni.showShareMenu(object)
//   }

//   static hideShareMenu(object) {
//     return uni.hideShareMenu(object)
//   }

//   static getShareInfo(object) {
//     return uni.getShareInfo(object)
//   }

//   // ///////////// Storage //////////////
//   static getStorageInfoSync(object) {
//     return uni.getStorageInfoSync(object)
//   }

//   static getStorageInfo(object) {
//     return uni.getStorageInfo(object)
//   }

//   static clearStorageSync(object) {
//     return uni.clearStorageSync(object)
//   }

//   static clearStorage(object) {
//     return uni.clearStorage(object)
//   }

//   static removeStorageSync(object) {
//     return uni.removeStorageSync(object)
//   }

//   static removeStorage(object) {
//     return uni.removeStorage(object)
//   }

//   static setStorageSync(key, value) {
//     return uni.setStorageSync(key, value)
//   }

//   static setStorage(object) {
//     return uni.setStorage(object)
//   }

//   static getStorageSync(key) {
//     return uni.getStorageSync(key)
//   }

//   static getStorage(object) {
//     return uni.getStorage(object)
//   }

//   // //////////// UI ////////////////
//   static showActionSheet(object) {
//     return uni.showActionSheet(object)
//   }

//   // static redirectTo(object) { return uni.redirectTo(object) }
//   // static redirectTo(object) { return uni.redirectTo(object) }
//   static hideLoading(object) {
//     return uni.hideLoading(object)
//   }

//   static showLoading(object) {
//     return uni.showLoading(object)
//   }

//   static hideToast(object) {
//     return uni.hideToast(object)
//   }

//   static showToast(object) {
//     return uni.showToast(object)
//   }

//   static showModal(object) {
//     return uni.showModal(object)
//   }

//   static setNavigationBarColor(object) {
//     return uni.setNavigationBarColor(object)
//   }

//   static hideNavigationBarLoading(object) {
//     return uni.hideNavigationBarLoading(object)
//   }

//   static showNavigationBarLoading(object) {
//     return uni.showNavigationBarLoading(object)
//   }

//   static setNavigationBarTitle(object) {
//     return uni.setNavigationBarTitle(object)
//   }

//   static setBackgroundTextStyle(object) {
//     return uni.setBackgroundTextStyle(object)
//   }

//   static setBackgroundColor(object) {
//     return uni.setBackgroundColor(object)
//   }

//   static setTabBarItem(object) {
//     return uni.setTabBarItem(object)
//   }

//   static setTabBarStyle(object) {
//     return uni.setTabBarStyle(object)
//   }

//   static hideTabBar(object) {
//     return uni.hideTabBar(object)
//   }

//   static showTabBar(object) {
//     return uni.showTabBar(object)
//   }

//   static hideTabBarRedDot(object) {
//     return uni.hideTabBarRedDot(object)
//   }

//   static showTabBarRedDot(object) {
//     return uni.showTabBarRedDot(object)
//   }

//   static removeTabBarBadge(object) {
//     return uni.removeTabBarBadge(object)
//   }

//   static setTabBarBadge(object) {
//     return uni.setTabBarBadge(object)
//   }

//   static loadFontFace(object) {
//     return uni.loadFontFace(object)
//   }

//   static stopPullDownRefresh(object) {
//     return uni.stopPullDownRefresh(object)
//   }

//   static startPullDownRefresh(object) {
//     return uni.startPullDownRefresh(object)
//   }

//   static pageScrollTo(object) {
//     return uni.pageScrollTo(object)
//   }

//   static setTopBarText(object) {
//     return uni.setTopBarText(object)
//   }

//   static nextTick(object) {
//     return uni.nextTick(object)
//   }

//   static getMenuButtonBoundingClientRect(object) {
//     return uni.getMenuButtonBoundingClientRect(object)
//   }

//   static offWindowResize(callback) {
//     return uni.offWindowResize(callback)
//   }

//   static onWindowResize(callback) {
//     return uni.onWindowResize(callback)
//   }

//   // //////////// Worker ///////////////
//   /*
//   static createWorker(path) {
//     return new WORKER(path)
//   } */

//   // //////////// WXML ///////////////
//   static createSelectorQuery(object) {
//     return uni.createSelectorQuery(object)
//   }

//   static createIntersectionObserver(swan_object) {
//     if (!swan_object) {
//       return
//     }
//     const swan_thresholds = swan_object.thresholds
//     const swan_initialRatio = swan_object.initialRatio
//     const swan_selectAll = swan_object.selectAll
//     const swan_success = swan_object.success
//     const swan_complete = swan_object.complete
//     const swan_fail = swan_object.fail

//     swan_object = null
//     //
//     const swan_object = {}
//     if (swan_thresholds) {
//       swan_object.thresholds = swan_thresholds
//     }
//     if (swan_initialRatio) {
//       swan_object.initialRatio = swan_initialRatio
//     }
//     if (swan_selectAll) {
//       swan_object.observeAll = swan_selectAll
//     }
//     if (swan_success) {
//       swan_object.success = swan_success
//     }
//     if (swan_complete) {
//       swan_object.complete = swan_complete
//     }
//     if (swan_fail) {
//       swan_object.fail = swan_fail
//     }
//     swan_object.success = function (wx_res) {
//       const swan_res = wx_res
//       if (swan_success) {
//         swan_success(swan_res)
//       }
//       if (swan_complete) {
//         swan_complete(swan_res)
//       }
//     }
//     swan_object.fail = function (wx_res) {
//       const swan_res = wx_res
//       if (swan_fail) {
//         swan_fail(swan_res)
//       }
//       if (swan_complete) {
//         swan_complete(swan_res)
//       }
//     }

//     uni.createIntersectionObserver(swan_object)
//   }

//   // ///////////////////////////////////
//   static hideKeyboard(object) {
//     return uni.hideKeyboard(object)
//   }

//   // /////////////////////////////////

//   static createARCameraContext() {
//     throw new Error('createARCameraContext�ݲ�֧��!!')
//   }

//   static setURLQuery(urlQuery) {
//     const page = OneKit.current()
//     //
//     const oldURLQuery = page.query
//     const newURLQuery = oldURLQuery
//     for (const key of Object.keys(urlQuery)) {
//       const value = urlQuery[key]
//       newURLQuery[key] = value
//     }
//     page.query = newURLQuery
//     //
//     if (page.onURLQueryChange) {
//       page.onURLQueryChange({oldURLQuery, newURLQuery})
//     }
//   }

//   static getURLQuery() {
//     const page = OneKit.current()
//     //
//     return page.query
//   }
// }
// /*
// swan.ai = {}
// for (const api of ['ocrIdCard', 'ocrBankCard', 'ocrDrivingLicense', 'ocrVehicleLicense', 'textReview', 'textToAudio', 'imageAudit', 'advancedGeneralIdentify', 'objectDetectIdentify', 'carClassify', 'dishClassify', 'logoClassify', 'animalClassify', 'plantClassify', 'getVoiceRecognizer', 'faceDetect', 'faceMatch', 'faceSearch', 'facePersonVerify', 'facePersonIdmatch', 'faceLivenessSessioncode', 'nlpLexerCustom']) {
//   ai_init(api)
// }

// function ai_init(api) {
//   swan.ai[api] = (object) => swan_ai.run(api, object)
// } */
