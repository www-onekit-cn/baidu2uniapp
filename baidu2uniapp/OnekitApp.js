export default function (swan_object) {
	const uniapp_object = {
		onLaunch(uni_launchOpions) {
			let swan_launchOpions = {}
			/*
			uni_launchOpions => swan_launchOpions
			*/
			swan_launchOpions = uni_launchOpions
			swan_launchOpions.shareTicket = undefined
			swan_launchOpions.referrerInfo = {}
			//////////////////////
			this.onekit_launchOpions = swan_launchOpions
			if (swan_object.onLaunch) {
				swan_object.onLaunch.call(this, swan_launchOpions)
				// swan_object.onLaunch(swan_launchOpions)
			}
		},
		onShow(uni_showOpions) {
			let swan_showOpions = {}
			swan_showOpions = uni_showOpions
			this.onekit_showOptions = swan_showOpions
			if (swan_object.onShow) {
				swan_object.onShow.call(this, uni_showOpions)
			}
		},
		onUnhandledRejection(uni_rejectionFn) {
			/**     未生效       */
			let swan_rejectionFn = uni_rejectionFn()
			this.onekit_rejectionFn = swan_rejectionFn()
			if (swan_object.onUnhandledRejection) {
				swan_object.onUnhandledRejection(swan_rejectionFn())
			}
		},
		onThemeChange(uni_themeChangeFn) {
			/**     未测试    */
			let swan_themeChangeFn = uni_themeChangeFn()
			this.onekit_themeChangeFn = swan_themeChangeFn()
			if (swan_object.onThemeChange) {
				swan_object.onThemeChange(swan_themeChangeFn())
			}
		}
	}
	return uniapp_object
}