<template>
  <div class="main-page">
    <time-box/>
  </div>
</template>

<script setup lang="ts">
  import TimeBox from '../TimeBox/index.vue'
</script>

<style  lang="scss" scoped>
.main-page{
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,0.5);
  //background-color:red ;
  position: relative;
  z-index: 1;
}
</style>
