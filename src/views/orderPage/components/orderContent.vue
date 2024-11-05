<template>
  <div class="order-content-container">
    <h3>已购订单</h3>
    <el-table :data="purchasedOrders" style="width: 100%">
      <el-table-column prop="image" label="图片" width="200">
        <template #default="scope">
          <img :src="scope.row.image" alt="商品图片" class="order-image">
        </template>
      </el-table-column>
      <el-table-column prop="shopName" label="商品名称"></el-table-column>
      <el-table-column prop="shopName" label="商铺名称"></el-table-column>
      <el-table-column label="价格和数量" width="150">
        <template #default="scope">
          <div class="price-quantity">
            <p>价格: {{ scope.row.price }}</p>
            <p>数量: {{ scope.row.quantity }}</p>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template #default="scope">
          <div class="action-buttons">
            <el-button @click="returnOrder(scope.row)" size="mini">退货</el-button>
            <el-button @click="confirmReceipt(scope.row)" size="mini" style="margin-top: 5px;">确认收货</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <h3>退货订单</h3>
    <el-table :data="returnedOrders" style="width: 100%">
      <el-table-column prop="image" label="图片" width="200">
        <template #default="scope">
          <img :src="scope.row.image" alt="商品图片" class="order-image">
        </template>
      </el-table-column>
      <el-table-column prop="shopName" label="商品名称"></el-table-column>
      <el-table-column prop="shopName" label="商铺名称"></el-table-column>
      <el-table-column label="价格和数量" width="150">
        <template #default="scope">
          <div class="price-quantity">
            <p>价格: {{ scope.row.price }}</p>
            <p>数量: {{ scope.row.quantity }}</p>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态" width="100"></el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const purchasedOrders = ref([
  // 示例数据
  { image: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg', shopName: '商铺1', price: 100, quantity: 1 },
  { image: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg', shopName: '商铺2', price: 200, quantity: 2 },
]);

const returnedOrders = ref([
  // 示例数据
  { image: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg', shopName: '商铺3', price: 150, quantity: 1, status: '申请成功' },
  { image: 'https://img3m6.ddimg.cn/92/12/29785826-1_l_1727065698.jpg', shopName: '商铺4', price: 250, quantity: 2, status: '申请失败' },
]);

const returnOrder = (order: any) => {
  // 退货逻辑
  console.log('退货', order);
};

const confirmReceipt = (order: any) => {
  // 确认收货逻辑
  console.log('确认收货', order);
};
</script>

<style scoped>
.order-content-container {
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);

  h3{
    margin:20px 0;
  }
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

.el-table th, .el-table td {
  text-align: center;
}

.el-button {
  margin-top: 5px;
}
</style>