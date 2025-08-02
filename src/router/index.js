import { createRouter, createWebHistory } from 'vue-router';
import Accueil from '../components/Home.vue';
import Quizz from '../components/Quizz.vue';
import Wiki from '../components/Wiki.vue';
import QuizzView from '../components/QuizzView.vue';
import Login from '../components/Login.vue';

const routes = [
  { path: '/', component: Accueil },
  { path: '/Quizz', component: Quizz },
  { path: '/Wiki', component: Wiki },
  { path: '/Login', component: Login },
  {
  path: '/wiki/:breed',
  name: 'BreedPage',
  component: () => import('@/components/BreedPage.vue')
  },
  { path: '/quizz/play', name: 'QuizzView', component: QuizzView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
