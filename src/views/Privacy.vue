<template>
  <div class="privacy">
    <Heading title="Privacy dump" />
    <section class="block">
      <p>I'm not doing anything funky with your data. I only ever create cookies to make the website work properly, always empty of any malicious intent. You have nothing to worry about, I'm a good boy.</p>
      <Block>
        <p>I made this website. You can check out every line of code
          <Link
            path="https://github.com/vandelay87/akliaissat"
            text="here"
            customClass="alt"
            :outbound=true />.</p>
      </Block>
      <p>Unfortunately, that annoying cookie message will show forever until you give your consent. Sorry.</p>
    </section>
    <section class="block">
      <Heading title="Mmm, cookies" :size=2 />
      <p>If you're somehow interested, here are all of the cookies that are used across the website.</p>
      <Table :headers="table.headers" :data="table.data" />
      <Disclaimer text="Whenever I write some code that contains functionality that can create cookies, this table will be updated." />
    </section>
  </div>
</template>

<script>
  import Heading from '../components/generic/Heading'
  import Block from '../components/generic/Block'
  import Link from '../components/generic/Link'
  import Table from '../components/generic/Table'
  import Disclaimer from '../components/generic/Disclaimer'

  export default {
    name: 'Privacy',
    components: {
      Heading,
      Block,
      Link,
      Table,
      Disclaimer,
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
              'If you decide to give your consent I create this cookie so I know if I have permission to create other cookies.',
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
