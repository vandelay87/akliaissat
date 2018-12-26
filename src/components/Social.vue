<template>
  <article class="social">
    <Heading title="Follow Me" align="centre" />
    <div class="block">
      <section v-for="(social, index) in accounts" :key="social.key" v-bind:class="social.name" class="subBlock">
        <Heading :title="social.name" align="centre" :size=2  />
        <Button :value="social.account" :onClick="(event) => { link(event, index) }" :customStyle="social.name" />
      </section>
    </div>
  </article>
</template>

<script>
  import Heading from './generic/Heading'
  import Button from './generic/Button'

  export default {
    name: 'Social',
    components: {
      Heading,
      Button
    },
    data() {
      return {
        accounts: [
          {
            key: 2,
            name: 'twitter',
            account: '@vandelay1987',
            address: 'https://twitter.com/vandelay1987'
          },
          {
            key: 1,
            name: 'github',
            account: 'vandelay87',
            address: 'https://github.com/vandelay87'
          }
        ]
      }
    },
    methods: {
      link(event, index) {
        window.open(this.accounts[index].address, "_blank")
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/variables.scss';
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
        flex: 1;
        width: 100%;
        padding: 1em 1em 4em;
        box-sizing: border-box;
        color: $white;
      }
    }

    .twitter {
      background: $twitter;
    }

    .github {
      background: $github;
    }
  }
</style>
