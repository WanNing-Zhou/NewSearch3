<template>
<!--  用来存输入框和时间-->
  <div id="SearAndTimeBox">
    <div id="timeBox" ref="timeBox" @click="showContent">
     <span class="Atime">{{currentTime}}</span>
    </div>

<!--  搜索盒子部分  -->
    <div id="searchAndIcons">
      <search-box ref="searchBox"></search-box>


    </div>
  </div>


</template>
<script lang="ts">
import SearchBox from "./SearchBox/SearchBox.vue";

import getDate from  '@/utils/getNowFilterTime.ts'
export default {
  components: { SearchBox},
  data(){
    return{
      searchAndIconsVisible: false,
    }
  },
  computed:{
    currentTime:()=>{
      return getDate().time;
    }
  },
  methods:{
    showContent(){
      console.log('refs',this.$refs.timeBox)
      let bgBox = document.querySelector('#backImgBox');
      bgBox.style.transform = 'scale(1.1)';
      // 点击模糊
      bgBox.style.filter = 'blur(10px)';
      let searchBox = document.querySelector('#searchBox')
      searchBox.style.opacity = '1';
      this.$refs.timeBox.style.zIndex = '-1'
      this.$refs.timeBox.style.opacity='0'
      this.$refs.timeBox.style.width = '72%'
      //searchBox元素

    }
  }
}
</script>
<style scoped lang=less>



</style>