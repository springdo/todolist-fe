export default {
  SET_LOADING(state, bool) {
    state.loading = bool;
  },
  SET_TODOS(state, todos) {
    state.todos = todos;
  },
  SET_NEW_TODO(state, todo) {
    state.newTodo = todo;
  },
  ADD_TODO(state, todo) {
    console.log('INFO - add todo', todo);
    state.todos.push(todo);
  },
  REMOVE_TODO(state, todo) {
    var todos = state.todos;
    todos.splice(todos.indexOf(todo), 1);
  },
  CLEAR_NEW_TODO(state) {
    state.newTodo = '';
    console.log('INFO - clearing new todo');
  },
  CLEAR_ALL_TODOS(state) {
    state.todos = [{ title: "", id: "0", complete: false, important: false }];
    console.log('INFO - clearing all todos');
  }
};
