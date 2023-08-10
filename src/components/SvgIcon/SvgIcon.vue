<template>
  <div class="svg-icon">
    <svg :class="className" aria-hidden="true" :style="iconStyle">
      <use :xlink:href="iconName"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
  className: {
    type: String,
    default: '',
  },
  iconStyle: {
    type: String,
    default: ''
  },
  name: { //应用的图标名称
    type: String,
    default: ''
  }
})

const iconName = computed(() => {
  return `/svgs/${props.name}.svg#icon`
})

</script>

<style lang="scss" scoped>
.svg-icon {
  svg {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

}
</style>
