/**
  * @FileNAme src\plugins\wow.ts
  * @author 周万宁
  * @create 2023/7/20-0:35
  * @version
  * @description Wowjs插件
  */
import WOW from 'wowjs';
import {App} from 'vue';

export default {
    install(app: App) {
        const wow = new WOW();
        wow.init();
        app.config.globalProperties.$wow = wow;
    }
}
