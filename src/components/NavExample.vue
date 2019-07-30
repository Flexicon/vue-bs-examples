<template>
  <div class="nav-example">
    <h1>Nav</h1>

    <div>
      <b-nav tabs>
        <b-nav-item to="/" active-class="active" exact>Home</b-nav-item>
        <b-nav-item to="foo" active-class="active">Foo</b-nav-item>
        <b-nav-item to="bar" active-class="active">Bar</b-nav-item>
        <b-nav-item to="baz" active-class="active">Baz</b-nav-item>
      </b-nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavExample',
}
</script>

<style scoped>
</style>
