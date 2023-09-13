<template>
  <div class="blog-post">
    <div class="container">
      <p class="text-gray-600 dark:text-white mt-4 text-right">Number of articles <b>{{ posts.length }}</b></p>
      <div class="posts">
        <div class="post-item" v-for="post in posts" :key="post.id">
          <h2 class="post-title">{{ post.title }}</h2>
          <p class="post-description"> {{ post.body }}</p>
          <router-link :to="{ name: 'single-post', params: { postId: post.id } }">Read the article <i
              class="display-inline-block mdi mdi-arrow-left font-normal text-gray-300 ml-1"></i></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {ref, onMounted, reactive} from 'vue';
  import axios from 'axios';

  const posts = ref([]);
  
  // mounted
  onMounted(() => {
    console.log('component is mounted!')
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // console.table(response.data);
        posts.value = response.data
      })
      .catch((error) => {
        // Error handling
        console.error("Error loading data:", error);
      });
  })
</script>
<style scoped>
  .blog-post {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    background-color: #f9f9f9;
    margin-bottom: 100px;
    padding-bottom: 100px;
  }

  .posts {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -12px;

  }

  .post-item {
    --gap: 12px;
    display: flex;
    flex-direction: column;
    background: #2b2823;
    color: #fff;
    padding: 30px;
    align-items: flex-start;
    margin: var(--gap);
  }

  .post-item:nth-child(6n + 1) {
    background: url(https://i.ibb.co/DYxtCJq/img-1.png) center/cover no-repeat;
    width: calc(25% - var(--gap) * 2);
  }

  .post-item:nth-child(6n + 2) {
    background: url(https://i.ibb.co/3C5HvxC/img-2.png) center/cover no-repeat;
    width: calc(25% - var(--gap) * 2);
  }

  .post-item:nth-child(6n + 3) {
    background: url(https://i.ibb.co/Ms4qyXp/img-3.png) center/cover no-repeat;
    width: calc(50% - var(--gap) * 2);

  }

  .post-item:nth-child(6n + 4) {
    background: url(https://i.ibb.co/6Wfjf2w/img-4.png) center/cover no-repeat;
    width: calc(50% - var(--gap) * 2);
  }

  .post-item:nth-child(6n + 5) {
    background: url(https://i.ibb.co/3yvZBpm/img-5.png) center/cover no-repeat;
    width: calc(25% - var(--gap) * 2);
  }

  .post-item:nth-child(6n + 6) {
    background: url(https://i.ibb.co/gDdnJb5/img-6.png) center/cover no-repeat;
    width: calc(25% - var(--gap) * 2);
  }
</style>