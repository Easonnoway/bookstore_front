<template>
  <div class="search-list-container">
    <el-row :gutter="24">
      <el-col :span="6" v-for="(book, index) in books" :key="index">
        <img :src="book.cover" alt="Book Cover" class="book-cover" @click="gotodetail(book.id)"/>
        <div class="book-info">
          <p class="book-author">{{ book.name }}</p>
          <p class="book-author">{{ book.author }}</p>
          <p class="book-price" style="color: red">{{ book.price }}</p>
          <el-rate v-model="book.rate" disabled></el-rate>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import book from '@/assets/books.json'
import router from '@/router';

interface Book {
  id: string;
  cover: string;
  name: string;
  author: string;
  price: number;
  rate: number;
  freeNumber: number;
  description: string;
  store: string;
  storeId: string;
}

const books = ref<Book[]>([]);

const gotodetail = (id:any) => {
   router.push({
    path: '/bookdetail',
    query: { bookid:id }
  })
}

function getRandomBooks() {
  const currentBookId = router.currentRoute.value.query.bookid;
  let filteredBooks = book.filter(b => b.id !== currentBookId);
  const shuffled = filteredBooks.sort(() => 0.5 - Math.random());
  books.value = shuffled.slice(0, 4);
}

getRandomBooks();
</script>

<style lang="scss" scoped>
.search-list-container {
  width: 80%;
}

.book-cover {
  width: 100%;
  height: auto;
}

.book-info {
  text-align: center;
  margin-bottom: 20px;
}

.book-author,
.book-price {
  margin: 0;
}
</style>
