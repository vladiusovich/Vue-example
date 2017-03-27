<template>
  <div class="hello">
    <h2>Корзина</h2>
    <h2 v-bind:title="hoverText">{{userName}}</h2>
    <label>Поиск: </label><input type="text" v-model="searchQuery" @keyup="see">
    <select v-model="byProp">
      <option>name</option>
      <option>username</option>
      <option>email</option>
    </select>

    <ul>
      <li v-for="ar in array "> {{ar.name}}</li>
    </ul>
          <div id="table">
            <transition-group tag="table" name="list-complete" class="table" v-if="productsList.length > 0">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>User name</th>
                <th>Цена</th>
                <th>Количесво</th>
                <th>Удалить</th>
              </tr>
              <tr v-for="item in searchBy" v-bind:key="item" class="list-complete-item goods-table-row">
                <td class="">
                  <div class="goods-table-cell">
                    <div class="goods-table-cell__img">
                      <img v-bind:src=item.imgSrc >
                    </div>
                    <div class="goods-table-cell__wrap">
                      <span class="goods-table__name">{{item.name}}</span>
                      <p class="goods-table__describe">{{item.describe}}</p>
                      <p class="goods-table__availabile">{{item.availabile}}</p>
                    </div>

                  </div>
                </td>
                  <td class="goods-table__cell__amount">
                        <select name="" id=""> <option  v-for="n in 10">{{n}}</option></select>
                  </td>
                  <td class="goods-table__cell__price">
                      <div class="goods-table-cell__line_price">{{item.cost}} </div>


                  </td>
                  <td class="goods-table__cell goods-table__cell_fourth">
                    <div class="goods-table-cell">
                      <div class="goods-table-cell__line goods-table-cell__line_accent goods-table-cell__line_price">
                      </div>
                    </div>
                  </td>
                <td class="deleteTd" v-on:click="deleteItem(item)"><span class="delete" >X</span></td>
              </tr>
            </transition-group>
            <p v-else>Список пуст</p>

            <div class="personal-data">
              <span>Ваше имя</span><input type="text" v-model="userName"><br>
              <span>Ваш номер телефона</span><input type="text"><br>
              <span>Электронный адрес</span><input type="text"><br>
              <span>Способ доставки</span><select name="" id="">
              <option value="1">Самовывоз</option>
              <option value="2">Курьером</option>
              <option value="3">Почта</option>
            </select><br>

              <p class="">Общая сумма заказа:</p>
              <p>{{getAllPrice}}</p>
              <button class="submit" v-on:click="makeDeal">Заказать</button>
            </div>

          </div>

    <div class="complete"  v-bind:class="{ show: isComplete }">
      <p>Спасибо а заказ!</p>
      <p>Ждите звонка от сотрудника магазина.</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Name',
  data: function() {
    return {
      isComplete: false,
      byProp: 'name',
      searchQuery: '',
      testAnaimte: '',
      userName: 'Владислав Усович',
      search: "",
      list: [],
      array: [
      ],
      isVisible: true,
      isError: false,
      hoverText: "Это вы",
      byProp: 'name',
      searchQuery: '',
      search: ""
    }
  },
  computed: {
    productsList () {
      return this.$store.state.productsList.filter(function (item) {
        return item.isAdd;
      });
    },
    FilterItem: function () {
      return this.list.slice(0, 10);
    },
    searchBy: function () {
      var self = this;
      var products = this.$store.state.productsList.filter(function (item) {
        return item.isAdd;
      });
      return products.filter(function (item) {
        return item[self.byProp].indexOf(self.searchQuery) !== -1
      })
    },
    getAllPrice: function () {
      var self = this;
      var products = this.$store.state.productsList.filter(function (item) {
        return item.isAdd;
      });
      var result = products.reduce(function (sum, item) {
        return sum + item.cost;
      }, 0);
      return result;
    }
  },
  methods: {
        addItem: function() {
          this.list.push({ name: this.header });
        },
        deleteItem: function (item) {
          var cartList = this.$store.state.productsList;
          var index = cartList.indexOf(item);
          cartList[index].isAdd = false;
        },
        saveEdit: function(value) {
          console.log(value);
        },
        see: function() {
          console.log(this.byProp);
        },
        makeDeal: function () {
          this.isComplete = !this.isComplete;
          console.log(this.isComplete);
        }
      },
  created: function() {
//               this.list = this.$store.state.productsList;
              }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body {
}

.hello {
  width: 60%;
  margin: 80px auto;
  padding: 0 2em;
  border: 1px solid rgba(148, 148, 148, 0.21);
}
h1, h2 {
  font-weight: normal;
}

a {
  text-decoration: none;
}

input {
  padding: 0.5em 1em;
}

ul {
  width: 50%;
  margin: 2em auto;
  list-style-type: none;
  padding: 0;
  font-size: 1.3rem;
  line-height: 1.5rem;

}

li {
  display: block;
  margin: 0 10px;
  cursor: pointer;
}

a {
  color: #42b983;
}

#table {
  margin: 2em auto;
  border-collapse: collapse;
}

#table table {
  width: 100%;
}

.goods-table-row {
  height: 100px;
  border-top: 1px solid #360005;
}


.goods-table-cell__img {
  float: left;
  width: 40px;
  padding-left: 1em;
}

.goods-table__name {
  font-size: .9rem;
  font-weight: 600;
}

.goods-table-cell__img > img {
  width: 100%;
  height: auto;
}

.goods-table-cell__wrap {
 padding-left: 80px;
  font-size: .8rem;
}

.goods-table__availabile {
  color: rgba(0, 0, 0, 0.48);
}
.goods-table__cell__price, .goods-table__cell__amount {
  text-align: center;
}

.goods-table-cell__line_price {
  font-size: .75rem;
}

.delete {
  display: block;
  background: transparent;
  border: none;
  font-size: 1rem;
  padding: .5em;
  transition: .2s ease;
}

.delete:hover {
  color: rgba(232, 100, 110, 0.57);
}

.deleteTd {
    cursor: pointer;
      transition: .3s ease;

}

.deleteTd:hover {
  /*background: rgba(232, 100, 110, 0.57);*/
}

#table td {
  vertical-align: top;
}

#table td input {
  width: 85%;
  border-radius: 0;
       }

table tr {
}

table tr:nth-of-type(2n) {
  /*background: rgba(208, 209, 213, 0.26);*/
}

tr {
    transition: .2s ease;
}

table tr:hover {
  /*background: rgba(210, 232, 229, 0.47);*/
}

input {
  /*border: none;*/
  border: solid 1px rgba(168, 168, 168, 0.44);
  background: rgba(100, 100, 100, 0.02);
  font-size: 1rem;
  transition: .2s ease;
}

input:focus {
  border-color: rgb(162, 159, 159);
  outline: none;
  /*background: rgba(100, 100, 100, 0.06);*/
}


table input {
  border: none;
}



select {
  padding: .5em;
  border: none;
  background: rgba(212, 210, 210, 0.37);

}

button {
  border: solid 1px #a8a8a8;
  color: black;
  padding: .7em 1.2em;
  background: rgba(100, 100, 100, 0);
  cursor: pointer;
  transition: .2s ease;
}

button:hover {
  border-color: #747474;
  /*background: rgba(100, 100, 100, 0.34);*/
}

.error {
  background: #aaccaa;
}

.submit {
  margin-top: 2em;
}


.complete {
  position: absolute;
  display: none;
  top: 50%;
  left: 50%;
  padding: 2em;
  background: #fff;
  color: rgba(0, 0, 0, 0.77);
  box-shadow: 0 2px 2px 1px rgba(0,0,0,.15);
  font-weight: 600;
  z-index: 10;
  transform: transition(50%,50%);
}

.complete .show {
  display: block;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity .2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active для <2.1.8 */ {
  opacity: 0
}


.list-move,
.list-leave-active,
.list-enter-active, {
  transition: .2s cubic-bezier(.87,-.41,.19,1.44);
}
.list-enter,
.list-leave-active {
  transform: translate(0, 100%);
  opacity: 0;
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
