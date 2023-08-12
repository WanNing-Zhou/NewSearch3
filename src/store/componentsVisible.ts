/**
 * 组件可见性
 */

import {defineStore} from 'pinia'

export const componentsVisibleStore = defineStore({
    id: 'componentsVisibleStore',
    state: () => ({
        // 搜索输入框可见性
        searchBoxVisible: false,
        //搜索建议盒子可见性
        suBoxVisible: false,
        // 引擎列表可见性
        engineListVisible: false,
    }),
    getters: {},
    actions: {
        // 初始化数据
        initComponentsVisibleStore() {
            this.searchBoxVisible = false;
            this.suBoxVisible = false;
        },
        // 开启搜索输入框可见性
        openSearchBox() {
            this.searchBoxVisible = true
        },
        // 关闭搜索输入框可见性
        closeSearchBox() {
            this.searchBoxVisible = false
        },
        // 开启搜索建议box可见性
        openSuBox() {
            this.suBoxVisible = true
        },

        // 关闭搜索建议box可见性
        closeSuBox() {
            this.suBoxVisible = false
        },
        // 开启引擎列表
        openEngineListBox() {
            this.engineListVisible = true
        },
        closeEngineListBox() {
            this.engineListVisible = false
        },

        // 点击背景,隐藏组件
        cancelVisible() {
            // console.log('点击事件触发了')

            if(this.suBoxVisible){
                this.closeSuBox()
            }else if(this.engineListVisible){
                this.closeEngineListBox()
            }else{
                this.closeSearchBox();
            }



        }

    },
})
