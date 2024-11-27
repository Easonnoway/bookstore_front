<template>
  <el-dialog title="添加地址" v-model="dialogVisible" width="30%" :before-close="handleClose">
    <el-form label-width="80px">
      <el-form-item label="地址">
        <el-input v-model="location"></el-input>
      </el-form-item>
    </el-form>
    <template v-slot:footer>
      <div class="dialog-footer">
        <el-button @click="closeDialog">取消</el-button>
        <el-button type="primary" @click="saveAddress">保存</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { defineProps, ref, watch, defineEmits } from 'vue'
import { useApi } from '@/api'

const props = defineProps({
  addAddressDialogVisible: {
    type: Boolean,
    required: true
  }
})

const location = ref('')

const emit = defineEmits(['update:addAddressDialogVisible', 'addAddress'])

let dialogVisible = ref(false)

watch(() => props.addAddressDialogVisible, (newVal) => {
  dialogVisible.value = newVal
})

watch(dialogVisible, (newVal) => {
  emit('update:addAddressDialogVisible', newVal)
})

const handleClose = (done: () => void) => {
  done()
}

const closeDialog = () => {
  dialogVisible.value = false
}

const api = useApi()

const saveAddress = async () => {
  try {
    const response = await api.user.updateUserAddress({
      customId: 1,
      location: location.value
    })

    console.log('地址添加成功', response)
    emit('updateAddress', location.value)
    closeDialog()
  } catch (error) {
    console.log('地址添加失败', error)
  }
  console.log('save address')
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
