<template>
  <div class="home-header">
    <top-menu />
  </div>
  <div class="content-container">
    <search-list :query="query" v-if="searchIndex === true" />
    <book-list v-else />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import topMenu from '../common/topMenu.vue'
import bookList from './components/bookList.vue'
import searchList from './components/searchList.vue'

const searchIndex = ref(false)
const route = useRoute()

const query = ref('')

watch(
  () => route.query.q,
  (newQuery) => {
    if (newQuery) {
      query.value = Array.isArray(newQuery) ? newQuery.join('') : newQuery
      searchIndex.value = true
    } else {
      searchIndex.value = false
    }
  },
  { immediate: true }
)
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