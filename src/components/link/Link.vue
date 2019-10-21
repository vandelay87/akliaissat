<template>
  <a
    v-if="outbound === true"
    :href="path"
    :class="customClass"
    class="link"
    target="_blank"
    @click="outboundClick(path)"
  >{{ text }}</a>
  <g-link v-else :to="path" :class="customClass" class="link">{{ text }}</g-link>
</template>

<script>
export default {
  name: "Link",
  props: {
    path: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    customClass: {
      validator: function(value) {
        return ["alt"].indexOf(value) !== -1;
      },
      type: String
    },
    outbound: Boolean
  },
  methods: {
    outboundClick: function(label) {
      this.$ga.event({
        eventCategory: "Outbound Link",
        eventAction: "click",
        eventLabel: label
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/colours.scss";

.link {
  color: $link;
  transition: all 0.3s;

  &:hover,
  &:active,
  &:focus {
    color: $linkHover;
  }

  &.alt {
    color: $linkAlt;

    &:hover,
    &:active,
    &:focus {
      color: $linkAltHover;
    }
  }
}
</style>
