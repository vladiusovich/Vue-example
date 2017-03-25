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
//  var myObject = require('store');

export default {
  name: 'Name',
  data: function() {
    return {
      isVisible: true,
      isError: false,
      hoverText: "Это вы",
      byProp: 'name',
      searchQuery: '',
      search: "",
      isRRR: true,
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

      ],
      buyList: []
    }
  },
  computed: {
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
  -webkit-justify-content: space-between;
      -ms-flex-pack: distribute;
          justify-content: space-between;
  -webkit-flex-flow: wrap;
      -ms-flex-flow: wrap;
          flex-flow: wrap; }

.products_item {
  flex: 1 1 300px;
  /*width: 300px;*/
  /*height: 300px;*/
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

  ul {
    transition: all .5s ease;
  }

  li {
    transition: all .5s ease;

  }

  .active {
    box-shadow: inset 0 -3px 0px 0px rgba(0, 0, 0, 0.31);
  }



</style>
