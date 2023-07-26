<template>
  <div>
    <swiper :modules="modules" :navigation="true" :loop="true" :pagination="{ clickable: true }">
      <!-- modules为导入的模块，绑定导入的模块导航模块和分页模块，loop实现轮播图循环模式 -->
      <swiper-slide>
        <img src="/imgs/testSwiper/img1.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="/imgs/testSwiper/img2.jpg">

      </swiper-slide>
      <swiper-slide>
        <img src="/imgs/testSwiper/img3.jpg">
      </swiper-slide>

    </swiper>

  </div>
</template>

<script lang="ts" setup>
// 这里需要引入组件
import { Swiper, SwiperSlide } from 'swiper/vue';
// 这里需要引入模块
//pagination 就是指示器, 在效果中为小圆点...
// 他有很多的模块, 具体看官方文档
import { Pagination,Navigation } from 'swiper/modules';
import {ref} from "vue";
// 这里需要引入样式,
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';

const modules = ref([Navigation,Pagination])

</script>

