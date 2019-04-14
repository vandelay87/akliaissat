<template>
  <Layout>
    <div class="index">
      <Banner
        :image="getBannerImage"
        :title="getBannerTitle"
        :subtitle="getBannerSubtitle"
        :align="getBannerAlign"
      />
      <Bio :heading="getBioHeading" :image="getBioImage"/>
      <CurriculumVitae
        :technologies="getCVTechnologies"
        :education="getCVEducation"
        :experience="getCVExperience"
      />
      <Social :accounts="getSocial"/>
    </div>
  </Layout>
</template>

<page-query>
  query Index {
    allContentfulPage(filter: { id: { in: "3PgattG9PZQSySOOpAPJCY" } }) {
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
                    subtitle
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
                    height
                  }
                }
                accounts {
                  account {
                    name
                    account
                    address
                  }
                }
                cv {
                  skills {
                    ok {
                      name
                      label
                    }
                    good {
                      name
                      label
                    }
                  }
                  education {
                    award
                    university
                  }
                  experience {
                    role
                    company
                    description
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
import Banner from "../components/Banner";
import Bio from "../components/Bio";
import CurriculumVitae from "../components/CurriculumVitae";
import Social from "../components/Social";

export default {
  name: "Index",
  components: {
    Banner,
    Bio,
    CurriculumVitae,
    Social
  },
  computed: {
    getPageTitle() {
      return this.$page.allContentfulPage.edges[0].node.title
        ? this.$page.allContentfulPage.edges[0].node.title
        : "Index";
    },
    getBannerImage() {
      return this.$page.allContentfulPage.edges[0].node.layout[0].fields
        .name === "Banner" &&
        this.$page.allContentfulPage.edges[0].node.layout[0].fields.image.fields
        ? this.$page.allContentfulPage.edges[0].node.layout[0].fields.image
            .fields
        : {};
    },
    getBannerTitle() {
      return this.$page.allContentfulPage.edges[0].node.layout[0].fields
        .name === "Banner" &&
        this.$page.allContentfulPage.edges[0].node.layout[0].fields.heading
          .fields.title
        ? this.$page.allContentfulPage.edges[0].node.layout[0].fields.heading
            .fields.title
        : "";
    },
    getBannerSubtitle() {
      return this.$page.allContentfulPage.edges[0].node.layout[0].fields
        .name === "Banner" &&
        this.$page.allContentfulPage.edges[0].node.layout[0].fields.heading
          .fields.subtitle
        ? this.$page.allContentfulPage.edges[0].node.layout[0].fields.heading
            .fields.subtitle
        : "";
    },
    getBannerAlign() {
      return this.$page.allContentfulPage.edges[0].node.layout[0].fields
        .name === "Banner" &&
        this.$page.allContentfulPage.edges[0].node.layout[0].fields.heading
          .fields.align
        ? this.$page.allContentfulPage.edges[0].node.layout[0].fields.heading
            .fields.align
        : "";
    },
    getBioHeading() {
      return this.$page.allContentfulPage.edges[0].node.layout[1].fields
        .name === "Bio" &&
        this.$page.allContentfulPage.edges[0].node.layout[1].fields.heading
          .fields
        ? this.$page.allContentfulPage.edges[0].node.layout[1].fields.heading
            .fields
        : {};
    },
    getBioImage() {
      return this.$page.allContentfulPage.edges[0].node.layout[1].fields
        .name === "Bio" &&
        this.$page.allContentfulPage.edges[0].node.layout[1].fields.image.fields
        ? this.$page.allContentfulPage.edges[0].node.layout[1].fields.image
            .fields
        : {};
    },
    getSocial() {
      return this.$page.allContentfulPage.edges[0].node.layout[2].fields
        .name === "Social" &&
        this.$page.allContentfulPage.edges[0].node.layout[2].fields.accounts
          .account
        ? this.$page.allContentfulPage.edges[0].node.layout[2].fields.accounts
            .account
        : {};
    },
    getCVTechnologies() {
      return this.$page.allContentfulPage.edges[0].node.layout[3].fields
        .name === "Curriculum Vitae" &&
        this.$page.allContentfulPage.edges[0].node.layout[3].fields.cv.skills
        ? this.$page.allContentfulPage.edges[0].node.layout[3].fields.cv.skills
        : {};
    },
    getCVEducation() {
      return this.$page.allContentfulPage.edges[0].node.layout[3].fields
        .name === "Curriculum Vitae" &&
        this.$page.allContentfulPage.edges[0].node.layout[3].fields.cv.education
        ? this.$page.allContentfulPage.edges[0].node.layout[3].fields.cv
            .education
        : {};
    },
    getCVExperience() {
      return this.$page.allContentfulPage.edges[0].node.layout[3].fields
        .name === "Curriculum Vitae" &&
        this.$page.allContentfulPage.edges[0].node.layout[3].fields.cv
          .experience
        ? this.$page.allContentfulPage.edges[0].node.layout[3].fields.cv
            .experience
        : {};
    }
  },
  metaInfo() {
    return {
      title: this.getPageTitle
    };
  }
};
</script>
