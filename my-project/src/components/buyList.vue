<template>
  <div class="wrap">
      <div class="products">
        <div class="products_list__search">
          <label>Поиск: </label><input type="text" v-model="searchQuery">
        </div>
              <transition-group tag="ul" name="list-complete" class="products_list" v-if="productsFilter.length > 0">
                <li class="products_item" v-for="item in productsFilter" :key="item"  v-bind:class="{ isAdd: item.isAdd }">
                      <div class="products_item__heading">
                        <div class="wrap-img"><img
                          v-bind:src=item.imgSrc
                          alt=""></div>
                          <div class="wrap_title">
                            <span class="products_item__name">{{item.name}}</span>
                            <span class="products_item__cost">{{item.cost + " бел.р"}}</span>
                            <span class="products_item__available">{{item.availabile}}</span>
                          </div>
                      </div>

                   <div class="products_item__describe">
                     <p class="product_text">{{item.describe}}</p>
                   </div>
                    <button type="submit" class="add-to-cart" v-on:click="addToBuyList(item)">
                      <span v-bind:class="{ 'add-to-cart--hiddesn': item.isAdd }" class="add-to-cart__img"><img src="./../assets/shopping_cart.png" alt=""></span>
                      <!--<span v-bind:class="{ 'add-to-cart__added&#45;&#45;show': item.isAdd }" class="add-to-cart__added">Добавлено</span>-->
                    </button>
                  </li>
            </transition-group>
          </div>
      </div>
  </div>

  </body>
</template>

<script>

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
      search: "",
      isRRR: true
    }
  },
  computed: {
    productsList () {
      return  this.$store.state.productsList;
    },
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
        addItem: function() {
          this.list.push({ name: this.header });
        },
        deleteItem: function(item) {
          this.list.splice(this.list.indexOf(item),1);
        },
        saveEdit: function(value) {
          console.log(value);
        },
        addToBuyList: function(item) {
          var prList = this.$store.state.privateListEmpty;
          var index = prList.indexOf(item);

          if (!item.isAdd) {
            prList.push(item);
            item.isAdd = true;
            return;
          } else if(item.isAdd) {
            var count = parseInt(prList[index].count);
            prList[index];
            prList[index].count = count + 1;
            console.log(prList[index].count);
              return;
            };
          },
        deleteFromByList: function(id) {
         var bl = this.buyList;
          bl.splice(this.list.indexOf(id),1);
          console.log(this.buyList);
        },
        see: function() {
          console.log(this.byProp);
        }
      },
  created: function () {
  },
  components: {
//    todoList
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
          /*flex-flow: wrap; */

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
  }

  .products_list__search input {
    padding: .5em 1em;
  }

  .products_item {
  display: inline-block;
  float: left;
  position: relative;
  width: 20em;
  height: 20em;
  padding: 1.5em;
  margin: .5em;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  /*border: 1px solid rgba(0, 0, 0, 0.09);*/
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  -webkit-transition: .2s ease;
  transition: .2s ease;
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
  font-size: .7rem;
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
  box-shadow: inset 2px 3px 14px 2px rgba(34, 34, 34, 0.1) !important;
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
  transition: .2s ease;
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

.add-to-cart__added {
  display: none;
  position: absolute;
  bottom: .5em;
  right: 1em;
  color: #3973fb;
  transition: .2s ease;
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
