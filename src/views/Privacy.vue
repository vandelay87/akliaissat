<template>
  <div class="privacy">
    <Heading title="Privacy Dump" />
    <p>I'm not doing anything funky with your data.</p>
    <Block>
      <p>I made this website. You can check out every line of code
        <Link
          path="https://github.com/vandelay87/akliaissat"
          text="here"
          customClass="alt"
          :outbound=true />.</p>
    </Block>
    <section class="block">
      <p></p>
      <Table :headers="table.headers" :data="table.data" />
    </section>
  </div>
</template>

<script>
  import Heading from '../components/generic/Heading'
  import Block from '../components/generic/Block'
  import Link from '../components/generic/Link'
  import Table from '../components/generic/Table'

  export default {
    name: 'Privacy',
    components: {
      Heading,
      Block,
      Link,
      Table,
    },
    data() {
      return {
        table: {
          headers: [
            'Cookie',
            'Name',
            'Information',
          ],
          data: [
            [
              'Google Analytics',
              '_ga, _gat, _gid',
              'Your standard Google Analytics cookies that track stuff like page hits, clicks and events.',
            ],
            [
              'Cookie Consent',
              'cookie_consent',
              'If you decide to give your consent I save this cookie so I know if I have permission to save other cookies.',
            ]
          ]
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../assets/global.scss';

  .privacy {
    @extend .wrapperPadding;

    .block {
      margin: 1em 0;
    }
  }
</style>
