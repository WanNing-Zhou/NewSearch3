import {Plus} from '@element-plus/icons-vue'
import {App} from "vue";

export function useElementIcon(app :App<Element>){
    // @ts-ignore
    app.use(Plus)

}
