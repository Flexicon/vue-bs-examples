<template>
  <div id="app">
    <h1>Some VueBootstrap examples</h1>
    <hr />

    <nav-example></nav-example>
  </div>
</template>

<script>
import NavExample from './components/NavExample.vue'

export default {
  name: 'app',
  components: {
    NavExample,
  },
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
