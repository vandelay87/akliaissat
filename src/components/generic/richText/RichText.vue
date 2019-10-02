<template>
  <article v-html="richtextToHTML(article)" class="mdc-typography mdc-typography--body1" />
</template>

<script>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export default {
  name: "RichText",
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    options() {
      return {
        renderNode: {
          [BLOCKS.HEADING_1]: node =>
            `<h1 class="mdc-typography--headline1">${node.content[0].value}</h1>`,
          [BLOCKS.HEADING_2]: node =>
            `<h2 class="mdc-typography--headline2">${node.content[0].value}</h2>`
        }
      };
    }
  },
  methods: {
    richtextToHTML(document) {
      return documentToHtmlString(document, this.options);
    }
  }
};
</script>
