<template>
  <Layout>
    <div class="index">
      <Banner />
      <Bio :heading=getBioHeading :image=getBioImage />
      <CurriculumVitae />
      <Social :accounts=getSocial />
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
                name
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
                accounts {
                  account {
                    name
                    account
                    address
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
        return this.$page.allContentfulPage.edges[0].node.title ? this.$page.allContentfulPage.edges[0].node.title : 'BOO';
      },
      getBioHeading() {
        return (this.$page.allContentfulPage.edges[0].node.layout[0].fields.name === "Bio" && this.$page.allContentfulPage.edges[0].node.layout[0].fields.heading.fields) ? this.$page.allContentfulPage.edges[0].node.layout[0].fields.heading.fields : {};
      },
      getBioImage() {
        return (this.$page.allContentfulPage.edges[0].node.layout[0].fields.name === "Bio" && this.$page.allContentfulPage.edges[0].node.layout[0].fields.image.fields) ? this.$page.allContentfulPage.edges[0].node.layout[0].fields.image.fields : {};
      },
      getSocial() {
        return (this.$page.allContentfulPage.edges[0].node.layout[1].fields.name === "Social" && this.$page.allContentfulPage.edges[0].node.layout[1].fields.accounts.account) ? this.$page.allContentfulPage.edges[0].node.layout[1].fields.accounts.account : {};
      },
    },
    metaInfo() {
      return {
        title: this.getPageTitle,
      }
    }
  }
</script>
