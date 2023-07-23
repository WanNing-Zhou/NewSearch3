<template>
  <div class="su-item">
    {{su}}
  </div>
</template>

<script setup lang="ts">

import {toRefs} from "vue";

const props = defineProps({
  su:{
    type:String,
    required: true
  }
})

let {su} = toRefs(props)

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
