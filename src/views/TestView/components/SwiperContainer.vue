<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination">
      <span
          v-for="(item, index) in items"
          :key="index"
          :class="{'swiper-pagination-bullet-active': isActive(index)}"
          @click="goTo(index)"
      ></span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'SwiperContainer',
  setup() {
    const activeIndex = ref(0);

    const items = ref([0,1,2,3,4]);

    const isActive = (index) => {
      return index === activeIndex.value;
    };

    const goTo = (index) => {
      activeIndex.value = index;
    };

    return {
      items,
      isActive,
      goTo,
    };
  },
};
</script>

<style scoped lang="scss">
.swiper-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .swiper-wrapper {
    display: flex;
    transition: transform 0.3s ease-in-out;
  }

  .swiper-pagination {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;

    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #ccc;
      margin: 0 5px;
      cursor: pointer;
    }

    .swiper-pagination-bullet-active {
      background-color: #333;
    }
  }
}
</style>
