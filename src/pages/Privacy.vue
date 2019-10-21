<template>
  <Layout>
    <div class="privacy">
      <section class="section">
        <Heading :title="getPrivacyHeading" />
        <RichText :article="getPrivacyText" />
      </section>
      <section class="section">
        <Heading :title="getCookieHeading.title" :size="getCookieHeading.size" />
        <RichText :article="getCookieText" />
        <VueTable
          :label="getCookieTable.label"
          :headers="getCookieTable.headers"
          :rows="getCookieTable.rows"
        />
      </section>
    </div>
  </Layout>
</template>

<page-query>
query Privacy {
  allContentfulPage(filter: { id: { in: "3JNGhUtTBl4dnSu7I0oqKd" } }) {
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
          ... on ContentfulTable {
            name
            header {
              data {
                data
              }
            }
            rows {
              data {
                data
                isNumeric
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
import Heading from "../components/heading/Heading";
import VueTable from "../components/vueTable/VueTable";
import RichText from "../components/richText/RichText";

export default {
  name: "Privacy",
  components: {
    Heading,
    VueTable,
    RichText
  },
  computed: {
    getPageTitle() {
      return this.$page.allContentfulPage.edges[0].node.title
        ? this.$page.allContentfulPage.edges[0].node.title
        : "Privacy";
    },
    getPageDescription() {
      return this.$page.allContentfulPage.edges[0].node.description
        ? this.$page.allContentfulPage.edges[0].node.description
        : "";
    },
    getPrivacyHeading() {
      return this.$page.allContentfulPage.edges[0].node.layout[0].title
        ? this.$page.allContentfulPage.edges[0].node.layout[0].title
        : "";
    },
    getPrivacyText() {
      return this.$page.allContentfulPage.edges[0].node.layout[1].name ===
        "Privacy introduction" &&
        this.$page.allContentfulPage.edges[0].node.layout[1].article
        ? this.$page.allContentfulPage.edges[0].node.layout[1].article
        : {};
    },
    getCookieHeading() {
      return this.$page.allContentfulPage.edges[0].node.layout[2].title &&
        this.$page.allContentfulPage.edges[0].node.layout[2].size
        ? {
            title: this.$page.allContentfulPage.edges[0].node.layout[2].title,
            size: this.$page.allContentfulPage.edges[0].node.layout[2].size
          }
        : {};
    },
    getCookieText() {
      return this.$page.allContentfulPage.edges[0].node.layout[3].name ===
        "Cookie description" &&
        this.$page.allContentfulPage.edges[0].node.layout[3].article
        ? this.$page.allContentfulPage.edges[0].node.layout[3].article
        : {};
    },
    getCookieTable() {
      return this.$page.allContentfulPage.edges[0].node.layout[4].name ===
        "Cookie table" && this.$page.allContentfulPage.edges[0].node.layout[4]
        ? {
            label: this.$page.allContentfulPage.edges[0].node.layout[4].name,
            headers: this.$page.allContentfulPage.edges[0].node.layout[4].header
              .data,
            rows: this.$page.allContentfulPage.edges[0].node.layout[4].rows
          }
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

.privacy {
  @extend .wrapperPadding;
  margin: 1em auto;

  .section {
    @extend .sectionSpacing;
  }
}
</style>
