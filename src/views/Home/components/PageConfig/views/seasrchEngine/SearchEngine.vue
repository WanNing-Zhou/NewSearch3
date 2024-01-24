<template>
  <section class="search-engine-config">
    <div class="engine-list">
      <draggable v-model="engineList"  @start="onStart" @end="onEnd" item-key="name">
        <template #item="{ element }">
          <div class="item search-engine">
            <div class="en-icon " :style="`background-image: url('${element.imgUrl}')`"></div>
            <div>{{element.name}}</div>
            <!--          <el-input type="text" v-model="element.searchUrl"></el-input>-->
            <div class="eg-url">{{element.searchUrl}}</div>
            <el-button type="text" @click="deleteEn(element)">删除</el-button>
<!--            <el-button type="text">编辑</el-button>-->
          </div>
        </template>
      </draggable>
    </div>

    <div class="add-engine">
      <div class="en-form-box">
        <wq-upload v-model="enForm.imgUrl" width="98" height="98" class="icon-upload"/>
        <div class="en-form">
          <div>
            <el-input v-model="enForm.imgUrl" placeholder="图标地址(默认为网站图标)"></el-input>
          </div>
          <div>
            <el-input v-model="enForm.name" placeholder="名称"></el-input>
          </div>
          <div>
            <el-input v-model="enForm.searchUrl" placeholder="URL?参数"></el-input>
          </div>
        </div>
      </div>
      <div class="btn-box">
        <el-button type="text" @click="submit">添加</el-button>
        <el-button type="text">取消</el-button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {computed, ref, toRefs} from "vue";
import draggable from "vuedraggable";
import UseStore from "@/store/useStore.ts";
import WqUpload from "@/components/uploadComp/wqUpload.vue";
import {SearchEngine} from "@/type/searchTypes.ts";


const configStore = UseStore.useConfStore();
const {searchEngine} = toRefs(configStore)

// 引擎列表
const engineList = computed({
  get: ()=>{
    return searchEngine.value.engineList
  },
  set: (egList)=>{
    configStore.setEngineList(egList)
  }
})
// 删除引擎
const deleteEn = (eit: SearchEngine) => {
  // 找到目标索引, 但是这个会存在bug :TODO 后期可以为引擎添加id属性
  const objIndex = engineList.value.findIndex(item => item.imgUrl === eit.imgUrl && item.name === eit.name && item.searchUrl === eit.searchUrl)
  const newList = engineList.value.filter((item, index) => {
    return index !== objIndex
  })
  // 设置存储中的引擎列表
  configStore.setEngineList( [...newList])
}

const enEmpty = {
  name: '',
  imgUrl: '',
  searchUrl: '',
}

const enForm = ref({
 ...enEmpty
})

// 清空添加表单
const clearEnForm = () => {
  enForm.value.imgUrl = ''
  enForm.value.searchUrl = ''
  enForm.value.name = ''
}

const onStart = () => {

}

// 添加搜索引擎确认
const submit = () => {
  // 设置存储中的引擎列表
  configStore.setEngineList( [...engineList.value, {...enForm.value}])
  // 清空表单
  clearEnForm()
}

const onEnd = () => {
}

</script>

<style lang="scss" scoped>
.search-engine-config {
  height: 100%;
  //padding-bottom: 120px;
  position: relative;
  overflow: hidden;

  .engine-list{
    height: calc(100% - 124px);
    overflow: auto;
  }
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
      flex-shrink: 0;
    }

    .swiper-pagination-bullets.swiper-pagination-horizontal{
      margin-top: 10px;
    }

    .eg-url{
      width: 500px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

  }

  .add-engine{
    width: 100%;
    position: absolute;
    bottom: 0;
    .en-form-box{
      width: 100%;

      display: flex;
      align-items: center;

      .icon-upload{
        margin-right: 10px;
      }
    }


    .en-form{
      flex-grow: 1;
      &>div {
        margin: 5px 0;
      }

    }

    .btn-box{
      display: flex;
      justify-content: end;
    }

  }
}
</style>
