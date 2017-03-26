<template>
  <div class="wrap">
      <div class="products">
          <div class="products-wrap">
              <ul class="products_list">
                  <li class="products_item" v-for="item in productsList" v-on:click="addToBuyList(item)"  v-bind:class="{ isAdd: item.isAdd }">
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
                  </li>
              </ul>
          </div>
      </div>
  </div>

  </body>
</template>

<script>

export default {
  name: 'buyList',
  data: function() {
    return {
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
      return this.$store.state.productsList;
    },
    FilterItem: function() {
      return this.list.slice(0,10);
    },
    searchByName: function() {
      var self = this;
      return self.list.filter(function(item) {
        return item[self.byProp].indexOf(self.searchQuery) !== -1
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
          if (item.isAdd == false) {
            item.isAdd = true;
          } else {
              item.isAdd = false;
          }
        },

        addToByList: function(id) {
          var bl = this.buyList;
          if (bl.indexOf(id) == -1) {
            bl.push(id);
          }
          console.log(this.buyList);
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
  max-width: 80%;
  margin: 80px auto;
}

.products_list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-justify-content: space-around;
      -ms-flex-pack: distribute;
          justify-content: space-around;
  -webkit-flex-flow: wrap;
      -ms-flex-flow: wrap;
          flex-flow: wrap; }

.products_item {
  width: 20em;
  height: 20em;
  margin-bottom: 0.5em;
  padding: 1.5em;
  margin-top: 1.5em;
  margin: 1em;
  background: #fbfbff;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.09);
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  cursor: pointer;
  -webkit-transition: .2s ease;
  transition: .2s ease;
}

.products_item:hover {
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
  background: #deeceb;
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
     position: absolute;
     display: block;
     margin: 0;
     width: 100%;
     top: 0;
     font-size: 1.1rem;
     background: #fff;
     color: rgba(0,0,0,.44);
     box-shadow: 0 2px 2px -2px rgba(0,0,0,.15);
     letter-spacing: 1px;
     font-weight: 100;
     box-sizing: border-box;
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


  .buy-list {
    position: fixed;
    display: block;
    top: 3px;
    right: 5px;
    cursor: pointer;
    background: rgba(207, 207, 207, 0.67);
  }

  .buy-list__icon {
    font-size: .8rem;
    padding: 1.4em;
    color: #303030;
  }

  .buy-list__wrap {
    position: absolute;
    display: none;
    top: 100%;
    right: 0;
  }

  .buy-list__list {
    width: 300px;
    padding: 0;

    background: white;
    box-shadow: 0 1px 4px 3px rgba(0, 0, 0, 0.04);
  }

  .buy-list__list--empty {
    display: block;
    padding: 1em;
    font-size: .9rem;
    background: white;
    box-shadow: 0 1px 4px 3px rgba(0, 0, 0, 0.04);
  }

  .buy-list__count {
    padding: .3em .6em;
    border-radius: 50%;
    background: rgb(252, 210, 18);
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
