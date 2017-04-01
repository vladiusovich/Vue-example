<template>

  <div class="product">
    <div class="product__heading">
      <div class="product__wrap-img"><img v-bind:src=product.imgSrc  alt=""></div>
      <div class="product__wrap_title">
        <span class="product__name">{{product.name}}</span>
        <span class="product__cost">{{product.cost + " бел.р"}}</span>
        <button class="product__button" :class="{ 'product__button--isAdd': this.product.isAdd}" @click="addToBuyList(product, $event)">{{basketText}}

          <span class="add-to-cart__add-more">+1</span>
        </button>
        <span class="product__available">{{product.availabile}}</span>
        <p class="product_text">{{product.describe}}</p>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    data: function() {
      return {
        product: {},
        currency: " руб.",
        isComplete: false,
        searchQuery: '',
        testAnaimte: '',
        search: "",
        list: [],
        personalType: 1,
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
      getFirstName() {
        var arr = this.userName.split(' ');
        return arr[0];
      },
      getAdress: function() {
        if (this.personalType == 1) {
          return false;
        } else return true;
      },
      FilterItem: function () {
        return this.list.slice(0, 10);
      },
      searchBy: function () {
        var self = this;
        var products = this.$store.state.privateListEmpty.filter(function (item) {
          return item;
        });
        return products.filter(function (item) {
          return item[self.byProp].indexOf(self.searchQuery) !== -1
        })
      },
      getAllPrice: function () {
        var self = this;
        var products = this.$store.state.privateListEmpty.filter(function (item) {
          return item;
        });
        var result = products.reduce(function (sum, item) {
          return sum + parseInt(item.cost)*item.count;
        }, 0);
        this.number = result;
        return result;
      },
      basketText: function() {
          if (this.product.isAdd) {
              return "Добавлено";
          } else {
              return "Добавить в козину";
          }
      }
    },
    methods: {
      addToBuyList: function(item, event) {
          var t = event.currentTarget.lastChild;
          t.classList.add("add-to-cart__add-more--move");
          setTimeout(function () {
            t.classList.remove("add-to-cart__add-more--move");
          },300);


          this.$store.commit('addItem', item);
      },
      deleteItem: function (item) {
        this.$store.commit('deleteItem', item);
      },
      makeDeal: function () {
        this.isComplete = !this.isComplete;
        console.log(this.isComplete);
      }
    },
      created: function () {
        var productId = this.$route.params.product.id;
        this.product = this.$store.state.productsList.filter(function(item)   {
          return item.id === productId;
        })[0];
        console.log(this.product.isAdd);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  * {
    box-sizing: border-box;
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



  .product {
    width: 80%;
    margin: 80px auto;
  }

  .product__wrap-img {
    float: left;
    width: 200px;

  }

  .product__wrap-img img {
    width: 100%;
    height: auto;
  }

  .product__wrap_title {
    margin-left: 250px;
  }

  .product__wrap_title span, .product__button {
    display: block;
    margin-bottom: 15px;
  }

  .product__name  {
    font-size: 1.8rem;
    font-weight: bold;
  }

  .product__cost {
    font-size: 1.4rem;
    font-weight: bold;
  }

  .product__available {
    font-size: .8rem;
  }

  .product__button {
    position: relative;
  }

  .product__button--isAdd {
    border: transparent;
    background: rgba(244, 94, 37, 0.65);
    color: #ffffff;
  }

  input:focus {
    border-color: rgb(162, 159, 159);
    outline: none;
    /*background: rgba(100, 100, 100, 0.06);*/
  }


  select {
    padding: .5em;
    border: none;
    background: rgba(217, 208, 214, 0.1);

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
    top: 50vh;
    left: 50vw;
    padding: 2em;
    background: #fff;
    color: rgba(0, 0, 0, 0.77);
    box-shadow: 0 2px 2px 1px rgba(0,0,0,.15);
    font-weight: 600;
    z-index: 10;
    transform: translate(-50%,-50%);
  }

  .show, .complete .show {
    display: block !important;
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
