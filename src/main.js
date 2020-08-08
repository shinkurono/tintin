import Vue from 'vue'
import App from './App.vue'
import './plugins/bootstrap-vue';
import { routes } from './routes.js';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
  }).$mount("#app");
