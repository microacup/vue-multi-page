import Vuex from 'vuex';
import Vue from '../assets/js/vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    me: {},
  },
  strict: process.env.NODE_ENV !== 'production', // 线上环境关掉
});