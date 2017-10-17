import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import mutations from './mutations';
import actions from './actions';
import chat from '../modules/chat/store';
import * as getters from './getters';


Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: { chat },
  getters,
  strict: process.env.NODE_ENV !== 'production'
});
