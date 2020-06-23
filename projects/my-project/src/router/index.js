// 路由组件文件
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import '../assets/global.css'
import Home from '../views/Home.vue'
Vue.use(VueRouter)
const routes = [
  // 路由规则
  { path: '/', redirect: 'login' },
  { path: '/login', component: Login },
  { path: '/home', component: Home }

]
//  创建路由实例
const router = new VueRouter({
  routes
})

export default router
// 路由导航（守卫）
router.beforeEach((to, from, next) => {
  //  判断当前登录状态
  if (to.path === '/login') return next()
  // 有没有token没有打回到login页面，有允许跳转
  const myToken = window.sessionStorage.getItem('token')
  if (!myToken) return next('/login')
  next()
})
