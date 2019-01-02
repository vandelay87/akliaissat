<template>
  <footer class="footer">
    <section class="links">
      <Link text="privacy policy" link="#" />
    </section>
  </footer>
</template>

<script>
  import Link from './generic/Link'

  export default {
    name: 'Footer',
    components: {
      Link
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/variables.scss';

  .footer {
    background-color: $black;
    padding: 1em;
  }
</style>
