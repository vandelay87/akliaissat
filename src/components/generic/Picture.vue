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

  .picture {
    display: block;
    margin: auto;
    width: 100%;
    float: none;

    @include breakpoint(tablet) {
      &.left {
        float: left;
      }

      &.right {
        float: right;
      }
    }
  }

  .figure {
    margin: auto;

    @include breakpoint(tablet) {
      &.left {
        float: left;
      }

      &.right {
        float: right;
      }
    }

    .image {
      width: 100%;
    }

    .caption {
      font-size: 0.875em;
    }
  }
</style>
