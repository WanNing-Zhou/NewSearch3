// 单一引擎组件
<template>
  <div class="search-engine">
    <div class="en-icon" :style="`background-image: url('${imgUrl}')`"></div>
    <div>{{name}}</div>
  </div>
</template>

<script setup lang="ts">

import {defineProps, toRefs} from "vue";


const props = defineProps({
 name:String,
  imgUrl:String,
  searchUrl:String,
})

const {name,imgUrl,searchUrl} = toRefs(props)

</script>

<style lang="scss" scoped>
.search-engine{
  margin: 5px;
  border-radius: 5px;
  width:40px;
  height: 40px;
  text-align: center;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);

  .en-icon{
    width: 30px;
    height: 30px;
    background-size: cover;
    background-position: center;
  }

  .swiper-pagination-bullets.swiper-pagination-horizontal{
    margin-top: 10px;
  }

}

</style>
