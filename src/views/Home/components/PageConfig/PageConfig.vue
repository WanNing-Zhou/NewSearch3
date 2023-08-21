<template>
  <GroundGlass class="page-config" style="">
      <SvgIcon name="config" class="wq-hover-rotate-180"></SvgIcon>
  </GroundGlass>

</template>

<script setup lang="ts">

import GroundGlass from "@/components/GroundGlass/GroundGlass.vue";


</script>

<style lang="scss" scoped>
.page-config {
  position: absolute;
  left: 20px;
  height: 30px !important;
  width: 30px !important;
  line-height: 30px;
  bottom: 20px;
  font-size: 24px;
  color: #ffffff;
  text-align: center;
  padding: 5px;
  cursor: pointer;

  &:hover{
    box-shadow: 0 0 4px rgba(255, 255, 255, 0.6);
  }
}


</style>
