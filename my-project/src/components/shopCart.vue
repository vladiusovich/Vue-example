<template>
  <div class="buy-list">
    <div class="buy-list__icon"><span><router-link to="/privateList">Корзина</router-link> </span><span class="buy-list__count">{{countOfProducts}}</span></div>
    <div class="buy-list__wrap">
      <div class="list__wrap" v-if="productsList.length > 0">
        <ul class="buy-list__list">
          <li class="list__item" v-for="item in productsList"><span >{{item.name}} ({{item.count}})</span> <span class="delete" v-on:click="deleteItem(item)">X</span></li>
        </ul>
        <div class="buy-list__actions">
          <button class="buy-list__clear" @click="clearBasket" >Очистить</button>
        </div>
      </div>
      <span class="buy-list__list--empty"  v-else>Корзина пуста</span>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VueRouter from 'vue-router';
  Vue.use(VueRouter);

  export default {
    data: function () {
      return {
        isShow: false,
        buyList: [],

      }
    },
    computed: {
      productsList: function () {
        return this.$store.state.privateListEmpty.filter(function (product) {
          return product;
        });
      },
      countBuyList: function () {
        var l = this.$store.state.privateListEmpty.filter(function (product) {
          return product;
        });
        return l.length;
      },
      countOfProducts: function (item) {
        var allCount = 0;
        var prList = this.$store.state.privateListEmpty;
        for (var item of prList) {
          var c = parseInt(item.count);
          allCount += c;
        }
        return  parseInt(allCount);
      }
    },
    methods: {
      showModal: function () {
        this.isShow = !this.isShow;
      },
      deleteItem: function (item) {
        this.$store.commit('deleteItem', item);
      },
      clearBasket: function () {
        this.$store.commit('clearBasket');
        this.$store.commit('resetCount');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import url('https://fonts.googleapis.com/css?family=Arimo');


  .buy-list {
    position: fixed;
    display: block;
    top: 3px;
    right: 5px;
    cursor: pointer;
    z-index: 100;
    /*background: rgba(207, 207, 207, 0.67);*/
  }

  .buy-list__icon {
    padding: .8em;
    color: #303030;
    transition: all .5s ease;
  }

  .buy-list__wrap {
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 100;
    opacity: 0;
    background: white;
    box-shadow: 0 1px 4px 3px rgba(0, 0, 0, 0.04);
    transform: translateX(100%);
    transition: all .2s ease .15s;
  }

  .buy-list:hover  .buy-list__wrap{
    opacity: 1 !important;
    transform: translateX(0);

  }

  .buy-list__icon > span:first-child a {
    font-size: 1rem;
    color: #da972d;
    transition: all .5s ease;
  }

  .buy-list__icon > span:first-child {
    transition: all .5s ease;

  }

  .buy-list__icon:hover > span:first-child  {
    color: #da6735;
    text-decoration: underline;
  }

  .buy-list__icon:hover > .buy-list__count {
    border-color: #da6735;
    color: #da6735;
  }



  .buy-list__list {
    width: 350px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;

  }

  .buy-list__list--empty {
    display: block;
    padding: 1em;
    font-size: .9rem;
    background: white;
    box-shadow: 0 1px 4px 3px rgba(0, 0, 0, 0.04);
  }

  .buy-list__count {
    display: inline-block;
    font: 13px/19px Arial, Helvetica Neue, Helvetica, sans-serif;
    border: 1px solid rgba(205, 69, 0, 0.3);
    border-radius: 2px;
    color: #da972d;
    background-clip: padding-box;
    vertical-align: top;
    padding: 0 6px;
    margin-left: 6px;
    -webkit-transition: border-color 0.2s ease;
    transition: border-color 0.2s ease;
  }

  .buy-list__clear {
    float: right;
    border: none;
    color: #4b84da;
    padding: .4em 1em;
    /*margin: 0 0 1em 1em;*/
    background: rgba(100, 100, 100, 0);
    cursor: pointer;
    transition: .2s ease;
  }

  .buy-list__clear:hover {
    text-decoration: underline;
  }

  .list__item {
    position: relative;
    padding: .5em;
    font-size: .9rem;
    transition: .2s ease;
  }

  .list__item:hover {
    background: rgba(210, 232, 229, 0.47);
  }

  .list__item > .delete {
    position: absolute;
    right: 10px;
    font-size: 1rem;
    transition: .2s ease;

  }
  .list__item > .delete:hover {
    color: #ea2a1d;
  }



</style>
