import Router from 'vue-router';

import Vue from '../../../assets/js/vue';
import App from './indexApp';
import All from './all';
import store from '../../../store';
import index from '../../../store/modules/index';
import config from '../../../assets/js/config';

Vue.use(Router);
const router = new Router({
  base: config.contextPath,
  mode: 'history',
  routes: [
    { name: 'index', path: '/', component: App },
    { name: 'all', path: '/all', component: All },
  ],
});
// 动态注册store模块
store.registerModule('index', index);
new Vue({ router, store }).$mount('#app');