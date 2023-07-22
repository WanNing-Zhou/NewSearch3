<template>
  <div class="main-page">
    <time-box/>
    <!--    搜索框-->
    <search-box></search-box>
  </div>
</template>

<script setup lang="ts">
import TimeBox from '../TimeBox/index.vue'
import SearchBox from '../SearchBox/index.vue'
import {getCurrentTime} from "@/utils/momentData.ts";
import {computed} from "vue";



</script>

<style lang="scss" scoped>
.main-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  //background-color:red ;
  position: relative;
  z-index: 1;
  align-items: center;
}


</style>
