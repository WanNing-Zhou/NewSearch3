/**
  * @FileNAme src\views\Home\components\SearchBox\components\EngineList0.vue
  * @author 周万宁
  * @create 2023/8/9-21:48
  * @version
  * @description 搜索引擎列表
  */
<template>
  <div class="engine-list">
    <template v-for="engine in searchEngines">
      <engine-item v-bind="engine" @click="changeEngine(engine)"></engine-item>
    </template>
  </div>
</template>

<script setup lang="ts">

import EngineItem from "@/views/Home/components/SearchBox/components/EngineItem.vue";
import useStore from "@/store/useStore.ts";
import {toRefs} from "vue";

const emit = defineEmits(['closeEngineList'])

// 使用searchStore
const {searchStore} = useStore
const store = searchStore();

// 获取搜索引擎列表
const {searchEngines} = toRefs(store)

//切换搜索引擎
const changeEngine = (engine)=>{
  store.currentSearch.engin = engine
  // 关闭搜索引擎列表
  emit('closeEngineList')
}

</script>

<style scoped>
.engine-list{
  width: 600px;
  box-sizing: border-box;
  border: 4px;
  display: grid;
  grid-template-columns: repeat(7,80px);
  grid-gap: 6px ;
  grid-auto-rows: 80px;
  background-color: #000000;
  box-shadow: 0 0 10px #0aafe6, 0 0 10px rgba(10, 175, 230, 0);
}


</style>
