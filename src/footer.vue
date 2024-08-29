<script setup> 
    import { ref } from "vue";
    import { onMounted,onUpdated,onUnmounted } from "vue";

</script>
<template>
    <footer class="footer_container">
        <div class="container">
            <div class="row d-flex">
                <div class="col-lg-6 mt-5 mx-auto ">
                    <form action="/contact" method="POST">  
                        <div>
                            <label class="font-weight" for="nickname">*&ensp;Nickname</label>
                            <input type="text" name="nickname" class="form-control"  id="nickname"required>      
                        </div>
                        <div>
                            <label for="email" class="font-weight mt-3">*&ensp;Email</label>
                            <input type="email" name="email" class="form-control" id="email"required>
                        </div>
                        <div class="mb-3">
                            <label for="message" class="font-weight mt-3">*&ensp;Leave us a message...</label>
                            <textarea class="form-control"  name="message"id="message" required rows="5"></textarea>
                        </div>
                        <div class="d-flex ">
                            <button type="submit" class="btn2 mt-3 mb-5 mx-auto"> 
                                <span>submit</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center align-items-center footer_bottom">
            <div style="color: #FFFFFF;">Powered and secured by PoPalz.</div>
        </div>
    </footer>
</template>

<style scoped>
    .footer_container{
        height: 500px;
        background-color:rgb(23, 22, 22);
    }
    .footer_bottom{
        background-color:#000000;
        border-radius: 0%; 
        height: 5vh;
    }
    .btn2 {
        position: relative;
        min-width: 200px;
        background: #333333;
        border: 1px solid #333333;
        color: #FFFFFF;
        font-size: clamp(12px,3vw,16px);
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        overflow: hidden;
        padding: 10px 20px;
        border-radius: 10px;
    }
    .btn2 span {
        position: relative;
        z-index: 100;
    }
    .btn2:before,
    .btn2:after {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
    }
    .btn2:before {
        transform: translate3d(-100%, 0, 0);
        background-color: #FFFFFF;
        transition: transform 300ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    .btn2:after {
        background-color: rgb(188, 185, 185);
        transform: translate3d(100%, 0, 0);
        transition: transform 300ms 300ms cubic-bezier(0.16, 0.73, 0.58, 0.62); 
    }
    .btn2:hover:before {
        transform: translate3d(0, 0, 0);
    }
    .btn2:hover:after {
        transform: translate3d(0, 0, 0);
    }
</style>