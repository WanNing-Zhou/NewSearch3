<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import {useSearchStore} from "@/store/useStore.ts";
import {onMounted} from "vue";

const searchStore = useSearchStore();

onMounted(()=>{
  // 对searchStore进行初始化操作
  searchStore.initSearchStore();
  console.log(searchStore.searchEngines)
})


</script>


<style scoped>

</style>
