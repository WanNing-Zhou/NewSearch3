/*  *
  * @FileNAme src\components\WQDialog\WQDialog.vue
  * @author 周万宁
  * @create 2023/8/4-16:42
  * @version
  * @description 弹出框组件
  */

<template>
  <div class="wq-dialog" v-show="visible">
    <div class="wq-dialog-overlay" @click="closeDialog"></div>

    <div class="wq-dialog-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  visible:Boolean, //dialog 可见性
})

const emit = defineEmits(['close'])

// 弹出框关闭方法
const closeDialog = ()=>{
  emit('close')
}

</script>

<style lang="scss" scoped>
.wq-dialog{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .wq-dialog-overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
  .wq-dialog-content {
    background-color: #fff;
    padding: 2rem;
  }
}
</style>
