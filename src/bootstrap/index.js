import Vue from 'vue';
import Vuetify from 'vuetify';

import 'vuetify/dist/vuetify.min.css';
// import '@mdi/font/css/materialdesignicons.min.css';
// import '@/styles//vuetify.styl';
// import '@/assets/fonts/stylesheet.css';

import router from '@/router';
import store from '@/store';
// import api from '@/api';

Vue.config.productionTip = false;

Vue.use(Vuetify);

const vuetify = new Vuetify({});

const SharedScope = {
  store,
  router,
  vuetify,
};

// do bootstrap

export default {
  store: SharedScope.store,
  router: SharedScope.router,
  vuetify: SharedScope.vuetify,
};
