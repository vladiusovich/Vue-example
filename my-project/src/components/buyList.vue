<template>
  <div class="wrap">
      <div class="products">
        <div class="products_list__search">
          <input type="text" v-model="searchQuery" placeholder="Введите название товара">
        </div>
              <transition-group tag="ul" name="list-complete" class="products_list" v-if="productsFilter.length > 0">
                <li class="products_item" v-for="item in productsFilter" :key="item"  v-bind:class="{ isAdd: item.isAdd }">
                      <div class="products_item__heading">
                        <div class="wrap-img"><img v-bind:src=item.imgSrc  alt=""></div>
                          <div class="wrap_title">
                            <span class="products_item__name"><router-link :to="{ name: 'ProductPage', params: { productName: item.name, product: item }}">{{item.name}}</router-link></span>
                            <span class="products_item__cost">{{item.cost + " бел.р"}}</span>
                            <span class="products_item__available">{{item.availabile}}</span>
                          </div>
                      </div>

                   <div class="products_item__describe">
                     <p class="product_text">{{item.describe}}</p>
                   </div>
                    <button type="submit" class="add-to-cart" v-on:click="addToBuyList(item,$event)" >
                      <span v-bind:class="{ 'add-to-cart--hiddesn': item.isAdd }" class="add-to-cart__img"><img src="./../assets/shopping_cart.png" alt=""></span>
                      <span class="add-to-cart__add-more">+1</span>
                    </button>
                  <div  v-bind:class="{ isAdded: item.isAdd }" class="add-to-cart__added"><span><router-link to="/privateList">В корзине</router-link></span></div>
                  </li>
            </transition-group>
          </div>
      </div>
  </div>

  </body>
</template>

<script>
  import Vue from 'vue';
  import VueRouter from 'vue-router';
  Vue.use(VueRouter);

export default {
  t: false,
  name: 'buyList',
  data: function() {
    return {
      productListLocal: this.$store.state.productsList,
      searchQuery: '',
      isVisible: true,
      isError: false,
      hoverText: "Это вы",
      byProp: 'name',
      searchQuery: '',
      search: ""
    }
  },
  computed: {
    productsFilter: function() {
      var self = this;
      return  this.$store.state.productsList.filter(function(item) {
        return item['name'].indexOf(self.searchQuery) !== -1;
      });
      },
    searchByName: function() {
      var self = this;
      return self.list.filter(function(item) {
        return item[self.byProp].indexOf(self.searchQuery) !== -1;
      })
    }

  },
  methods: {
      //Сделано по тупому. Нельзя так. Найди нормальный способ
        addToBuyList: function(item, event) {
          var t = event.currentTarget.lastChild;
          t.classList.add("add-to-cart__add-more--move");
          setTimeout(function () {
            t.classList.remove("add-to-cart__add-more--move");
          },300);

          this.$store.commit('addItem', item);

//          var prList = this.$store.state.privateListEmpty;
//          var privIndex = prList.indexOf(item);
//          var privItem;
//
//          if (privIndex < 0) {
//            prList.push(item);
//            privIndex = prList.indexOf(item);
//            prList[privIndex].isAdd = true;
//            return;
//          } else {
//            var count = parseInt(prList[privIndex].count);
//            prList[privIndex];
//            prList[privIndex].count = count + 1;
//              return;
//            };
          },
        deleteFromByList: function(id) {
         var bl = this.buyList;
          bl.splice(this.list.indexOf(id),1);
          console.log(this.buyList);
        }
      },
  created: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import url('https://fonts.googleapis.com/css?family=Arimo');

body {
  margin: 0;
  background: white;

  /*font-family: "Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;*/
  font-family: 'Arimo', sans-serif;
  }

ul {
  padding: 0;
  list-style: none; }

.products {
}

.wrap {
  width: 80%;
  margin: 20px auto;
}

.products_list {
  margin: 0 auto;
  text-align: center;
  /*display: -webkit-box;*/
  /*display: -webkit-flex;*/
  /*display: -ms-flexbox;*/
  /*display: flex;*/
  /*-webkit-box-orient: horizontal;*/
  /*-webkit-box-direction: normal;*/
  /*-webkit-flex-direction: row;*/
      /*-ms-flex-direction: row;*/
          /*flex-direction: row;*/
  /*-webkit-justify-content: space-around;*/
      /*-ms-flex-pack: distribute;*/
          /*justify-content: space-around;*/
  /*-webkit-flex-flow: wrap;*/
      /*-ms-flex-flow: wrap;*/
          /*flex-flow: wrap;*/



  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-align: stretch;
  /* -webkit-align-items: stretch; */
  -ms-flex-align: stretch;
  align-items: stretch;
}


.products_item {
    position: relative;
    flex: 1 1 350px;
    height: 350px;
    margin: 2% 2% 0 0;
    overflow: hidden;
    padding: 1.5em;
  /*!*border: 1px solid rgba(0, 0, 0, 0.09);*!*/
    -webkit-box-sizing: border-box;
          box-sizing: border-box;
    -webkit-transition: .2s ease;
    transition: .2s ease;
}


  .products_list::before,.products_list::after {
    display: block;
  }
  .products_list::after {
    content: "";
    display: block;
    clear: both;
  }

  .products_list__search {
    padding: 1em 0;
    width: 50%;
  }

  .products_list__search input {
    width: 100%;
  }

  .products_list__search input {
    padding: .8em 1em;
    font-size: 1rem;
  }

  .products_item:hover, .products_item .isAdd:hover {
  box-shadow: inset 0 0 0px 1px rgba(68, 68, 68, 0.2);
}

.products_item__heading {
  width: 100%;
}

.products_item__heading::after {
  content: "";
  display: block;
  clear: both;
}


  .products_item__name a {
    color: black;
  }

  .products_item__name a:hover {
    text-decoration: underline;
  }




.products_item__describe {
  width: 100%;
}

.product_text {
  line-height: 1.7; }

.wrap-img {
  display: block;
  float: left;
  width: 100px;
  margin-right: 1em;
}
.wrap-img img {
  width: 100%;
   object-fit: contain;
}

.wrap_title {
  display: block;
}

.wrap_title span {
  display: block;
  line-height: 2em;
  text-align: left;
}

.products_item__name {
  font-size: 1rem;
}

.products_item__cost {
  font-size: 1rem;
}

.products_item__available {
  font-size: .7rem;
}

.product_text {
  text-align: left;
  font-size: .9rem;
}
.isAdd {
  /*background: rgba(244, 244, 244, 0.52);*/
  box-shadow: inset 0px -7px 0px 0px rgba(160, 160, 160, 0.29) !important;
}

.logo {
  float: left;
  width: 50px;
  margin-left: 1em;
}

.logo img {
  width: 100%;
  object-fit: contain;
}

.header {
     display: block;
     margin: 0 auto;
     width: 80%;
     top: 0;
     font-size: 1.1rem;
     background: #fff;
     color: rgba(0,0,0,.44);
     box-shadow: 0px 0px 3px 1px rgba(0,0,0,.15);
     letter-spacing: 1px;
     font-weight: 100;
     box-sizing: border-box;
    z-index: 10;
}


.navigation {
     margin: 0;
}

.navigation li {
  display: inline-block;
}

.navigation li a {
  color: rgba(173, 173, 173, 0.98);
    transition: .2s ease;

}

.navigation li a:hover {
  color: rgba(50, 50, 50, 0.78);
}


  li {
    transition: all .5s ease;
  }

  .active {
    box-shadow: inset 0 -3px 0px 0px rgba(0, 0, 0, 0.31);
  }

  .show {
    display: block !important;
  }



.add-to-cart {
  position: absolute;
  right: 1em;
  bottom: 1em;
  width: 50px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;

  transition: .2s ease;
  }

  .add-to-cart:hover {
    transform: scale(1.1);
  }

.add-to-cart:focus {
    outline: none;
}
.add-to-cart--hidden {
  display: none;
}
  .add-to-cart__img >img {
    width: 100%;
  }

.add-to-cart__add-more {
  position: absolute;
  top: 0;
  padding: .5em;
  letter-spacing: 1px;
  transform: translate(-50%,0%);
  color: #000000;
  transition: .2s ease;
  color: #ffffff;
  background: rgba(244, 94, 37, 0.25);
  opacity: 0;
  z-index: 1;
}

.add-to-cart__add-more.add-to-cart__add-more--move {
  animation: move .3s ease;
}

@keyframes move {
  0% {
    transform: translate(-50%,0%);
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(-50%,-150%);
    opacity: 0;
  }
}

.add-to-cart__added {
  position: absolute;
  bottom: 0;
  right: 50%;

  transform: translate(50%,100%);
  transition: .2s ease;
  color: #ffffff;
  background: rgba(244, 94, 37, 0.65);
}

  .add-to-cart__added a {
    display: inline-block;
    color: #ffffff;
    padding: .5em .8em;
    letter-spacing: 1px;
  }


  .add-to-cart__added.isAdded {
    transform: translate(50%,-50%);
  }

  .add-to-cart__added.isAdded:hover {
    background: rgba(244, 94, 37, 0.82);
    /*text-decoration: underline;*/

  }


  .add-to-cart__added--show {
  display: block;
}

  .list-complete-item {
    transition: all .2s;
    margin-top: 10px;
  }
  .list-complete-enter, .list-complete-leave-to
    /* .list-complete-leave-active для <2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
  .list-complete-leave-active {
    position: absolute;
  }


</style>
