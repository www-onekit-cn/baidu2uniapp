<script>
	import OnekitApp from '../baidu2uniapp/OnekitApp'
	import swan from '../baidu2uniapp/swan'
	export default OnekitApp({
		onLaunch: function () {
			console.log('App Launch')

		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	})
</script>

<style>
	@import '../baidu2uniapp/onekit.css'
</style>