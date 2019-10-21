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
            `<h2 class="mdc-typography--headline2">${node.content[0].value}</h2>`,
          [BLOCKS.HEADING_3]: node =>
            `<h3 class="mdc-typography--headline3">${node.content[0].value}</h3>`,
          [BLOCKS.HEADING_4]: node =>
            `<h4 class="mdc-typography--headline4">${node.content[0].value}</h4>`,
          [BLOCKS.HEADING_5]: node =>
            `<h5 class="mdc-typography--headline5">${node.content[0].value}</h5>`,
          [BLOCKS.HEADING_6]: node =>
            `<h6 class="mdc-typography--headline6">${node.content[0].value}</h6>`
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
