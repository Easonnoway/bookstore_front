<template>
  <div class="store-content-container">
    <div class="store-avatar">
      <el-avatar :size="100" :src="store.avatar"></el-avatar>
    </div>
    <div class="store-info">
      <h2 class="store-name">
        {{ store.name }}
        <el-tag>我的店铺</el-tag>
      </h2>
      <p class="store-owner">店主：{{ store.owner }}</p>
      <p class="store-book-count">图书种类数：{{ store.bookCount }}</p>
    </div>
  </div>
  <div class="book-list">
    <book-list v-if="iscoustomer" :bookInfoList="bookInfoList" />
    <book-table v-else :bookInfoList="bookInfoList"/>
  </div>
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue'
import bookList from './bookList.vue'
import bookTable from './bookTable.vue'
import { useApi } from '@/api'
import books from '@/assets/books.json'
const bookInfoList = books.filter((book: any) => book.storeId === 'store123')
const api = useApi()
const iscoustomer = ref(false)
const store = ref({
  avatar: 'https://example.com/store-avatar.jpg',
  name: '张梓延的书店',
  owner: '张梓延',
  bookCount: 120
})
const getStoreInfo = async () => {
  // 获取店铺信息
  store.value = await api.store.getStoreInfo({id:2})
}
onMounted(async() => {
  const role = localStorage.getItem('identity')
  if (role === '1') {
    iscoustomer.value = true
  }
  else if(role === '2'){
    iscoustomer.value = false
    await getStoreInfo()
  }
})  
</script>

<style scoped>
.store-content-container {
  display: flex;
  align-items: center;
  padding: 20px;
  border: 1px solid #ebeef5;
  border-radius: 10px;
  background-color: #fff;
}

.store-avatar {
  margin-right: 20px;
}

.store-info {
  display: flex;
  flex-direction: column;
}

.store-name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.store-owner,
.store-book-count {
  font-size: 16px;
  margin-bottom: 5px;
}
.book-list {
}
</style>
