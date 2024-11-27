<template>
  <div class="usb-key-status" :class="{ inserted: usbKeyInserted }">
    {{ usbKeyInserted ? 'ukey已插入' : 'ukey未插入' }}
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useApi } from '@/api' // 引入USB Key API

const api = useApi()
const usbKeyInserted = ref(false)
let timer: number

const checkUsbKey = async () => {
  try {
    const response = await api.ukey.checkUsbKeyStatus()
    if (response.data.code === 9005) {
      usbKeyInserted.value = true
    } else {
      usbKeyInserted.value = false
    }
  } catch (error) {
    console.error('Error checking USB Key status:', error)
  }
}

onMounted(() => {
  checkUsbKey()
  timer = window.setInterval(checkUsbKey, 5000) // 每5秒检查一次USB Key状态
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style scoped>
.usb-key-status {
  position: fixed;
  bottom: 20px;
  right: 20px;
  height: 30px;
  color: aliceblue;
  padding: 10px;
  background-color: red; /* 默认状态为红色 */
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition:
    background-color 0.3s,
    transform 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.usb-key-status.inserted {
  background-color: green; /* 插入状态为绿色 */
  transform: scale(1.1);
}
</style>
