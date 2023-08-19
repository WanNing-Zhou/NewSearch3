<template>
  <!--  这个盒子是用来存输入框和时间box  -->
  <div  class="search-box">
    <div
         v-if="!searchBoxVisible"
         @click="timeBoxClickHandel"
         class="time-box"
         :style="{
           display:timeBoxDiaplay,
         }"
         :class="timeBoxClass"
    >
            <span class="Atime ">
                    {{ currentTime }}
            </span>
    </div>

    <search-comp v-show="searchBoxVisible"/>
  </div>
</template>

<script setup lang="ts">

import {onBeforeUnmount, onMounted, Ref, ref, toRefs, watch} from "vue";
import SearchComp from "@/views/Home/components/SearchBox/components/SearchComp.vue";
import UseStore from "@/store/useStore.ts";
import {useCurrentTimeData} from "@/utils/time.ts";

const componentsVisibleStore = UseStore.componentsVisibleStore();
const {searchBoxVisible} = toRefs(componentsVisibleStore)
const {openSearchBox} = componentsVisibleStore
// 获取当前时间
const {currentTime} = useCurrentTimeData()


const timeBoxClass = ref('time-box-on')


// timeBox点击逻辑
const timeBoxClickHandel = () => {
  // timeBoxWidth.value = '600px';
  openSearchBox();
}

const timeBoxDiaplay: Ref<null | string> = ref(null)
// 见行searchBox的可见性
watch(searchBoxVisible, () => {
  if (searchBoxVisible.value) {
    timeBoxClass.value = 'time-box-off'
  } else {
    // 这里需要异步,等页面加载后再更换类名, 不然没有动画效果
    setTimeout(() => {
      timeBoxClass.value = 'time-box-on'
    },)
  }
}, {deep: true})


onMounted(() => {

})

</script>

<style lang="scss" scoped>
.search-box {
  position: absolute;
  top: 240px;
  font-size: 20px;
  color: #daf6ff;

  .time-box {
    height: 50px;
    border-radius: 25px;
    background-color: #000000;
    text-align: center;
    font-size: 30px;
    line-height: 50px;
    user-select: none;
    //font-weight: 400;
    letter-spacing: 3px;
    text-shadow: 0 0 10px #0aafe6, 0 0 10px rgba(10, 175, 230, 0);
    box-shadow: 0 0 10px #0aafe6, 0 0 10px rgba(10, 175, 230, 0);
    transition: width 1s, height 1s !important;

    &:hover {
      width: 600px;
    }
  }

  .time-box-on {
    width: 160px;
    transition: width 1s, height 1s !important;
  }

  .time-box-off {
    width: 600px;
    transition: width 1s, height 1s !important;
  }

}

</style>
