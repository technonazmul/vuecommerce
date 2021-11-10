import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/frontend/frontend-master'),
    redirect:{path:'/home'},
    children:[{
      path:'home',
      name:'home-page',
      component:()=>import('../views/frontend/home'),
    },
    {
      path:'login',
      name:'login',
      component:()=>import('../views/frontend/auth/login')
    },{
      path:'register',
      name:'register',
      component:()=>import('../views/frontend/auth/register')
    },{
      path:'logout',
      name:'logout',
      component:()=>import('../views/frontend/auth/logout')
    },
    
  ]
  },
  {
    path:'/dashboard',
    name:'dashboard',
    component:()=>import('../views/backend/admin-master'),
    children:[
      {
      path:'/category-add',
      name:'category-add',
      component:()=>import('../views/backend/category-add')
    },
    {
      path:'/category-view',
      name:'category-view',
      component:()=>import('../views/backend/category-view')
    },
    {
      path:'/category-update/:category_id',
      name:'category-update',
      component:()=>import('../views/backend/category-update')
    },
    {
      path:'/products',
      name:'products',
      component:()=>import('../views/backend/products')
    },
  ]
  },
  
  {
    path:'/admin-login',
    name:'admin-login',
    component:()=>import('../views/backend/login')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
