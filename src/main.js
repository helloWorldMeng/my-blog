import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(ElementUI);
Vue.use(VueResource);
Vue.use(VueRouter);

// 自定义指令
Vue.directive('raninbow', {
  bind(el,binding,vnode) {
    el.style.color = '#' + Math.random().toString(16).slice(2, 8);
  }
})

Vue.directive('theme', {
  bind(el,binding,vnode) {
    if(binding.value == 'wide') {
      el.style.width = '1000px';
    } else if (binding.value == 'narrow') {
      el.style.width = '500px';
    }
    if(binding.arg == 'column') {
      el.style.background = '#6699ff';
      el.style.padding = '10px 20px';
    }
  }
})

Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})

// 自定义过滤器
Vue.filter('to-uppercase',function (value){
  return value.toUpperCase();
})

Vue.filter('snippet',function (value){
  return value.slice(0,100) + '...';
})


Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes,
  mode: 'history'  // 可以去掉路由中的井号
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
