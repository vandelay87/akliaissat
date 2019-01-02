<template>
  <a :href="link" :class="customClass" class="link" target="_blank">
    {{ text }}
  </a>
</template>

<script>
  export default {
    name: 'Link',
    props: {
      link: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      customClass: {
        validator: function (value) {
          return ['twitter', 'github'].indexOf(value) !== -1
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/variables.scss';

  .link {
    color: $link;
    transition: all .3s;

    &:hover, &:active, &:focus {
      color: $linkHover;
    }

    &.twitter, &.github {
      display: block;
      text-align: center;
      max-width: 9.25em;
      text-decoration: none;
      margin: auto;
      padding: 2em;
      background-color: transparent;
      border: 5px solid $white;
      color: $white;
      font-size: 1.25em;
      font-weight: 600;
    }

    &.twitter {
      &:hover, &:active, &:focus {
        background-color: $white;
        color: $twitter;
      }
    }

    &.github {
      &:hover, &:active, &:focus {
        background-color: $white;
        color: $github;
      }
    }
  }
</style>
