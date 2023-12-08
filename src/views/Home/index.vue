<template>
<!-- 背景部分  -->
  <div ref="bgImgBoxRef" class="backImgBox" :class="bgClass"  :style="`background-image:url('${bgUrl}')`" ></div>

  <main-page @click.self="cancelVisible"/>
</template>

<script setup lang="ts">

import {ref, reactive, computed, watch, toRefs} from 'vue'
import MainPage from './components/MainPage/index.vue'
import useStore from "@/store/useStore.ts";

const componentsVisibleStore = useStore.componentsVisibleStore();

const {cancelVisible} = componentsVisibleStore;
const {searchBoxVisible} = toRefs(componentsVisibleStore)

const bgClass = computed(()=>{
  console.log('searchBoxVisible', searchBoxVisible.value)
  return searchBoxVisible.value ? 'backImgBox-active' : ''
})

// :TODO 日后可开发更换地址功能
// 背景图片地址
const bgUrl = ref('imgs/background/img.png')
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
  transition: backdrop-filter 0.5s;
}

.backImgBox-active{
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
  //filter: blur(10px);
  backdrop-filter: blur(100px);
}


</style>
