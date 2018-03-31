<template>
  <md-list>
    <!-- TODO - change to an actual KEY when i connect to the DB -->
    <div v-for="item in todos" :key="item.id" >
      <TodoItem
        :todoItem=item
      ></TodoItem>
    </div>
  </md-list>
</template>


<script>
import TodoItem from "@/components/TodoItem.vue";
import EventBus from "@/services/EventBus"
export default {
  name: "ListOfTodos",
  props: {

  },
  components: {
    TodoItem
  },
  data () {
    return {
      todos: [{
        title: 'Have a poop',
        id: '123',
        complete: false
      },{
        title: 'Learn Vue JS',
        id: '132',
        complete: false
      },{
        title: 'Love DevOps',
        id: '321',
        complete: false
      }]
    }
  },
  created () {
    const self = this
    EventBus.$on('NEWTODOADDED', function (todo) {
      console.info('INFO - NEWTODOADDED received ', todo)
      self.todos.push(todo);
    });
  },
  methods: {
    updateTodoList(todo) {
      this.todos.push(todo);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
