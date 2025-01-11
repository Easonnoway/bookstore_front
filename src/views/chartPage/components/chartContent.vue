<template>
  <div class="order-content-container" v-if="cartItems.length > 0">
    <h3>购物车</h3>
    <el-table :data="cartItems" style="width: 100%">
      <el-table-column prop="bookinfo.cover" label="图片" width="200">
        <template #default="scope">
          <img :src="scope.row.bookinfo.cover" alt="商品图片" class="order-image" />
        </template>
      </el-table-column>
      <el-table-column prop="bookinfo.name" label="商品名称"></el-table-column>
      <el-table-column prop="bookinfo.store" label="商铺名称"></el-table-column>
      <el-table-column prop="bookinfo.price" label="单价 (元)"></el-table-column>
      <el-table-column label="数量" width="150">
        <template #default="scope">
          <el-input-number
            v-model="scope.row.quantity"
            :min="1"
            @change="updateQuantity(scope.row)"
            size="small"
          ></el-input-number>
        </template>
      </el-table-column>
      <el-table-column label="总价 (元)" width="150">
        <template #default="scope">
          {{ calculateTotal(scope.row) }}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template #default="scope">
          <el-button @click="removeFromCart(scope.row)" size="mini" type="danger"
            >移出购物车</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="cart-summary">
      <p>总金额: {{ totalAmount }} 元</p>
      <el-button type="primary" @click="proceedToCheckout">去结算</el-button>
    </div>
  </div>
  <div v-else class="empty-cart">
    <h3>购物车为空</h3>
    <el-button type="primary" @click="redirectToShop">去购物</el-button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'

interface Order {
  bookinfo: {
    id: string
    cover: string
    name: string
    author: string
    price: number
    rate: number
    freeNumber: number
    description: string
    store: string
    storeId: string
  }
  quantity: number
  price: number
  status?: string
  purchaseTime?: string
}

const router = useRouter()

const cartItems = ref<Order[]>([])

// 初始化购物车数据
onMounted(() => {
  cartItems.value = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : []
})

// 计算单个订单的总价
const calculateTotal = (order: Order) => {
  return (order.bookinfo.price * order.quantity).toFixed(2)
}

// 计算购物车的总金额
const totalAmount = computed(() => {
  return cartItems.value
    .reduce((sum, item) => sum + item.bookinfo.price * item.quantity, 0)
    .toFixed(2)
})

// 更新商品数量
const updateQuantity = (order: Order) => {
  const index = cartItems.value.findIndex((item) => item.bookinfo.id === order.bookinfo.id)
  if (index !== -1) {
    cartItems.value[index].quantity = order.quantity
    localStorage.setItem('cart', JSON.stringify(cartItems.value))
    ElMessage({
      showClose: true,
      type: 'success',
      message: '商品数量已更新'
    })
  }
}

// 移出购物车
const removeFromCart = (order: Order) => {
  ElMessageBox.confirm(`确认要将 "${order.bookinfo.name}" 移出购物车吗？`, '移出确认', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    cartItems.value = cartItems.value.filter((item) => item.bookinfo.id !== order.bookinfo.id)
    localStorage.setItem('cart', JSON.stringify(cartItems.value))
    ElMessage({
      showClose: true,
      type: 'success',
      message: '商品已移出购物车'
    })
  })
}

// 进行结算
const proceedToCheckout = () => {
  ElMessageBox.confirm('确认要结算并购买购物车中的所有商品吗？', '结算确认', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      if (cartItems.value.length === 0) {
        ElMessage({
          showClose: true,
          type: 'info',
          message: '购物车为空，无法进行结算'
        })
        return
      }

      // 获取现有购买记录
      const existingPurchases = localStorage.getItem('purchases')
        ? JSON.parse(localStorage.getItem('purchases')!)
        : []

      // 创建新的购买记录
      const newPurchases = cartItems.value.map((item) => ({
        bookinfo: item.bookinfo,
        quantity: item.quantity,
        total_price: parseFloat(calculateTotal(item)),
        purchaseTime: new Date().toISOString()
      }))

      // 合并购买记录
      const updatedPurchases = [...existingPurchases, ...newPurchases]
      localStorage.setItem('purchases', JSON.stringify(updatedPurchases))

      // 清空购物车
      cartItems.value = []
      localStorage.setItem('cart', JSON.stringify(cartItems.value))

      ElMessage({
        showClose: true,
        type: 'success',
        message: '结算成功，感谢您的购买！'
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消结算'
      })
    })
}

// 跳转到购物页面
const redirectToShop = () => {
  router.push('/') // 根据项目路由配置调整
}
</script>

<style scoped>
.order-content-container {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.order-content-container h3 {
  margin-bottom: 20px;
}

.order-image {
  width: 100px;
  height: auto;
  border-radius: 5px;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.el-table th,
.el-table td {
  text-align: center;
}

.el-button {
  margin-top: 5px;
}

.cart-summary {
  margin-top: 20px;
  text-align: right;
}

.cart-summary p {
  font-size: 18px;
  font-weight: bold;
}

.empty-cart {
  text-align: center;
  padding: 50px;
}

.empty-cart h3 {
  margin-bottom: 20px;
}
</style>
