export default {
  data() {
    return {
      responseData: null,
      loading: false,
    };
  },
  mounted() {
    console.log(responseData, "123");
   // Выполнение запроса при монтировании компонента
    this.loading = true 

    axios.get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        // Обработка успешного ответа
        if(response.status === 200) {
          this.responseData = response.data;
        }
        // this.responseData = response.data;
        this.loading = false;
      
      })
      .catch((error) => {
        // Обработка ошибки
        console.error("Ошибка при загрузке данных:", error);
      });  
  },
};
 

<template>
  <div class="blog">
    <h1 class="text-3xl underline font-bold">This is an blog page</h1>
      <div>
        <!-- Вывод данных -->
        <div v-if="loading">
       
           
          <p>Loading...</p>
        </div>
        <!-- Отображение сообщения о загрузке -->
        <div v-else>
         
          <ul>
            <li v-for="post in responseData">{{ post}}</li>
        </ul>
        </div>
      </div>
  </div>
</template>