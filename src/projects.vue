<script setup> 
    import { ref } from "vue";
    import { onMounted,onUpdated,onUnmounted } from "vue";

    const fadeInElement = ref(null);
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
    });
</script>
<template>
    <div class="projects mb-5">
        <div>Projects</div>
    </div>
    <div class="container ">
        <div class="row">
            <div class="col-sm-6 mb-5">
                <div class="card">
                    <div>
                        <a href="https://talktalk-qyzh.onrender.com" class="d-flex">
                            <img src="/src/photo/astronaut.png" class="card-img-top w-50 h-50 mx-auto mt-5" >
                        </a>
                        <div class="card-body">
                            <h5 class="card-title">Astronaut.</h5>
                            <p class="card-text mt-3">Flask+Mongodb</p>
                            <p class="card-text">簡易的社群平台，輕鬆分享文字貼文。</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                    <a href="https://foodmap-gjp1.onrender.com" class="d-flex">
                        <img src="/src/photo/hamburger.png" class="card-img-top w-50 h-50 mx-auto mt-5" >
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">foodmap</h5>
                        <p class="card-text mt-3">PHP+MySQL</p>
                        <p class="card-text">一目了然的美食地圖，方便搜尋附近美食。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-5">
            <div class="card">
                <div class="card-body-fade" ref="fadeInElement">
                    <p class="card-text">在求學期間，我自學了網頁設計，<br/>對前端、後端開發及資料庫管理充滿興趣。<br/>我熟悉HTML、CSS、JavaScript、jQuery、Bootstrap等前端技術，<br/>也掌握了Flask和PHP後端框架，<br/>能構建完整的Web應用。<br/>此外，我熟悉MongoDB和MySQL，<br/>能有效設計與操作資料庫。<br/>我將這些技術整合，<br/>成功架設了功能完善的網站與系統。</p>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style scoped>
    .card-body-fade{
        color: white;
        text-align: center;
        padding: 30px;
        opacity: 0; /* Initially hidden */
        transform: translateY(-20px); /* Start position for animation */
    }
    .card-body{
        color: white;
        text-align: center;
        padding: 30px;
        min-height: 30vh;
    }
    .card{
        background-color: rgb(23, 22, 22);
    }
    .card-text{
        font-size: 14px;
    }
    .projects{
        font-size: 50px;
        text-align: center;
        margin-top: 50px;
        font-family: 'Matemasie';
        display: flex;
        justify-content: center;
        border-radius: 15px;
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
    @media (min-width: 993px) and (max-width: 1200px) {
        .card-body {
            min-height: 20vh;
        }
    }
</style>