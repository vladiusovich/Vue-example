<!--<template>-->
  <!--<div id="app">-->
  <!--<div class="header">-->
    <!--<div class="logo">-->
      <!--<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/2000px-Vue.js_Logo.svg.png"></img>-->
    <!--</div>-->
    <!--<ul class="navigation"  v-on:click="makeActive">-->
      <!--<li class="active" ><router-link to="/privateList">Корзина</router-link></li>-->
      <!--<li><router-link to="/buyList">Товар</router-link></li>-->
    <!--</ul>-->
    <!--<shop-cart v-bind:list="productList"></shop-cart>-->
  <!--</div>-->
  <!--<router-view></router-view>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--import Cart from './components/cart.vue';-->

<!--export default {-->
  <!--name: 'app',-->
  <!--data: function() {-->
    <!--return {-->
      <!--productList: [-->
        <!--{ text: 'Овощи' },-->
        <!--{ text: 'Сыр' },-->
        <!--{ text: 'Сыр' },-->
        <!--{ text: 'Что там ещё люди едят?' }-->
      <!--]-->
    <!--}-->
  <!--},-->

  <!--methods: {-->
    <!--showModal: function () {-->
      <!--console.log(this);-->
      <!--this.isShow = !this.isShow;-->
    <!--},-->
    <!--makeActive: function (event){-->
      <!--var li = event.target.parentNode;-->
      <!--var parent = event.target.parentNode.parentNode;-->
      <!--var itemArray = parent.getElementsByTagName('li');-->
      <!--if (li.tagName != "LI") { return };-->
      <!--for (var item of itemArray) {-->
        <!--item.classList.remove("active");-->
      <!--}-->
      <!--li.classList.add("active");-->
    <!--}-->
  <!--},-->
  <!--components: {-->
    <!--'shop-cart': Cart-->
  <!--}-->
<!--}-->
<!--</script>-->

<style>
@import url('https://fonts.googleapis.com/css?family=Arimo');

#app {
  font-family: 'Arimo', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}

a {
  text-decoration: none;
}

.navigation {
  margin-left: -50px;
}

.navigation li {
  padding: 1em;
}

ul {
  list-style: none;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active для <2.1.8 */ {
  opacity: 0
}

</style>
