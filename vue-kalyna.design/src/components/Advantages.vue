<template>
  <section class="advantages py-24 md:pb-32 bg-white">
    <div class="container px-4 mx-auto">
      <div class="md:max-w-4xl mb-12 mx-auto text-center">
        <span class="inline-block py-px px-2 mb-4 text-xs leading-5 text-orange-500 bg-orange-100 font-medium uppercase rounded-full shadow-sm">Features</span>
        <h1 class="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">Vue.js 3: Advanced Features for Effective Frontend Development</h1>
        <p class="text-lg md:text-xl text-coolGray-500 font-medium">Enter the world of modern front-end development with Vue.js 3. Increase productivity and simplify your code with new features and improved performance.</p>
      </div>
      <div class="flex flex-wrap -mx-4">

        <div class="w-full md:w-1/2 lg:w-1/3 px-4"  v-for="item in advantages" :key="post.id">
          <div class="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
            <div class="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-orange-500 rounded-lg">
                {{ item.icon }}
            </div>
            <h3 class="mb-4 text-xl md:text-2xl leading-tight font-bold">{{ item.title }}</h3>
            <p class="text-coolGray-500 font-medium">{{ item.description }}</p>
          </div>
        </div>
     



      </div>
    </div>
</section>
</template>

<script>
  import {ref, onMounted, reactive} from 'vue';
  import axios from 'axios';
  import {RouterLink, RouterView } from 'vue-router';
  import PageTitle from '../components/PageTitle.vue';
  export default {components: {RouterLink},

    setup() {
      const advantages = ref([]);
      console.dir(advantages);
      // mounted
      onMounted(() => {
        console.log('component is mounted!')
        axios.get("https://github.com/RostislavSuslov/Kalyna.design-Blog/blob/main/vue-kalyna.design/src/assets/json/advantages.json")
          .then((response) => {
            // console.table(response.data);
            advantages.value = response.data
          })
          .catch((error) => {
            // Error handling
            console.error("Error loading data:", error);
          });
      })
      return {
        advantages
      };
    }
  }
</script>

<style>

</style>