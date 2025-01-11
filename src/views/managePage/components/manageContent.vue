<template>
  <div class="order-content-container">
    <h3>已注册账户信息</h3>
    <el-table :data="purchasedOrders" style="width: 100%">
        <el-table-column prop="" label="用户id"> </el-table-column>
      <el-table-column prop="" label="用户名"> </el-table-column>
      <el-table-column prop="" label="用户类型"></el-table-column>
      <el-table-column prop="" label="用户状态"></el-table-column>
      <el-table-column prop="" label="用户电话"></el-table-column>
        <el-table-column prop="" label="用户邮箱"></el-table-column>
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
                >冻结</el-button
              >
              <el-button @click="confirmReceipt(scope.row)" size="mini" style="margin-top: 5px"
                >解冻</el-button
              >
            </template>
          </div>
          <span v-else>已完成</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
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
