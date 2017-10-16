import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import mutations from './mutations';
import actions from './actions';
import modules from './modules';
import plugins from './plugins';
import * as getters from './getters';

import Constants from './constants';

Vue.use(Vuex);
Vue.use(Constants);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
  plugins,
  getters,
  strict: process.env.NODE_ENV !== 'production'
});
