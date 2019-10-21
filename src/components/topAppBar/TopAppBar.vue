<template>
  <header class="mdc-top-app-bar bar" ref="topAppBar">
    <div class="mdc-top-app-bar__row">
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <span class="mdc-top-app-bar__title">{{ title }}</span>
      </section>
    </div>
  </header>
</template>

<script>
import { MDCTopAppBar } from "@material/top-app-bar";

export default {
  name: "TopAppBar",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      topAppBar: MDCTopAppBar
    };
  },
  mounted() {
    this.topAppBar = new MDCTopAppBar(this.$refs.topAppBar);
  },
  destroyed() {
    this.topAppBar.destroy();
  }
};
</script>

<style lang="scss" scoped>
@import "~@material/top-app-bar/mdc-top-app-bar";

.bar {
  top: 0;
  position: sticky;
}
</style>
