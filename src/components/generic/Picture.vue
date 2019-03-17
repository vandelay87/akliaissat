<template>
  <figure v-lazyload :class="align" class="figure" :style=style>
    <img :data-path=path :alt=alt class="image" />
    <figcaption v-if="caption" class="caption">{{ caption }}</figcaption>
  </figure>
</template>

<script>
  export default {
    name: 'Picture',
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
        validator: function (value) {
          return ['left', 'right'].indexOf(value) !== -1
        },
        type: String,
      },
      maxWidth: String,
    },
    computed: {
      style: function() {
        return {
          maxWidth: this.maxWidth ? this.maxWidth : 'none',
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/breakpoints.scss';
  @import '../../assets/colours.scss';

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
    }

    .image {
      width: 100%;
      vertical-align: middle;
    }

    .caption {
      font-size: 0.875em;
      background: $blue;
      color: $white;
      padding: 1em;
    }
  }
</style>
