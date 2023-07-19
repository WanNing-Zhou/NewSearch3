import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite' //按需引入
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers' //自动引入组件库
import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [
                AntDesignVueResolver(),
            ]
        }),
        viteMockServe({
            mockPath: './src/mock',
        }),
    ],
    // 使用@符号作为项目根路径
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
        }
    },
})
