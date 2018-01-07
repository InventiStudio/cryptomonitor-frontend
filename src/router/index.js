import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Monitor',
      component(resolve) {
        require(['src/views/Monitor/Monitor'], resolve)
      },
    },
  ],
})
/* eslint-enable global-require */
/* eslint-enable import/no-dynamic-require */
