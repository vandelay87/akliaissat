import { storiesOf } from '@storybook/vue';
import Social from './Social.vue';

const fakeProps = [
  {
    account: "@vandelay1987"
    address: "https://twitter.com/vandelay1987"
    name: "twitter"
  }
]

storiesOf('Social', module)
  .add('default', () => ({
    components: { Social },
    template: `<Social />`
  }));
