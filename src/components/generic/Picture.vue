<template>
  <figure v-if="caption" :class="align" class="figure" :style=style>
    <img :src=path :alt=alt class="image" />
    <figcaption class="caption">{{ caption }}</figcaption>
  </figure>
  <img v-else :src=path :alt=alt :class="align" class="picture" :style=style />
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
        }
      },
      maxWidth: String,
    },
    computed: {
      style: function() {
        return {
          maxWidth : this.maxWidth ? this.maxWidth : 'none',
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/breakpoints.scss';
  @import '../../assets/colours.scss';

  .picture {
    display: block;
    margin: 2em auto;
    width: 100%;
    float: none;
    padding: 1em 0;

    @include breakpoint(tablet) {
      margin: auto;

      &.left {
        float: left;
      }

      &.right {
        float: right;
      }
    }
  }

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

      @include breakpoint(tablet) {
        &.left {
          float: left;
          padding: 0 1em 1em 0;
        }

        &.right {
          float: right;
          padding: 0 0 1em 1em;
        }
      }
    }

    .caption {
      font-size: 0.875em;
      background: $blue;
      color: $white;
      padding: 1em;
    }
  }
</style>
