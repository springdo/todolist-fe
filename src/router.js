import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Todo from "./views/Todo.vue";
import Catalog from "./views/Catalog.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/todo",
      name: "todo",
      component: Todo
    },
    {
      path: "/component-catalog",
      name: "catalog",
      component: Catalog
    }
  ]
});
