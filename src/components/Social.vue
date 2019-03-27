<template>
  <article class="social">
    <Heading title="Follow me" align="centre" />
    <div class="block">
      <section v-for="social in accounts" :key="social.key" v-bind:class="social.name" class="subBlock">
        <Heading :title="social.name" align="centre" :size=2  />
        <Link :text="social.account" :path="social.address" :customClass="social.name" :outbound=true />
      </section>
    </div>
  </article>
</template>

<script>
  import Heading from './generic/Heading'
  import Link from './generic/Link'

  export default {
    name: 'Social',
    components: {
      Heading,
      Link
    },
    props: {
      accounts: {
        type: Array,
        required: true
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '../assets/colours.scss';
  @import '../assets/breakpoints.scss';

  .social {
    .block {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: center;

      @include breakpoint(tablet) {
        flex-direction: row;
      }

      .subBlock {
        width: 100%;
        padding: 1em 1em 4em;
        box-sizing: border-box;
        color: $white;

        @include breakpoint(tablet) {
          flex: 1;
        }
      }
    }

    .twitter {
      background-color: $twitter;
    }

    .github {
      background-color: $github;
    }
  }
</style>
