// Web版
import * as types from '../types';

export default {
  // state注册在模块内部空间
  state: {
    module: 'Index',
  },

  // actions、mutations、getters注册在全局空间，注意命名避免冲突
  actions: {
  },

  mutations: {
    [types.WEB_INDEX](state) {
      console.log(state.module);
    },
  },

  getters: {
    [types.WEB_INDEX]: state => state.module,
  },
};