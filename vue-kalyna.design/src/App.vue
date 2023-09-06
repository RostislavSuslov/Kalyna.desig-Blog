<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import BlogPost from './components/BlogPost.vue'
</script>

<template>
  <header>
    <div class="container flex mx-auto">
      <a href="/home" class="logo">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      </a>
      <nav>
        <RouterLink terLink to="/home">Home </RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
      </nav>  
      </div>
  </header>
  <div class="wrapper">
    <div class="container  mx-auto">

      <HelloWorld msg="You did it!" />
      <h1 class="text-3xl underline font-bold">Hello world!</h1>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
