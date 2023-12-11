<template>
<!--  <div class="search-engine-config">
    <draggable v-model="myArray"  @start="onStart" @end="onEnd">
      <transition-group>
        <div class="item" v-for="item in engineList" :key="item.id">{{item.name}}</div>
      </transition-group>
    </draggable>
  </div>-->
</template>

<script setup lang="ts">
/*
import {computed, toRefs} from "vue";
import UseStore from "@/store/useStore.ts";

const configStore = UseStore.useConfStore();
/!*
const {searchEngine} = toRefs(configStore)
const engineList = computed(item => {
  return  configStore.engineList;
})
*!/
*/


</script>

<style lang="scss" scoped>
.search-engine-config {

}
</style>
