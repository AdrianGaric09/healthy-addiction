import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CalorieCalculator from '@/components/CalorieCalculator.vue';
import EmojiPage from '@/components/EmojiPage.vue'; 
import Sad from '@/components/Sad.vue'; 
import Neutral from '@/components/Neutral.vue'; 
import Happy from '@/components/Happy.vue'; 
import WaterTracker from '@/components/WaterTracker.vue'; 
import ContactForm from '@/components/ContactForm.vue'; 

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/CalorieCalculator',
    name: 'CalorieCalculator',
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
  
];

const router = createRouter({ 
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
