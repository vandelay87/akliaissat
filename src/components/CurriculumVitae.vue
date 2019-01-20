<template>
  <article class="cv">
    <Heading title="Check out my CV" align="centre" />
    <section class="block col3">
      <div class="subBlock">
        <Heading title="Technologies" :size=2 />
      </div>
      <div class="subBlock">
        <Heading title="comfortable" :size=3 />
        <ul class="list">
          <li v-for="(skill, index) in skills.good" :key="index">{{ skill }}</li>
        </ul>
      </div>
      <div class="subBlock">
        <Heading title="it's been a while" :size=3 />
        <ul class="list">
          <li v-for="(skill, index) in skills.ok" :key="index">{{ skill }}</li>
        </ul>
      </div>
    </section>
    <section class="block col2">
      <div class="subBlock">
        <Heading title="Work Experience" :size=2 />
      </div>
      <div class="subBlock">
        <div v-for="exp in experience" :key="exp.key">
          <Heading :title="exp.company" :subtitle="exp.role" :size=3 />
          <p class="info">{{ exp.description }}</p>
        </div>
      </div>
    </section>
    <section class="block col2">
      <div class="subBlock">
        <Heading title="Education" :size=2 />
      </div>
      <div class="subBlock">
        <div v-for="edu in education" :key="edu.key">
          <Heading :title="edu.university" :size=3 />
          <p class="info">{{ edu.award }}</p>
        </div>
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
    },
    data() {
      return {
        skills: {
          good: [
            'JavaScript ES6',
            'React.js',
            'Vue',
            'Angular/AngularJS',
            'Fluid Responsive Web Design',
            'HTML5',
            'RESTful WebServices',
            'CSS/SASS/SCSS',
            'Webpack',
            'Gulp.js',
            'AEM',
            'CMS',
            'Jest',
            'SQL/MySQL',
            'Adobe Photoshop',
            'jQuery'
          ],
          ok: [
            '.NET Framework',
            'PHP',
            'C#',
            'ASP Classic',
            'Silverlight',
            'WPF',
            'JavaServer Pages'
          ]
        },
        experience: [
          {
            key: 5,
            company: 'Costa',
            role: 'Front End Web Developer, December 2018 - Present',
            description: 'Whilst still employed by Whitbread, as of April 2018, I was working for Costa. I\'m helping build the new Costa website, from deciding which technologies to use, to building modular components that can be consumed by our CMS - AEM.'
          },
          {
            key: 4,
            company: 'Whitbread',
            role: 'Front End Web Developer, October 2016 - December 2018',
            description: 'My first exposure to how a large company operates under agile methodologies. I began working on maintaining Whitbread\'s restaurant brands (Beefeater, Brewersfayre, Bar and Block). After a year, I then moved to the newly founded Costa web team.'
          },
          {
            key: 3,
            company: 'BDS',
            role: 'Full Stack Web Developer, December 2013 - April 2016',
            description: 'My responsibilities at BDS included; optimising/developing existing and new client websites, construction of our \'Blueberry\' CMS, database loading, script language conversion from classic ASP to PHP and backend server-side programming.'
          },
          {
            key: 2,
            company: 'SuperControl',
            role: 'Full Stack Web Developer, June 2012 - November 2013',
            description: 'During my time at Supercontrol I refined my web developing skills, particularly responsive web design and JavaScript. I implemented websites for clients from start to finish, and also had other responsibilities such as; database to API conversion and SEO optimisasion.'
          },
          {
            key: 1,
            company: 'Business Micros',
            role: 'Software Developer, July 2011 - June 2012',
            description: 'After graduating from university, I instantly began working for BDS as a software developer. Primarily, I worked on a Silverlight application that included VB.NET, SQL and web service technologies.'
          },
        ],
        education: [
          {
            key: 2,
            university: 'University of the West of Scotland',
            award: 'Computing Honours Degree'
          },
          {
            key: 1,
            university: 'Kingston University',
            award: 'Computing HND'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/global.scss';
  @import '../assets/breakpoints.scss';
  @import '../assets/colours.scss';

  .cv {
    @extend .wrapper;

    .block {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      justify-content: center;
      background: $gray;
      padding: 1em 0;

      &:nth-child(odd) {
        background: $lightGray;
      }

      @include breakpoint(tablet) {
        flex-direction: row;
        padding: 0;
      }

      .subBlock {
        width: 100%;
        padding: 1em;
        box-sizing: border-box;
        padding: 0 1em;

        @include breakpoint(tablet) {
          flex: 1;

          .list {
            padding-bottom: 1.750em;
          }
        }

        div {
          border-bottom: 1px solid $border;

          &:last-child {
            border: none;
          }

          .info {
            padding: 0 0 0.750em;
          }
        }
      }

      @include breakpoint(tablet) {
        &.col2 {
          .subBlock {
            &:nth-of-type(2) {
              flex: 2;
            }
          }
        }
      }
    }
  }
</style>
