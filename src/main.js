import Vue from 'vue'
import App from './App'
import baidu2uniapp from "../baidu2uniapp"
Vue.use(baidu2uniapp);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
