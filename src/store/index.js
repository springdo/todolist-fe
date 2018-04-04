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
        title: "Have a sandwich",
        id: "123",
        complete: true,
        important: true
      },
      {
        title: "Learn VueJS",
        id: "1234",
        complete: true,
        important: false
      },
      {
        title: "EnableEnablement",
        id: "1235",
        complete: false,
        important: true
      },
      {
        title: "Have a poop",
        id: "1236",
        complete: false,
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
