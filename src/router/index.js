import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CalorieCalculator from '@/components/CalorieCalculator.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/CalorieCalculator',
    name: 'CalorieCalculator',
    component: CalorieCalculator,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
