import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// 动态加载路由
let routerlist = []
function importALL(r){
r.keys().forEach(element => {
  routerlist.push(r(element).default)
});
}
importALL(require.context('./',true,/\.router\.js/))
// 
const routes = [
  ...routerlist,
  {
    path: '/',
    name: 'home',
    component: HomeView,
    // meta:{
    //   token: true
    // }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta:{
      token: true
    }
   
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
