<template>
  <figure :class="[align, {banner: isBanner}]" class="figure" :style="getDimensions">
    <g-image :src="path" class="image" :alt="alt" />
    <figcaption v-if="caption" class="caption">{{ caption }}</figcaption>
  </figure>
</template>

<script>
export default {
  name: "Picture",
  props: {
    path: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    caption: String,
    align: {
      validator: function(value) {
        return ["left", "right", "centre"].indexOf(value) !== -1;
      },
      type: String
    },
    width: String,
    height: String,
    isBanner: Boolean
  },
  computed: {
    getDimensions: function() {
      return {
        maxWidth: this.width ? this.width : "none",
        height: this.height ? this.height : "none"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/breakpoints.scss";
@import "../../assets/colours.scss";

.figure {
  margin: 2em auto;

  @include breakpoint(tablet) {
    margin: auto;

    &.left {
      float: left;
      padding: 0 1em 1em 0;
    }

    &.right {
      float: right;
      padding: 0 0 1em 1em;
    }

    &.centre {
      .image {
        margin: auto;
        display: block;
      }
    }
  }

  .image {
    vertical-align: middle;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .caption {
    font-size: 0.875em;
    line-height: 1.5;
    background: $blue;
    color: $white;
    padding: 1em;
  }

  &.banner {
    margin: auto;

    .image {
      object-fit: cover;
    }
  }
}
</style>
