<template>
  <article class="bio">
    <Heading :title="heading.title" :align="heading.align" />
    <Picture
      :path="image.image.file.url"
      :alt="image.alt"
      :align="image.align"
      :caption="image.caption"
      :width="setImageWidth"
    />
    <div class="body">
      <p>
        My name is Akli, I'm {{ getAge }} years old and I'm a web developer. For some reason you've stumbled across my website. I feel honoured! I made this website using a really cool framework called
        <Link text="Vue.js" path="https://vuejs.org/" :outbound="true" />. You can have a look at the code on my
        <Link text="GitHub" path="https://github.com/vandelay87/akliaissat" :outbound="true" />.
      </p>
      <Notice type="warning">
        <p>This website is a WIP. It's getting better all the time.</p>
      </Notice>
      <p>I made this website because I owned the domain for a while, I wanted to learn Vue.js and I wanted to have a place where I can make and show off cool stuff!</p>
      <p>I like stuff. Stuff like socialism, The Beatles, cat GIFs, football, science, computer games, IPAs, technology, silly/dark humour, among other things. Recently I've been into going down a rabbit hole of blackhole videos on YouTube. Time well spent me thinks.</p>
    </div>
  </article>
</template>

<script>
import Heading from "./generic/heading/Heading";
import Picture from "./generic/Picture";
import Link from "./generic/Link";
import Notice from "./generic/Notice";

export default {
  name: "Bio",
  components: {
    Heading,
    Picture,
    Link,
    Notice
  },
  props: {
    heading: {
      type: Object,
      required: true
    },
    image: {
      type: Object,
      required: true
    }
  },
  computed: {
    getAge() {
      const birthday = new Date("September 09, 1987");
      const age = new Date(Date.now() - birthday.getTime());

      return Math.abs(age.getUTCFullYear() - 1970);
    },
    setImageWidth() {
      return this.image.width ? this.image.width + "px" : "none";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";
@import "../assets/breakpoints.scss";

.bio {
  @extend .wrapperPadding;
  @extend .article;
  overflow: hidden;

  .body {
    font-size: 1.125em;
    line-height: 1.6;

    > p {
      margin: 1.375em auto;
    }
  }
}
</style>
