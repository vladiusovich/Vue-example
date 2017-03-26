// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
// import buyList from './components/buyList.vue'


import { store } from "./store";

// Globally register components
Vue.use(vueResource);
Vue.use(VueRouter);

  Vue.component('shop-cart', {
  template: `  <div class="buy-list">
    <div class="buy-list__icon" v-on:click="showModal"><span>Корзина </span><span class="buy-list__count">{{countBuyList}}</span></div>
    <div class="buy-list__wrap"  v-bind:class="{ show: isShow }">
      <ul class="buy-list__list" v-if="productsList.length > 0">
        <li class="list__item" v-for="item in productsList"><span >{{item.name}}</span> <span class="delete" v-on:click="deleteItem(item)">X</span></li>
      </ul>
      <span class="buy-list__list--empty"  v-else>Корзина пуста</span>
    </div>
  </div>`,
    data: function () {
      return {
        isShow: false,
        buyList: []
      }
    },
    computed: {
      productsList: function() {
        return this.$store.state.productsList.filter( function(product) {
            return product.isAdd;
          });
      },
      countBuyList: function () {
        var l = this.$store.state.productsList.filter( function(product) {
          return product.isAdd;
        });
        return l.length;
      }
    },
    methods: {
      showModal: function () {
        this.isShow = !this.isShow;
      },
      deleteItem: function (item) {
        var cartList = this.$store.state.productsList;
        var index = cartList.indexOf(item);
        cartList[index].isAdd = false;
      }
    }
});


// Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  data: function() {
    return {
      productsList: [
        {
          name: "Lenovo Yoga Book",
          id: 1,
          imgSrc: "https://content2.onliner.by/catalog/device/header/61b1107591b9b1f15ddcb22e43e67003.jpeg",
          describe: "10.1 IPS (1920x1200), Windows 10, ОЗУ 4 ГБ, флэш-память 64 ГБ, цвет темно-серый/черный",
          cost: 1484,
          availabile: "Есть в наличии",
          isAdd: false
        },
        {
          name: "Samsung Galaxy Tab A (2016)",
          id: 2,
          imgSrc: "https://content2.onliner.by/catalog/device/header/a5957da85cd06bf4a4784762fa12460b.jpeg",
          describe: "10.1 (1920x1200), Android, ОЗУ 2 ГБ, флэш-память 16 ГБ, LTE, цвет белый",
          cost: "569,40 – 849,00",
          availabile: "Нет в наличии",
          isAdd: false
        },
        {
          name: "Prestigio MultiPad Visconte V 32GB",
          id: 3,
          imgSrc: "https://content2.onliner.by/catalog/device/header/5678700d1bd249c6ded3aeb59580c466.jpeg",
          describe: "10.1 IPS (1280x800), Windows 10, ОЗУ 2 ГБ, флэш-память 32 ГБ, док-станция, клавиатура, цвет коричневый",
          cost: "569,40 – 849,00",
          availabile: "Есть в наличии",
          isAdd: false
        },
        {
          name: "Xiaomi Mi Pad 2 16GB",
          id: 4,
          imgSrc: "https://content2.onliner.by/catalog/device/header/fea38b894e1984be6369c541e5806ce4.jpg",
          describe: "7.9 IPS (2048x1536), Android, ОЗУ 2 ГБ, флэш-память 16 ГБ, цвет серый/черный",
          cost: "440,00",
          availabile: "Есть в наличии",
          isAdd: false
        },
        {
          name: "Samsung Galaxy Tab A ",
          id: 5,
          imgSrc: "https://content2.onliner.by/catalog/device/header/2bae677f8358c38b0af336067e696f7a.jpeg",
          describe: "10.1 (1920x1200), Android, ОЗУ 2 ГБ, флэш-память 16 ГБ, цвет черный",
          cost: "491,40 – 755,00",
          availabile: "Есть в наличии",
          isAdd: false
        },
        {
          name: "Apple iPad Pro 9.7",
          id: 6,
          imgSrc: "https://content2.onliner.by/catalog/device/header/90de37227cbc9c7876a3be59aca944e9.jpg",
          describe: "9.7 IPS (2048x1536), iOS, флэш-память 32 ГБ, цвет золотистый",
          cost: "1250,00 – 1719,00",
          availabile: "Есть в наличии",
          isAdd: false
        },
        {
          name: "Digma Citi 1802 64GB 3G",
          id: 7,
          imgSrc: "https://content2.onliner.by/catalog/device/header/65e3b8fbbe1bb82b4618e5ae77115eed.jpeg",
          describe: "10.1 IPS (1280x800), Windows 10, ОЗУ 4 ГБ, флэш-память 64 ГБ, 3G, док-станция, клавиатура, цвет темно-серый",
          cost: "477,75 – 481,55",
          availabile: "Нет в наличии",
          isAdd: false
        },
        {
          name: "Xiaomi Mi Pad 2 16GB",
          id: 4,
          imgSrc: "https://content2.onliner.by/catalog/device/header/fea38b894e1984be6369c541e5806ce4.jpg",
          describe: "7.9 IPS (2048x1536), Android, ОЗУ 2 ГБ, флэш-память 16 ГБ, цвет серый/черный",
          cost: "440,00",
          availabile: "Есть в наличии",
          isAdd: false
        }

      ]
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
                <li><router-link to="/buyList">Товар</router-link></li>
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



