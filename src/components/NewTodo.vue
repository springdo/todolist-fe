<template>
    <md-field>
      <label>New ToDo</label>
      <md-input :placeholder="placeholderMsg"
                @keyup.enter="newTodoAdded"
                v-model="newTodo"
      ></md-input>
    </md-field>
  </template>
<script>
export default {
  name: "NewTodo",
  props: {
    placeholderMsg: String
  },
  data () {
    return {
      newTodo: ''
    }
  },
  methods: {
      newTodoAdded (e) {
          this.newTodo = e.target.value
          console.info('INFO - ', this.newTodo)
          this.$emit('NEW_TODO_ADDED', { message: this.newTodo })
          this.newTodo = ''
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
