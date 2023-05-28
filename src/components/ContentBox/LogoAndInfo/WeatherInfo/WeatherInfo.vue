<template>
  <div id="weatherInfo">
    <div class="headerTime">{{currentTime}}</div>
    <div class="dateInfo">
      <span class="headerDate">{{currentDate}}</span>
    </div>
    <div class="weatherInfo">
      <span class="city">{{city}}</span>
      <span class="weather">{{weather}}</span>
      <span class="weaIco">
                    <span class="iconfont icon-duoyun"></span>
                </span>

    </div>
    <div>
      <span class="temperature">19℃</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import {WEATHERS,APIS} from '@/consted/contented'
import getDate   from '@/utils/getNowFilterTime.ts'
import {computed, ref} from 'vue'

function getWeatherIcon(weather='晴天'){
  let res = null;
  let icon = null;
  for (let key in WEATHERS){
    let weatherArr = WEATHERS[key].weatherArr;
    res = weatherArr.find(el=>el===weather)
    if (res === weather){
      icon = WEATHERS[key].icon;
      break;
    }
  }
  if (!icon){
    icon='icon-duoyun'
  }
  return icon;
}

const city = ref("哈尔滨");
const weather = ref('晴')
const weaIcon = ref('icon-duoyun')
const temperature = ref('3℃')

const currentDate = computed(()=>{
  const date = getDate();
  return date.d
})

const currentTime = computed(()=>{
      const date = getDate();
      return date.time;
    }
)

const weaIconClass = computed(()=>{
  return 'icon '+weaIcon
})

//将信息绘制到页面
function drawWeatherInfo(city,weatherInfo) {
  city.value  =   city;
  weather.value =   weatherInfo.weather;
  weaIcon.value  = getWeatherIcon(weatherInfo.weather)
  temperature.value =  weatherInfo.temperature+'℃';
}

function getWeatherFree(){
  fetch(APIS.weatherSevenDay,{
    method:'get',
  }).then(response=>
      response.json()
  ).then(res=>{
    let city = res.city
    console.log(res)
    let weatherInfo = {
      weather:res.data[0].wea,
      temperature: res.data[0].tem_night + '~' + res.data[0].tem_day
    }
    if (!weatherInfo){

      weatherInfo={
        weather:"晴天",
        temperature:"30"
      }
    }
    if (!city||city === ''){
      city='哈尔滨'
    }
    drawWeatherInfo(city,weatherInfo)
  })
}

</script>
<style scoped lang=less>

</style>