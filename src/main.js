import Vue from 'vue';
import App from './App.vue';

import artifacts from './bootstrap';

Vue.config.productionTip = false;

const app = new Vue({
  router: artifacts.router,
  store: artifacts.store,
  vuetify: artifacts.vuetify,
  render: h => h(App),
});

app.$mount('#app');
