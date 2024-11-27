<template>
  <el-dialog title="编辑用户信息" v-model="dialogVisible" width="30%" :before-close="handleClose">
    <el-form label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="头像">
        <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false">
          <!-- <img v-if="" :src="user.avatar" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
        </el-upload>
      </el-form-item>
      <!-- <el-form-item label="个人简介">
        <el-input type="textarea" :resize="'none'" v-model="biography"></el-input>
      </el-form-item> -->
    </el-form>
    <template v-slot:footer>
      <div class="dialog-footer">
        <el-button @click="closeDialog">取消</el-button>
        <el-button type="primary" @click="saveUserInfo">保存</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { defineProps, ref, watch, defineEmits } from 'vue'
import { useApi } from '@/api'

const props = defineProps({
  editDialogVisible: {
    type: Boolean,
    required: true
  }
})

const username = ref('')  

const emit = defineEmits(['update:editDialogVisible'])

let dialogVisible = ref(false)

watch(() => props.editDialogVisible, (newVal) => {
  dialogVisible.value = newVal
})

watch(dialogVisible, (newVal) => {
  emit('update:editDialogVisible', newVal)
})

const handleClose = (done: () => void) => {
  done()
}

const closeDialog = () => {
  dialogVisible.value = false
}

const api = useApi()

const saveUserInfo = async () => {
  try {
    const response = await api.user.updateUser({
      accountNumber: '',
      username: username.value,
      password: '',
      phoneNumber: '',
      email: '',
      profilePhoto: '',
      identiy: ''
    })
    console.log('用户信息更新成功', response)
    closeDialog()
  } catch (error) {
    console.log('用户信息更新失败', error)
  }
  console.log('save user info')
}
</script>

<style scoped>
.avatar-uploader {
  display: inline-block;
  width: 100px;
  height: 100px;
  border: 1px dashed #d9d9d9;
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
  position: relative;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.avatar {
  width: 100%;
  height: 100%;
  display: block;
}
</style>