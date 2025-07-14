import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(Meta)

const Router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
//   scrollBehavior (to, from, savedPosition) {
//     return { x: 0, y: 0 }
//   },
  routes: [
    {
      path: '/',
      component: () => import('./pages/comingSoon.vue'),
      children: [
        {
          name: 'resume',
          path: '/',
          component: () => import('./pages/comingSoon.vue'),
          meta: {
            title: 'Prapas Jonkaenboon',
          }
        }
      ]
    }
  ]
})

Router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default Router
