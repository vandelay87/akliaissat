<template>
  <transition name="slide" appear>
    <article v-if="isVisible" class="cookieBanner">
      <section class="content">
        <div class="block header">
          <Heading :title="title" :size="3" />
          <p>
            Is that cool? I use them to help the website run better. You can find more information on the
            <Link path="/privacy" text="privacy page" customClass="alt" />.
          </p>
        </div>
        <div class="block buttons">
          <VueButton value="Cool" :onClick="createCookie.bind(null, cookie.name, false)" />
          <VueButton value="Not Cool" :onClick="createCookie.bind(null, cookie.name, true)" />
        </div>
      </section>
    </article>
  </transition>
</template>

<script>
import Heading from "./generic/heading/Heading";
import VueButton from "./generic/vueButton/VueButton";
import Link from "./link/Link";

export default {
  name: "CookieConsent",
  components: {
    Heading,
    VueButton,
    Link
  },
  props: {
    cookie: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      visible: true,
      title: "This website uses cookies",
      analyticsEvent: {
        category: "Cookie Consent",
        action: "click"
      }
    };
  },
  computed: {
    isVisible() {
      return this.cookie.consent || !this.visible ? false : true;
    }
  },
  methods: {
    createCookie: function(name, session) {
      const now = new Date();

      now.setMonth(now.getMonth() + 12);
      session
        ? (document.cookie = name + "=false;")
        : (document.cookie = name + "=true; expires=" + now.toUTCString());
      this.visible = false;

      this.$ga.event({
        eventCategory: this.analyticsEvent.category,
        eventAction: this.analyticsEvent.action,
        eventLabel: session ? "Decline" : "Accept"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";
@import "../assets/breakpoints.scss";
@import "../assets/colours.scss";

.cookieBanner {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0 0 1.75em;
  background-color: $blue;
  color: $white;

  .content {
    @extend .wrapper;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @include breakpoint(tablet) {
      flex-direction: row;
    }

    .block {
      width: 100%;
      padding: 1em;
      box-sizing: border-box;

      @include breakpoint(tablet) {
        flex: 1;
      }

      &.buttons {
        text-align: center;

        button {
          display: inline-block;
          margin: 0 0.375em;
        }
      }

      &.header {
        padding: 1em 2em;

        @include breakpoint(tablet) {
          padding: 1em 1em 1em 2em;
        }

        @include breakpoint(tabletLarge) {
          padding: 1em 1em 1em 3em;
        }

        @include breakpoint(desktop) {
          padding: 1em 1em 1em 4em;
        }
      }
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: bottom 0.3s ease-in-out;
}

.slide-enter-to,
.slide-leave {
  bottom: 0;
  transition-delay: 3s;
}

.slide-enter,
.slide-leave-to {
  bottom: -26em;
}
</style>
