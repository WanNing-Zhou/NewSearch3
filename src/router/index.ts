/**
 * @FileNAme src\router\index.ts
 * @author 周万宁
 * @create 2023/7/20-21:22
 * @version
 * @description 路由配置
 */

import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home/index.vue'
// import About from './views/About.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
