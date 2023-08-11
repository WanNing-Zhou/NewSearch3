<template>

  <div ref="bgImgBoxRef" class="backImgBox backImgBox-active" @click.self="" :style="`background-image:url('${bgUrl}')`" ></div>
  <main-page/>
</template>

<script setup lang="ts">

import {ref, reactive,computed, watch} from 'vue'
import MainPage from './components/MainPage/index.vue'

// :TODO 日后可开发更换地址功能
// 背景图片地址
const bgUrl = ref('http://8.130.140.206/imgs/bgimg5.jpg')
// 屏幕宽度
const screenWidth = computed(()=>{
  console.log(window.innerWidth)
  return window.innerWidth+ 'px'
})
// 屏幕高度
const screenHeight = computed(()=>{
  console.log(window.innerHeight)
  return window.innerHeight + 'px'
})


// :TODO 点击的时候可以更改组件的可见性
// 背景点击事件
const bgClickHandle = ()=>{

}

</script>

<style lang="scss" scoped>
.backImgBox{
  width: 100vw;
  height: 100vh;
  background-size: cover;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.backImgBox-active{
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
  filter: blur(10px);
}


</style>
