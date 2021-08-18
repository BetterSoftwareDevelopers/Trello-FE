import { RouteRecordRaw } from 'vue-router';

import Login from './Login.vue';

const authRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: Login
  }
];

export { authRoutes as default };
