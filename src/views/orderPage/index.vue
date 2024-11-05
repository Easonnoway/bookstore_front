<template>
  <div class="header-container">
    <TopMenu />
  </div>
  <div class="book-order-container">
    <order-content />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TopMenu from '../common/topMenu.vue'
import orderContent from './components/orderContent.vue'
</script>

<style>
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 999;
  background: #409eff;
}
.book-order-container {
    position: absolute;
    top: 60px;
    left: 20%;
    width: 60%;
    height: calc(100% - 60px);
}
</style>
