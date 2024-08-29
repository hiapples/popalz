<script setup> 
    import { ref } from "vue";
    import { onMounted,onUpdated,onUnmounted } from "vue";

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
        bottom: 25px;
        right: 20px;
        font-size: 26px;
    }
    .toTop:hover {
        color: #fff;
        text-decoration: none;
        background: rgba(42, 115, 53, 0.7);
    }
</style>