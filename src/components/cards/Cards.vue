<template>
  <section class="mdc-layout-grid">
    <div class="container mdc-layout-grid__inner">
      <div
        v-for="card in cardList"
        :key="card.key"
        class="mdc-layout-grid__cell"
        v-bind:class="setGridClass"
      >
        <article class="mdc-card card">
          <div class="icon">
            <Picture
              v-if="card.icon"
              :path="card.icon.file.url"
              :alt="card.icon.description"
              align="centre"
              height="inherit"
            />
          </div>
          <div class="content">
            <Heading :title="card.title" :size="2" override="mdc-typography--headline6" />
            <Heading
              :title="card.subtitle"
              :size="3"
              override="mdc-typography--subtitle2"
              theme="mdc-theme--secondary"
            />
            <p
              class="mdc-typography mdc-typography--body2 mdc-theme--secondary text"
            >{{ card.description }}</p>
          </div>
          <div class="mdc-card__actions">
            <div class="mdc-card__action-buttons">
              <VueButton value="view" :click="openUrl(card.link, card.category)" />
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import Heading from "../heading/Heading";
import VueButton from "../vueButton/VueButton";
import Picture from "../picture/Picture";

export default {
  name: "Cards",
  components: {
    Heading,
    VueButton,
    Picture
  },
  props: {
    cardList: {
      type: Array,
      required: true
    }
  },
  computed: {
    setGridClass: function() {
      return {
        "mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-12-desktop":
          this.cardList.length === 1,
        "mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-6-desktop":
          this.cardList.length === 2
      };
    }
  },
  methods: {
    openUrl(url, category) {
      return () => {
        window.open(url);

        this.$ga.event({
          eventCategory: category,
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

  .card {
    .icon {
      padding: 1em;
      height: 12.5em;

      figure {
        margin: auto;
      }
    }

    .content {
      padding: 1em 1em 0.5em;

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
