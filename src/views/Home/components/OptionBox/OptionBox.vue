<template>
  <div class="option-box">
    <section class="options">
      <GroundGlass style="display: flex; flex-direction: row; justify-content: space-between"></GroundGlass>
    </section>
  </div>
</template>

<script setup lang="ts">

import GroundGlass from "@/components/GroundGlass/GroundGlass.vue";
</script>

<style lang="scss" scoped>
.option-box{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
</style>
