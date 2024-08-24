<script setup> 
    import { ref } from "vue";
    import { onMounted,onUpdated,onUnmounted } from "vue";
    onMounted(() => {
        const parallax = () => {
            const scrolled = window.scrollY;
            const section = document.querySelector('.section');
            section.style.backgroundPositionY = `${scrolled * 0.3}px`;
        };

        window.addEventListener('scroll', parallax);
        
        // 清理事件監聽器
        onUnmounted(() => {
            window.removeEventListener('scroll', parallax);
        });
    });
</script>
<template>
    <div class="body">
        <div class="section">

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
        background-image: url("background.jpg");
        width: 100%;
        height: 700px;
        margin-top: 100px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        position: relative; /* 使背景圖能夠根據視差效果變化 */
    }
</style>