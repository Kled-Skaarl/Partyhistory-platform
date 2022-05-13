import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [{
      path: '/upload_video',
      name: 'upload_video',
      component: () => import('../views/upload_video')
    },
    {
      path: '/upload_file',
      name: 'upload_file',
      component: () => import('../views/upload_file')
    }
    ]
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login/login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
