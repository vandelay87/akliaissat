<template>
  <div>
    <Banner />
    <CurriculumVitae />
    <Social />
  </div>
</template>

<script>
  import Banner from '../components/Banner'
  import CurriculumVitae from '../components/CurriculumVitae'
  import Social from '../components/Social'

  export default {
    name: 'Home',
    components: {
      Banner,
      CurriculumVitae,
      Social,
    },
  }
</script>
