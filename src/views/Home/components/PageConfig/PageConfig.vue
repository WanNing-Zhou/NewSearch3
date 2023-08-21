<template>
  <div>
    <GroundGlass
        class="page-config animate__bounceInLeft animated"
        @click="dialogVisible = true"
    >
      <SvgIcon name="config" class="wq-hover-rotate-180"></SvgIcon>
    </GroundGlass>

    <WQDialog0
        :style="{
          margin: 0,
          left: '60px',
          bottom: '70px',
          width: '400px',
          position: 'absolute'
        }"
        v-model:visible="dialogVisible">

      <el-container>
        <el-aside width="80px">
          你好
        </el-aside>
        <el-main>
          这是一个简单的语句
        </el-main>
      </el-container>
    </WQDialog0>

  </div>

</template>

<script setup lang="ts">

import GroundGlass from "@/components/GroundGlass/GroundGlass.vue";

import {ref} from "vue";
import WQDialog0 from "@/components/WQDialog0/WQDialog0.vue";

const dialogVisible = ref(false)

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

  &:hover {
    box-shadow: 0 0 3px rgba(255, 255, 255, 0.6);
  }
}


</style>
