// 搜索建议
<template>
  <div class="suggestion-box">
    <su-item v-for="(su, index) in suggestionList" :key="index" :su="su"></su-item>
  </div>
</template>

<script setup lang="ts">
import SuItem from "@/views/Home/components/SearchBox/components/SuItem.vue";
import {computed, reactive, ref, toRefs} from "vue";

const props = defineProps({
  suggestionList: Array
})
const {suggestionList} = toRefs(props)

const boxHeight = computed(() => {
  return (window.innerHeight - 450) + 'px';
})

</script>

<style scoped>
.suggestion-box {
  position: absolute;
  width: 600px;
  border-radius: 4px;
  display: flex;
  max-height: v-bind(boxHeight);
  flex-direction: column;
  background-color: #000000;
  box-shadow: 0 0 10px #0aafe6, 0 0 10px rgba(10, 175, 230, 0);
  font-size: 18px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: #d1f4ff;
    border: 6px solid rgba(0,0,0,0.2);
  }

}

</style>

