<template>
    <ul>
        <li v-for="item in items" :key="item">
            {{ item.message }}
        </li>
    </ul>  
</template>

<script>
export default {
  name: "TodoList",
  props: {
    item: [
        { message: "todo list" }
    ]
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
