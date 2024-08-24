<script setup> 
    import { ref } from "vue";
    import { onMounted,onUpdated,onUnmounted } from "vue";
    import 'bootstrap/dist/css/bootstrap.min.css'; // 引入 Bootstrap CSS
</script>
<template>
    <!--back-->
    <a href="#" class="toTop" > ↑ </a>
</template>

<style scoped>
    .toTop {
        background: rgba(70, 200, 90, 0.7);
        padding: 10px;
        color: #fff;
        text-decoration: none;
        position: fixed;
        bottom: 10px;
        right: 10px;
        font-size: 26px;
    }
    .toTop:hover {
        color: #fff;
        text-decoration: none;
        background: rgba(42, 115, 53, 0.7);
    }
</style>