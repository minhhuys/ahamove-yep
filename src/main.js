import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

// import "node_modules/slick-carousel/slick/slick.css";

AOS.init();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
