import { createRouter, createWebHistory } from 'vue-router'
import Cookies from 'js-cookie';
import DashBoard from '../pages/admin/dashboard'
import Login from '../pages/admin/authentication/login'
import Register from '../pages/admin/authentication/register'
const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoard,
    meta: { requiredAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { requiredAuth: false }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { requiredAuth: false }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register'];
//   const authRequired = !publicPages.includes(to.path);
//   const token = document.cookie
//   console.log(token)
//   if (authRequired && !token) {
//     return next('/login');
//   } else {
//     next();
//   }
// })

export default router
