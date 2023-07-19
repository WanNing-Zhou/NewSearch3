import {createApp} from 'vue'
import 'hover.css/css/hover.css'
import './style.css'
import App from './App.vue' //可能出现.vue后缀不识别问题
import WowPlugin from './plugins/wow.ts'


const app = createApp(App);
app.use(WowPlugin)

app.mount('#app')
