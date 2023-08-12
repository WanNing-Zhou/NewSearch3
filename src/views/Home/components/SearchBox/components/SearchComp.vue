<template>
  <div class="search-comp">
    <div class="search-input">
      <!--   输入盒子左搜索引擎图标  -->
      <div class="search-icon engine-icon" @click.stop="engineClickHandle">
        <img class="search-img" :src="engin.imgUrl" :alt="engin.name" :title="engin.name">
      </div>
      <!--   搜索输入   -->
      <div class="input-box">
        <input v-model="searchWord" @keyup.enter="searchHandle" @input="searchWordChangeHandel" placeholder="搜索...">
      </div>
      <!--   点击查询部分   -->
      <div class="search-icon" @click.stop="searchHandle">
        <svg-icon name="search"></svg-icon>
      </div>
    </div>

    <div v-show="suBoxVisible" class="su-box">
      <suggestion-box :suggestionList="suggestionList"/>
    </div>

    <div v-show="engineListVisible" class="engine-box">
      <engine-list @closeEngineList="closeEngineListBox"></engine-list>
    </div>

  </div>
</template>

<script setup lang="ts">


import {onMounted, reactive, ref, toRefs} from "vue";
import SuggestionBox from "@/views/Home/components/SearchBox/components/SuggestionBox.vue";
import {getSearchSuggestions} from "@/api/home.ts";
import {debounce} from '@/utils/debounce.ts'
import EngineList from "@/views/Home/components/SearchBox/components/EngineList0.vue";
import {searchStore} from '@/store/searchStore.ts'
import UseStore from "@/store/useStore.ts";

const componentsVisibleStore = UseStore.componentsVisibleStore()
const store = searchStore();

const {suBoxVisible, engineListVisible} = toRefs(componentsVisibleStore)
const {openSuBox, closeSuBox, openEngineListBox, closeEngineListBox} = componentsVisibleStore
// 输入框数据
// const searchWord = ref('')

const {searchWord, engin} = toRefs(store.currentSearch)


// 建议列表
const suggestionList = ref([])
// suBox的可见性
// const suBoxVisible = ref(false)
//搜索引擎列表可见性
// const engineListVisible = ref(false)

// 获取搜索建议
const getSuggestionList = debounce(() => {
  getSearchSuggestions(searchWord.value).then(res => {
    return res.json()
  }).then(res => {
    // console.log('res',res)
    // 改变su可见性
    // suBoxVisible.value = res.s && res.s.length > 0;
    if (res.s && res.s.length > 0) {
      openSuBox()
    }
    suggestionList.value = res.s;
    // console.log(res.s)
  }).catch(err => {
    console.log(err)
  })
}, 300)

// 当数据发生改变触发
const searchWordChangeHandel = () => {

  // console.log('searchWord',searchWord)
  if (searchWord.value && searchWord.value !== '') {
    getSuggestionList()
  } else {
    closeSuBox();
  }
}

// 搜索功能
const searchHandle = () => {
  // 获取搜索
  const url = engin.value.searchUrl + searchWord.value;
  window.open(url, '_blank')
}

// 引擎点击事件
const engineClickHandle = () => {
  console.log('enginListVisible', engineListVisible.value)
  if (engineListVisible.value) {
    closeEngineListBox()
  } else {
    openEngineListBox()
  }

}

// 关闭引擎列表显示
const closeEngineList = () => {
  closeEngineListBox()

}

onMounted(() => {
  // getSuggestionList()
})

</script>

<style lang="scss" scoped>

.search-comp {
  position: relative;
  width: 600px;

  .search-input {
    width: 600px;
    height: 50px;
    border-radius: 25px;
    background-color: #000000;
    text-align: center;
    font-size: 30px;
    line-height: 50px;
    transition: width 1s, height 1s;
    user-select: none;
    //font-weight: 400;
    letter-spacing: 3px;
    text-shadow: 0 0 10px #0aafe6, 0 0 10px rgba(10, 175, 230, 0);
    box-shadow: 0 0 10px #0aafe6, 0 0 10px rgba(10, 175, 230, 0);
    display: flex;
    align-items: center;
    justify-content: space-around;

    .search-icon {
      width: 40px;
      height: 40px;
      border-radius: 20px;
      background-color: #daf6ff;
      //transition: ;
      //&:hover {
      //  transform: scale(1.1);
      //}
      -webkit-user-drag: none;
      user-select: none;
      cursor: pointer;
      background-position: center;
      background-size: 30px 30px;
      display: flex;
      justify-content: center;
      align-items: center;

      &:active {
        transform: scale(0.9);
      }

      .search-img {
        pointer-events: none;
        height: 30px;
        width: 30px;
      }
    }

    .engine-icon {
      background-size: cover;
    }

    .input-box {
      width: 480px;
      height: 40px;
      //display: flow-root;

      input {
        display: flow-root;
        color: #daf6ff;
        width: 100%;
        height: 100%;
        //margin-top: -20px;

        font-size: 1.1rem;
        border: none;
        background-color: transparent;
        letter-spacing: 1px;
        //background-color: white;
        outline: none;

        &::placeholder {
          color: #daf6ff;
        }
      }
    }
  }

  .su-box {
    position: absolute;
    top: 58px;
  }

  .engine-box {
    position: absolute;
    top: 58px;
  }
}

</style>
