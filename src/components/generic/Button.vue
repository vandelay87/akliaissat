<template>
  <button @click='onClick' :class="customStyle" class="button">
    {{ value }}
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      value: {
        type: String,
        required: true,
      },
      onClick: {
        type: Function,
        required: true,
      },
      customStyle: {
        validator: function (value) {
          return ['twitter', 'github'].indexOf(value) !== -1
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/variables.scss';

  .button {
    display: block;
    margin: auto;
    padding: 2em;
    font-size: 1.25em;
    font-weight: 600;
    cursor: pointer;

    &.twitter, &.github {
      background: transparent;
      border: 5px solid $white;
      color: $white;
    }

    &.twitter {
      &:hover, &:active, &:focus {
        background: $white;
        color: $twitter;
      }
    }

    &.github {
      &:hover, &:active, &:focus {
        background: $white;
        color: $github;
      }
    }
  }
</style>
