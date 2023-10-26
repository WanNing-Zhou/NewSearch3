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
            if (!engines.length) {
                this.searchEngines = [...this.defaultEngines]
                setLocalStorage('searchEngines', this.searchEngines)
            }
            return this.searchEngines;
        },
        // 初始化搜索引擎的store
        initSearchStore() {
            this.getSearchEngines();

        }
    },

})
