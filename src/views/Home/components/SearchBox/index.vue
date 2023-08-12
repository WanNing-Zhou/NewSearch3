<template>
  <!--  这个盒子是用来存输入框和时间box  -->
  <div id="SearAndTimeBox" class="search-box">
    <div id="timeBox "
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

    <!--    &lt;!&ndash;整个搜索盒子部分&ndash;&gt;
        <div id="searchAndIcons">
          &lt;!&ndash;搜索框&ndash;&gt;
          <div id="searchBox">
            <div class="searchIcon">
              <span class="iconfont icon-bing"></span>
            </div>
            <input class="inputArea" type="text" placeholder="搜索..">
            <div class="btn submit">
              <span class="iconfont icon-sousuo"></span>
            </div>
          </div>-->

    <!--      &lt;!&ndash;切换搜索引擎的盒子&ndash;&gt;
      <div id="searchIconsBox">
        <div sName="baidu">
          <span sName="baidu" class="iconfont icon-baidu"></span>
          <span sName="baidu" class="searchName">百度搜索</span>
        </div>

        <div sName="Bing">
          <span sName="Bing" class="iconfont icon-bing"></span>
          <span sName="Bing" class="searchName">必应搜索</span>
        </div>
        <div sName="Google">
          <span sName="Google" class="iconfont icon-guge"></span>
          <span sName="Google" class="searchName">谷歌搜索</span>
        </div>
        <div sName="San60">
          <span sName="San60" class="iconfont icon-icon-test"></span>
          <span sName="San60" class="searchName">360搜索</span>
        </div>
        <div sName="SouGou">
          <span sName="SouGou" class="iconfont icon-sogou"></span>
          <span sName="SouGou" class="searchName">搜狗搜索</span>
        </div>
      </div>-->
    <!--    </div>-->
  </div>
</template>

<script setup lang="ts">

import {onBeforeUnmount, onMounted, Ref, ref, toRefs, watch} from "vue";
import {getCurrentTime} from "@/utils/momentData.ts";
import SearchComp from "@/views/Home/components/SearchBox/components/SearchComp.vue";
import UseStore from "@/store/useStore.ts";

const componentsVisibleStore = UseStore.componentsVisibleStore();
const {searchBoxVisible} = toRefs(componentsVisibleStore)
const {openSearchBox} = componentsVisibleStore
// 获取当前时间
const currentTime = ref(getCurrentTime())
let timmer; // 定时器

const timeBoxClass = ref('time-box-on')


// timeBox点击逻辑
const timeBoxClickHandel = () => {
  // timeBoxWidth.value = '600px';
  openSearchBox();
}

const timeBoxDiaplay: Ref<null | string> = ref(null)
// 见行searchBox的可见性
watch(searchBoxVisible, (newValue, oldValue) => {
  // console.log('事件触发了', newValue, oldValue)
  if (searchBoxVisible.value) {
    timeBoxClass.value = 'time-box-off'
  } else {
    // 这里需要异步,等页面加载后再更换类名, 不然没有动画效果
    setTimeout(()=>{
      timeBoxClass.value = 'time-box-on'
    },)
  }
}, {deep: true})


onMounted(() => {
  timmer = setInterval(() => {
    currentTime.value = getCurrentTime()
  }, 1000)
})

onBeforeUnmount(() => {
  clearInterval(timmer)
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
