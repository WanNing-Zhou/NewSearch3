<template>
  <div class="swiper-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SwiperItem',
};
</script>

<style scoped lang="scss">
.swiper-item {
  flex: 0 0 auto;
  width: 100%;
}
</style>
