import animation_video from './animation-video'
import animation_view from './animation-view'
import ar_camera from './ar-camera'
import page from './page'
import rtc_room from './rtc-room'
import rtc_room_item from './rtc-room-item'
import tab_item from './tab-item'
import tabs from './tabs'

export default {
    install(Vue) {
        Vue.use(animation_video)
        Vue.use(animation_view)
        Vue.use(ar_camera)
        Vue.use(page)
        Vue.use(rtc_room)
        Vue.use(rtc_room_item)
        Vue.use(tab_item)
        Vue.use(tabs)
    },
}