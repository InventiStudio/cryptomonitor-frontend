import Vue from 'vue'
import Router from 'vue-router'
import store from 'src/store'

Vue.use(Router)

/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const routes = [
  {
    path: '/',
    // TODO: Add guard when not logged-in
    name: 'Monitor',
    component(resolve) {
      require(['src/views/Monitor'], resolve)
    },
  },
  {
    path: '/settings',
    name: 'Settings',
    component(resolve) {
      require(['src/views/Settings'], resolve)
    },
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component(resolve) {
      require(['src/views/SignIn'], resolve)
    },
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component(resolve) {
      require(['src/views/SignUp'], resolve)
    },
  },
  {
    path: '/forgotten-password',
    name: 'ForgottenPassword',
    component(resolve) {
      require(['src/views/ForgottenPassword'], resolve)
    },
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component(resolve) {
      require(['src/views/ResetPassword'], resolve)
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
  return next()
})

export default router
