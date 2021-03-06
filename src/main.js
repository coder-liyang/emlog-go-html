import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import VueRouter from "vue-router"
import Blog from "./components/Blog";
import Index from './pages/Index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import BlogList from "./components/BlogList";

Vue.use(VueRouter)
Vue.use(ElementUI);

Vue.prototype.$qs = qs;
Vue.prototype.$http = axios;


Vue.config.productionTip = false
// Vue.prototype.common = common


let router = new VueRouter({
  routes: [
      //首页
      {path: "/", component: BlogList},
      //查看一篇文章的内容
      {path: "/blog/(\\d+)",component: Blog},
      //点击导航,查看对应文章列表
      {path: "/sortid/*",component: BlogList}
      ]
})

new Vue({
  render: h => h(Index),
  router: router, //可以简写router
}).$mount('#app')
