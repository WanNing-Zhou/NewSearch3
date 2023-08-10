<template>
  <div>
<!--    <WQDialog @close="dialogClose" :visible="dialogVisible">
      <div>这是一个测试程序</div>
    </WQDialog>-->

    <WQDialog0 v-model:visible="dialogVisible">

    </WQDialog0>
    <el-button @click="dialogVisible = ! dialogVisible">开关</el-button>
  </div>
</template>

<script setup lang="ts">

// import WQDialog from "@/components/WQDialog/WQDialog.vue";
import {ref} from "vue";
import WQDialog0 from "@/components/WQDialog0/WQDialog0.vue";

const dialogVisible = ref(true)

const dialogClose = ()=>{
  console.log('关闭程序触发了')
  dialogVisible.value = false;
}

</script>

<style scoped>

</style>
