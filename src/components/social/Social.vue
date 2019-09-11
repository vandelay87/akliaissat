<template>
  <section class="mdc-layout-grid">
    <Heading :title="heading.title" :align="heading.align" :size="heading.size" />
    <div class="container mdc-layout-grid__inner">
      <div
        v-for="account in socialAccounts"
        :key="account.key"
        class="mdc-layout-grid__cell"
        v-bind:class="setGridClass"
      >
        <article class="mdc-card account">
          <div class="icon">
            <Picture
              v-if="account.icon"
              :path="account.icon.file.url"
              :alt="account.icon.description"
              align="centre"
              height="inherit"
            />
          </div>
          <div class="content">
            <Heading :title="account.name" :size="2" override="mdc-typography--headline6" />
            <Heading
              :title="account.username"
              :size="3"
              override="mdc-typography--subtitle2"
              theme="mdc-theme--secondary"
            />
            <p
              class="mdc-typography mdc-typography--body2 mdc-theme--secondary text"
            >Placeholder text.</p>
          </div>
          <div class="mdc-card__actions">
            <div class="mdc-card__action-buttons">
              <VueButton value="view" :click="openUrl(account.profileUrl)" />
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import Heading from "../generic/heading/Heading";
import VueButton from "../generic/vueButton/VueButton";
import Picture from "../generic/Picture";

export default {
  name: "Social",
  components: {
    Heading,
    VueButton,
    Picture
  },
  props: {
    heading: {
      type: Object,
      required: true
    },
    socialAccounts: {
      type: Array,
      required: true
    }
  },
  computed: {
    setGridClass: function() {
      return {
        "mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-12-desktop":
          this.socialAccounts.length === 1,
        "mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-6-desktop":
          this.socialAccounts.length === 2
      };
    }
  },
  methods: {
    openUrl(url) {
      return () => {
        window.open(url);

        this.$ga.event({
          eventCategory: "Social",
          eventAction: "click",
          eventLabel: url
        });
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@material/card/mdc-card";

.container {
  max-width: 50em;
  margin: auto;

  .account {
    .icon {
      padding: 1em;
      height: 12.5em;
    }

    .content {
      padding: 1rem;

      h2 {
        margin: 0;
      }

      h3 {
        margin: 0;
      }

      .text {
        margin: 1em 0 0;
      }
    }
  }
}
</style>
