<template>
  <div class="search-list-container">
    <p style="font-size: 22px; font-weight: bold; margin-bottom: 5px">搜索结果:</p>
    <el-row :gutter="24">
      <el-col :span="3" v-for="(book, index) in books" :key="index">
        <img :src="book.cover" alt="Book Cover" class="book-cover" />
        <div class="book-info">
          <p class="book-author" style="font-weight: 600">{{ book.name }}</p>
          <p class="book-author">{{ book.author }}</p>
          <p class="book-price" style="color: red">{{ book.price }}</p>
          <el-rate v-model="book.rate" disabled></el-rate>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { defineProps } from 'vue'
import { useApi } from '@/api'
import allbooks from '@/assets/books.json'

const api = useApi()
const props = defineProps<{
  query: string
}>()

const books = allbooks.filter((book: any) => book.name.includes(props.query))

const fetchSearchResults = async () => {
  try {
    const res = await api.home.getSearchBook({ keyword: props.query })
    books.values = res.data.books
  } catch (error) {
    console.error('Error fetching search results:', error)
  }
}

onMounted(() => {
  fetchSearchResults()
})

watch(
  () => props.query,
  (newQuery) => {
    if (newQuery) {
      fetchSearchResults()
    }
  }
)
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