import {useHomeStore} from "@/store/homeStore.ts";
import {useUserStore} from "@/store/useUserStore.ts"
import {searchStore} from "@/store/searchStore.ts";
import {componentsVisibleStore} from '@/store/componentsVisible.ts'
import {configStore} from "@/store/config.ts";


export const useSearchStore =  searchStore


export default {
    useHomeStore,
    useUserStore,
    searchStore,
    componentsVisibleStore,
    configStore,
}
