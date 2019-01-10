<template>
  <div id="app">
    <router-view></router-view>
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
    }
  }
</style>
