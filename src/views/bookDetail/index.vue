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
          {{ bookinfo?.name || '' }}
        </span>
      </template>
    </el-page-header>
  </div>
  <div class="book-detail-container">
    <book-content :bookinfo="bookinfo"/>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import router from '@/router'
import bookContent from './components/bookContent.vue'
import books from '@/assets/books.json' // 直接导入 JSON 数据
const route = router.currentRoute
const bookId = ref(route.value.query.bookid)
const bookinfo = ref(books.find(book => book.id === bookId.value))

const goBack = () => {
  router.go(-1)
}

onMounted(() => {
  // 确保页面滚动到顶部
  window.scrollTo(0, 0)
})

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.detail-header {
  position: fixed;
  padding: 10px 0 10px 30px;
  width: 100%;
  height: 80px;
  top: 0px;
  left: 0px;
  border-bottom: 1px solid #4890ce;
  z-index: 999;
  background-color: #fff;
}
.book-detail-container {
  position: absolute;
  top: 80px;
  min-height: calc(100% - 80px);
  left: calc(50% - 600px); 
  width: 1200px;
  background-color: #eef4f5;
}
</style>
