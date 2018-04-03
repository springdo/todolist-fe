import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: true,
    todos: [
      {
        title: "Have a poop",
        id: "123",
        complete: true,
        important: false
      }
    ],
    newTodo: ""
  },
  getters: {
    newTodo: state => state.newTodo,
    todos: state => state.todos
  },
  mutations: mutations,
  actions: actions
});
