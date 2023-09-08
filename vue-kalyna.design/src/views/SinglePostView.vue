<template> 
    <div class="container">
        <h1 class="text-5xl underline font-bold"> {{ post.title }}</h1>
        <h5>This is an single-post page {{ post.id }}</h5>
        <p>{{ post.body }}</p>
 
        <div class="comments">
            <ul>
                <li v-for="comment in comments" :key="comment.id">
                    <div>{{comment.name}}</div>
                    <div>{{comment.email}}</div>
                    <div>{{comment.body}}</div>
                </li>
            </ul>
        </div>
    </div>
   
</template>

<script>  
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import PageTitle from '../components/PageTitle.vue'

export default {
  setup() {
    const route = useRoute();
    const post = ref({}); // ref динамич переменная которая меняет свои свойства
    const comments = ref([])
    // mounted
    onMounted(() => {
      console.log('Компонент примонтирован!')
      axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.postId}`)
      .then((response) => {
         console.log(response);
        post.value = response.data
      })
      .catch((error) => {
        // Обработка ошибки
        console.error("Ошибка при загрузке данных:", error);
      });  
               
      axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.postId}/comments`)
      .then((response) => {
        console.log(response);
        
        comments.value = response.data
      })
      .catch((error) => {
        // Обработка ошибки
        console.error("Ошибка при загрузке данных:", error);
      });  
    })
    return {post, comments};
  }
}
</script>
<style>
  @media (min-width: 1024px) {
    .single-post {
      min-height: 100vh;
     
    }
  }
</style>