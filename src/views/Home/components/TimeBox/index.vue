<template>
  <div class="time-box hvr-float" >
    <div id="clock">
      <p class="date">{{ currentDate }}</p>
      <p class="time">{{ currentTime }}</p>
      <p class="text">
        <span>{{weatherInfo.city + ' '}}</span>
        <span>{{weatherInfo.wea+ ' '}}</span>
        <i :class="weatherInfo.wea_icon"></i>
        <span>{{' ' + weatherInfo.tem_day +'℃' + '~' + weatherInfo.tem_night+'℃'}}</span>
      </p>
    </div>

  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, reactive} from "vue";
import {getWeather} from "@/api/home.ts";
import {getWeatherIcon} from "@/utils/weather.ts";
import {useCurrentTimeData} from "@/utils/time.ts";

// 当前时间
const {currentTime,currentDate}  = useCurrentTimeData();

const weatherInfo = reactive({
  city:'',
  wea:'' ,
  tem_day:'',
  tem_night: '',
  wea_icon:''
})

// 获取天气
const getWeatherInfo= ()=> {
  getWeather().then(res=>{
    // console.log(res)
    // weatherInfo.value = `${res.data.city}  ${res.data.data[0].wea}  ${res.data.data[0].tem_day}~${res.data.data[0].tem_night}`
    weatherInfo.city = res.data.city;
    weatherInfo.wea = res.data.data[0].wea;
    weatherInfo.tem_day = res.data.data[0].tem_day;
    weatherInfo.tem_night = res.data.data[0].tem_night;
    weatherInfo.wea_icon = getWeatherIcon(res.data.data[0].wea_img)
  })
}
onMounted(() => {
  getWeatherInfo()
})

onBeforeUnmount(() => {

})

</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Share+Tech+Mono");

.time-box {
  position: absolute;
  top: 36px;
  width: 400px;
  height: 180px;
  border-radius: 6px;

  background: #0f3854;
  background: radial-gradient(ellipse at center, #0a2e38 0%, #000000 80%);
  background-size: 100%;
  box-shadow:  0 0 20px #0aafe6, 0 0 4px rgba(10, 175, 230, 1);
  user-select: none;

  p {
    margin: 0;
    padding: 0;
  }

  #clock {
    font-family: "Share Tech Mono", monospace;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #daf6ff;
    text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);

  }

  #clock .time {
    letter-spacing: 0.05em;
    font-size: 80px;
    padding: 5px 0;
  }

  #clock .date {
    letter-spacing: 0.1em;
    font-size: 16px;
  }

  #clock .text {
    letter-spacing: 0.1em;
    font-size: 12px
  }

}

</style>
