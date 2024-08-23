<script setup> 
    import { ref } from "vue";
    import { onMounted,onUpdated,onUnmounted } from "vue";
    import 'bootstrap/dist/css/bootstrap.min.css'; // 引入 Bootstrap CSS
</script>
<template>
    <div class="title">PoPalz.</div>
</template>

<style scoped>
    .title{
        font-size: 80px;
        text-align: center;
        margin-top: 100px;
        font-family: 'Matemasie';
        margin-left: 20px;
    }
    @media(max-width: 576px) {
        .title{
            font-size: 50px;
        }
    }
</style>