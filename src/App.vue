<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <CookieConsent :cookie="cookie" />
    <Footer />
  </div>
</template>

<script>
  import CookieConsent from './components/CookieConsent'
  import Footer from './components/Footer'

  export default {
    name: 'App',
    components: {
      CookieConsent,
      Footer,
    },
    data() {
      return {
        cookie: {
          consent: true,
          name: 'cookie_consent'
        }
      }
    },
    mounted: function() {
      this.checkCookieConsent()
    },
    methods: {
      checkCookieConsent: function() {
        const cookies = document.cookie.split(';');
        let cookieExists = false;

        for (var i = 0; i < cookies.length; i++) {
          if (cookies[i].trim() === this.cookie.name + '=true') cookieExists = true;
        }

        if (!cookieExists) this.cookie.consent = false;
      }
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  body {
    margin: 0;

    #app {
      font-family: 'Open Sans', sans-serif;

      .fade-enter-active, .fade-leave-active {
        transition: opacity 0.3s;
      }

      .fade-enter-to, .fade-leave {
        opacity: 1;
      }

      .fade-enter, .fade-leave-to {
        opacity: 0;
      }
    }
  }
</style>
