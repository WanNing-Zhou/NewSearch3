/**
 * @filePath src/utils/confMap.ts
 * @description 这里用来存放设置的一些初始数据
 * @TODO :TODO
 * @created 2023/12/11 14:19
 * @createdBy zwn
 */

export const defaultEngines =  [
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
      }
    ]

// 用于获取起始页的配置
/**
 * :TODO idea: 把每种配置存放到json中, 当使用的时候进行数据JSON反序列化获取到设置对象,
 *  当我们有什么更新的时候, 我们在开发过程中只需要在这里将这里的confMap set一个新的对象就可以了,
 *
 */
export function getConfMapInit() {
  // 存放key的数组
  // 设置的map用于存储数据
  const confMap: Map<string, any> = new Map()
  confMap.set('searchEngines', defaultEngines)
  return confMap
}
