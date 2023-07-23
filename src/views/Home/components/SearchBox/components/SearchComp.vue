<template>
  <div class="search-comp">
    <div class="search-input">
      <!--   输入盒子左搜索引擎图标  -->
      <div class="search-icon">
        <i></i>
      </div>
      <!--   搜索输入   -->
      <div class="input-box">
        <input v-model="searchWord" placeholder="搜索...">
      </div>
      <!--   点击查询部分   -->
      <div class="search-icon">

      </div>
    </div>


    <div v-show="" class="su-box">
      <suggestion-box/>
    </div>

  </div>
</template>

<script setup lang="ts">


import {onMounted, ref} from "vue";
import SuggestionBox from "@/views/Home/components/SearchBox/components/SuggestionBox.vue";
import {getSearchSuggestions} from "@/api/home.ts";

const searchWord = ref('')

const getSuggestionList = ()=>{
  getSearchSuggestions('').then(res=>{
    return res.json()
  }).then(res=>{
    console.log('res',res)
  })
}

onMounted(()=>{
  getSuggestionList()
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
      &:hover {
        transform: scale(1.1);
      }
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

  .su-box{
    position: absolute;
    top: 58px;
  }
}

</style>
