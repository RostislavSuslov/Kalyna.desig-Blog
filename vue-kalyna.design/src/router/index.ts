import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import SinglePostView from '../views/SinglePostView.vue'
import ContactsView from '../views/ContactsView.vue'

 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/blog' 
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
      meta: { isHome: true }
    },
    {
      path: '/blog/post-:postId',
      name: 'single-post',
      component: SinglePostView,
      props: true
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
