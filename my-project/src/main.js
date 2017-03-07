// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import Hello from './components/Hello.vue'


Vue.use(vueResource);
Vue.use(VueRouter);

// Vue.config.productionTip = false;

const router2 = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Hello},
    { path: '/privateList', component: Hello}
  ]
});

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
        <ul class="navigation">
            <li><router-link to="/">Private List</router-link></li>
            <li><router-link to="/privateList">Buy</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
  `,
}).$mount('#app');
