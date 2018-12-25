<template>
  <article class="cv">
    <Heading title="Check out my CV" align="centre" />
    <section class="block col3">
      <div>technologies</div>
      <div>
        comfortable
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </div>
      <div>
        it's been a while
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </div>
    </section>
  </article>
</template>

<script>
  import Heading from './generic/Heading'

  export default {
    name: 'CurriculumVitae',
    components: {
      Heading
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/breakpoints.scss';
  @import '../assets/global.scss';

  .cv {
    @extend .wrapper;

    .block {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      @include breakpoint(tablet) {
        flex-direction: row;
      }

      div {
        border: 1px solid;
        flex: 1;
        width: 100%;
      }

      @include breakpoint(tablet) {
        &.col3 {
          div {
            flex: 0 0 33%;
          }
        }

        &.col2 {
          div {
            flex: 0 50%;
          }
        }
      }
    }
  }
</style>
