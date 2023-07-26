// 搜索引擎列表
<template>
  <div class="engine-list">

    <swiper class="engine-list-main" :modules="modules" :navigation="true" :loop="true" :pagination="{ clickable: true }">
      <!-- modules为导入的模块，绑定导入的模块导航模块和分页模块，loop实现轮播图循环模式 -->
      <swiper-slide v-for="swiperIndex in Math.ceil(searchEngines.length/6)">
        <div class="engine-list-item">
          <template v-for="engine in getEngines(swiperIndex,6)">
            <engine-item v-bind="engine"></engine-item>
          </template>
        </div>
      </swiper-slide>

    </swiper>


    <!--    <template v-for="engine in searchEngines" :key="engine.name">-->
    <!--      <EngineItem v-bind="engine"></EngineItem>-->
    <!--    </template>-->
  </div>
</template>

<script setup lang="ts">

// 引入swiper样式，对应css 如果使用less或者css只需要把scss改为对应的即可
import useStore from '@/store/useStore.ts'
import {toRefs} from "vue";
import EngineItem from "@/views/Home/components/SearchBox/components/EngineItem.vue";
import {onMounted} from "vue";

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



// 使用searchStore
const {searchStore} = useStore
const store = searchStore();

// 获取搜索引擎列表
const {searchEngines} = toRefs(store)

// const swiper = useSwiper();

searchEngines.value = [...(searchEngines.value),...(searchEngines.value),...(searchEngines.value)]

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};

// 获取分组
const getEngines = (sIndex, size) => {
  console.log('params',sIndex, size)
  console.log('engines',searchEngines.value.slice((sIndex - 1) * size, sIndex  * size))
  return searchEngines.value.slice((sIndex - 1) * size, sIndex  * size)
}

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

  .test {
    width: 400px;
    height: 200px;
    background-color: #9a6e3a;
  }

  .engine-list-main {
    width: 600px;
    height: 100px;

    .engine-list-item {
      width: 560px;
      height: 100px;
      display: flex;
      //margin-left: 20px;
      padding: 0 20px 0 20px;
      //justify-content: left;
      align-items: center;
      //background-color: rgba(249, 249, 249, 0.5);
    }
  }

}

</style>
