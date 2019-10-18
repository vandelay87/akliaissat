<template>
  <footer class="footer">
    <section class="links">
      <ul class="list">
        <li v-for="link in links" :key="link.key">
          <Link :text="link.text" :path="link.path" />
        </li>
      </ul>
    </section>
  </footer>
</template>

<script>
import Link from "../generic/Link";

export default {
  name: "Footer",
  components: {
    Link
  },
  data() {
    return {
      links: [
        {
          key: 1,
          text: "Home",
          path: "/"
        },
        {
          key: 2,
          text: "Privacy Dump",
          path: "/privacy"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/colours.scss";

.footer {
  background-color: $darkGray;
  padding: 1em;

  .links {
    .list {
      list-style: none;
      padding: 0;
    }
  }
}
</style>
