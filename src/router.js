import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Admin from "./views/Admin.vue";
import Men from "./sections/Men.vue";
import Women from "./sections/Women.vue";
import Kids from "./sections/Kids.vue";
import LogIn from "./user/LogIn.vue";
import ManDetails from "./shop/ManDetails.vue";

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
      path: "/kids",
      name: "kids",
      component: Kids
    },
    {
      path: "/login",
      name: "login",
      component: LogIn
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
