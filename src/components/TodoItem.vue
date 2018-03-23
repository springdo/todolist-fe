<template>
  <div>
    <md-list-item 
      @click="markDone"
    >
      <md-checkbox :value="isActive" />
      <span class="md-list-item-text" :class="{'strike-through': isActive}">{{ todoItem.msg }}</span>
    </md-list-item>
  </div>
</template>
<script>
export default {
  name: "TodoItem",
  props: {
    // type any object ;)
    todoItem: {}
  },
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    markDone () {
      // set to greyed out / true false
      this.isActive = !this.isActive;
      console.info('INFO - ', this.todoItem , this.isActive)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.md-list {
    width: 320px;
    max-width: 100%;
    height: 400px;
    display: inline-block;
    overflow: auto;
    border: 1px solid rgba(#000, .12);
    vertical-align: top;
}

.strike-through {
  text-decoration: line-through;
}
</style>
