<template>
  <div>
    <md-list-item       
      @click="markDone"
      >  
        <!-- Material design checkbox not working as not importing @angular/material anywhere -->
        <!-- <md-checkbox :v-model="isActive"/> -->
        <input type="checkbox" v-model="isActive" />

        <span class="md-list-item-text" :class="{'strike-through': isActive}">{{ todoItem.title }}</span>
        <md-button>
          <img src="@/assets/insert-photo.svg">
        </md-button>
      <!-- find a nice way to utilise svg fill property without doing it inline -->
      <md-button 
        @click="markImportant"
        >
        <svg :class="{'red-flag': isImportant}" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/>
        </svg>
      </md-button>
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
  data() {
    return {
      isActive: false,
      isImportant: false
    };
  },
  methods: {
    markDone() {
      // set to greyed out / true false
      this.isActive = !this.isActive;
      console.info("INFO - ", this.todoItem, this.isActive);
    },
    markImportant() {
      // set to greyed out / true false
      this.isImportant = !this.isImportant;
      console.info("INFO - ", this.todoItem, this.isImportant);
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

.strike-through {
  text-decoration: line-through;
  font-style: italic;
}

.red-flag {
  fill: #cc0000;
}
</style>
