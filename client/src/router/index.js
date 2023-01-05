import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import shoppingCart from '../views/shoppingCart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',

      component: () => import('../views/login.vue')
    },
    {
      path: '/register',
      name: 'register',

      component: () => import('../views/register.vue')
    },
    {
      path: '/retrieve',
      name: 'retrieve',

      component: () => import('../views/retrievePassword.vue')
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('../views/MemberCentre.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/OrderView.vue')
    },
    {
      path: '/:category/:productInfoID',
      name: 'product',
      component: ProductView
<<<<<<< Updated upstream
    },
    {
      path: '/shoppingCart',
      component: shoppingCart,
      children: [{
        path: '',
        name: 'shoppingCart',
        component: () => import('../components/shoppingCart/cartList.vue')
      }, {
        path: 'shippingInfo',
        component: () => import('../components/shoppingCart/shippingInfo.vue')
      },
      {
        path: 'paymentInfo',
        component: () => import('../components/shoppingCart/paymentInfo.vue')
      },
      {
        path: 'order',
        component: () => import('../components/shoppingCart/order.vue')
      }]
=======
    }
    
>>>>>>> Stashed changes

    },
  ],
})

export default router
