import {defineStore} from "pinia";

export const searchStore= defineStore({
    id:'searchStore',
    state:()=>({
        currentSearch:{

        },
        searchEngines:[{}]
    }),
    getters:{},
    actions:{},

})
