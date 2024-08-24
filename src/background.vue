<script setup> 
    import { ref } from "vue";
    import { onMounted,onUpdated,onUnmounted } from "vue";

</script>
<template>
    <div class="body">
        <div class="section">

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
        background-image: url("background.jpg");
        max-width: 100%;
        height: 700px;
        margin-top: 100px;
        background-repeat: no-repeat;
        background-attachment:fixed;    
        background-position: center center;
        background-size: cover;
    }
</style>