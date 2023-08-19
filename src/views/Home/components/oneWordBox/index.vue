/**
* @FileNAme src\views\Home\components\oneWord\index.vue
* @author 周万宁
* @create 2023/8/12-22:43
* @version
* @description 一言盒子
*/

<template>
  <div class="one-word-box animate__zoomInDown animated">
    <ground-glass :groundGlassStyle="{width:null, height: null, display:'flow-root'}">
      <div class="sentence">
        <div id="hitokoto" class="hitokoto-fullpage">
          <div class="bracket-left">『</div>
          <br>
          <div class="word hitokoto-text">{{ oneWordData.hitokoto }}</div>
          <br>
          <div class="bracket-right">』</div>
        </div>
        <div>
          <div class="author hitokoto-author">{{ oneWordData.fromContent }}</div>
        </div>
      </div>
      <div class="one-word-options">
        <span><SvgIcon @click="copy" name="copy"></SvgIcon></span>
        <span><SvgIcon @click="getOneWordHandle"  name="refresh"></SvgIcon></span>
      </div>
    </ground-glass>
  </div>
</template>

<script setup lang="ts">


import {computed, onMounted, Ref, ref} from "vue";
import {AxiosResponse} from "axios";
import useClipboard from 'vue-clipboard3'
import { ElMessage } from 'element-plus'
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";
import GroundGlass from "@/components/GroundGlass/GroundGlass.vue";
import {getOneWord} from "@/api/home.ts";


interface OneWord {
  from_who: string | null //作者
  from: string | null    // 来源
  hitokoto: string | null // 内容
  fromContent: string | null // 显示的来源
}

const oneWordData: Ref<OneWord> = ref({})

// 获取一言
const getOneWordHandle = () => {
  getOneWord().then((res: AxiosResponse<OneWord>) => {
    console.log(res)
    oneWordData.value.from_who = res.data.from_who;
    oneWordData.value.from = res.data.from
    oneWordData.value.hitokoto = res.data.hitokoto
    oneWordData.value.fromContent =
        (res.data.from_who ? ("—— " + res.data.from_who) : '') +
        (res.data.from ? ("    [" + res.data.from + "]") : '');
  })
}

const { toClipboard } = useClipboard()

const copy = async () => {
  try {
    if(oneWordData.value.hitokoto){
      await toClipboard(oneWordData.value.hitokoto)
    }
    ElMessage({
      message: '复制成功',
      type: 'success',
      customClass: 'message-success'
    })
    // console.log('Copied to clipboard')
  } catch (e) {
    // console.error(e)
  }
}

onMounted(
    () => {
      getOneWordHandle()
    }
)

</script>

<style lang="scss" scoped>

.one-word-box {
  position: absolute;
  transition: opacity 1s;
  bottom: 50px;
  z-index: -1;

/*  &:hover {
    transform: rotate3d(1, 1, 0, 15deg);
  }*/

  .sentence {
    width: 24rem;
    padding: 1rem 1rem;
    display: flow-root;
    border-radius: 1rem;
    color: rgba(255, 255, 255, 0.9);
    left: 50%;
    box-shadow: 0 0 1rem rgba(51, 51, 51, 0.1);
    transition: .5s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      box-shadow: 0 0 1rem rgba(51, 51, 51, 0);
    }


    .hitokoto-fullpage {
      width: 24rem;
      position: relative;
      /*box-shadow: 0 0 1rem rgba(51, 51, 51, 0.1);*/
    }


    .bracket-left {
      position: absolute;
      left: 0;
      top: 0;
    }

    .bracket-right {
      position: absolute;
      right: 0;
      bottom: 0;
    }

    .hitokoto-text {
      font-size: 1.2rem;
      text-align: center;
      line-height: 1.4rem;
      padding: 8px 25px;
      word-break: normal;
    }

    .hitokoto-author {
      font-size: .9rem;
      margin-top: 20px;
      float: right;
      word-break: normal;
    }

  }

  .one-word-options{
    width: 80px;
    display: flex;
    justify-content: space-between;
    line-height: 24px;
    font-size: 18px;
    color: #ffffff;
    &>span{
      color: white;
      cursor: pointer;
      user-select: none;
    }
  }

}



</style>
