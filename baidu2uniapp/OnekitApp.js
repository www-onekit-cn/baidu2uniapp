export default function (swan_object) {
	const uniapp_object = {
		onLaunch(uni_launchOpions) {
			let wx_launchOpions = {}
			/*
			uni_launchOpions => wx_launchOpions
			*/
			wx_launchOpions = uni_launchOpions
			wx_launchOpions.shareTicket = undefined
			wx_launchOpions.referrerInfo = {}
			//////////////////////
			this.onekit_launchOpions = wx_launchOpions
			if (swan_object.onLaunch) {
				swan_object.onLaunch.call(this, wx_launchOpions)
				// swan_object.onLaunch(wx_launchOpions)
			}
		},
		onShow(uni_showOpions) {
			let wx_showOpions = {}
			wx_showOpions = uni_showOpions
			this.onekit_showOptions = wx_showOpions
			if (swan_object.onShow) {
				swan_object.onShow.call(this, uni_showOpions)
			}
		},
		onUnhandledRejection(uni_rejectionFn) {
			/**     未生效       */
			let wx_rejectionFn = uni_rejectionFn()
			this.onekit_rejectionFn = wx_rejectionFn()
			if (swan_object.onUnhandledRejection) {
				swan_object.onUnhandledRejection(wx_rejectionFn())
			}
		},
		onThemeChange(uni_themeChangeFn) {
			/**     未测试    */
			let wx_themeChangeFn = uni_themeChangeFn()
			this.onekit_themeChangeFn = wx_themeChangeFn()
			if (swan_object.onThemeChange) {
				swan_object.onThemeChange(wx_themeChangeFn())
			}
		}
	}
	return uniapp_object
}