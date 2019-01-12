<template>
  <article class="block" :class="type">
    <p class="content">
      {{ title }}
      <Link v-if="link === true" :path="linkPath" :text="linkText" :outbound="linkOutbound" customClass="alt" />
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
  @import '../../assets/variables.scss';

  .block {
    position: relative;
    background: $blue;
    color: $white;
    padding: 0.75em 2em 0.75em 4em;

    .content {
      margin: 0;

      &:before {
        content: 'ℹ';
        position: absolute;
        font-size: 2em;
        left: 30px;
        top: 0;
        border: none;
      }
    }

    &.warning {
      background: $warning;

      .content {
        &:before {
          content: '⚠';
          left: 20px;
        }
      }
    }

    &.error {
      background: $error;

      .content {
        &:before {
          content: '⚠';
          left: 20px;
        }
      }
    }
  }
</style>
