import { createRouter, createWebHistory } from 'vue-router';

import authRoutes from './auth';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...authRoutes]
});

export { router as default };
