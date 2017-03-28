// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import vueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App';
import router from './router';
// import buyList from './components/buyList.vue';
import ShopCart from './components/shopCart.vue';


import { store } from "./store";

// Globally register components
Vue.use(vueResource);
Vue.use(VueRouter);
Vue.component('shop-cart',ShopCart);




// Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  data: function() {
    return {

      productList2: this.$store.state.productList
    }
  },
  computed: {
    productsListFilter () {
      return this.$store.state.productsList.filter(function (item) {
        return item.isAdd;
      });
    }
  },
  methods: {
    showModal: function () {
      console.log(this);
      this.isShow = !this.isShow;
    },
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
            <ul class="navigation"  v-on:click="makeActive">
                <li><router-link to="/privateList">Корзина</router-link></li>
                <li><router-link to="/buyList">Товары</router-link></li>
            </ul>
           
              <shop-cart v-bind:list="productsList"></shop-cart>

        </div>
        
        <router-view></router-view>
        
    </div>
  `,
}).$mount('#app');



// // Vue.component('shop-cart', Cart);
//
// // Globally register components
// Vue.use(vueResource);
// Vue.use(VueRouter);
//
//
//
// // Vue.config.productionTip = false;
//
// /* eslint-disable no-new */
// new Vue({
//     el: "#app",
//     router,
//     render: h=> h(App)
// });








//   Vue.component('shop-cart', {
//   template: `  <div class="buy-list">
//     <div class="buy-list__icon" v-on:click="showModal"><span>Корзина </span><span class="buy-list__count">{{countBuyList}}</span></div>
//     <div class="buy-list__wrap"  v-bind:class="{ show: isShow }">
//       <ul class="buy-list__list" v-if="productsList.length > 0">
//         <li class="list__item" v-for="item in productsList"><span >{{item.name}}</span> <span class="delete" v-on:click="deleteItem(item)">X</span></li>
//       </ul>
//       <span class="buy-list__list--empty"  v-else>Корзина пуста</span>
//     </div>
//   </div>`,
//     data: function () {
//       return {
//         isShow: false,
//         buyList: []
//       }
//     },
//     computed: {
//       productsList: function() {
//         return this.$store.state.productsList.filter( function(product) {
//             return product.isAdd;
//           });
//       },
//       countBuyList: function () {
//         var l = this.$store.state.productsList.filter( function(product) {
//           return product.isAdd;
//         });
//         return l.length;
//       }
//     },
//     methods: {
//       showModal: function () {
//         this.isShow = !this.isShow;
//       },
//       deleteItem: function (item) {
//         var cartList = this.$store.state.productsList;
//         var index = cartList.indexOf(item);
//         cartList[index].isAdd = false;
//       }
//     }
// });
