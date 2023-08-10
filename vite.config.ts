import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite' //按需引入
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers' //自动引入组件库

import {createSvgIconsPlugin} from "vite-plugin-svg-icons";


// import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [
                AntDesignVueResolver(),
            ]
        }),

//启用插件
        createSvgIconsPlugin({
            // 指定图标文件夹，绝对路径（NODE代码）
            iconDirs: [path.resolve(process.cwd(), "src/icons")],
        }),

        /*        viteMockServe({
                    mockPath: './src/mock/in',
                }),*/
    ],
    // 使用@符号作为项目根路径
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
        }
    },
})
