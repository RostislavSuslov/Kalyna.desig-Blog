<script setup lang="ts">
  import PageTitle from '../components/PageTitle.vue'
  import BlogPost from '../components/BlogPost.vue'
</script>

<template>
    <PageTitle title="Blog Page" description="Description this page " />
    <BlogPost />
</template>


<style>
@media (min-width: 1024px) {
  .blog {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
