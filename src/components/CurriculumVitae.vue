<template>
  <article class="cv">
    <Heading title="Check out my CV" align="centre" />
    <section class="block col3">
      <div>
        <Heading title="technologies" :size=2 />
      </div>
      <div>
        <Heading title="comfortable" :size=3 />
        <ul>
          <li>JavaScript ES6</li>
          <li>React.js</li>
          <li>Vue</li>
          <li>Angular/AngularJS</li>
          <li>Fluid Responsive Web Design</li>
          <li>HTML5</li>
          <li>RESTful WebServices</li>
          <li>CSS/SASS/SCSS</li>
          <li>Webpack</li>
          <li>Gulp.js</li>
          <li>AEM</li>
          <li>CMS</li>
          <li>Jest</li>
          <li>SQL/MySQL</li>
          <li>Adobe Photoshop</li>
          <li>jQuery</li>
        </ul>
      </div>
      <div>
        <Heading title="it's been a while" :size=3 />
        <ul>
          <li>.NET Framework</li>
          <li>PHP</li>
          <li>C#</li>
          <li>ASP Classic</li>
          <li>Silverlight</li>
          <li>WPF</li>
          <li>JavaServer Pages</li>
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
