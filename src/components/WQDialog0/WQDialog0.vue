<!--
  @FileNAme src\components\WQDialog0\WQDialog0.vue
  @author 周万宁
  @create 2023/8/21-19:48
  @version
  @description
 -->

<template>
  <transition name="dialog-fade">
    <section class="dialog_wrap" v-show="visible" @click.self="handleMaskClose">
      <div class="dialog" :style="{width, marginTop: top}">

        <div class="dialog_header">
          <!--  标题的具名查早, 不传值得时候, 直接取title 否则替换slot   -->
          <slot name="title">
            <span class="dialog_header_title"
            >{{ title }}</span>
          </slot>
          <button class="dialog_header_btn" @click="handleClose">
            <span class="remove" title="关闭">
              <SvgIcon name="close"></SvgIcon>
            </span>
          </button>
        </div>
        <!--       主题内容区域  -->
        <div class="dialog_body">
          <slot>
            <span>这是一条消息</span>
          </slot>
        </div>

        <div class="dialog_footer">
          <slot name="footer"></slot>
          <slot name="footer">
            <button class="dialog_footer_cancel" @click="handleCancel">
              取消
            </button>
            <button class="dialog_footer_confirm" @click="handleConfirm">
              确定
            </button>
          </slot>
        </div>
      </div>
    </section>
  </transition>
</template>

<script setup lang="ts">
import {toRefs} from "vue";


const props = defineProps({
  // 标题
  title: {
    type: String,
    default: '消息',
  },
  // 宽度
  width: {
    type: String,
    default: "50%",
  },
  // 距离顶部距离
  top: {
    type: String,
    default: "15vh"
  },
  // 可见性
  visible: {
    type: Boolean,
    default: false,
  },
  mashFlag: {
    type: Boolean,
    default: true,
  }
})

const {title, width, top, visible, mashFlag} = toRefs(props)


const emit = defineEmits(['update:visible','cancel','confirm'])

// 遮罩层关闭
const handleMaskClose = ()=>{
  if (!mashFlag) return false;
  emit("update:visible", false)

}

// 关闭
const handleClose = ()=>{
  emit("update:visible", false)
}

// 取消
const handleCancel = () => {
  emit('cancel')
}

// 提交
const handleConfirm = ()=>{
  emit('confirm')
}

</script>

<style lang="scss" scoped>
.dialog-fade-enter-active {
  animation: fade 0.5s;
}

.dialog-fade-leave-active {
  animation: fade 0.5s reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

.dialog_wrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background: rgba(0, 0, 0, 0.5);

  .dialog {
    position: relative;
    margin: 15vh auto 50px;
    border-radius: 4px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
    //box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;

    & > .dialog_header {
      padding: 20px 20px 10px;
      line-height: 24px;
      font-size: 18px;
      color: #303133;

      .dialog_header_btn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
      }

      .removes {
        position: absolute;
        right: 0;
        top: 0;
        color: #303133;
        cursor: pointer;
      }

      .removes::before {
        content: "\2716";
      }
    }

    & > .dialog_body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }

    & > .dialog_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;

      button {
        background: transparent;
        padding: 4px 6px;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 14px;
        border: 1px solid #ccc;
      }

      .dialog_footer_cancel {
        margin-right: 20px;
      }
    }
  }
}
</style>
