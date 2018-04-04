export default {
  SET_LOADING(state, bool) {
    state.loading = bool;
  },
  SET_TODOS(state, todos) {
    state.todos = todos;
  },
  SET_NEW_TODO(state, todo) {
    // debugger
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
  CLEAR_ALL_DONE_TODOS(state) {
    state.todos = state.todos.filter(obj => obj.complete === false);
  },
  CLEAR_ALL_TODOS(state) {
    state.todos = [
      // { title: "", id: "0", complete: false, important: false }
    ];
    console.log('INFO - clearing all todos');
  },
  UPDATE_TODO(state, updatedTodos) {
    debugger
    // state.todos.map((obj => ((obj.id !== todo.id )|| todo)));
    // const foundIndex = state.todos.findIndex(obj => (obj.id === todo.id ));
    // state.todos[foundIndex] = todo;
    state.todos = updatedTodos;
    // don't do this, maybe google instead


    console.log('INFO - update a todo');
    // state.todos.find(eachTodo => eachTodo.id === todo.id)
    // arr1.map(obj => arr2.find(o => o.id === obj.id) || obj);


    // take a current todo, change one of its parameters, update todo.
    // state.todos.find(todo);
      // myArray.find(x => x.id === '45')
    // set state.todos.oldTodo = newTodo
    
  }
};
