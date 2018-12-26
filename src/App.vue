<template>
  <div id="app">
    <div>
      <Banner />
      <CurriculumVitae />
      <Social />
    </div>
  </div>
</template>

<script>
  import Banner from './components/Banner'
  import CurriculumVitae from './components/CurriculumVitae'
  import Social from './components/Social'

  export default {
    name: 'App',
    components: {
      Banner,
      CurriculumVitae,
      Social,
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  body {
    margin: 0;

    #app {
    font-family: 'Open Sans', sans-serif;
    }
  }
</style>
