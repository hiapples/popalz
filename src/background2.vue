<script setup>
import { onMounted, onUnmounted } from 'vue';

</script>

<template>
  <div class="body">
    <div class="section">
      <div class="text-overlay no-wrap">Only with effort comes reward.</div>
    </div>
  </div>
</template>

<style scoped>
.body {
  display: flex;
  justify-content: center;
  height: 120vh;
  overflow: hidden; /* 防止溢出滾動條 */
}

.section {
  background-image: url("photo/background2.jpg");
  width: 100%;
  height: auto;
  margin-top: 100px;
  margin-bottom: 100px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative; /* 背景位置可隨滾動移動 */
  z-index: -1; /* 確保背景在內容下方 */
}

.text-overlay {
  position: absolute;
  top: 50%; /* 調整為所需的位置 */
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  font-size: clamp(20px, 5vw, 50px);
  font-family: 'Matemasie';
  z-index: 1; /* 確保文本在背景上方 */
}

.no-wrap {
  white-space: nowrap;
}
</style>
