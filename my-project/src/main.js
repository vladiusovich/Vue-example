// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'


// Globally register components
Vue.use(vueResource);
Vue.use(VueRouter);



// Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  data: function() {
    return {
      isActiveA: false,
      isActiveB: false,
      activeColor: "rgba(226, 175, 175, 0.24)",
      defaultColor: "transparent",
      curentColor: "transparent"
    }
  },
  methods: {
    makeActive: function (event){
      var li = event.target.parentNode;
      var parent = event.target.parentNode.parentNode;
      var itemArray = parent.getElementsByTagName('li');
      if (li.tagName != "LI") { return };
      for (var item of itemArray) {
        item.classList.remove("active");
      }
      li.classList.add("active");


    }
  },
  template: `
    <div id="app">
        <div class="header">
            <div class="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/2000px-Vue.js_Logo.svg.png"></img>
            </div>
            <ul class="navigation" v-bind:class="{ active: isActiveA }"  v-on:click="makeActive">
                <li class="active" ><router-link to="/privateList">Корзина</router-link></li>
                <li><router-link to="/buyList">Товар</router-link></li>
            </ul>
            
        </div>
        <router-view></router-view>
    </div>
  `,
}).$mount('#app');

