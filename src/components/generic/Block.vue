<template>
  <article class="block" :class="type">
    <p class="content">
      {{ title }}
      <Link v-if="link === true" :path="linkPath" :text="linkText" :outbound="linkOutbound" customClass="alt" />.
    </p>
  </article>
</template>

<script>
  import Link from './Link'

  export default {
    name: 'Block',
    components: {
      Link,
    },
    props: {
      title: {
        type: String,
        required: true,
      },
      type: {
        validator: function (value) {
          return ['warning', 'danger'].indexOf(value) !== -1
        }
      },
      link: Boolean,
      linkPath: String,
      linkText: String,
      linkOutbound: Boolean,
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/colours.scss';

  .block {
    position: relative;
    background: $blue;
    color: $white;
    padding: 0.75em 2em 0.75em 4em;

    .content {
      margin: 0;

      &:before {
        content: '';
        background: no-repeat url('../../assets/images/information.svg');
        background-size: cover;
        position: absolute;
        height: 1.875em;
        width: 1.875em;
        top: 0.5em;
        left: 1.25em;
      }
    }

    &.warning {
      background: $warning;

      .content {
        &:before {
          background: no-repeat url('../../assets/images/alert.svg');
          background-size: cover;
        }
      }
    }

    &.error {
      background: $error;

      .content {
        &:before {
          background: no-repeat url('../../assets/images/alert.svg');
          background-size: cover;
        }
      }
    }
  }
</style>
