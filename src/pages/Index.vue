<template>
  <Layout>
    <div class="index">
      <!-- <Banner
        :image="getBannerImage"
        :title="getBannerTitle"
        :subtitle="getBannerSubtitle"
        :align="getBannerAlign"
      />
      <Bio :heading="getBioHeading" :image="getBioImage" />
      <CurriculumVitae
        :technologies="getCVTechnologies"
        :education="getCVEducation"
        :experience="getCVExperience"
      />-->
      <TabBar :tabs="getCV" />
      <Cards :cardList="getSocialAccounts" />
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
          ... on ContentfulCards {
            name
            list {
              name
              title
              subtitle
              icon {
                description
                file {
                  url
                }
              }
              description
              link
              category
            }
          }
          ... on ContentfulTabBar {
            name
            tabList {
              id
              label
              content
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
import Cards from "../components/cards/Cards";
import TabBar from "../components/tabBar/TabBar";

export default {
  name: "Index",
  components: {
    Banner,
    Bio,
    CurriculumVitae,
    Cards,
    TabBar
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
    getCVTechnologies() {
      return this.$page.allContentfulPage.edges[0].node.layout[2].name ===
        "Curriculum Vitae" &&
        this.$page.allContentfulPage.edges[0].node.layout[2].cv.skills
        ? this.$page.allContentfulPage.edges[0].node.layout[2].cv.skills
        : {};
    },
    getCVEducation() {
      return this.$page.allContentfulPage.edges[0].node.layout[2].name ===
        "Curriculum Vitae" &&
        this.$page.allContentfulPage.edges[0].node.layout[2].cv.education
        ? this.$page.allContentfulPage.edges[0].node.layout[2].cv.education
        : [];
    },
    getCVExperience() {
      return this.$page.allContentfulPage.edges[0].node.layout[2].name ===
        "Curriculum Vitae" &&
        this.$page.allContentfulPage.edges[0].node.layout[2].cv.experience
        ? this.$page.allContentfulPage.edges[0].node.layout[2].cv.experience
        : [];
    },
    getSocialAccounts() {
      return this.$page.allContentfulPage.edges[0].node.layout[3].name ===
        "Social" && this.$page.allContentfulPage.edges[0].node.layout[3].list
        ? this.$page.allContentfulPage.edges[0].node.layout[3].list
        : [];
    },
    getCV() {
      return this.$page.allContentfulPage.edges[0].node.layout[4].name ===
        "CV" && this.$page.allContentfulPage.edges[0].node.layout[4].tabList
        ? this.$page.allContentfulPage.edges[0].node.layout[4].tabList
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

<style lang="scss" scoped>
@import "../assets/global.scss";

.index {
  @extend .wrapperPadding;
}
</style>