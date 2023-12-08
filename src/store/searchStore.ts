import {defineStore} from "pinia";
import {getLocalStorage, setLocalStorage} from "@/utils/loacalStorage.ts";

export const searchStore = defineStore('searchStore', {
    state: () => ({
        currentSearch: {
            searchWord: '',
            engin: {
                name: '必应',
                imgUrl: '/imgs/Engines/bing_new.png',
                searchUrl: 'https://cn.bing.com/search?q='
            },
        },
        searchEngines: [] as SearchEngine[],
        defaultEngines: [
            {
                name: '必应',
                imgUrl: '/imgs/Engines/bing_new.png',
                searchUrl: 'https://cn.bing.com/search?q='
            },
            {
                name: '百度',
                imgUrl: '/imgs/Engines/baidu.png',
                searchUrl: 'https://www.baidu.com/s?ie=utf-8&wd='
            },
            {
                name: '谷歌',
                imgUrl: '/imgs/Engines/google.png',
                searchUrl: 'http://www.google.cn/search?q='
            },]

    }),
    getters: {},
    actions: {
        getSearchEngines() {
            const engines = getLocalStorage<SearchEngine[]>('searchEngines') || [];
            console.log('engines', engines)
            if (!engines.length) {
                this.searchEngines = [...this.defaultEngines]
                setLocalStorage('searchEngines', this.searchEngines)
            }
            this.searchEngines = engines
            return this.searchEngines;
        },
        // 初始化搜索引擎的store
        initSearchStore() {
            // this.getSearchEngines();
        }
    },
    // persist: true,
    persist: {
        // 会付钱钩子
        beforeRestore: (ctx) => {
            console.log(`即将恢复 '${ctx.store.$id}'`)
        },
        afterRestore: (ctx) => {
            console.log(`刚刚恢复完 '${ctx.store.$id}'`)
        },
        debug: true,
    },
    // 可以选择性进行存储
  /*  persist: [
        {
            paths: ['toLocal'],
            storage: localStorage,
        },
        {
            paths: ['toSession'],
            storage: sessionStorage,
        },
    ],*/
})
