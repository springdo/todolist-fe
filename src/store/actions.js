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
    debugger
    const todo = {
      title: state.newTodo,
      complete: false,
      important: false,
      id: Math.floor(1 + (9999 - 1) * Math.random())
    };
    axios.post(config.todoEndpoint, todo).then(mongoTodo => {
      commit("ADD_TODO", mongoTodo.data);
    });
  },
  setNewTodo ({ commit }, todo) {
    // debugger
    commit('SET_NEW_TODO', todo)
  },
  updateTodo({ commit,state }, todo) {
    // const todo = state.newTodo
    debugger
    const foundIndex = state.todos.findIndex(obj => obj.id === todo.id);
    state.todos[foundIndex] = todo;
    const newUpdatedArray = state.todos
    commit("UPDATE_TODO", newUpdatedArray)
  },
  clearNewTodo({ commit }) {
    commit("CLEAR_NEW_TODO");
  },
  clearAllTodos({ commit }) {
    commit("CLEAR_ALL_TODOS")
  },
  clearAllDoneTodos({ commit }) {
    commit("CLEAR_ALL_DONE_TODOS")
  },
};
