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
    allContentfulPage (filter: { id: { in: "3PgattG9PZQSySOOpAPJCY" } }) {
      edges {
        node {
          title
          layout {
            ... on ContentfulPageLayout {
              fields {
                heading {
                  fields {
                    title
                    align
                  }
                }
                image {
                  fields {
                    image {
                      fields {
                        file {
                          url
                        }
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
    name: 'Index',
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
        return this.$page.allContentfulPage.edges[0].node.layout[0].fields ? this.$page.allContentfulPage.edges[0].node.layout[0].fields : {};
      }
    },
    metaInfo() {
      return {
        title: this.getTitle,
      }
    }
  }
</script>
