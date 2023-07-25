<template>
  <div @click="useSu(su)" class="su-item">
    {{su}}
  </div>
</template>

<script setup lang="ts">

import {toRefs} from "vue";
import {searchStore} from "@/store/searchStore.ts";

const store = searchStore()

const props = defineProps({
  su:{
    type:String,
    required: true
  }
})

let {su} = toRefs(props)

// 搜索建议点击支持
const useSu = (su)=>{
  store.currentSearch.searchWord = su;
  const url  = store.currentSearch.engin.searchUrl + su;
  // 打开新的页面
  window.open(url, '_blank')

}

</script>

<style lang="scss" scoped>
.su-item{

  padding: 4px 20px;
  cursor: pointer;
  //border-radius: 4px;
  user-select: none;
  &:hover{
    background-color: #c6c5d7;
  }
  &:first-child{
    padding-top:10px;
  }

  &:last-child{
    padding-bottom: 10px;
  }
}
</style>
