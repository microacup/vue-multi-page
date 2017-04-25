import Vue from 'vue';
import FastClick from 'fastclick';

import config from './config';
import utils from './utils';
import * as filters from './filters';

import '../scss/app.scss';

FastClick.attach(document.body);

// register global utility filters.
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

export default Vue;
export {
  utils, config,
};