<script setup> 
    import { ref } from "vue";
    import { onMounted,onUpdated,onUnmounted } from "vue";
    import 'bootstrap/dist/css/bootstrap.min.css'; // 引入 Bootstrap CSS
    import Background from "./background.vue" ;
    import Background2 from "./background2.vue" ;
    import Title from "./title.vue" ;
    import Projects from "./projects.vue" ;
    import About from "./about.vue" ;
    import Down from "./down.vue" ;
    import Footer from "./footer.vue" ;
    import Contact from "./contact.vue" ;

</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <Title></Title>
                <Down></Down>
                <Background></Background>
                <About></About>
                <Projects></Projects>
                <Background2></Background2>
                <Contact></Contact>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<style scoped>

 
</style>