<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col>
          <h1>Some VueBootstrap examples</h1>
          <hr />
          <nav-example></nav-example>
          <cards-list-example class="pt-5"></cards-list-example>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavExample from './components/NavExample'
import CardsListExample from './components/CardsListExample'

export default {
  name: 'app',
  components: {
    NavExample,
    CardsListExample,
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
