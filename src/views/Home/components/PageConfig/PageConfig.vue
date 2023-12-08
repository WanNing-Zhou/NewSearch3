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
          width: '700px',
          position: 'absolute',
          height: '600px',
        }"
        v-model:visible="dialogVisible">

      <el-container>
        <div class="page-aside">
          <el-menu
              ref="configMenu"
              :collapse="isCollapse"
          >
            <el-menu-item index="1">
              <el-icon>
                <setting/>
              </el-icon>
              <template #title>搜索引擎</template>
            </el-menu-item>
            <el-menu-item index="2">
              <el-icon>
                <setting/>
              </el-icon>
              <template #title>应用商店</template>
            </el-menu-item>
            <el-menu-item index="3">
              <el-icon>
                <setting/>
              </el-icon>
              <template #title>背景</template>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <setting/>
              </el-icon>
              <template #title>账户</template>
            </el-menu-item>
            <el-menu-item index="5">
              <el-icon>
                <setting/>
              </el-icon>
              <template #title>背景</template>
            </el-menu-item>
            <el-menu-item index="6">
              <el-icon>
                <setting/>
              </el-icon>
              <template #title>背景</template>
            </el-menu-item>
          </el-menu>
          <div class="aside-switch">
          <span class="side-switch-show" @click="asideClickHandle">
              <span class="aside-switch-icon" :class=" !isCollapse ? 'aside-switch-on' : 'aside-switch-off'">
                <el-icon><ArrowLeftBold/></el-icon>
              </span>
          </span>
          </div>
        </div>
        <el-main class="page-main">
          <ConfigMain/>
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
import ConfigMain from "@/views/Home/components/PageConfig/ConfigMain.vue";

const dialogVisible = ref(false)
// 用于控制菜单栏可见性
const isCollapse = ref(false)

// 点击折叠或展开菜单栏
const asideClickHandle = () => {
  if (isCollapse.value) {
    isCollapse.value = false
  } else {
    isCollapse.value = true
  }
}

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


.page-aside {
  position: relative;
  height: 100%;

  :deep(.el-aside) {
    display: inline-block;
    max-height: 500px;
  }

  .aside-switch {
    position: absolute;
    width: 30px;
    height: 60px;
    overflow: hidden;
    right: -30px;
    top: 50%;
    transform: translateY(-50%);

    .side-switch-show {
      position: absolute;
      text-align: right;
      left: -14px;
      top: 50%;
      transform: translateY(-50%);
      line-height: 60px;
      width: 30px;
      height: 60px;
      font-size: 16px;
      background-color: #a8abb2;
      border-radius: 70%;
      z-index: 0;
      cursor: pointer;
      // 开启3d视图
      transform-style: preserve-3d;


      .aside-switch-icon {
        display: inline-block;
        //transition: all 0.5s;
        //transform-origin: right;
        transition: transform 0.3s ease-out;
      }

      .aside-switch-on {

      }

      .aside-switch-off {
        transform: rotate(180deg);
      }


    }

  }

}


.page-main{
  max-height: 600px;
  overflow: auto;
}


</style>
