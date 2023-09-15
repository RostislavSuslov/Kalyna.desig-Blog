<template>
    <div id="root">
        <Header />
        <main class="wrapper">
            <RouterView />
        </main>
        <Footer />
    </div>
</template>

<script setup>
 import Header from '/src/components/Header.vue';
 import Footer from '/src/components/Footer.vue';
</script>