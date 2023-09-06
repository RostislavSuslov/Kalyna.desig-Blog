<template> 

  <div class="blog-post">
    <h2> Кол-во статей {{ posts.length }}</h2>
     <div class="posts">
      <div class="post-item" v-for="post in posts" :key="post.id">
          <h2 class="post-title" >{{ post.title }}</h2>
          <h3 class="post-id" >{{ post.id }}</h3>
          <router-link :to="{ name: 'single-post', params: { postId: post.id } }" class="btn btn-primary">Go to Пост</router-link>
          <p class="post-description"> {{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>  
import { ref, onMounted, reactive } from 'vue';
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router'

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


// const test = fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
//   console.log(test);
</script>
<!--   
  <script>
  export default {
    props: {
      post: Object, // Принимаем объект с данными о посте
    },
  };
  </script> -->
  
  <style scoped>
  /* Стили для карточки блога */
  .blog-post {
    margin: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
  }
  </style>
  