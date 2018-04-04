export default {
  SET_LOADING(state, bool) {
    console.log('INFO - Setting loading wheel');
    state.loading = bool;
  },
  SET_TODOS(state, todos) {
    console.log('INFO - Setting todos');
    state.todos = todos;
  },
  SET_NEW_TODO(state, todo) {
    console.log('INFO - Setting new todo');
    state.newTodo = todo;
  },
  ADD_TODO(state, todo) {
    console.log('INFO - Add todo', todo);
    state.todos.push(todo);
  },
  REMOVE_TODO(state, todo) {
    console.log('INFO - Removing todo');
    var todos = state.todos;
    todos.splice(todos.indexOf(todo), 1);
  },
  CLEAR_NEW_TODO(state) {
    console.log('INFO - Clearing new todo');
    state.newTodo = '';
  },
  CLEAR_ALL_DONE_TODOS(state) {
    console.log('INFO - Clearing all done todos');
    state.todos = state.todos.filter(obj => obj.completed === false);
  },
  CLEAR_ALL_TODOS(state) {
    console.log('INFO - Clearing all todos');
    state.todos = [];
  },
  UPDATE_TODO(state, updatedTodos) {
    console.log('INFO - Update a todo');
    // state.todos.map((obj => ((obj.id !== todo.id )|| todo)));
    // const foundIndex = state.todos.findIndex(obj => (obj.id === todo.id ));
    // state.todos[foundIndex] = todo;
    state.todos = updatedTodos;
    // don't do this, maybe google instead


    // state.todos.find(eachTodo => eachTodo.id === todo.id)
    // arr1.map(obj => arr2.find(o => o.id === obj.id) || obj);


    // take a current todo, change one of its parameters, update todo.
    // state.todos.find(todo);
      // myArray.find(x => x.id === '45')
    // set state.todos.oldTodo = newTodo
    
  }
};
