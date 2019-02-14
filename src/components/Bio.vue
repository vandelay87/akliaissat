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
    <p>My name is Akli, I'm {{ getAge }} years old and I'm a web developer. For some reason you've stumbled across my website. I feel honoured!</p>
  </article>
</template>

<script>
  import Heading from './generic/Heading'
  import Picture from './generic/Picture'
  import Image from '../assets/images/me.jpg'

  export default {
    name: 'Bio',
    components: {
      Heading,
      Picture,
    },
    data() {
      return {
        image: Image,
      }
    },
    computed: {
      getAge() {
        const birthday = new Date('September 09, 1987');
        const ageDiference = Date.now() - birthday.getTime();
        const age = new Date(ageDiference);

        return Math.abs(age.getUTCFullYear() - 1970);
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../assets/breakpoints.scss';

  .bio {
    overflow: hidden;
  }
</style>
