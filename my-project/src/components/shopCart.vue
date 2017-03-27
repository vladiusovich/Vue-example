<template>
  <div class="buy-list">
    <div class="buy-list__icon" v-on:click="showModal"><span>Корзина </span><span class="buy-list__count">{{countBuyList}}</span></div>
    <div class="buy-list__wrap"  v-bind:class="{ show: isShow }">
      <ul class="buy-list__list" v-if="productsList.length > 0">
        <li class="list__item" v-for="item in productsList"><span >{{item.name}}</span> <span class="delete" v-on:click="deleteItem(item)">X</span></li>
      </ul>
      <span class="buy-list__list--empty"  v-else>Корзина пуста</span>
    </div>
  </div>
</template>

<script>

  export default {
    data: function () {
      return {
        isShow: false,
        buyList: []
      }
    },
    computed: {
      productsList: function () {
        return this.$store.state.productsList.filter(function (product) {
          return product.isAdd;
        });
      },
      countBuyList: function () {
        var l = this.$store.state.productsList.filter(function (product) {
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
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import url('https://fonts.googleapis.com/css?family=Arimo');




</style>
