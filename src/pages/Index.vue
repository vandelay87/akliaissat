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
        description
        layout {
          ... on ContentfulBanner {
            name
            heading {
              title
              subtitle
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
              height
            }
          }
          ... on ContentfulBio {
            name
            heading {
              title
              subtitle
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
              height
            }
          }
          ... on ContentfulCurriculumVitae {
            name
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
          ... on ContentfulSocial {
            name
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
  mounted: function() {
    console.log(this.$page.allContentfulPage);
  },
  computed: {
    getPageTitle() {
      return this.$page.allContentfulPage.edges[0].node.title
        ? this.$page.allContentfulPage.edges[0].node.title
        : "Index";
    },
    getPageDescription() {
      return this.$page.allContentfulPage.edges[0].node.description
        ? this.$page.allContentfulPage.edges[0].node.description
        : "";
    },
    getBannerImage() {
      return this.$page.allContentfulPage.edges[0].node.layout[0].name ===
        "Banner" && this.$page.allContentfulPage.edges[0].node.layout[0].image
        ? this.$page.allContentfulPage.edges[0].node.layout[0].image
        : {};
    },
    getBannerTitle() {
      return this.$page.allContentfulPage.edges[0].node.layout[0].name ===
        "Banner" &&
        this.$page.allContentfulPage.edges[0].node.layout[0].heading.title
        ? this.$page.allContentfulPage.edges[0].node.layout[0].heading.title
        : "";
    },
    getBannerSubtitle() {
      return this.$page.allContentfulPage.edges[0].node.layout[0].name ===
        "Banner" &&
        this.$page.allContentfulPage.edges[0].node.layout[0].heading.subtitle
        ? this.$page.allContentfulPage.edges[0].node.layout[0].heading.subtitle
        : "";
    },
    getBannerAlign() {
      return this.$page.allContentfulPage.edges[0].node.layout[0].name ===
        "Banner" &&
        this.$page.allContentfulPage.edges[0].node.layout[0].heading.align
        ? this.$page.allContentfulPage.edges[0].node.layout[0].heading.align
        : "";
    },
    getBioHeading() {
      return this.$page.allContentfulPage.edges[0].node.layout[1].name ===
        "Bio" && this.$page.allContentfulPage.edges[0].node.layout[1].heading
        ? this.$page.allContentfulPage.edges[0].node.layout[1].heading
        : {};
    },
    getBioImage() {
      return this.$page.allContentfulPage.edges[0].node.layout[1].name ===
        "Bio" && this.$page.allContentfulPage.edges[0].node.layout[1].image
        ? this.$page.allContentfulPage.edges[0].node.layout[1].image
        : {};
    },
    getSocial() {
      return this.$page.allContentfulPage.edges[0].node.layout[2].name ===
        "Social" &&
        this.$page.allContentfulPage.edges[0].node.layout[2].accounts.account
        ? this.$page.allContentfulPage.edges[0].node.layout[2].accounts.account
        : {};
    },
    getCVTechnologies() {
      return this.$page.allContentfulPage.edges[0].node.layout[3].name ===
        "Curriculum Vitae" &&
        this.$page.allContentfulPage.edges[0].node.layout[3].cv.skills
        ? this.$page.allContentfulPage.edges[0].node.layout[3].cv.skills
        : {};
    },
    getCVEducation() {
      return this.$page.allContentfulPage.edges[0].node.layout[3].name ===
        "Curriculum Vitae" &&
        this.$page.allContentfulPage.edges[0].node.layout[3].cv.education
        ? this.$page.allContentfulPage.edges[0].node.layout[3].cv.education
        : {};
    },
    getCVExperience() {
      return this.$page.allContentfulPage.edges[0].node.layout[3].name ===
        "Curriculum Vitae" &&
        this.$page.allContentfulPage.edges[0].node.layout[3].cv.experience
        ? this.$page.allContentfulPage.edges[0].node.layout[3].cv.experience
        : {};
    }
  },
  metaInfo() {
    return {
      title: this.getPageTitle,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.getPageDescription
        }
      ]
    };
  }
};
</script>
