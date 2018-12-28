<template>
  <button @click='onClick' :class="customClass" class="button">
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

  .button {
    display: block;
    margin: auto;
    padding: 1em;
    font-size: 1.25em;
    font-weight: 600;
    background-color: $blue;
    color: $white;
    border: 5px solid $white;
    cursor: pointer;
    transition: all .3s;

    &:hover, &:active, &:focus {
      background-color: $white;
      color: $blue;
    }

    &.twitter, &.github {
      padding: 2em;
      background-color: transparent;
      border: 5px solid $white;
      color: $white;
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
