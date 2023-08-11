/**
 * 组件可见性
 */

import {defineStore} from 'pinia'

export const componentsVisibleStore = defineStore({
    id:'componentsVisibleStore',
    state:()=>({
        // 搜索输入框可见性
        searchBoxVisible : false,
        //

    }),
    getters:{},
    actions: {
        // 初始化数据
        initComponentsVisibleStore(){
            this.searchBoxVisible = false;
        },
        // 开启搜索输入框可见性
        openSearchBox(){
            this.searchBoxVisible = true
        },
        // 关闭搜索输入框可见性
        closeSearchBox(){
            this.searchBoxVisible = false
        },
    },
})
