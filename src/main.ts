/**
  * @FileNAme src\main.ts
  * @author 周万宁
  * @create 2023/7/20-0:23
  * @version
  * @description 入口文件
 */



import {createApp} from 'vue'
import 'hover.css/css/hover.css'
import {createPinia} from 'pinia'
import ElementPlus from 'element-plus'
import VueClipboard from 'vue-clipboard2'

// import wow from 'wowjs'
// 使用animate.css的方式
import "animate.css/animate.min.css";
// 使用wow中animate的方式
import "wowjs/css/libs/animate.css";
import 'normalize.css/normalize.css';

import 'animate.css'

// import './style.css'
import App from './App.vue' //可能出现.vue后缀不识别问题
// import WowPlugin from './plugins/wow.ts'
import router from "@/router/index.ts";

// Vue.prototype.$wow = wow

const pinia = createPinia()

const app = createApp(App);
app.use(ElementPlus)
app.use(pinia)
// app.use(WowPlugin)
app.use(VueClipboard)
app.use(router)
app.mount('#app')
