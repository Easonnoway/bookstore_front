<template>
  <div style="margin:40px 0">
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 text="2xl" justify="center">这里发图{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="book-list-container">
    <p style="font-size: 22px; font-weight: bold; margin-bottom: 5px">为你推荐：</p>
    <el-row :gutter="24">
      <el-col :span="4" v-for="(book, index) in books" :key="index">
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
import { ref } from 'vue'

const books = ref([
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
])
</script>

<style lang="scss">
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.book-list-container {
  padding: 20px 250px 0 250px;
  min-height: 300px;
//   background: #f0f0f0;
  // background-color: gray;
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
