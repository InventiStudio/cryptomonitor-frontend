import Vue from 'vue'
import Router from 'vue-router'
import store from 'src/store'

Vue.use(Router)

/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const routes = [
  {
    path: '/',
    name: 'Monitor',
    component(resolve) {
      require(['src/views/Monitor'], resolve)
    },
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component(resolve) {
      require(['src/views/SignIn'], resolve)
    },
  },
]
/* eslint-enable global-require */
/* eslint-enable import/no-dynamic-require */

const router = new Router({
  mode: 'history',
  routes,
})

router.beforeEach((to, from, next) => {
  const { isLoggedIn } = store.state.auth
  if (isLoggedIn && to.name === 'SignIn') return next({ name: 'Monitor' })
  if (!isLoggedIn && to.name !== 'SignIn') return next({ name: 'SignIn' })
  return next()
})

export default router
