<template>
  <figure :class="align" class="figure" :style="getDimensions">
    <img :src="path" class="image" :alt="alt" />
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
        return ["left", "right", "center"].indexOf(value) !== -1;
      },
      type: String
    },
    width: String,
    height: String
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

    &.center {
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
    background: $mdc-theme-primary;
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
