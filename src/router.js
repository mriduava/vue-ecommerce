import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Admin from "./views/Admin.vue";
import Men from "./sections/Men.vue";
import Women from "./sections/Women.vue";
import Kids from "./sections/Kids.vue";
import LogIn from "./user/LogIn.vue";
import ManDetails from "./shop/ManDetails.vue";
import WomanDetails from "./shop/WomanDetails.vue";
import Cart from "./shop/Cart.vue";
import Checkout from "./shop/Checkout.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin
    },
    {
      path: "/men",
      name: "men",
      component: Men,
      // redirect: {path: "/men/dispproduct"},
      children: [
        // {
        //   path: "men/:menid",
        //   name: "dispproduct",
        //   component: DispProduct
        // }
      ]
    },
    {
      path: "/men/:manid",
      name: "mandetails",
      component: ManDetails
    },
    {
      path: "/women",
      name: "women",
      component: Women
    },
    {
      path: "/women/:womanid",
      name: "womandetails",
      component: WomanDetails
    },
    {
      path: "/kids",
      name: "kids",
      component: Kids
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart
    },
    {
      path: "/cart/checkout",
      name: "checkout",
      component: Checkout
    },
    {
      path: "/login",
      name: "login",
      component: LogIn
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
