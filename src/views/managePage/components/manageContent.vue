<template>
  <div class="order-content-container" v-if="usersInfo.length > 0">
    <h3>已注册账户信息</h3>
    <el-table :data="usersInfo" style="width: 100%">
      <el-table-column prop="userName" label="用户名"> </el-table-column>
      <el-table-column prop="userId" label="用户ID"> </el-table-column>
      <el-table-column prop="registryTime" label="创建时间"> </el-table-column>
      <el-table-column prop="lastLoginTime" label="最后登录时间"> </el-table-column>
      <el-table-column prop="accountNumber" label="账号"> </el-table-column>
      <el-table-column prop="identity" label="用户类型"></el-table-column>
      <el-table-column prop="identity" label="用户类型">
        <template #default="scope">
          <span v-if="scope.row.identity === 1">用户</span>
          <span v-else-if="scope.row.identity === 2">商店</span>
          <span v-else-if="scope.row.identity === 3">管理员</span>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="用户状态"></el-table-column>
      <el-table-column prop="phoneNumber" label="用户电话"></el-table-column>
      <el-table-column prop="email" label="用户邮箱"></el-table-column>
      <el-table-column label="操作" width="150">
        <template #default="scope">
          <div class="action-buttons">
            <template v-if="scope.row.status !== '已冻结'">
              <el-button @click="freezeUser(scope.row)" size="mini" type="danger">冻结</el-button>
            </template>
            <template v-else>
              <el-button @click="unfreezeUser(scope.row)" size="mini" type="success"
                >解冻</el-button
              >
            </template>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useApi } from '@/api'

const api = useApi()

const usersInfo = ref([])

onMounted(async () => {
  try {
    const res = await api.user.getAllUsers()
    usersInfo.value = res.data.data
    // localStorage.setItem('usersInfo', JSON.stringify(usersInfo.value))
  } catch (error) {
    console.error('获取用户信息失败:', error)
    ElMessage({
      showClose: true,
      type: 'error',
      message: '获取用户信息失败'
    })
  }
})
// 冻结用户
const freezeUser = (user: User) => {
  ElMessageBox.confirm(`确认要冻结用户 ${user.userName} 吗？`, '冻结确认', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async () => {
      try {
        const res = await api.user.freezeUser(user.userId)
        if (res.success) {
          user.status = '已冻结'
          localStorage.setItem('usersInfo', JSON.stringify(usersInfo.value))
          ElMessage({
            showClose: true,
            type: 'success',
            message: `用户 ${user.userName} 已被冻结`
          })
        } else {
          throw new Error(res.message || '冻结失败')
        }
      } catch (error) {
        console.error('冻结用户失败:', error)
        ElMessage({
          showClose: true,
          type: 'error',
          message: `冻结用户失败: ${error.message || error}`
        })
      }
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消冻结'
      })
    })
}

// 解冻用户
const unfreezeUser = (user: User) => {
  ElMessageBox.confirm(`确认要解冻用户 ${user.userName} 吗？`, '解冻确认', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'success'
  })
    .then(async () => {
      try {
        const res = await api.user.unfreezeUser(user.userId)
        if (res.success) {
          user.status = '正常'
          localStorage.setItem('usersInfo', JSON.stringify(usersInfo.value))
          ElMessage({
            showClose: true,
            type: 'success',
            message: `用户 ${user.userName} 已被解冻`
          })
        } else {
          throw new Error(res.message || '解冻失败')
        }
      } catch (error) {
        console.error('解冻用户失败:', error)
        ElMessage({
          showClose: true,
          type: 'error',
          message: `解冻用户失败: ${error.message || error}`
        })
      }
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消解冻'
      })
    })
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
