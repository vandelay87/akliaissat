<template>
  <div class="home">
    <Banner />
    <section class="block">
      <Bio />
    </section>
    <CurriculumVitae />
    <Social />
  </div>
</template>

<script>
  import Banner from '../components/Banner'
  import Bio from '../components/Bio'
  import CurriculumVitae from '../components/CurriculumVitae'
  import Social from '../components/Social'

  export default {
    name: 'Home',
    components: {
      Banner,
      Bio,
      CurriculumVitae,
      Social,
    },
  }
</script>

<style lang="scss" scoped>
  @import '../assets/global.scss';

  .home {
    .block {
      @extend .wrapperPadding;
    }
  }
</style>
