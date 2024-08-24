<script setup> 
    import { ref } from "vue";
    import { onMounted,onUpdated,onUnmounted } from "vue";
    import 'bootstrap/dist/css/bootstrap.min.css'; // 引入 Bootstrap CSS
</script>
<template>
    <div class="experience mb-5">
        <div>Experience</div>
    </div>
    <div class="row">
        <div class="col-sm-4 mt-4">
            <div class="card">
                <div class="card-body">
                    <img src="/src/photo/moremore.jpg"/>
                    <p class="card-text mt-3">我喜歡撰寫程式碼，<br/>享受從中解決問題並提升效率的過程。<br/>對我來說，寫程式不僅是一項技能，<br/>更是一種創造力的展現。<br/>凡事都會全力以赴，<br/>確保每個細節都達到最佳狀態。</p>
                </div>
            </div>
        </div>
        <div class="col-sm-4 mt-4">
            <div class="card">
                <div class="card-body">
                    <img src="/src/photo/logo.png"/>
                    <p class="card-text mt-3">我喜歡撰寫程式碼，<br/>享受從中解決問題並提升效率的過程。<br/>對我來說，寫程式不僅是一項技能，<br/>更是一種創造力的展現。<br/>凡事都會全力以赴，<br/>確保每個細節都達到最佳狀態。</p>
                </div>
            </div>
        </div>
        <div class="col-sm-4 mt-4">
            <div class="card">
                <div class="card-body">
                    <img src="/src/photo/3pig.png"/>
                    <p class="card-text mt-3">我喜歡撰寫程式碼，<br/>享受從中解決問題並提升效率的過程。<br/>對我來說，寫程式不僅是一項技能，<br/>更是一種創造力的展現。<br/>凡事都會全力以赴，<br/>確保每個細節都達到最佳狀態。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .experience{
        font-size: 50px;
        text-align: center;
        margin-top: 50px;
        font-family: 'Matemasie';
        display: flex;
        justify-content: center;
        border-radius: 15px;
    }
    .card-body{
        color: white;
        text-align: center;
        padding: 30px;
    }
    .card{
        background-color: rgb(23, 22, 22);
    }
    .card-text{
        font-size: 14px;
    }
    p {
        line-height: 2; 
    }
    img {
        max-width: 50%;
        height: auto;
        object-fit: cover;
        border-radius: 50%;
    }
</style>