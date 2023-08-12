 /**
   * @FileNAme src\views\Home\components\oneWord\index.vue
   * @author 周万宁
   * @create 2023/8/12-22:43
   * @version
   * @description 一言盒子
   */

 <template>
   <div class="one-word-box">
     <ground-glass>
       <div class="sentence">
         <div id="hitokoto" class="hitokoto-fullpage bounce animated">
           <div class="bracket-left">『</div>
           <br>
           <div class="word" id="hitokoto-text"></div>
           <br>
           <div class="bracket-right">』</div>
         </div>
         <div class="author" id="hitokoto-author"></div>
       </div>
     </ground-glass>
   </div>
 </template>

 <script setup lang="ts">

 import GroundGlass from "@/components/GroundGlass/GroundGlass.vue";
 </script>

 <style lang="scss" scoped>

 .one-word{

 }

 </style>
