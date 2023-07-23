// 搜索建议
<template>
  <div class="suggestion-box">
    <su-item v-for="(su, index) in suDataList" :key="index"  :su="su"></su-item>
  </div>
</template>

<script setup lang="ts">
import SuItem from "@/views/Home/components/SearchBox/components/SuItem.vue";
import {reactive, ref} from "vue";
const suDataList = reactive(['卡卡西', '卡看男', '卡卡北', '卡卡东'])

</script>

<style scoped>
.suggestion-box{
  position: absolute;
  width: 600px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  background-color: #000000;
  box-shadow: 0 0 10px #0aafe6, 0 0 10px rgba(10, 175, 230, 0);
  font-size: 18px;
}

</style>

