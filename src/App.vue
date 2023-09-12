<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
    import TheWelcome from './components/TheWelcome.vue'
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
</script>

<template>
    <Header />
    <main class="wrapper">
        <RouterView />
       
        
    </main>
    <Footer />
</template>

<style scoped>

body {
  background-color: #eff8ff;
  color: #696969;
}


@media (min-width: 1024px) {
 
    #mega-menu-full-dropdown {
        position: absolute;
        left: 0;
        top: 152px;
        right: 0;
    }
 

 
}
</style>
