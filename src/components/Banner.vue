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
  @import '../assets/colours.scss';
  @import '../assets/breakpoints.scss';

  .banner {
    background-color: $darkGray;
    color: $white;
    padding: 3em 1em;

    @include breakpoint(tablet) {
      padding: 3em;
    }

    @include breakpoint(tabletLarge) {
      padding: 4em;
    }

    @include breakpoint(desktop) {
      padding: 6em;
    }
  }
</style>
