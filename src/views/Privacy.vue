<template>
  <div class="privacy">
    <Heading title="Privacy Dump" />
    <p>I'm not doing anything funky with your data.</p>
    <Block
      :title="info.title"
      :link=true
      :linkText="info.link.text"
      :linkPath="info.link.path"
      :linkOutbound=true
    />
  </div>
</template>

<script>
  import Heading from '../components/generic/Heading'
  import Block from '../components/generic/Block'

  export default {
    name: 'Privacy',
    components: {
      Heading,
      Block,
    },
    data() {
      return {
        info: {
          title: 'I made this website. You can check out every line of code ',
          link: {
            text: 'here',
            path: 'https://github.com/vandelay87/akliaissat',
          }
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../assets/global.scss';

  .privacy {
    @extend .wrapperPadding;
  }
</style>
