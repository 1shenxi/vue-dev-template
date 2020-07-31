import Vue from "vue";
import router from "./router";
import store from "./store";
import Index from "./layout/index";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(Index)
}).$mount("#app");
