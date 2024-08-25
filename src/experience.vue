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
        <div class="col-sm-6 mt-4">
            <div class="card">
                <div class="card-body">
                    <img src="/src/photo/moremore.jpg"/>
                    <h5 class="card-title mt-3">默默飲料店 - 店長(全職)</h5>
                    <p class="card-text mt-3">2022/11 ~ 2023/6  (8個月)</p>
                    <p class="card-text mt-3">協助老闆盤點貨物，安排PT班表製作，帶領新人學習飲料調製及櫃檯點餐，店內整理。</p>
                </div>
            </div>
        </div>
        <div class="col-sm-6 mt-4">
            <div class="card">
                <div class="card-body d-flex justify-content-center align-items-center">
                    <div>
                        <h5 class="card-title mt-3 text-center">心得 :</h5>
                        <p class="card-text text-center">在這段工作經驗中，我將課堂上學到的管理知識應用到實際工作中，從人員安排到日常營運的管理，逐漸了解如何有效分配資源，提升工作效率。透過與不同同事和顧客的互動，我也學會了如何在壓力下保持冷靜並解決問題。這段經驗不僅加深了我對管理的理解，更培養了我在實務中靈活應變的能力。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 mt-4">
            <div class="card">
                <div class="card-body">
                    <img src="/src/photo/logo.png"/>
                    <h5 class="card-title mt-3">遠雄悅來大飯店 - 房務員(兼職)</h5>
                    <p class="card-text mt-3">2020/7 ~ 2020/12  (6個月)</p>
                    <p class="card-text mt-3">打掃飯店房間，鋪床、廁所整潔，協助旅客相關事項。</p>
                </div>
            </div>
        </div>
        <div class="col-sm-6 mt-4">
            <div class="card">
                <div class="card-body d-flex justify-content-center align-items-center">
                    <div>
                        <h5 class="card-title mt-3 text-center">心得 :</h5>
                        <p class="card-text text-center">在遠雄悅來大飯店擔任房務員的過程中，我學到了如何在工作中注重細節並提升效率。這份工作也讓我明白了與旅客溝通的重要性，並學會了如何應對突發狀況。這段經驗加強了我的責任感，同時也讓我更了解服務業中的專業要求。</p>
                    </div>
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
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    .row {
        display: flex;
        flex-wrap: wrap;
    }
    .card-text{
        font-size: 14px;
    }
    p {
        line-height: 2; 
    }
    img {
        max-width: 35%;
        height: auto;
        object-fit: cover;
        border-radius: 50%;
    }
</style>