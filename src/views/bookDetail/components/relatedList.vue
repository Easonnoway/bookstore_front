<template>
  <div class="search-list-container">
    <el-row :gutter="24">
      <el-col :span="6" v-for="(book, index) in books" :key="index">
        <img :src="book.cover" alt="Book Cover" class="book-cover" />
        <div class="book-info">
          <p class="book-author">{{ book.author }}</p>
          <p class="book-price" style="color:red;">{{ book.price }}</p>
          <el-rate v-model="book.rate" disabled></el-rate>
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
    author: '生命中所有的灿烂都将用寂寞来偿还',
    price: '￥100',
    rate: 4
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元',
    rate: 4
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元',
    rate: 4
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元',
    rate: 4
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元',
    rate: 4
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元',
    rate: 4
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元',
    rate: 4
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元',
    rate: 4
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元',
    rate: 4
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元',
    rate: 4
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元',
    rate: 4
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元',
    rate: 4
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元',
    rate: 4
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元',
    rate: 4
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元',
    rate: 4
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元',
    rate: 4
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元',
    rate: 4
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元',
    rate: 4
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元',
    rate: 4
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元',
    rate: 4
  },
  {
    cover: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
    author: 'zzy',
    price: '10元',
    rate: 4
  }
])

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
