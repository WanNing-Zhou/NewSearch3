<template>
  <div class="engine-list">
    <template v-for="engine in searchEngine.engineList">
      <engine-item v-bind="engine" @click="changeEngine(engine)"></engine-item>
    </template>
    <!-- 添加搜索引擎 -->
    <section class="add-engine-box">
      <el-icon :size="`30px`" :color="`#ffffff`">
        <Plus/>
      </el-icon>
    </section>
  </div>
</template>

<script setup lang="ts">

import EngineItem from "@/views/Home/components/SearchBox/components/EngineItem.vue";
import useStore from "@/store/useStore.ts";
import {toRefs} from "vue";
import {storeToRefs} from "pinia";

const emit = defineEmits(['closeEngineList'])

// 使用searchStore
const {searchStore, useConfStore} = useStore
const store = searchStore();
// 获取配置
const confStore = useConfStore()
const {searchEngine}  = storeToRefs(confStore)

// 获取搜索引擎列表
const {searchEngines} = toRefs(store)

//切换搜索引擎
const changeEngine = (engine) => {
  store.currentSearch.engin = engine
  // 关闭搜索引擎列表
  emit('closeEngineList')
}

</script>

<style scoped>
.engine-list {
  width: 600px;
  box-sizing: border-box;
  border: 4px;
  display: grid;
  grid-template-columns: repeat(7, 80px);
  grid-gap: 6px;
  grid-auto-rows: 80px;
  background-color: #000000;
  box-shadow: 0 0 10px #0aafe6, 0 0 10px rgba(10, 175, 230, 0);

  .add-engine-box{
    cursor: pointer;
    margin: 5px;
    border-radius: 5px;
    text-align: center;
    padding: 20px;
    font-size: 30px;
    background-color: rgba(134, 142, 150, 0.8);
    user-select: none;
  }
}


</style>
