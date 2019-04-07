<template>
  <article class="banner">
    <Heading title="akliaissat" subtitle="I make websites."/>
  </article>
</template>

<script>
import Heading from "./generic/Heading";

export default {
  name: "Banner",
  components: {
    Heading
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/breakpoints.scss";
@import "../assets/colours.scss";
@import "../assets/dimensions.scss";

.banner {
  background-color: $darkGray;
  color: $white;
  padding: 3em 1em;
  box-sizing: border-box;
  min-height: $blockHeight;

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
