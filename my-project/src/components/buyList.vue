<template>
  <div class="wrap">
      <div class="products">
          <div class="products-wrap">
              <ul class="products_list">
                  <li class="products_item" v-for="item in productsList" v-on:click="addToBuyList(item)"  v-bind:class="{ isAdd: item.isAdd }">
                      <div class="products_heading"></div>
                      <div class="wrap-img"><img
                              v-bind:src=item.imgSrc
                              alt=""></div>
                   <div class="wrap_title">
                      <span>{{item.name}}</span>
                      <span>{{item.cost + " бел.р"}}</span>
                      <span>{{item.availabile}}</span>
                   </div>
                   <p class="product_text">{{item.describe}}</p>
                  </li>
              </ul>
          </div>
      </div>
  </div>

  </body>
</template>

<script>
export default {
  name: 'Name',
  data () {
    return {
      byProp: 'name',
      searchQuery: '',
      search: "",
      isRRR: true,
      list: [],
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
      }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

body {
  margin: 0;
  background: white;
  font-family: "Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
  }

ul {
  list-style: none; }

.products {
  width: 100%;
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
  width: 30%;
  padding: 1.5em;
  margin-top: 2em;
  background: #fbfbff;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.09);
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  cursor: pointer;
  -webkit-transition: .2s ease;
  transition: .2s ease; }


.product_text {
  line-height: 1.7; }

.wrap-img {
    float: left;

  }
  .wrap-img img {
   height: 100px;
    object-fit: contain;
 }

.wrap_title > span {
  display: block;
  line-height: 2em;
}
button.product__cart {
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



</style>
