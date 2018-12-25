<template>
  <article class="banner">
    <Heading title="akliaissat" subtitle="I make websites." />
  </article>
</template>

<script>
  import Heading from './generic/Heading'

  export default {
    name: 'Banner',
    components: {
      Heading
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/variables.scss';
  @import '../assets/breakpoints.scss';

  .banner {
    background: $darkGray;
    color: $white;
    padding: 3em 1em;

    @include breakpoint(tablet) {
      padding: 3em;
    }
  }
</style>
