// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import PrivateList from './components/privateList.vue'
import BuyList from './components/buyList.vue'


Vue.use(vueResource);
Vue.use(VueRouter);

// Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
        <div class="header">
            <div class="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/2000px-Vue.js_Logo.svg.png"></img>
            </div>
            <ul class="navigation">
                <li><router-link to="/privateList">Private List</router-link></li>
                <li><router-link to="/buyList">Buy</router-link></li>
            </ul>
            
        </div>
        <router-view></router-view>
    </div>
  `,
}).$mount('#app');

