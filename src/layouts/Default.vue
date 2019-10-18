<template>
  <div class="layout mdc-typography">
    <TopAppBar title="akli.dev" />
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
    <Footer />
  </div>
</template>

<script>
import TopAppBar from "../components/topAppBar/TopAppBar";
import Footer from "../components/footer/Footer";

export default {
  name: "Default",
  components: {
    TopAppBar,
    Footer
  }
};
</script>

<style lang="scss">
@import "../assets/theme.scss";
@import "@material/typography/mdc-typography";
@import "@material/layout-grid/mdc-layout-grid";

body {
  margin: 0;

  .layout {
    .fade-enter-active {
      transition: opacity 0.4s;
    }

    .fade-enter {
      opacity: 0;
    }

    .fade-enter-to {
      opacity: 1;
    }
  }
}
</style>
