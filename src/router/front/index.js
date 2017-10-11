import Vue from 'vue'
import Router from 'vue-router'
import pageOne from 'frontView/page1.vue'
import pageTwo from 'frontView/page2.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pageOne',
      component: pageOne,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/page2',
      name: 'pageTwo',
      component: pageTwo,
    }
  ]
})
