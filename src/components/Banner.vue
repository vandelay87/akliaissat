<template>
  <article class="banner">
    <Picture
      :path="image.image.file.url"
      :alt="image.alt"
      :height="setImageHeight"
      :isBanner="true"
    />
    <div class="heading">
      <Heading :title="title" :align="align" />
    </div>
  </article>
</template>

<script>
import Heading from "./generic/heading/Heading";
import Picture from "./generic/Picture";

export default {
  name: "Banner",
  components: {
    Heading,
    Picture
  },
  props: {
    image: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String
    },
    align: {
      type: String
    }
  },
  computed: {
    setImageHeight() {
      return this.image.height ? this.image.height + "px" : "none";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/breakpoints.scss";
@import "../assets/colours.scss";
@import "../assets/dimensions.scss";

.banner {
  color: $white;
  height: $blockHeight;
  position: relative;

  .heading {
    background-color: rgba(40, 40, 40, 0.5);
    padding: 3em 1em;
    margin: auto;
    box-sizing: border-box;
    max-width: 38em;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

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
}
</style>
