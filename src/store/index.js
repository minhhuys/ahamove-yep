import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    customer_info: {}
  },
  mutations: {
    customerInfo: state => state.customer_info
  },
  actions: {},
  modules: {}
});
