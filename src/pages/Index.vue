<template>
  <Layout>
    <div class="index">
      <Banner />
      <Bio :heading=getBioHeading :image=getBioImage />
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
      getPageTitle() {
        return this.$page.allContentfulPage.edges[0].node.title ? this.$page.allContentfulPage.edges[0].node.title : 'Index';
      },
      getBioHeading() {
        return this.$page.allContentfulPage.edges[0].node.layout[0].fields.heading.fields ? this.$page.allContentfulPage.edges[0].node.layout[0].fields.heading.fields : {};
      },
      getBioImage() {
        return this.$page.allContentfulPage.edges[0].node.layout[0].fields.image.fields ? this.$page.allContentfulPage.edges[0].node.layout[0].fields.image.fields : {};
      },
    },
    metaInfo() {
      return {
        title: this.getPageTitle,
      }
    }
  }
</script>
