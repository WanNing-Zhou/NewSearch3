<template>
  <div class="main-page" :class="mainPageClass">
    <transition name="time-box">
      <time-box v-show="searchBoxVisible"/>
    </transition>
    <!--    搜索框-->
    <search-box></search-box>
    <one-word-box v-show="searchBoxVisible"></one-word-box>
  </div>
</template>

<script setup lang="ts">
import TimeBox from '../TimeBox/index.vue'
import SearchBox from '../SearchBox/index.vue'
import {computed, toRefs} from "vue";
import useStore from "@/store/useStore.ts";
import OneWordBox from "@/views/Home/components/oneWordBox/index.vue";

const componentsVisibleStore = useStore.componentsVisibleStore()

const {searchBoxVisible} = toRefs(componentsVisibleStore)

const mainPageClass = computed(()=>{
  return searchBoxVisible.value ? 'main-page-bg-color' : ''
})

</script>

<style lang="scss" scoped>

@keyframes time-box {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}


.main-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  //background-color: rgba(0, 0, 0, 0.5);
  //background-color:red ;
  position: relative;
  z-index: 1;
  align-items: center;

  .time-box-enter-active,
  .time-box-leave-active {
    transition: opacity 0.3s;
    animation: time-box 0.4s;
  }



  .time-box-enter,
  .time-box-leave-to {
    opacity: 0;
    animation: time-box 0.4s reverse;
  }

}

.main-page-bg-color {
  background-color: rgba(0, 0, 0, 0.5) !important;
}


</style>
