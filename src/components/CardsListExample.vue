<template>
  <div class="cards-list-example">
    <h1>Cards list</h1>

    <b-card v-for="item in items" :key="item.title" class="mt-3">
      <div class="card-side-title">{{ item.title }}</div>

      <b-card-text>{{ item.content }}</b-card-text>

      <b-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum, orci nec aliquam
        imperdiet, est orci dapibus lorem, in mattis lacus mauris et turpis.
      </b-card-text>

      <a href="#" class="card-link">Card link</a>
      <b-link href="#" class="card-link">Another link</b-link>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'CardsListExample',
  data() {
    return {
      items: [
        { title: 'Management', content: 'Additional content here' },
        { title: 'Statistics', content: 'Some card stuff' },
        { title: 'Cool thing', content: 'And even more card stuff' },
      ],
    }
  },
}
</script>

<style scoped>
.card {
  position: relative;
  text-align: left;
  padding-left: 70px;
}

.card-side-title {
  height: 30px;
  width: 150px;
  position: absolute;
  left: -30px;
  top: calc(50% - 15px);
  font-weight: bold;
  font-size: 20px;
  transform: rotate(-90deg);
  text-align: center;
}
</style>
