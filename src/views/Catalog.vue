<template>
  <div class="home">
    <h2>Playground for messing about with components</h2>
    <NewTodo placeholderMsg="Add a new todo" @NEWTODOADDED="newTodoAdded"/>
    <TodoItem todoItem="Have a beers"/>
    <ListOfTodos todos="this.todos"/>

    <button @click=newTodoAdded>add todo</button>
    <button>getTodos</button>  
    <code>{{ allTodos }}</code>
  </div>

</template>

<script>
// @ is an alias to /src
import NewTodo from "@/components/NewTodo.vue";
import TodoItem from "@/components/TodoItem.vue";
import ListOfTodos from "@/components/ListOfTodos.vue";

import EventBus from "@/services/EventBus";

export default {
  name: "Catalog",
  components: {
    NewTodo,
    TodoItem,
    ListOfTodos
  },
    // load todos on start
  created () {
    this.$store.dispatch('loadTodos')
  },
    // be able to get the data
  computed: {
    allTodos () {
      return this.$store.getters.todos
    },
  },
  methods: {
    newTodoAdded (e) {
      this.$store.dispatch('setNewTodo','some random strings or whatever')
      this.$store.dispatch('addTodo')
      this.$store.dispatch('clearNewTodo')
    },
  }
};
</script>
