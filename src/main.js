import Vue from 'vue';
import router from './router';
import store from './store';
import Index from './layout/index';
import '@assets/style/index.scss';
import '@utils/scanf';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(Index),
}).$mount('#app');
