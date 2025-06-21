import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/main.vue'
import Quizz from '../views/Quizz.vue'
import Wiki from '../views/Wiki.vue'


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
