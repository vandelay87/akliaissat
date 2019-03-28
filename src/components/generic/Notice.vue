<template>
  <div class="notice" :class="type">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Notice',
    props: {
      type: {
        validator: function (value) {
          return ['warning', 'danger'].indexOf(value) !== -1
        },
        type: String,
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/colours.scss';

  .notice {
    position: relative;
    display: flex;
    background: $blue;
    color: $white;
    padding: 0 2em 0 4em;

    &:before {
      content: '';
      background: no-repeat url('../../assets/images/information.svg');
      background-size: cover;
      position: absolute;
      height: 1.875em;
      width: 1.875em;
      top: 0.75em;
      left: 1.25em;
    }

    &.warning {
      background: $warning;

      &:before {
        background: no-repeat url('../../assets/images/alert.svg');
        background-size: cover;
      }
    }

    &.error {
      background: $error;

      &:before {
        background: no-repeat url('../../assets/images/alert.svg');
        background-size: cover;
      }
    }
  }
</style>
