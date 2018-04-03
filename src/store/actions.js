import axios from "axios";
import config from "@/config";

export default {
  loadTodos({ commit }) {
    axios
      .get(config.todoEndpoint)
      .then(r => r.data)
      .then(todos => {
        commit("SET_TODOS", todos);
        commit("SET_LOADING", false);
      });
  },
  addTodo({ commit, state }) {
    if (!state.newTodo) {
      // do not add empty todos
      return;
    }
    const todo = {
      title: state.newTodo,
      completed: false,
      important: false
    };
    axios.post(config.todoEndpoint, todo).then(mongoTodo => {
      // debugger
      commit("ADD_TODO", mongoTodo.data);
    });
  },
  setNewTodo ({ commit }, todo) {
    commit('SET_NEW_TODO', todo)
  },
  clearNewTodo({ commit }) {
    commit("CLEAR_NEW_TODO");
  },
  clearAllTodos({ commit }) {
    commit("CLEAR_ALL_TODOS")
  }
};
