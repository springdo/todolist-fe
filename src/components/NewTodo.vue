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
import EventBus from "@/services/EventBus"

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
          EventBus.$emit('NEWTODOADDED', {
              completed: false, 
              msg: this.newTodo,
              id: Math.floor(1 + (9999 - 1) * Math.random())
              })
          this.newTodo = ''
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
