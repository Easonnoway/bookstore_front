<template>
  <div class="search-list-container">
    <p style="font-size: 22px; font-weight: bold; margin-bottom: 5px">搜索结果:</p>
    <el-row :gutter="24">
      <el-col :span="3" v-for="(book, index) in books" :key="index">
        <img :src="book.cover" alt="Book Cover" class="book-cover" />
        <div class="book-info">
          <p class="book-author">{{ book.author }}</p>
          <p class="book-price" style="color: red">{{ book.price }}</p>
          <el-rate v-model="book.rate" disabled></el-rate>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { defineProps } from 'vue'
import { useApi } from '@/api'
const props = defineProps<{
  query: string
}>()

onMounted(async () => {
  const res = await useApi().home.getSearchBooks({ keyword: props.query })
})

const books = ref([
  {
    cover: 'https://example.com/book-cover.jpg',
    author: '张梓延',
    price: 100,
    rate: 4.5
  }
])
</script>

<style lang="scss">
.search-list-container {
  margin: 20px 200px 0 200px;
  min-height: 300px;
  //   background-color: gray;
}

.book-cover {
  width: 100%;
  height: auto;
}

.book-info {
  text-align: center;
}

.book-author,
.book-price {
  margin: 0;
}
</style>
