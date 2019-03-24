<template>
  <Layout>
    <div class="index">
      <Banner />
      <Bio :data=getBioData />
      <CurriculumVitae />
      <Social />
    </div>
  </Layout>
</template>

<page-query>
  query Index {
    allContentfulPage (filter: { id: { in: "3PgattG9PZQSySOOpAPJCY" } }){
      edges {
        node {
          title
        }
      }
    }
    allContentfulBio {
      edges {
        node {
          heading {
            title
            align
          }
          image {
            image {
              file {
                url
              }
            }
            alt
            caption
            align
            width
          }
        }
      }
    }
  }
</page-query>

<script>
  import Banner from '../components/Banner'
  import Bio from '../components/Bio'
  import CurriculumVitae from '../components/CurriculumVitae'
  import Social from '../components/Social'

  export default {
    name: 'Home',
    components: {
      Banner,
      Bio,
      CurriculumVitae,
      Social,
    },
    computed: {
      getTitle() {
        return this.$page.allContentfulPage.edges[0].node.title ? this.$page.allContentfulPage.edges[0].node.title : 'Index';
      },
      getBioData() {
        return this.$page.allContentfulBio.edges[0].node ? this.$page.allContentfulBio.edges[0].node : {};
      }
    },
    metaInfo() {
      return {
        title: this.getTitle,
      }
    }
  }
</script>
