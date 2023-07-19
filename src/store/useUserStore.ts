import {defineStore} from "pinia";

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        name: 'kunkun',
        age: 18,
    }),
    getters: {},
    actions: {}
})
