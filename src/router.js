import Vue from 'vue'
import Router from 'vue-router' 


Vue.use(Router)

const router= new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: ()=>import ( "./views/Index")
    },
    {
      path: '/login',
      name: 'Login',
      component: ()=>import ( "./views/Login")
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})

router.beforeEach((to, from, next) => {
  const isLoading = localStorage.ele_login ? true : false
  if (to.path == '/login') {
    next()
  } else {
    //判断是否在登录状态下
    isLoading?next():next('/login')
  }
})

export default router