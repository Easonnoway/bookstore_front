<template>
  <div class="home-header">
    <top-menu />  
  </div>
  <div class="content-container">
    <search-list v-if="searchIndex === true" />
    <book-list v-else />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import topMenu from '../common/topMenu.vue';
import bookList from './components/bookList.vue'
import searchList from './components/searchList.vue'

const searchIndex = ref(false)

</script>

<style lang="css" scoped>
.home-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 999;
  background: #409eff;
}


.content-container {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: calc(100% - 60px);
  /* background: #f0f0f0; */
}
</style>
