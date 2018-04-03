<template>
  <div>
    <md-list-item
      @click="markDone"
      >
      <!-- TODO find a nice way of not calling markdone when clicking flag on card rather than calling "markDone" twice -->
      
      <!-- Material design checkbox not displaying, EDIT: Still can't figure out why it's not displaying -->
      <!-- <md-checkbox :v-model="isActive">x</md-checkbox> -->
      <!-- <input type="checkbox" v-model="todoItem.complete"/> -->
      <checkbox v-model="todoItem.complete"/> 

      <span class="md-list-item-text" :class="{'strike-through': todoItem.complete}">{{ todoItem.title }}</span>
      <!-- find a nice way to utilise svg fill property without doing it inline -->
      <md-button 
        @click="markImportant"
        >
        <svg :class="{'red-flag': todoItem.important}" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" @click="markDone">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/>
        </svg>
      </md-button>
    </md-list-item>
  </div>
</template>
<script>

import Vue from "vue";
import {Checkbox, Radio} from 'vue-checkbox-radio';
Vue.component('checkbox', Checkbox);
Vue.component('radio', Radio);

export default {
  name: "TodoItem",
  props: {
    // type any object ;)
    todoItem: {}
  },
  data() {
    return {
      // isActive: false,
      // isImportant: false
    };
  },
  methods: {
    markDone() {
      // Delete me below even if it works
      this.todoItem.complete = !this.todoItem.complete;
      console.info("INFO - ", this.todoItem, this.todoItem.complete);
    },
    markImportant() {
      // set to greyed out / true false
      this.todoItem.important = !this.todoItem.important;
      console.info("INFO - ", this.todoItem, this.todoItem.important);
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
  border: 1px solid rgba(#000, 0.12);
  vertical-align: top;
}

.md-list-item-text {
  padding-left: 0.5em;
}

.strike-through {
  text-decoration: line-through;
  font-style: italic;
}

.red-flag {
  fill: #cc0000;
}
</style>
