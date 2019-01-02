<template>
  <transition name="slide" appear>
    <article v-if="isVisible" class="cookieBanner">
      <section class="content">
        <div class="block header">
          <Heading
            :title=title
            :subtitle=subtitle
            :size=3
          />
        </div>
        <div class="block buttons">
          <Button value="Cool" :onClick="createCookie.bind(null, cookie.name)" />
          <Button value="Not Cool" :onClick="hideBanner" />
        </div>
      </section>
    </article>
  </transition>
</template>

<script>
  import Heading from './generic/Heading'
  import Button from './generic/Button'

  export default {
    name: 'CookieConsent',
    components: {
      Heading,
      Button
    },
    props: {
      cookie: {
        type: Object,
        required: true,
      }
    },
    data() {
      return {
        visible: true,
        title: "This website uses cookies",
        subtitle: "Is that cool? I use them to help the website run better. You can find more information on the privacy page.",
      }
    },
    computed: {
      isVisible() {
        return (this.cookie.consent || !this.visible) ? false : true;
      }
    },
    methods: {
      createCookie: function(name) {
        const now = new Date();

        now.setMonth( now.getMonth() + 12 );
        document.cookie = name + "=true; expires=" + now.toUTCString();
        this.cookie.consent = true;
      },
      hideBanner: function() {
        this.visible = false;
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../assets/global.scss';
  @import '../assets/breakpoints.scss';
  @import '../assets/variables.scss';

  .cookieBanner {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 0 0 0.750em;
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

  .slide-enter-active, .slide-leave-active {
    transition: bottom .3s;
  }

  .slide-enter-to, .slide-leave {
    bottom: 0;
    transition-delay: 3s;
  }

  .slide-enter, .slide-leave-to {
    bottom: -22.5em;

    @include breakpoint(tablet) {
      bottom: -14.375em;
    }

    @include breakpoint(tabletLarge) {
      bottom: -12.5em
    }
  }
</style>
