<template>
  <Layout>
    <div class="index">
      <Banner />
      <Bio />
      <CurriculumVitae />
      <Social />
    </div>
  </Layout>
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
