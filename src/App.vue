<template>
    <div id="root">
        <button type="button" class="btn btn-primary" @click="currentComponent = LayoutAut">LayoutAut</button>
        <button type="button" class="btn btn-secondary" @click="currentComponent = LayoutDefault">LayoutDefault</button>
        
        <KeepAlive>
            <component :is="currentComponent"></component>
        </KeepAlive>
    </div>
    
</template>

<script setup>
    import { ref } from 'vue';
    import LayoutAut from './components/LayoutAut.vue';
    import LayoutDefault from './components/LayoutDefault.vue';

    const currentComponent = ref(LayoutAut);
</script>






<style scoped>
@media (min-width: 1024px) {
    #mega-menu-full-dropdown {
        position: absolute;
        left: 0;
        top: 152px;
        right: 0;
    }
}
</style>
