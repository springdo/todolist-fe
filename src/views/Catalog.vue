<template>
  <div class="home">
    <img src="../assets/logo.png">
    <NewTodo placeholderMsg="Add a new todo"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import NewTodo from "@/components/NewTodo.vue";

export default {
  name: "Catalog",
  components: {
    NewTodo
  }
};
</script>
