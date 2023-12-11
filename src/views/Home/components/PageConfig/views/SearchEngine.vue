<template>
  <div class="search-engine-config">
    <draggable v-model="engineList"  @start="onStart" @end="onEnd">
      <template #item="{ element }">
        <div class="item search-engine">
          <div class="en-icon " :style="`background-image: url('${element.imgUrl}')`"></div>
          <div>{{element.name}}</div>
<!--          <el-input type="text" v-model="element.searchUrl"></el-input>-->
          <div class="eg-url">{{element.searchUrl}}</div>
          <el-button type="text">删除</el-button>
          <el-button type="text">编辑</el-button>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import {computed, toRefs} from "vue";
import UseStore from "@/store/useStore.ts";
import draggable from "vuedraggable";
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";

const configStore = UseStore.useConfStore();
const {searchEngine} = toRefs(configStore)
const engineList = computed({
  get: ()=>{
    return searchEngine.value.engineList
  },
  set: (egList)=>{
    configStore.setEngineList(egList)
  }
})

const onStart = () => {

}

const onEnd = () => {

}

</script>

<style lang="scss" scoped>
.search-engine-config {
  .search-engine{
    display: flex;
    align-items: center;
    margin: 5px;
    border-radius: 5px;
    //text-align: center;
    padding: 20px;
    font-size: 14px;
    //background-color: rgba(134, 142, 150, 0.8);
    user-select: none;
    white-space: nowrap;

    &>div{
      margin: 0 10px;
    }

    .en-icon{
      width: 30px;
      height: 30px;
      background-size: cover;
      background-position: center;
    }

    .swiper-pagination-bullets.swiper-pagination-horizontal{
      margin-top: 10px;
    }

    .eg-url{
      width: 400px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

  }
}
</style>
