<template>
  <div class="order-content-container">
    <h3>已购订单</h3>
    <el-table :data="purchasedOrders" style="width: 100%">
      <el-table-column prop="bookinfo.cover" label="图片" width="200">
        <template #default="scope">
          <img :src="scope.row.bookinfo.cover" alt="商品图片" class="order-image" />
        </template>
      </el-table-column>
      <el-table-column prop="purchaseTime" label="购买时间"></el-table-column>
      <el-table-column prop="bookinfo.name" label="商品名称"></el-table-column>
      <el-table-column prop="bookinfo.store" label="商铺名称"></el-table-column>
      <el-table-column label="价格和数量" width="150">
        <template #default="scope">
          <div class="price-quantity">
            <p>价格: {{ scope.row.bookinfo.price }}元</p>
            <p>数量: {{ scope.row.quantity }}</p>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template #default="scope">
          <div
            v-if="scope.row.status !== '已收货' && scope.row.status !== '已退货'"
            class="action-buttons"
          >
            <template>
              <el-button @click="initiateReturn(scope.row)" size="mini" type="danger"
                >退货</el-button
              >
              <el-button @click="confirmReceipt(scope.row)" size="mini" style="margin-top: 5px"
                >确认收货</el-button
              >
            </template>
          </div>
          <span v-else>已完成</span>
        </template>
      </el-table-column>
    </el-table>

    <h3>退货订单</h3>
    <el-table :data="returnedOrders" style="width: 100%">
      <el-table-column prop="bookinfo.cover" label="图片" width="200">
        <template #default="scope">
          <img :src="scope.row.bookinfo.cover" alt="商品图片" class="order-image" />
        </template>
      </el-table-column>
      <el-table-column prop="returnTime" label="退货时间"></el-table-column>
      <el-table-column prop="bookinfo.name" label="商品名称"></el-table-column>
      <el-table-column prop="bookinfo.store" label="商铺名称"></el-table-column>
      <el-table-column label="价格和数量" width="150">
        <template #default="scope">
          <div class="price-quantity">
            <p>价格: {{ scope.row.bookinfo.price }}元</p>
            <p>数量: {{ scope.row.quantity }}</p>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态" width="100"></el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

interface Order {
  bookinfo: {
    id: string
    cover: string
    name: string
    author: string
    price: number
    store: string
    storeId: string
  }
  quantity: number
  price: number
  purchaseTime?: string
  returnTime?: string
  status?: string
}

const purchasedOrders = ref<Order[]>([])
const returnedOrders = ref<Order[]>([])

// 初始化订单数据
onMounted(() => {
  // 获取已购订单
  purchasedOrders.value = localStorage.getItem('purchases')
    ? JSON.parse(localStorage.getItem('purchases')!)
    : []

  // 获取退货订单
  returnedOrders.value = localStorage.getItem('returnedPurchases')
    ? JSON.parse(localStorage.getItem('returnedPurchases')!)
    : []
})

// 退货逻辑
const initiateReturn = (order: Order) => {
  ElMessageBox.confirm('确认要退货这本书吗？', '退货确认', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      processReturn(order)
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消退货'
      })
    })
}

// 处理退货
const processReturn = (order: Order) => {
  // 移除已购订单
  const index = purchasedOrders.value.findIndex(
    (o) => o.bookinfo.id === order.bookinfo.id && o.purchaseTime === order.purchaseTime
  )
  if (index !== -1) {
    purchasedOrders.value.splice(index, 1)
    localStorage.setItem('purchases', JSON.stringify(purchasedOrders.value))

    // 添加到退货订单
    const returnOrder: Order = {
      bookinfo: order.bookinfo,
      quantity: order.quantity,
      price: order.price,
      returnTime: new Date().toISOString(),
      status: '退货申请中'
    }
    returnedOrders.value.push(returnOrder)
    localStorage.setItem('returnedPurchases', JSON.stringify(returnedOrders.value))

    ElMessage({
      showClose: true,
      type: 'success',
      message: '退货申请已提交'
    })
  } else {
    ElMessage({
      showClose: true,
      type: 'error',
      message: '未找到该订单'
    })
  }
}

// 确认收货逻辑
const confirmReceipt = (order: Order) => {
  ElMessageBox.confirm('确认已经收到这本书吗？', '确认收货', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'success'
  })
    .then(() => {
      processConfirmReceipt(order)
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消确认收货'
      })
    })
}

// 处理确认收货
const processConfirmReceipt = (order: Order) => {
  const index = purchasedOrders.value.findIndex(
    (o) => o.bookinfo.id === order.bookinfo.id && o.purchaseTime === order.purchaseTime
  )
  if (index !== -1) {
    // 更新订单状态为已收货
    purchasedOrders.value[index].status = '已收货'
    localStorage.setItem('purchases', JSON.stringify(purchasedOrders.value))

    ElMessage({
      showClose: true,
      type: 'success',
      message: '已确认收货'
    })
  } else {
    ElMessage({
      showClose: true,
      type: 'error',
      message: '未找到该订单'
    })
  }
}
</script>

<style scoped>
.order-content-container {
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.order-content-container h3 {
  margin: 20px 0;
}

.order-image {
  width: 120px;
  border-radius: 5px;
}

.price-quantity {
  text-align: left;
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
</style>
