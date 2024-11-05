<template>
  <div class="book-content-container">
    <div class="book-content">
      <div class="book-cover">
        <img :src="bookContent.imgSrc" alt="Book Cover" />
      </div>
      <div class="book-info">
        <h1 class="book-title">{{ bookContent.name }}</h1>
        <p class="book-author">作者：{{ bookContent.author }}</p>
        <p class="book-price">价格：{{ bookContent.price }}元</p>
        <el-rate class="book-rate" v-model="bookContent.rate" disabled></el-rate>
        <br />
        <el-button>购买</el-button>
        <el-button>加入购物车</el-button>
        <br /><br />
        <p style="font-weight: bold; margin-bottom: 20px">
          店铺：<a style="cursor: pointer" @click="gotoStroe">张梓延的店铺</a>
        </p>
        <p class="book-number">该店铺库存量：{{ bookContent.freeNumber }}</p>
      </div>
    </div>
    <div class="book-description">
      <h3>书籍简介:</h3>
      <p>
        《生命中所有的灿烂都将用寂寞来偿还》是作者Easonnoway的一部小说作品，小说主要讲述了......
      </p>
      <h3>相关评价:</h3>
      <comment-area />
      <h3>相关书籍:</h3>
      <related-list />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import relatedList from './relatedList.vue'
import commentArea from './commentArea.vue'
import { onMounted } from 'vue'
import router from '@/router'

const bookContent = ref({
  imgSrc: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg',
  name: '生命中所有的灿烂都将用寂寞来偿还',
  author: 'Easonnoway',
  price: 100,
  rate: 4,
  freeNumber: 999
})

const gotoStroe = () => {
  router.push('/bookstore')
}

</script>

<style scoped>
.book-content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.book-content {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.book-cover img {
  height: 300px;
}

.book-info {
  margin-left: 20px;
}
.book-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
}
.book-author,
.book-price,
.book-rate,
.book-number {
  font-size: 16px;
  margin-bottom: 5px;
}
.book-description {
  width: 60%;
  margin-left: calc(20% - 20px);
  width: 100%;
}
.book-description h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}
.book-description p {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
}
</style>
