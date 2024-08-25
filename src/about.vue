<script setup> 
    import { ref } from "vue";
    import { onMounted,onUpdated,onUnmounted } from "vue";
    import 'bootstrap/dist/css/bootstrap.min.css'; // 引入 Bootstrap CSS
    const fadeInElement = ref(null);
    const fadeInElement2 = ref(null);
    onMounted(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        });

        if (fadeInElement.value) {
            observer.observe(fadeInElement.value);
        }
        if (fadeInElement2.value) {
            observer.observe(fadeInElement2.value);
        }
    });
</script>
<template>
    <div class="about mb-5">
        <div>About</div>
    </div>
    <div class="container">
        <div class="mb-5">
            <div class="card ">
                <div class="card-body" ref="fadeInElement">
                    <h5 class="card-title">韋皓承</h5>
                    <p class="card-text">2001/01/16</p> 
                    <p class="card-text mt-3">國立東華大學資訊管理系</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4 mt-4">
                <img src="/src/photo/image copy.png" >
            </div>
            <div class="col-sm-4 mt-4">
                <img src="/src/photo/image copy 3.png" >
            </div>
            <div class="col-sm-4 mt-4">
                <img src="/src/photo/image copy 2.png" >
            </div>
        </div>
        <div class="mt-5">
            <div class="card">
                <div class="card-body" ref="fadeInElement2">
                    <p class="card-text">我喜歡撰寫程式碼，<br/>享受從中解決問題並提升效率的過程。<br/>對我來說，寫程式不僅是一項技能，<br/>更是一種創造力的展現。<br/>凡事都會全力以赴，<br/>確保每個細節都達到最佳狀態。</p>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style scoped>
    .about{
        font-size: 50px;
        text-align: center;
        margin-top: 50px;
        font-family: 'Matemasie';
        display: flex;
        justify-content: center;
        border-radius: 15px;
    }
    img {
        max-width: 100%;
        height: auto;
        object-fit: cover
    }
    .card-body{
        color: white;
        text-align: center;
        padding: 30px;
        opacity: 0; /* Initially hidden */
        transform: translateY(-20px); /* Start position for animation */
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
    .fade-in {
        animation: fade-in 1.5s ease-in-out forwards;
    }
    @keyframes fade-in {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>