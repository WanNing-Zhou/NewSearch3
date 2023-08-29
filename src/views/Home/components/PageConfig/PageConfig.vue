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
          position: 'absolute'
        }"
        v-model:visible="dialogVisible">

      <el-container>
        <el-button @click="isCollapse = !isCollapse">开关</el-button>
      <div class="page-aside">
        <el-aside>
          <el-menu
              default-active="1"
              :collapse="isCollapse"
          >
            <el-menu-item index="4">
              <el-icon><setting /></el-icon>
              <template #title>Navigator Four</template>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><setting /></el-icon>
              <template #title>Navigator Four</template>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><setting /></el-icon>
              <template #title>Navigator Four</template>
            </el-menu-item>

          </el-menu>
        </el-aside>
      </div>

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
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";

const dialogVisible = ref(false)
// 用于控制菜单栏可见性
const isCollapse = ref(false)
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


.page-aside{

  :deep(.el-aside){
    width: 0;
    display: inline-block;
    max-height: 500px;
  }
}


</style>
