// 搜索引擎列表
<template>
  <div class="engine-list">
    <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :loop="true"
      :centeredSlides="true"
      :pagination="{
				clickable: true
			}"
      :autoplay="{
				delay: 2500,
				disableOnInteraction: false
			}"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
  >

      <swiper-slide> <div class="test">1</div> </swiper-slide>
      <swiper-slide> <div class="test">2</div> </swiper-slide>
      <swiper-slide> <div class="test">3</div> </swiper-slide>
      <swiper-slide> <div class="test">4</div> </swiper-slide>

  </swiper>
<!--    <template v-for="engine in searchEngines" :key="engine.name">-->
<!--      <EngineItem v-bind="engine"></EngineItem>-->
<!--    </template>-->
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue' // swiper 所需组件
import { Autoplay, Navigation, Pagination, A11y } from 'swiper'// 分页器
// 引入swiper样式，对应css 如果使用less或者css只需要把scss改为对应的即可
import 'swiper/swiper-bundle.css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

import 'swiper/swiper.scss';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';

import useStore from '@/store/useStore.ts'
import {toRefs} from "vue";
import EngineItem from "@/views/Home/components/SearchBox/components/EngineItem.vue";

// setup语法糖只需要这样创建一个变量就可以正常使用分页器和对应功能，如果没有这个数组则无法使用对应功能
const modules = [Autoplay, Pagination, Navigation, A11y];


const {searchStore} = useStore
const store = searchStore();

const {searchEngines} = toRefs(store)

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};

</script>

<style lang="scss" scoped>

.engine-list {
  position: absolute;
  width: 600px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  background-color: #000000;
  box-shadow: 0 0 10px #0aafe6, 0 0 10px rgba(10, 175, 230, 0);
  font-size: 18px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: #d1f4ff;
    border: 6px solid rgba(0, 0, 0, 0.2);
  }
  .test{
    width: 400px;
    height: 200px;
    background-color: #9a6e3a;
  }

}

</style>
