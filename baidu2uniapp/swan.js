import AI from './api/AI'
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
	
}