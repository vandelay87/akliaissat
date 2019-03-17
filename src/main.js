import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import router from './router';

import App from './App.vue';
import LazyLoad from './directives/lazyload';

const isProd = process.env.NODE_ENV === 'production';

Vue.directive('lazyload', LazyLoad);

Vue.use(VueAnalytics, {
  id: process.env.AKLIAISSAT_ANALYTICS_KEY ? process.env.AKLIAISSAT_ANALYTICS_KEY : 'GA_TRACKING_ID',
  router,
  autoTracking: {
    exception: true,
  },
  debug: {
    enabled: !isProd,
    sendHitTask: isProd,
  },
});

new Vue({
  components: { App },
  template: '<App/>',
  router,
}).$mount('#app');
