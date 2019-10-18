<template>
  <Layout>
    <div class="privacy">
      <Heading title="Privacy dump" />
      <section class="block">
        <Heading title="Mmm, cookies" :size="2" />
        <p>If you're somehow interested, here are all of the cookies that are used across the website.</p>
        <VueTable
          :label="getCookieTableLabel"
          :headers="getCookieTableHeader"
          :rows="getCookieTableRows"
        />
        <Disclaimer
          text="Whenever I write some code that contains functionality that can create cookies, this table will be updated."
        />
      </section>
    </div>
  </Layout>
</template>

<page-query>
  query Privacy {
    allContentfulPage (
      filter: {
        id: {
          in: "3JNGhUtTBl4dnSu7I0oqKd"
        }
      }
    ){
      edges {
        node {
          title
          description
          layout {
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
            ... on ContentfulRichText {
              name
              article
            }
          }
        }
      }
    }
  }
</page-query>

<script>
import Heading from "../components/heading/Heading";
import Link from "../components/link/Link";
import VueTable from "../components/vueTable/VueTable";
import RichText from "../components/richText/RichText";

export default {
  name: "Privacy",
  components: {
    Heading,
    Link,
    VueTable,
    RichText
  },
  data() {
    return {
      table: {
        headers: ["Cookie", "Name", "Information"],
        data: [
          [
            "Google Analytics",
            "_ga, _gat, _gid",
            "Your standard Google Analytics cookies that track stuff like page hits, clicks and events."
          ],
          [
            "Cookie Consent",
            "cookie_consent",
            "If you decide to give your consent I create this cookie so I know if I have permission to create other cookies. If you decline a session cookie is created instead."
          ]
        ]
      }
    };
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
    getCookieTableLabel() {
      return this.$page.allContentfulPage.edges[0].node.layout[1].name ===
        "Cookie table" &&
        this.$page.allContentfulPage.edges[0].node.layout[1].name
        ? this.$page.allContentfulPage.edges[0].node.layout[1].name
        : "";
    },
    getCookieTableHeader() {
      return this.$page.allContentfulPage.edges[0].node.layout[1].name ===
        "Cookie table" &&
        this.$page.allContentfulPage.edges[0].node.layout[1].header.data
        ? this.$page.allContentfulPage.edges[0].node.layout[1].header.data
        : [];
    },
    getCookieTableRows() {
      return this.$page.allContentfulPage.edges[0].node.layout[1].name ===
        "Cookie table" &&
        this.$page.allContentfulPage.edges[0].node.layout[1].rows
        ? this.$page.allContentfulPage.edges[0].node.layout[1].rows
        : [];
    },
    getRichText() {
      return this.$page.allContentfulPage.edges[0].node.layout[2].name ===
        "Rich text test" &&
        this.$page.allContentfulPage.edges[0].node.layout[2].article
        ? this.$page.allContentfulPage.edges[0].node.layout[2].article
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

  .block {
    margin: 1em 0;
  }
}
</style>
