import Vue from 'vue'
import Router from 'vue-router'
import PrivateList from '@/components/PrivateList'
import BuyList from '@/components/BuyList'
import ProductPage from '@/components/ProductPage'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/privateList',
      name: 'PrivateList',
      component: PrivateList
    }, {
      path: '/buyList',
      name: 'BuyList',
      component: BuyList
    }, {
      path: '/productPage:productName',
      name: 'ProductPage',
      component: ProductPage
    }
  ]
})

