<template>
  <Layout>
    <div class="index">
      <Heading :title="getPageHeading" />
      <RichText :article="getIntroductionText" />
      <Heading :title="getCVHeading.title" :size="getCVHeading.size" />
      <TabBar :tabs="getCV" />
      <Heading :title="getSocialHeading.title" :size="getSocialHeading.size" />
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
          ... on ContentfulHeading {
            title
            size
          }
          ... on ContentfulRichText {
            name
            article
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
import Heading from "../components/heading/Heading";
import RichText from "../components/richText/RichText";
import Cards from "../components/cards/Cards";
import TabBar from "../components/tabBar/TabBar";

export default {
  name: "Index",
  components: {
    Heading,
    RichText,
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
    getPageHeading() {
      return this.$page.allContentfulPage.edges[0].node.layout[0].title
        ? this.$page.allContentfulPage.edges[0].node.layout[0].title
        : "";
    },
    getIntroductionText() {
      return this.$page.allContentfulPage.edges[0].node.layout[1].name ===
        "Introduction" &&
        this.$page.allContentfulPage.edges[0].node.layout[1].article
        ? this.$page.allContentfulPage.edges[0].node.layout[1].article
        : {};
    },
    getCVHeading() {
      return this.$page.allContentfulPage.edges[0].node.layout[2].title &&
        this.$page.allContentfulPage.edges[0].node.layout[2].size
        ? {
            title: this.$page.allContentfulPage.edges[0].node.layout[2].title,
            size: this.$page.allContentfulPage.edges[0].node.layout[2].size
          }
        : {};
    },
    getCV() {
      return this.$page.allContentfulPage.edges[0].node.layout[3].name ===
        "CV" && this.$page.allContentfulPage.edges[0].node.layout[3].tabList
        ? this.$page.allContentfulPage.edges[0].node.layout[3].tabList
        : {};
    },
    getSocialHeading() {
      return this.$page.allContentfulPage.edges[0].node.layout[4].title &&
        this.$page.allContentfulPage.edges[0].node.layout[4].size
        ? {
            title: this.$page.allContentfulPage.edges[0].node.layout[4].title,
            size: this.$page.allContentfulPage.edges[0].node.layout[4].size
          }
        : {};
    },
    getSocialAccounts() {
      return this.$page.allContentfulPage.edges[0].node.layout[5].name ===
        "Social" && this.$page.allContentfulPage.edges[0].node.layout[5].list
        ? this.$page.allContentfulPage.edges[0].node.layout[5].list
        : [];
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