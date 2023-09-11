<script setup lang="ts">
  import PageTitle from '../components/PageTitle.vue'
  import BlogPost from '../components/BlogPost.vue'
</script>

<template>
    <PageTitle title="This Week Blogs" description="If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough" />
 
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
