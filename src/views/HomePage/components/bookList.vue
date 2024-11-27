<template>
  <div style="margin: 40px 20px">
    <el-carousel :interval="3000" type="card" height="400px">
      <el-carousel-item v-for="(item, index) in carouselItems" :key="index">
        <img :src="item" alt="Carousel Image" class="carousel-image" />
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="book-list-container">
    <p style="font-size: 22px; font-weight: bold; margin-bottom: 5px">为你推荐：</p>
    <el-row :gutter="24">
      <el-col :span="4" v-for="(book, index) in books" :key="index">
        <img
          style="cursor: pointer"
          @click="gotoDetail"
          :src="book.cover"
          alt="Book Cover"
          class="book-cover"
        />
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
import { ref, onMounted } from 'vue'
import router from '@/router'
import { useApi } from '@/api'

const api = useApi()

const carouselItems = ref<string[]>([
  'https://img61.ddimg.cn/picc/24PCx675x1125xXF.jpg',
  'https://img60.ddimg.cn/picc/24PCx675x1125xPSY.jpg',
  'https://img62.ddimg.cn/picc/24PCx675x1125xMSK.jpg',
  'https://img60.ddimg.cn/picc/24PCx675x1125xMW.jpg'
])
const books = ref<any[]>([])

onMounted(async () => {
  try {
    const response = await api.home.getRecommendBook()
    books.value = response.data.books
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})

const gotoDetail = () => {
  router.push({
    path: '/bookdetail'
    // query: { bookId: 1 }
  })
}
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
  border-radius: 20px;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
  border-radius: 20px;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.book-list-container {
  padding: 20px 250px 0 250px;
  min-height: 300px;
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
