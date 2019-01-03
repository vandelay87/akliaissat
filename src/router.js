import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Privacy from './views/Privacy.vue';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: Privacy,
    },
  ],
  mode: 'history',
});
