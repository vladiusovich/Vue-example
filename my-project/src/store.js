import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    productsList: [],
    privateListEmpty: []
  },
  mutations: {
    addItem: function (state, item) {
      var prList = state.privateListEmpty;
      var privIndex = prList.indexOf(item);
      var privItem;

      if (privIndex < 0) {
        prList.push(item);
        privIndex = prList.indexOf(item);
        prList[privIndex].isAdd = true;
        return;
      } else {
        var count = parseInt(prList[privIndex].count);
        prList[privIndex].count = count + 1;
        return;
      };
    },
    deleteItem: function (state, item) {
      var prList = state.privateListEmpty;
      var index = prList.indexOf(item);
      prList.splice(index,1);
      item.isAdd = false;
      item.count = 1;
    },
    clearBasket: function (state) {
      var productsList = state.productsList.filter(function (item) {
        return item.isAdd;
      });
      for (var item of productsList) {
        item.isAdd = !item.isAdd;
        // item.count = 1;
      };
      state.privateListEmpty =  [];
    },
    resetCount: function (state) {
      var prList = state.productsList.filter(function (item) {
        return item.count != 1;
      });
      for (var item of prList) {
        item.count = 1;
      };

    }
  }
});
