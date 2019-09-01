<template>
  <div class="layout mdc-typography">
    <transition name="fade" appear>
      <main>
        <slot/>
      </main>
    </transition>
    <CookieConsent :cookie="cookie"/>
    <Footer/>
  </div>
</template>

<script>
import CookieConsent from "../components/CookieConsent";
import Footer from "../components/Footer";

export default {
  name: "Default",
  components: {
    CookieConsent,
    Footer
  },
  data() {
    return {
      cookie: {
        consent: true,
        name: "cookie_consent"
      }
    };
  },
  mounted: function() {
    this.checkCookieConsent();
  },
  methods: {
    checkCookieConsent: function() {
      const cookies = document.cookie.split(";");
      let cookieExists = false;

      for (var i = 0; i < cookies.length; i++) {
        if (cookies[i].trim().split("=")[0] === this.cookie.name)
          cookieExists = true;
      }

      if (!cookieExists) this.cookie.consent = false;
    }
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
