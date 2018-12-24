<template>
  <div id="app">
    <Banner />
  </div>
</template>

<script>
  import Banner from './components/Banner'

  export default {
    name: 'App',
    components: {
      Banner
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  #app {
    font-family: 'Open Sans', sans-serif;
  }
</style>
