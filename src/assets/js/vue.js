import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import FastClick from 'fastclick';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

import config from './config';
import utils from './utils';
import * as filters from './filters';
import '../scss/app.scss';

// sync the router with the vuex store.
// this registers `store.state.route`
Vue.use(VueLazyload);
Vue.use(ElementUI);
FastClick.attach(document.body);

// register global utility filters.
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

export {
  utils,
  config,
};
export default Vue;