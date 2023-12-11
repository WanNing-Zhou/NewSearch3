import {SearchEngine} from "@/type/searchTypes.ts";

export type SearchEngineConf = {
  engineList: SearchEngine[]
}

export default function searchEngineConf(): SearchEngineConf {
  return {
    engineList: [
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
  }
}
