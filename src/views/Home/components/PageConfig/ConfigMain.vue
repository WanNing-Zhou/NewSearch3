<template>
  <div class="config-main">
    <SearchEngine v-if="configPage === ConfKEY.searchEngines"/>
  </div>
</template>

<script setup lang="ts">
import SearchEngine from "@/views/Home/components/PageConfig/views/seasrchEngine/SearchEngine.vue";
import UseStore from "@/store/useStore.ts";
import {storeToRefs} from "pinia";
import {ConfKEY} from "@/enums/confKEY.ts";

const confStore = UseStore.useConfStore();
const  {configPage} = storeToRefs(confStore)
</script>

<style lang="scss" scoped>
.config-main{
  height: 100%;
}
</style>
