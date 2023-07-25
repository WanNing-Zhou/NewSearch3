import api from './api.ts'
import request from '@/utils/request.ts'
import fetchJsonp from 'fetch-jsonp'


// 获取提天气信息
export  async  function getWeather (){
    return request.get(
        api.weatherSevenDay
    )
}
// script.src = `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${val}&cb=dosomething`

// 获取百度搜索建议
export async function getSearchSuggestions(val:string){
    const url = `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${val}`;
    return fetchJsonp(url,{
        jsonpCallback:'cb',
        jsonpCallbackFunction:'function_name_of_jsonp_response'
    })
}
