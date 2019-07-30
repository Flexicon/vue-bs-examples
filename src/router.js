import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: null, name: 'home' },
  { path: '/foo', component: null, name: 'foo-path' },
  { path: '/bar', component: null, name: 'bar-path' },
  { path: '/baz', component: null, name: 'baz-path' },
]

export default new VueRouter({
  mode: 'history',
  routes,
})
