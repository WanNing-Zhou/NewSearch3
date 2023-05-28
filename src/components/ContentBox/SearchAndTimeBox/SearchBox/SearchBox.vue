<template>
  <!--搜索框-->
  <div id="searchBox">
    <div class="searchIcon" @keydown="" @click="searchIconBoxVisible">
      <span :class="`iconfont ${sIcon}`"></span>
    </div>
    <input class="inputArea" ref="" type="text" placeholder="搜索.." v-model="searchValue">
    <div class="btn submit" @click="subSearch">
      <span class="iconfont icon-sousuo"></span>
    </div>
  </div>

  <!--      切换搜索引擎的盒子-->
  <!--切换搜索引擎的盒子-->
  <div id="searchIconsBox" @click="changeSearch">
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
  </div>
</template>
<script lang="ts">


import {searchs} from '@/consted/contented.ts'

export default {

  data() {
    return {
      searchValue: '',
      searchs: searchs,
      sName: searchs['Bing'],
      sIcon: 'icon-bing',

    }
  },

  methods: {
    //展示图标框
    searchIconBoxVisible() {
      console.log('你好')
      let searchIconsBox = document.querySelector('#searchIconsBox')
      searchIconsBox.style.height = 18 + 'rem';
      searchIconsBox.style.opacity = '1';
    },
    changeSearch(e) {
      let name = e.target.getAttribute('sName');
      this.sName = searchs[name]
      // console.log(sName)
      this.sIcon = this.sName.icon;
      // console.log(sIcon)
      this.searchIconBoxHidden();
      e.stopPropagation()//阻止事件冒泡
    },

    //隐藏图标框
    searchIconBoxHidden() {
      let searchIconsBox = document.querySelector('#searchIconsBox')
      searchIconsBox.style.height = '0rem';
      searchIconsBox.style.opacity = '0';
    },

    //搜索功能
    subSearch() {
      //跳转
      location.href = this.sName.url + this.searchValue;
    }
  }
}

</script>
<style scoped lang=less>

#searchBox {
  margin-top: 1.3rem;
  max-width: 50rem;
  width: 100%;
  height: 3rem;
  /*background-color: rgba(255, 228, 196, 0.1);*/

  background-image: linear-gradient(135deg, #cf94c5, #9bdbe1);
  /*background-color: rgba(255, 255, 255, .3);*/
  backdrop-filter: blur(10px);
  border-radius: 3rem;
  overflow: hidden;
  opacity: 0;
  color: #c0c6c9;
  padding: 3px;
  text-align: center;
  line-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  vertical-align: center;
  border: 0.1rem solid rgba(46, 64, 82, 0.8);
  /*transition: 0.6s;*/
}

</style>