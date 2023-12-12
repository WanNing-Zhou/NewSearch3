<template>
  <div class="upload-avatar">
    <div class="avatar" :class="type" @click="uploadPhoto">
      <div class="pic" v-if="defaultPhoto" :style="{'background-image':'url('+ defaultPhoto +')'}"></div>
      <div class="bg-icon" v-else>
        <slot>
          <SvgIcon name="add"></SvgIcon>
        </slot>
      </div>
<!--      <div class="mask">
        <i class="iconfont icon-paizhao-"></i>
      </div>-->
    </div>
    <input type="file" ref="fileInputDom" class="file_input_file" accept="image/*" v-show="false" @change="uploadFileChange($event)">
  </div>
</template>

<script setup lang="tsx">
import {ref} from "vue";
import {fileOverSize} from "@/utils/message";

type Prop = {
  type?: 'rect' | 'circle';
  uploadFn?: (file: File)=>Promise<string | null>;

}

const props = withDefaults(defineProps<Prop>(), {
  type: 'rect',
  uploadFn: (file: File):Promise<string|null>=> {
    return new Promise((resolve) => {
       resolve(URL.createObjectURL(file))
    })
  }
})

const defaultPhoto = ref('');
const fileInputDom = ref()
// 上传照片
const uploadPhoto = () => {
  // fileInputDom.value = ev.target?.closest('.upload-avatar')?.querySelector('.file_input_file')
  // fileInputDom.click()
  console.log('fileInputDom', fileInputDom)
  fileInputDom.value.click()
}

// 上传文件请求
const uploadFileRequest = async (file: File) => {
  defaultPhoto.value = await props.uploadFn(file) || ''

  console.log('file', file)
  // 可以使用TUS进行文件上传操作
}
// 限制上传文件类型
const uploadFileChange  = (event: any) =>{
  // console.log('event',event);
  // 检查文件大小
  if (event.target.files[0].size / 1024 <= 500) {
    const file = event.target.files[0]
    uploadFileRequest(file)
    defaultPhoto.value = URL.createObjectURL(file)
    fileInputDom.value.value = ''
  } else {
    fileOverSize()
  }
}


</script>

<style lang="scss" scoped>
.upload-avatar {
  width: 48px;
  height: 48px;
  //border-radius: 48px;

  line-height: 48px;
  //font-size: 0;
  background: #e2ebff;
  border: 2px dashed rgba(142, 146, 155, 0.6);
  //color: black;
  font-size: 30px;
  text-align: center;
  overflow: hidden;

  &.rect{
    border-radius: 4px;
  }

  &.circle{
    border-radius: 48px;
  }

  .avatar {
    width: 100%;
    height: 100%;
    .pic {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .bg-icon {
      i {
        color: #4886ff;
        font-size: 32px;
      }
    }
    .mask {
      width: 100%;
      height: 20px;
      background: rgba(0, 0, 0, 0.25);
      position: absolute;
      bottom: 0;
      left: 0;
      line-height: 20px;
      font-size: 0;
      i {
        color: #fff;
        font-size: 16px;
      }
    }
  }
}
</style>
