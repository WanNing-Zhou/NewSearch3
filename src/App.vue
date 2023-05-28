
<template>
<!--  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>-->
<!--  <HelloWorld msg="Vite + Vue" />-->

  <back-img-box/>
  <content-box/>
  <footer/>


</template>

<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import BackImgBox from "./components/BackImgBox/BackImgBox.vue";
import ContentBox from "./components/ContentBox/ContentBox.vue";
import Footer from "./components/Footer/Footer.vue";


</script>

<style scoped>
/*.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}*/
</style>
