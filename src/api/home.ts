import api from './api.ts'
import request from '@/utils/request.ts'


export  async  function getWeather (){
    return request.get(
        api.weatherSevenDay
    )
}
