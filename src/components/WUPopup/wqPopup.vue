<template>
  <div v-if="visible" class="wq-popup">
    <slot>
      <el-input></el-input>
    </slot>
  </div>
</template>

<script setup lang="ts">

import {computed} from "vue";

const prop = defineProps({
  visible:Boolean
})






</script>

<style scoped>

</style>
