<script setup lang="ts">
defineProps<{
  title: string,
  description: string,
}>()
</script>

<template>
  <div class="page-title">
    <h1>{{ title }}</h1>
    <p>{{description}}</p>
  </div>
</template>

<style scoped>
 
</style>
