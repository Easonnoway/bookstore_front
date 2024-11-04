<template>
  <div class="detail-header">
    <el-page-header @back="goBack" title="返回上一页">
      <template #breadcrumb>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: './' }"> 主页 </el-breadcrumb-item>
          <el-breadcrumb-item>书籍详情 </el-breadcrumb-item>
        </el-breadcrumb>
      </template>
      <template #content>
        <span style="color: #65676b; font-weight: 600" class="text-large font-600 mr-3">
          生命中所有的灿烂都将用寂寞来偿还
        </span>
      </template>
    </el-page-header>
  </div>
  <div class="book-detail-container">
    <book-content />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import router from '@/router'
import bookContent from './components/bookContent.vue'

const goBack = () => {
  router.go(-1)
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.detail-header {
  position: absolute;
  padding: 10px 0 10px 30px;
  width: 100%;
  height: 80px;
  top: 0px;
  left: 0px;
  border-bottom: 1px solid #4890ce;
}
.book-detail-container {
  position: absolute;
  top: 80px;
  min-height: calc(100% - 80px);
  left: calc(50% - 600px); 
  width: 1200px;
  background-color: #f0f0f0;
}
</style>
