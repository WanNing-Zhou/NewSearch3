<template>
  <section id="content">
   <logo-and-info/>
    <search-and-time-box/>
    <sentence-box/>
  </section>
</template>
<script  lang="ts">
 import LogoAndInfo from "./LogoAndInfo/LogoAndInfo.vue";
 import SearchAndTimeBox from "./SearchAndTimeBox/SearchAndTimeBox.vue";
 import SentenceBox from "./SentenceBox/SentenceBox.vue";

 export default {
   components: {SentenceBox, SearchAndTimeBox, LogoAndInfo}
 }


</script>
<style scoped lang=less>

</style>