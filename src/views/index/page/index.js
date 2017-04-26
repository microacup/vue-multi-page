import Vue from '../../../assets/js/vue';
import App from './indexApp';
import store from '../../../store';
import index from '../../../store/modules/index';

// 动态注册store模块
store.registerModule('index', index);
new Vue({ ...App, store }).$mount('#app');