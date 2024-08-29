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
    <div class="mb-4">
        <div class="card">
            <div class="card-body-fade" ref="fadeInElement">
                <p class="card-text ">我希望能在資訊領域中持續成長，<br/>擴展我的技術知識和實踐經驗。<br/>我期望能夠參與更具挑戰性的專案，<br/>並與專業團隊合作，共同推進技術創新與應用發展。</p>
            </div>
        </div>
    </div>
    <div class="contact mb-5">
        <div>Contacts</div>
    </div>
    <div class="mb-5">
        <div class="card">
            <div class="card-body">
                <div class="d-flex justify-content-center mb-5">
                    <a href="https://github.com/hiapples"><img src="/src/photo/github.png" /></a>
                    <a href="https://t.me/hiapples"><img src="/src/photo/telegram.png"  /></a>
                    <a href="https://line.me/ti/p/OOBJIPRtBL"><img src="/src/photo/line.png"  /></a>
                </div>
                <p class="card-text">手機&ensp;:&ensp;0967123979</p>
                <p class="card-text">信箱&ensp;:&ensp;jhank4321@gmail.com</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .contact{
        font-size: 50px;
        text-align: center;
        margin-top: 50px;
        font-family: 'Matemasie';
        display: flex;
        justify-content: center;
        border-radius: 15px;
    }
    img{
        border-radius: 50%;
        margin: 20px;
        width:clamp(70px,10vw,150px);
        height:clamp(70px,10vw,150px);
    }
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