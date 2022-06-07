import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'



// element ui引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);



// 报错处理
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
