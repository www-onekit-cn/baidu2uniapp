import AI from './api/AI'
import CLOUD from './api/CLOUD'
export default class swan {

  //////////////////////  基础  ///////////////////////////

  //////// 版本兼容判断 ///////  
	static canIUse(schema) {
		return uni.canIUse(schema);
  }
  
  //////// 应用级事件 /////
  static onPageNotFound(callback) {
		return uni.onPageNotFound(callback)
  }
  
  static onAppShow(callback) {
		return uni.onAppShow(callback)
  }
  
  static onAppHide(callback) {
		return uni.onAppHide(callback)
  }
  
  static onError(callback) {
		return uni.onError(callback)
  }
  
  static offPageNotFound(callback) {
		return uni.offPageNotFound(callback)
  }
  
  static offAppShow(callback) {
		return uni.offError(callback)
	}

	static offAppHide(callback) {
		return uni.offError(callback)
	}

  static offError(callback) {
		return uni.offError(callback)
  }
  
  //////// URL Query /////
  static getURLQuery() {
		return console.error("getURLQuery暂不支持")
  }

  static setURLQuery() {
		return console.error("setURLQuery暂不支持")
  }

  //////// 更新 /////
  static getUpdateManager() {
		return uni.getUpdateManager()
  }
  
  /////// 调试 /////
	static setEnableDebug(object) {
		return uni.setEnableDebug(object)
  }
  
  //////////////////////  路由  /////////////////////

	static switchTab(object) {
		return uni.switchTab(object)
	}

	static reLaunch(object) {
		return uni.reLaunch(object)
	}

	static redirectTo(object) {
		return uni.redirectTo(object)
	}

	static navigateTo(object) {
		return uni.navigateTo(object)
	}

	static navigateBack(object) {
		return uni.navigateBack(object)
  }
  
  //////////////////////  网络  /////////////////////

	/////// 请求 /////
	static request(object) {
		return uni.request(object)
	}

  /////// 上传、下载 /////
  static uploadFile(object) {
		return uni.uploadFile(object)
  }
  
	static downloadFile(object) {
		return uni.downloadFile(object)
	}

  /////// websocket /////
  static connectSocket(object) {
		return uni.connectSocket(object)
  }

  static onSocketOpen(callback) {
		return uni.onSocketOpen(callback)
  }
  
  static onSocketError(callback) {
		return uni.onSocketError(callback)
	}
  
	static sendSocketMessage(object) {
		return uni.sendSocketMessage(object)
	}

	static onSocketMessage(callback) {
		return uni.onSocketMessage(callback)
	}

  static closeSocket(object) {
		return uni.closeSocket(object)
  }
  
  static onSocketClose(callback) {
		return uni.onSocketClose(callback)
  }
  
  ///////////////// 界面 ////////////////////

  /////// 交互反馈 /////
	static showToast(object) {
		return uni.showToast(object)
  }
  
  static showLoading(object) {
		return uni.showLoading(object)
	}

	static showModal(object) {
		return uni.showModal(object)
	}

	static showActionSheet(object) {
		return uni.showActionSheet(object)
	}

	static hideToast(object) {
		return uni.hideToast(object)
	}

	static hideLoading(object) {
		return uni.hideLoading(object)
  }
  
  /////// 导航栏 /////
  static showNavigationBarLoading(object) {
		return uni.showNavigationBarLoading(object)
	}

	static setNavigationBarTitle(object) {
		return uni.setNavigationBarTitle(object)
	}

	static setNavigationBarColor(object) {
		return uni.setNavigationBarColor(object)
	}

	static hideNavigationBarLoading(object) {
		return uni.hideNavigationBarLoading(object)
  }
  
  /////// 设置tabBar /////
 	static showTabBar(object) {
		return uni.showTabBar(object)
	}

	static setTabBarItem(object) {
		return uni.setTabBarItem(object)
  }
  
  static setTabBarStyle(object) {
		return uni.setTabBarStyle(object)
	}

	static setTabBarBadge(object) {
		return uni.setTabBarBadge(object)
  }
  
  static showTabBarRedDot(object) {
		return uni.showTabBarRedDot(object)
	}

	static hideTabBar(object) {
		return uni.hideTabBar(object)
	}

	static removeTabBarBadge(object) {
		return uni.removeTabBarBadge(object)
	}

	static hideTabBarRedDot(object) {
		return uni.hideTabBarRedDot(object)
  }
  
  /////// 关注小程序引导组件 /////
  static showFavoriteGuide(object) {
		return console.error("showFavoriteGuide暂不支持")
  }

  /////// 位置 /////
  static pageScrollTo(object) {
		return uni.pageScrollTo(object)
  }
  
  /////// 下拉刷新 /////
  static startPullDownRefresh(object) {
		return uni.startPullDownRefresh(object)
  }
  
  static stopPullDownRefresh(object) {
		return uni.stopPullDownRefresh(object)
  }
  
  /////// 背景 /////
  static setBackgroundColor(object) {
		return uni.setBackgroundColor(object)
  }
  
  static setBackgroundTextStyle(object) {
		return uni.setBackgroundTextStyle(object)
  }
  
  /////// 动画 /////
  static createAnimation(object) {
		return uni.createAnimation(object)
  }
  
  /////// 自定义组件 /////
  static nextTick(callback) {
		return uni.nextTick(callback)
  }
  
  /////// 菜单 /////
  static getMenuButtonBoundingClientRect() {
		return uni.getMenuButtonBoundingClientRect()
  }
  
  /////// 节点信息 /////
  static createIntersectionObserver(object1,object2) {
		return uni.createSelectorQuery(object1,object2)
  }
  
  static createSelectorQuery() {
		return uni.createSelectorQuery()
  }
  
  ///////////////// 数据储存 ////////////////////

  /////// 存储数据 /////
  static setStorage(object) {
		return uni.setStorage(object)
  }
  
  static setStorageSync(string, any) {
		return uni.setStorageSync(string, any)
  }
  
  static getStorage(object) {
		return uni.getStorage(object)
  }
  
  static getStorageSync(key) {
		return uni.getStorageSync(key)
  }
  
  static getStorageInfo(object) {
		return uni.getStorageInfo(object)
  }
  
  static getStorageInfoSync() {
		return uni.getStorageInfoSync()
	}

  /////// 存储清理 /////
  static removeStorage(object) {
		return uni.removeStorage(object)
	}

	static removeStorageSync(string) {
		return uni.setStorage(string)
  }
  
  static clearStorage(object) {
		return uni.clearStorage(object)
	}

	static clearStorageSync() {
		return uni.clearStorageSync()
  }
  
  ///////////////// AI ////////////////////

  static get ai(){
    return AI
  }

  ///////////////// 媒体 ////////////////////

  /////// 图片 /////
  static previewImage(object) {
		return uni.previewImage(object)
	}

	static getImageInfo(object) {
		return uni.getImageInfo(object)
  }
  
  static saveImageToPhotosAlbum(object) {
		return uni.saveImageToPhotosAlbum(object)
  }
  
  static chooseImage(object) {
		return uni.chooseImage(object)
  }
  
  static chooseAlbum(object) {
		return console.error("chooseAlbum暂不支持")
	}

	static compressImage(object) {
		return uni.compressImage(object)
  }
  
  /////// 相机组件控制 /////
  static createCameraContext() {
		return uni.createCameraContext()
  }
  
  /////// AR 相机组件控制 /////
  static createARCameraContext() {
		return console.error("createARCameraContext暂不支持")
  }
  
  /////// 背景音频组件控制 /////
  static getBackgroundAudioManager() {
		return uni.getBackgroundAudioManager()
  }
  
  /////// 音频组件控制 /////
  static createInnerAudioContext() {
		return uni.createInnerAudioContext()
  }
  
  static setInnerAudioOption(object) {
		return console.error("setInnerAudioOption暂不支持")
  }
  
  /////// 录音管理器 /////
  static getRecorderManager() {
		return uni.getRecorderManager()
  }
  
  static getAvailableAudioSources(object) {
		return console.error("getAvailableAudioSources暂不支持")
  }

  /////// 视频 /////
  static chooseVideo(object) {
		return uni.chooseVideo(object)
  }
  
  static saveVideoToPhotosAlbum(object) {
		return uni.saveVideoToPhotosAlbum(object)
  }
  
  /////// 视频组件控制 /////
  static createVideoContext(string, object) {
		return uni.createVideoContext(string, object)
  }
  
  /////// 透明视频组件控制 /////
  static createAnimationVideo(string) {
		return console.error("createAnimationVideo暂不支持")
  }

  /////// 直播组件控制 /////
  static createLivePlayerContext(string, object) {
		return uni.createLivePlayerContext(string, object)
  }
  
  /////// RTC 组件控制 /////
  static createRtcRoomContext(string) {
		return console.error("createRtcRoomContext暂不支持")
  }

  ///////////////// 位置 ////////////////////

  /////// 获取位置 /////
  static getLocation(object) {
		return uni.getLocation(object)
	}

  /////// 查看位置 /////
  static openLocation(object) {
		return uni.openLocation(object)
	}

  /////// 选择位置 /////
  static chooseLocation(object) {
		return uni.chooseLocation(object)
	}

  /////// 位置更新 /////
  static stopLocationUpdate(object) {
		return console.error("stopLocationUpdate暂不支持")
	}

	static onLocationChange(callback) {
		return console.error("onLocationChange暂不支持")
	}

	static offLocationChange(callback) {
		return console.error("offLocationChange暂不支持")
  }
  
  static startLocationUpdateBackground(object) {
		return console.error("startLocationUpdateBackground暂不支持")
  }
  
  /////// 地图组件控制 /////
  static createMapContext(string,object) {
		return uni.createMapContext(string,object)
  }
  
  /////////////////// 画布 //////////////////////////

	static createCanvasContext(string,object) {
		return console.error("createCanvasContext暂不支持")
  }
  
  static canvasPutImageData(object1,object2) {
		return console.error("canvasPutImageData暂不支持")
	}

	static canvasGetImageData(object1,object2) {
		return console.error("canvasGetImageData暂不支持")
	}

	static canvasToTempFilePath(object1,object2) {
		return console.error("canvasToTempFilePath暂不支持")
  }
  
  /////////////////// 文件 //////////////////////////

  /////// 保存获取文件 /////
	static saveFile(object) {
		return uni.saveFile(object)
  }
  
  static getFileInfo(object) {
		return uni.getFileInfo(object)
  }
  
  static getSavedFileList(object) {
		return uni.getSavedFileList(object)
	}

	static getSavedFileInfo(object) {
		return uni.getSavedFileInfo(object)
  }
  
  /////// 删除文件 /////
	static removeSavedFile(object) {
		return uni.removeSavedFile(object)
  }
  
  /////// 打开新的页面 /////
	static openDocument(object) {
		return uni.openDocument(object)
  }
  
  /////// 文件系统 /////
	static getFileSystemManager() {
		return uni.getFileSystemManager(object)
  }

  /////////////////// 设备 //////////////////////////
  
  //////// 系统信息 ///////
  static getSystemInfo(object) {
		return uni.getSystemInfo(object)
	}
   
	static getSystemInfoSync() {
		return uni.getSystemInfoSync()
	}

	static getEnvInfoSync() {
		return console.error("getEnvInfoSync暂不支持")
  }
  
  //////// 网络状态 ///////
	static getNetworkType(object) {
		return uni.getNetworkType(object)
	}

  static onNetworkStatusChange(callback) {
		return uni.onNetworkStatusChange(callback)
  }
  
  //////// 屏幕亮度 ///////
  static setScreenBrightness(object) {
		return uni.setScreenBrightness(object)
  }
  
  static getScreenBrightness(object) {
		return uni.getScreenBrightness(object)
	}

	static setKeepScreenOn(object) {
    return uni.setKeepScreenOn(object)
  }
  
  //////// 拨打电话 ///////
  static makePhoneCall(object) {
		return uni.makePhoneCall(object)
  }

  /////// 振动 ///////
  static vibrateLong(object) {
		return uni.vibrateLong(object)
  }
  
	static vibrateShort(object) {
		return uni.vibrateShort(object)
  }
  
  /////// 剪切板 ///////
	static setClipboardData(object) {
		return uni.setClipboardData(object)
	}

	static getClipboardData(object) {
		return uni.getClipboardData(object)
  }

  /////// 扫码 ///////
	static scanCode(object) {
		return uni.scanCode(object)
	}
  
  /////// 加速度计 ///////
  static onAccelerometerChange(callback) {
		return uni.onAccelerometerChange(callback)
  }

  static startAccelerometer(object) {
		return uni.startAccelerometer(object)
	}
  
	static stopAccelerometer(object) {
		return uni.stopAccelerometer(object)
	}

  /////// 罗盘 ///////
  static onCompassChange(callback) {
		return uni.onCompassChange(callback)
  } 

  static startCompass(object) {
		return uni.startCompass(object)
	}
  
	static stopCompass(object) {
		return uni.stopAccelerometer(object)
	}

  /////// 设备方向 ///////
  static onDeviceMotionChange(callback) {
		return console.error("onDeviceMotionChange暂不支持")
  }

  static startDeviceMotionListening(object) {
		return console.error("startDeviceMotionListening暂不支持")
	}
  
	static stopDeviceMotionListening(object) {
		return console.error("stopDeviceMotionListening暂不支持")
  }

  /////// 内存警报 ///////
	static onMemoryWarning(callback) {
		return uni.onMemoryWarning(callback)
  }
  
  /////// 手机联系人 //////
	static addPhoneContact(object) {
		return uni.addPhoneContact(object)
  }
  
  /////// 电量信息 ///////
  static getBatteryInfo(object) {
		return console.error("getBatteryInfo暂不支持")
  }
  
	static getBatteryInfoSync() {
		return console.error("getBatteryInfoSync暂不支持")
  }
  
  /////// 用户截屏事件 ///////
  static onUserCaptureScreen(callback) {
		return uni.onUserCaptureScreen(callback)
  }
  
  /////// 在系统中新建日历 ///////
  static addEventOnCalendar(object) {
    return console.error("addEventOnCalendar暂不支持")
  }

  static deleteEventOnCalendar(object) {
    return console.error("deleteEventOnCalendar暂不支持")
  }

  /////// 键盘高度 ///////
  static onKeyboardHeightChange(callback) {
		return uni.onKeyboardHeightChange(callback)
	}

	static offKeyboardHeightChange(callback) {
		return console.error("offKeyboardHeightChange暂不支持")
  }
  
  /////////////////// 第三方平台 //////////////////////////
  
  //////// 获取第三方平台数据 ///////
  static getExtConfig(object) {
		return uni.getExtConfig(object)
	}

  static getExtConfigSync() {
		return uni.getExtConfigSync()
  }
  
  /////////////////// 开放接口 //////////////////////////

  /////// 登陆 /////
	static login(object) {
		return uni.login(object)
  }
  
  static getLoginCode(object) {
		return console.error("getLoginCode暂不支持")
	}

	static checkSession(object) {
		return uni.checkSession(object)
  }
  
  static isLoginSync() {
		return console.error("isLoginSync暂不支持")
  }
  
  /////// 授权 /////
	static authorize(object) {
		return uni.authorize(object)
  }
  
  /////// 设置 /////
	static openSetting(object) {
		return uni.openSetting(object)
	}

	static getSetting(object) {
		return uni.getSetting(object)
  }
  
  /////// 百度收银台支付 /////
	static requestPolymerPayment(object) {
		return uni.requestPayment(object)
  }
  
  /////// 页面基础信息 /////
  static setPageInfo(object) {
		return console.error("setPageInfo暂不支持")
  }
  
  static setMetaDescription(object) {
		return console.error("setMetaDescription暂不支持")
  }
  
  static setPageInfo(object) {
		return console.error("setPageInfo暂不支持")
  }
  
  static setDocumentTitle(object) {
		return console.error("setDocumentTitle暂不支持")
  }
  
  /////// 分包预下载 /////
  static loadSubPackage(object) {
		return console.error("loadSubPackage暂不支持")
  }

  /////// 数据分析 /////
  static reportAnalytics(string,object) {
    return uni.reportAnalytics(string,object)
  }

  /////// 风控 /////
  static getSystemRiskInfo(object) {
		return console.error("getSystemRiskInfo暂不支持")
  }

  /////// 订阅 /////
  static subscribeService(object) {
		return console.error("subscribeService暂不支持")
  }

  /////// 书架 /////
  static insertBookshelf(object) {
		return console.error("insertBookshelf暂不支持")
  }

  static deleteBookshelf(object) {
		return console.error("deleteBookshelf暂不支持")
  }

  static queryBookshelf(object) {
		return console.error("queryBookshelf暂不支持")
  }

  static updateBookshelfReadTime(object) {
		return console.error("updateBookshelfReadTime暂不支持")
  }

  static navigateToBookshelf(object) {
		return console.error("navigateToBookshelf暂不支持")
  }

  /////// 跳转 /////
  static openBdboxWebview(object) {
		return console.error("openBdboxWebview暂不支持")
  }

  /////////////////// 用户接口 //////////////////////////

  /////// 用户信息 /////
  static getSwanId(object) {
		return console.error("getSwanId暂不支持")
  }

	static getUserInfo(object) {
		return uni.getUserInfo(object)
  }
  
  /////// 分享 /////
  static openShare(object) {
		return console.error("openShare暂不支持")
  }

  static shareFile(object) {
		return console.error("shareFile暂不支持")
  }

  /////// 打开小程序 /////
  static navigateToSmartProgram(object) {
		return console.error("navigateToSmartProgram暂不支持")
  }

  static navigateBackSmartProgram(object) {
		return console.error("navigateBackSmartProgram暂不支持")
  }

  /////// 获取收货地址 /////
  static chooseAddress(object) {
		return uni.chooseAddress(object)
  }
  
  /////// 获取发票抬头 /////
	static chooseInvoiceTitle(object) {
		return uni.chooseInvoiceTitle(object)
  }
  
  /////// 全屏内容发布器 /////
  static openCommunityEditor(object) {
		return console.error("openCommunityEditor暂不支持")
  }

  static closeCommunityEditor(object) {
		return console.error("closeCommunityEditor暂不支持")
  }

  /////// 半屏内容发布器 /////
  static openReplyEditor(object) {
		return console.error("openReplyEditor暂不支持")
  }

  static closeReplyEditor(object) {
		return console.error("closeReplyEditor暂不支持")
  }

  ///////////////// 云开发 ////////////////////

  static get cloud(){
    return CLOUD
  }

  ///////////////// 广告 ////////////////////

  /////// 激励视频广告 /////
  static createRewardedVideoAd(object) {
		return uni.createRewardedVideoAd(object)
	}


	
	


	

	

	
	



	




	
	
}