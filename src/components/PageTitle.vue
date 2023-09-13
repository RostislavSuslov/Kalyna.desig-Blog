<script setup lang="ts">  // https://prnt.sc/Dmhc1hA1vMo-
defineProps<{
  title: string,
  description: string,
}>()
</script>

<template>
  <div class="page-title">
    <h1 class="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">{{ title }}</h1>
    <p class="text-center text-gray-600 dark:text-white mt-4 mx-auto lg:w-1/2 md:w-10/12 w-11/12">{{description}}</p>
  </div>
</template>

<style scoped>
 
</style>
