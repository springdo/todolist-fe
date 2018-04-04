<template>
  <div>
    <md-list>
      <!-- TODO - change to an actual KEY when i connect to the DB -->
      <div v-for="item in todos" :key="item.id" >
        <TodoItem
          :todoItem=item
        ></TodoItem>
      </div>
    </md-list>
    <XofYitems />
    <div class="xofyDone">
      <span>{{sumDoneTodoItems(todos)}} out of {{this.todos.length}} done. </span>
      <button v-on:click="clearDoneTodos()">CLEAR DONE</button>
      <button v-on:click="clearTodos()">CLEAR ALL</button>
    </div>
  </div>
</template>


<script>
import TodoItem from "@/components/TodoItem.vue";
import XofYitems from "@/components/XofYitems.vue";
import EventBus from "@/services/EventBus";
import { mapGetters } from "vuex";

export default {
  name: "ListOfTodos",
  props: {},
  components: {
    TodoItem,
    XofYitems
  },
  computed: {
    ...mapGetters(["todos"])
  },
  // data () {
  // return {
  //   todos: [{
  //     title: 'Have a poop',
  //     id: '123',
  //     complete: true
  //   },{
  //     title: 'Learn Vue JS',
  //     id: '132',
  //     complete: true
  //   },{
  //     title: 'Love DevOps',
  //     id: '321',
  //     complete: false
  //   }]
  // }
  // },
  created() {
    const self = this;
    // EventBus.$on("NEWTODOADDED", function(todo) {
    //   console.info("INFO - NEWTODOADDED received ", todo);
    //   self.todos.push(todo);
    // });
  },
  methods: {
    // updateTodoList(todo) {
    //   this.todos.push(todo);
    // },
    sumDoneTodoItems(todos) {
      return todos.reduce(
        (result, tdItem) => (tdItem.complete ? result + 1 : result),
        0
      );
    },
    clearDoneTodos() {
      this.$store.dispatch("clearAllDoneTodos");
    },
    clearTodos() {
      this.$store.dispatch("clearAllTodos");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.xofyDone {
  display: inline-block;
}
</style>
