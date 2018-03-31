<template>
  <div>
    <md-card>
      <md-card-header class="remove-padding">
        <Header/>
      </md-card-header>

      <md-card-content>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Todo",
  components: {
    Header,
  }
};
</script>

<style lang="scss" scoped>
  .remove-padding {
    padding: 0px
  }
  .md-card {
    width: 480px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
