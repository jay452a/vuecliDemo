import Vue from 'vue'
import Router from 'vue-router'
import pageOne from 'frontView/page1.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pageOne',
      component: pageOne
    }
  ]
})
