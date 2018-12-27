<template>
  <div id="app">
    <div>
      <Banner />
      <CurriculumVitae />
      <Social />
      <CookieConsent :cookie="cookie" />
      <p v-if="cookie.consent === true">showing cookie consent banner...</p>
    </div>
  </div>
</template>

<script>
  import Banner from './components/Banner'
  import CurriculumVitae from './components/CurriculumVitae'
  import Social from './components/Social'
  import CookieConsent from './components/CookieConsent'

  export default {
    name: 'App',
    components: {
      Banner,
      CurriculumVitae,
      Social,
      CookieConsent,
    },
    data() {
      return {
        cookie: {
          consent: false,
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

        for (var i = 0; i < cookies.length; i++) {
          if (cookies[i].trim() === this.cookie.name + '=true') this.cookie.consent = true;
        }
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
