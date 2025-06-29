import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../components/Home.vue'
import Quizz from '../components/Quizz.vue'
import Wiki from '../components/Wiki.vue'


const routes = [
  { path: '/', component: Accueil },
  { path: '/Quizz', component: Quizz },
  { path: '/Wiki', component: Wiki },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
