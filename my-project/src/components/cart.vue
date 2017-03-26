<template>
  <div class="buy-list">
    <div class="buy-list__icon" v-on:click="showModal"><span>Корзина </span><span class="buy-list__count">{{countBuyList}}</span></div>
    <div class="buy-list__wrap"  v-bind:class="{ show: isShow }">
      <ul class="buy-list__list" v-if="list.length > 0">
        <li class="list__item" v-for="item in list" v-model="buyList=list"><span >{{item.text}}</span> <span class="delete" v-on:click="deleteItem(item)">X</span></li>
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
      countBuyList: function (list) {
        return this.buyList.length;
      }
    },
    methods: {
      showModal: function () {
        console.log(this.isShow);
        this.isShow = !this.isShow;
      },
      deleteItem: function (item) {
        this.buyList.splice(this.list.indexOf(item), 1);
      }
    }
  }


</script>
