import { createRouter, createWebHistory } from 'vue-router';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';

const routes = [
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  // Default route for home
  { path: '/', redirect: '/login' },
  // Fallback route
  { path: '/:pathMatch(.*)*', redirect: '/login' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
