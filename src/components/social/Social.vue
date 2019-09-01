<template>
  <section class="mdc-layout-grid social">
    <Heading :title="heading.title" :align="heading.align" :size="heading.size" />
    <div class="container mdc-layout-grid__inner">
      <div
        v-for="account in socialAccounts"
        :key="account.key"
        v-bind:class="account.name"
        class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-6-desktop"
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
            <Heading :title="account.username" :size="3" override="mdc-typography--subtitle2" />
            <p class="mdc-typography mdc-typography--body2 text">Placeholder text.</p>
          </div>
          <div class="mdc-card__actions">
            <div class="mdc-card__action-buttons">
              <VueButton value="view" :click="openUrl(account.profileUrl)" />
              <VueButton
                v-if="account.followUrl"
                value="follow"
                :click="openUrl(account.followUrl)"
              />
            </div>
          </div>
          <!-- </div> -->
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
  mounted() {
    console.log(this.accounts);
  },
  methods: {
    openUrl(url) {
      return () => {
        window.open(url);

        // analytics
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@material/card/mdc-card";
@import "../../assets/colours.scss";

.container {
  max-width: 50em;
  margin: auto;

  .account {
    .icon {
      padding: 1em;
      height: 12.5em;

      &.twitter {
        background: $twitter;
      }

      &.github {
        background: $github;
      }
    }

    .content {
      padding: 1rem;

      .header {
        h2 {
          margin: 0;
        }
      }

      .text {
        margin: 0;
      }
    }
  }
}
</style>
