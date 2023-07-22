<template>
  <div class="time-box">
<!--    <span class="time-box-time">-->
<!--                    {{ currentTime }}-->
<!--    </span>-->


    <div id="clock">
      <p class="date">{{ currentDate }}</p>
      <p class="time">{{ currentTime }}</p>
    </div>

  </div>
</template>

<script setup lang="ts">
import {getCurrentDate, getCurrentTime} from "@/utils/momentData.ts";
import {computed, ref, watch, onMounted, onBeforeUpdate, onBeforeUnmount} from "vue";

// 当前时间
const currentTime = ref(getCurrentTime())
const currentDate = ref(getCurrentDate())

let timmer; // 定时器Id
onMounted(() => {
  timmer = setInterval(() => {
        currentTime.value = getCurrentTime();
        currentDate.value = getCurrentDate()
      }, 1000
  )
})

onBeforeUnmount(()=>{
  // 销毁前清除定时器
  clearInterval(timmer)
})

</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Share+Tech+Mono");

.time-box {

  width: 400px;
  height: 180px;
  border-radius: 12px;

  background: #0f3854;
  background: radial-gradient(ellipse at center, #0a2e38 0%, #000000 80%);
  background-size: 100%;

  position: relative;
  user-select: none;

  p {
    margin: 0;
    padding: 0;
  }

  #clock {
    font-family: "Share Tech Mono", monospace;
    color: #ffffff;
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
    font-size: 24px;
  }

  #clock .text {
    letter-spacing: 0.1em;
    font-size: 12px;
    padding: 20px 0 0;
  }

}

</style>
