<script setup> 
    import { ref } from "vue";
    import { onMounted,onUpdated,onUnmounted } from "vue";

</script>
<template>
    <div class="body">
        <div class="image-container">
            <div class="section"></div>
            <div class="text-overlay no-wrap">Only with effort comes reward.</div>
        </div>
    </div>
</template>

<style scoped>
  .body{
    display: flex;
    justify-content: center;
    height: 120vh;
  }

  .section{
    background-image: url("background2.jpg");
    width: 100%;
    height: 600px;
    margin-top: 100px;
    background-repeat: no-repeat;
    background-attachment:fixed;    
    background-position: center center;
    background-size: cover;
  }
  .image-container {
    position: relative;
    width: 100%; /* 可以根据需要调整宽度 */
  }
  .image-container img {
    width: 100%;
    height: auto;
  }
  .image-container .text-overlay {
    position: absolute;
    top: 50%; /* 调整为所需的位置 */
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    font-size: clamp(20px,5vw,50px);
    font-family: 'Matemasie';
  }
  .no-wrap {
    white-space: nowrap;
  }
</style>