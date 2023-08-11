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

        // 点击背景,隐藏组件
        cancelVisible(){
            // console.log('点击事件触发了')
            this.closeSearchBox();
        }

    },
})
