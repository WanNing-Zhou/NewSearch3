/**
  * @FileNAme src\main.ts
  * @author 周万宁
  * @create 2023/7/20-0:23
  * @version
  * @description 入口文件
 */

import {createApp} from 'vue'
import 'hover.css/css/hover.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import VueClipboard from 'vue-clipboard2'

// import wow from 'wowjs'
// 使用animate.css的方式
import "animate.css/animate.min.css";
// 使用wow中animate的方式
import "wowjs/css/libs/animate.css";
import 'normalize.css/normalize.css';
// 和风天气图标
import 'qweather-icons/font/qweather-icons.css'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'animate.css'
// import 'swiper/swiper.scss'
// import 'swiper/swiper-bundle.css'

// import './style.css'
import App from './App.vue' //可能出现.vue后缀不识别问题
// import WowPlugin from './plugins/wow.ts'
import router from "@/router/index.ts";
// Vue.prototype.$wow = wow
import "virtual:svg-icons-register";
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";
import '@/assets/styles/gloable.scss'
import store from "@/store";



const app = createApp(App);
app.use(ElementPlus)
app.use(store)
// app.use(WowPlugin)
// app.use(VueClipboard)

app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
// app.use(VueAwesomeSwiper)
app.component('SvgIcon',SvgIcon)
app.mount('#app')
