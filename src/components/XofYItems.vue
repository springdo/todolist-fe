<template>
    <div>
        <div class="xofyDone">
            <span>{{sumDoneTodoItems(todos)}} out of {{this.todos.length}} done. </span>
            <button v-on:click="clearDoneTodos()">CLEAR DONE</button>
            <button v-on:click="clearTodos()">CLEAR ALL</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "XofYItems",
  computed: {
    ...mapGetters(["todos"])
  },
  created() {
    this.$store.dispatch("loadTodos");
  },
  methods: {
    clearDoneTodos() {
      this.$store.dispatch("clearTodos");
    },
    clearTodos() {
      // NOTE - true = all todos
      this.$store.dispatch("clearTodos", true);
    },
    sumDoneTodoItems(todos) {
      return todos.reduce(
        (result, tdItem) => (tdItem.completed ? result + 1 : result),
        0
      );
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
