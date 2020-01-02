import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Links_Component from "../components/ParentComps/Links_Component/Links.vue";
import BankHistory from "../components/ParentComps/Bank_History/BankHistory.vue";
import loggedin_screen from "../components/ParentComps/LoggedinScreen/LoggedinScreen.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/", 
    name: "home",
    component: Home //import name
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/links",
    name: "Links",
    component: Links_Component
  },
  {
    path: "/bank_history",
    name: "bank_history",
    component:BankHistory
  },
  {
    path: "/LoggedinScreen",
    name: "LoggedinScreen",
    component:loggedin_screen
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
