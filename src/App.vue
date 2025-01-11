<script setup lang="ts">
import { RouterView } from 'vue-router'
import UKey from './views/ukey.vue'
</script>

<template>
  <RouterView :key="$route.fullPath"/>
  <UKey />
</template>

<style scoped>
</style>