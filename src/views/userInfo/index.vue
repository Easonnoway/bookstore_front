<template>
  <div class="userInfo-container">
    <div class="profile-card">
      <button class="edit-profile" @click="editDialogVisible = true">更改个人信息</button>
      <button class="back-to-home" @click="goToHomePage">返回主页</button>
      <button class="logout" @click="logout">退出登录</button>
      <div class="profile-header">
        <div class="profile-picture">
          <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="Profile Picture" />
        </div>
        <div class="profile-info">
          <h1 class="profile-id">Easonnoway</h1>
          <p class="profile-name">用户</p>
          <div class="profile-stats">
            <div class="stat">
              <div class="stat-value">0</div>
              <div class="stat-label">购物车</div>
            </div>
            <div class="stat">
              <div class="stat-value">0</div>
              <div class="stat-label">评论过</div>
            </div>
            <div class="stat">
              <div class="stat-value">0</div>
              <div class="stat-label">收藏过</div>
            </div>
          </div>
        </div>
      </div>
      <h3>个人简介：</h3>
      <div class="joined-date">
        <p>这个人很懒，什么都没有留下。</p>
      </div>
      <h3>地址：</h3>
      <div class="joined-date">
        <span class="material-icons" style="vertical-align: middle; font-size: 16px">event</span>
        Joined November 2024
      </div>
      <div class="profile-actions">
        <a href="#" class="action-link">+ 添加地址</a>
      </div>
    </div>
  </div>
  <edit-dialog :editDialogVisible="editDialogVisible" @update:editDialogVisible="editDialogVisible = $event" />
</template>

<script setup>
import editDialog from './components/editDialog.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

let editDialogVisible = ref(false);
const router = useRouter();

function goToHomePage() {
  router.push({ path: '/' });
}

function logout() {
  router.push({ path: '/logIn' });
}
</script>

<style scoped>
.userInfo-container {
  position: absolute;
  top: 100px;
  left: 400px;
  width: calc(100% - 800px);
  background-color: #f0f0f0;
  border-radius: 8px;
  font-family: Arial, sans-serif;
}

.profile-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
}

.profile-header {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
}

.profile-picture {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #e0e0e0;
  margin-right: 20px;
  overflow: hidden;
}

.profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-info {
  flex-grow: 1;
}

.profile-id {
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 5px 0;
}

.profile-name {
  font-size: 16px;
  color: #65676b;
  margin: 0 0 15px 0;
}

.profile-stats {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
}

.stat {
  text-align: center;
}

.stat-value {
  font-weight: bold;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 14px;
  color: #65676b;
}

.profile-actions {
  margin-bottom: 10px;
}

.action-link {
  color: #1877f2;
  text-decoration: none;
  font-size: 14px;
  display: inline-block;
  margin-bottom: 10px;
}

.action-link:hover {
  text-decoration: underline;
}

.joined-date {
  font-size: 14px;
  color: #65676b;
  margin-top: 16px;
  margin-bottom: 16px;
}

.edit-profile {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #e4e6eb;
  color: #050505;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
}

.edit-profile:hover {
  background-color: #d8dadf;
}

.back-to-home {
  position: absolute;
  bottom: 70px;
  right: 20px;
  background-color: #e4e6eb;
  color: #050505;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
}

.back-to-home:hover {
  background-color: #d8dadf;
}

.logout {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: #ff4757;
  color: #ffffff;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
}

.logout:hover {
  background-color: #ff1f4b;
}
</style>
