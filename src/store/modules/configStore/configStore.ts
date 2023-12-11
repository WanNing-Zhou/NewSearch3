import {defineStore} from 'pinia'
import {ConfKEY} from "@/enums/confKEY.ts";
import searchEngineConf from "@/store/modules/configStore/searchEngineConf.ts";


export const configStore = defineStore({
    id:'config',
    state:()=>({
        version: '', // 版本号, 当版本号不同的时候需要进行更新操作
        configPage: ConfKEY.searchEngines,  // 设置弹窗的显示画面
        // configs: getConfMapInit()
        searchEngine: searchEngineConf()
    }),
    getters:{},
    actions: {
        /**
         * @description 用于配置的初始化, 恢复默认设置
         */
        confStoreInit(confKEY: string){
            // :TODO 一个想法, 获取到key的时候匹配conf对象, 然后重新set配置
            console.log(confKEY)
        },
    },
})
