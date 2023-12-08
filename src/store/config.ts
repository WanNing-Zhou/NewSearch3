import {defineStore} from 'pinia'

export const configStore = defineStore({
    id:'config',
    state:()=>({
        configPage: '',  // 设置弹窗的
    }),
    getters:{},
    actions: {},
})
