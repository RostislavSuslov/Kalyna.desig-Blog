<template> 
    <div class="blog-post">
        <div class="container">
            <h2> Кол-во статей {{ posts.length }}</h2>
            <div class="posts">
                <div class="post-item" v-for="post in posts" :key="post.id">
                    <h2 class="post-title" >{{ post.title }}</h2>
                    <p class="post-description"> {{ post.body }}</p>
                    <router-link :to="{ name: 'single-post', params: { postId: post.id } }" class="btn btn-primary">Читать статью</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>  
import { ref, onMounted, reactive } from 'vue';
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router'
import PageTitle from '../components/PageTitle.vue'
export default {
  components: {
    RouterLink
  }, 

  setup() {
    const posts = ref([]);
    console.dir(posts);
    // mounted
    onMounted(() => {
      console.log('Компонент примонтирован!')
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // console.table(response.data);
        posts.value = response.data
      })
      .catch((error) => {
        // Обработка ошибки
        console.error("Ошибка при загрузке данных:", error);
      });  
    })
    return {posts};
  }
}

 
</script>
<style scoped>
  .blog-post {
 
    border: 1px solid #ccc;
    background-color: #f9f9f9;
  }
  .posts {  
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr;
  }

  .post-item {
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    background: #2b2823;
    color: #fff;
    padding: 30px;
    align-items: flex-start;
  }

</style>
  