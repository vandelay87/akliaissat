<template>
  <article v-html="richtextToHTML(article)" class="mdc-typography mdc-typography--body1"></article>
</template>

<script>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  name: "RichText",
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {
    richtextToHTML(content) {
      return documentToHtmlString(content);
    }
  }
};
</script>
