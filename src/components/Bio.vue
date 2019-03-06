<template>
  <article class="bio">
    <Heading title="To Whom It May Concern" align="centre" />
    <Picture
      :path=image
      alt="A picture of me eating pizza."
      align="right"
      maxWidth='342px'
      caption="A picture of me eating a pizza in a totally normal way, like a regular human being."
    />
    <p>My name is Akli, I'm {{ getAge }} years old and I'm a web developer. For some reason you've stumbled across my website. I feel honoured! I made this website using a really cool framework called <Link text="Vue.js" path="https://vuejs.org/" :outbound=true />. You can have a look at the code over <Link text="here" path="https://github.com/vandelay87/akliaissat" :outbound=true /> on my GitHub.</p>
    <p>I made this website because I owned the domain for a while, I wanted to learn Vue.js and I wanted to have a place where I can make and show off cool stuff!</p>
  </article>
</template>

<script>
  import Heading from './generic/Heading'
  import Picture from './generic/Picture'
  import Link from './generic/Link'
  import Image from '../assets/images/me.jpg'

  export default {
    name: 'Bio',
    components: {
      Heading,
      Picture,
      Link,
    },
    data() {
      return {
        image: Image,
      }
    },
    computed: {
      getAge() {
        const birthday = new Date('September 09, 1987');
        const age = new Date(Date.now() - birthday.getTime());

        return Math.abs(age.getUTCFullYear() - 1970);
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../assets/global.scss';
  @import '../assets/breakpoints.scss';

  .bio {
    @extend .wrapperPadding;
    overflow: hidden;
  }
</style>
