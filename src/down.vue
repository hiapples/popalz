<script setup> 
    import { ref } from "vue";
    import { onMounted,onUpdated,onUnmounted } from "vue";
    import 'bootstrap/dist/css/bootstrap.min.css';

    function down(){
        window.scrollBy({
            top: 1200, 
            behavior: 'smooth'
        });
    }
</script>
<template>
    <a href="" id="down"class="down d-flex mx-auto mt-5" @click.prevent="down">
        <img src="/src/photo/down.png">
    </a>
</template>

<style scoped>
    .down{
        width: clamp(20px,5vw,30px);
        height: clamp(20px,5vw,30px);
    }
</style>