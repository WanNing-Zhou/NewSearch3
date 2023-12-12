<template>
  <div class="add-engine">
    <wq-upload width="98" height="98" class="icon-upload"/>
    <div class="en-form">
      <div>
        <el-input placeholder="图标地址(默认为网站图标)"></el-input>
      </div>
      <div>
        <el-input placeholder="名称"></el-input>
      </div>
      <div>
        <el-input placeholder="URL?参数"></el-input>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import WqUpload from "@/components/uploadComp/wqUpload.vue";
</script>

<style scoped>

</style>
