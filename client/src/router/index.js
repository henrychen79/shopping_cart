import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import admin from '../views/admin.vue'
import addproduct from  '../views/adminAddProduct.vue'
import shoppingCart from '../views/shoppingCart.vue'
import editproduct from '../views/editProduct.vue'
import ordermanage from '../views/adminOrderManage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",

      component: () => import("../views/login.vue"),
    },
    {
      path: "/register",
      name: "register",

      component: () => import("../views/register.vue"),
    },
    {
      path: "/retrieve",
      name: "retrieve",

      component: () => import("../views/retrievePassword.vue"),
    },
    {
      path: '/verify',
      name: 'verify',

      component: () => import('../views/verifyView.vue')
    },
    {
      path: "/member",
      name: "member",
      component: () => import("../views/MemberCentre.vue"),
    },
    {
      path: "/order",
      name: "order",
      component: () => import("../views/OrderView.vue"),
    },
    {

      path: "/:category/:productInfoID",
      name: "product",
      component: ProductView,

      path: '/:category/:productInfoNum/:productInfoID',
      name: 'product',
      component: ProductView


    },
    {
      path: "/shoppingCart",
      component: shoppingCart,
      children: [{
        path: '/shoppingCart',
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
        path: 'orderInfo',
        component: () => import('../components/shoppingCart/orderInfo.vue')
      }]

    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/admin/addproduct',
      name: 'addproduct',
      component: addproduct
    },

    {
      path: '/admin/editproduct',
      name: 'editproduct',
      component: editproduct

    },

    {
      path: '/admin/ordermanage',
      name: 'ordermanage',
      component: ordermanage

    }
    

    ]},
  )

export default router;
