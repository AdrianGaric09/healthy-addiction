import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import CalorieCalculator from '@/components/CalorieCalculator.vue';
import EmojiPage from '@/components/EmojiPage.vue'; 
import Sad from '@/components/Sad.vue'; 
import Neutral from '@/components/Neutral.vue'; 
import Happy from '@/components/Happy.vue'; 
import WaterTracker from '@/components/WaterTracker.vue'; 
import ContactForm from '@/components/ContactForm.vue'; 
import App from '@/App.vue';
import { auth } from '../firebase/config'
import SadPlan from '@/components/SadPlan.vue'; 

const routes = [
  
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'app',
    component: App,
  },
  {
    path: '/calorieCalculator',
    name: 'calorieCalculator',
    component: CalorieCalculator
  },
  {
    path: '/EmojiPage',
    name: 'EmojiPage',
    component: EmojiPage,
  },
  {
    path: '/Sad',
    name: 'Sad',
    component: Sad
  },
  {
    path: '/Neutral',
    name: 'Neutral',
    component: Neutral
  },
  {
    path: '/Happy',
    name: 'Happy',
    component: Happy
  },
  {
    path: '/WaterTracker',
    name: 'WaterTracker',
    component: WaterTracker
  },
  {
    path: '/ContactForm',
    name: 'ContactForm',
    component: ContactForm
  },
  {
    path: '/sadPlan',
    name: 'sadPlan',
    component: SadPlan
  },
   
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/')
  } else {
    next()
  }
});

export default router;
