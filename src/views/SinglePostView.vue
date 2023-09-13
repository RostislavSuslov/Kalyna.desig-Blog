<template> 
  <div id="root">
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
    const post = ref({}); // dynamic variable that changes its properties
    const comments = ref([])
    // mounted
    onMounted(() => {
      console.log('component is installed!')
      axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.postId}`)
      .then((response) => {
         console.log(response);
        post.value = response.data
      })
      .catch((error) => {
        // Error handling
        console.error("Error loading data:", error);
      });  
               
      axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.postId}/comments`)
      .then((response) => {
        console.log(response);
        
        comments.value = response.data
      })
      .catch((error) => {
        // Error handling
        console.error("Error loading data:", error);
      });  
    })
    return {post, comments};
  }
}
</script>
<style>
 
</style>