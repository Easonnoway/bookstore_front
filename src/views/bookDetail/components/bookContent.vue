<template>
  <div class="book-content-container">
    <div class="book-content">
      <div class="book-cover">
        <img :src="bookContent.cover" alt="Book Cover" />
      </div>
      <div class="book-info">
        <h1 class="book-title">{{ bookContent.name }}</h1>
        <p class="book-author">作者：{{ bookContent.author }}</p>
        <p class="book-price">价格：{{ bookContent.price }}元</p>
        <el-rate class="book-rate" v-model="bookContent.rate" disabled></el-rate>
        <br />
        <el-button @click="confirmPurchase" type="primary">购买</el-button>
        <el-button @click="addToCart" type="success">加入购物车</el-button>
        <br /><br />
        <p style="font-weight: bold; margin-bottom: 20px">
          店铺：<a style="cursor: pointer" @click="gotoStore">{{ bookContent.store }}</a>
        </p>
        <p class="book-number">该店铺库存量：{{ bookContent.freeNumber }}</p>
      </div>
    </div>
    <div class="book-description">
      <h3>书籍简介:</h3>
      <p>
        {{ bookContent.description }}
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
import { ElMessage, ElMessageBox } from 'element-plus'
import relatedList from './relatedList.vue'
import commentArea from './commentArea.vue'
import { useRouter } from 'vue-router'
import { useApi } from '@/api'

const router = useRouter()
const api = useApi()

const props = defineProps<{
  bookinfo: any
}>()

const bookContent = ref(props.bookinfo)

const addToCart = async () => {
  try {
    const order = {
      bookinfo: bookContent.value,
      quantity: 1,
      total_price: bookContent.value.price,
      purchaseTime: new Date().toISOString()
    }
    let charts = JSON.parse(localStorage.getItem('cart') || '[]')
    charts.push(order)
    localStorage.setItem('cart', JSON.stringify(charts))
    ElMessage({
      showClose: true,
      type: 'success',
      message: '已加入购物车'
    })
  } catch (error) {
    ElMessage({
      showClose: true,
      type: 'error',
      message: '加入购物车失败'
    })
  }
}

const confirmPurchase = () => {
  ElMessageBox.confirm('确认要购买这本书吗？', '购买确认', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      addOrder()
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消购买'
      })
    })
}

const addOrder = async () => {
  const order = {
    bookinfo: bookContent.value,
    quantity: 1,
    total_price: bookContent.value.price,
    purchaseTime: new Date().toISOString()
  }
  let purchases = JSON.parse(localStorage.getItem('purchases') || '[]')
  purchases.push(order)
  localStorage.setItem('purchases', JSON.stringify(purchases))

  ElMessage({
    showClose: true,
    type: 'success',
    message: '购买成功'
  })
}

const gotoStore = () => {
  router.push({
    path: `/bookstore/${bookContent.value.storeId}`
  })
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
