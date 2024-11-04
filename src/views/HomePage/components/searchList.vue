<template>
  <div class="search-list-container">
    <p style="font-size:22px;font-weight:bold;margin-bottom:5px">搜索结果:</p>
    <el-row :gutter="24">
      <el-col :span="3" v-for="(book, index) in books" :key="index">
        <img :src="book.cover" alt="Book Cover" class="book-cover" />
        <div class="book-info">
          <p class="book-author">{{ book.author }}</p>
          <p class="book-price" style="color:red;">{{ book.price }}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const books = ref([
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元'
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元'
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元'
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元'
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元'
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元'
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元'
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元'
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元'
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元'
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元'
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元'
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元'
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元'
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元'
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元'
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元'
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元'
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
