import { storiesOf } from '@storybook/vue';
import Social from './Social.vue';

const headingStub = {
  title: "Social media",
  align: "centre",
  size: 2
}
const twitterStub = {
  key: "1",
  name: "twitter",
  username: "username",
  profileUrl: "https://twitter.com",
  icon: {
    file: {
      url: 'https://via.placeholder.com/200x180'
    },
    description: 'An image.'
  },
  description: 'Twitter description'
}
const githubStub = {
  key: "2",
  name: "github",
  username: "username",
  profileUrl: "https://github.com",
  icon: {
    file: {
      url: 'https://via.placeholder.com/200x180'
    },
    description: 'An image.'
  },
  description: 'Github description'
}
const facebookStub = {
  key: "2",
  name: "facebook",
  username: "username",
  profileUrl: "https://facebook.com",
  icon: {
    file: {
      url: 'https://via.placeholder.com/200x180'
    },
    description: 'An image.'
  },
  description: 'Facebook description'
}

storiesOf('Social', module)
  .add('default', () => ({
    components: { Social },
    data() {
      return {
        heading: headingStub,
        socialAccounts: [twitterStub]
      }
    },
    template: `<Social :heading="heading" :socialAccounts="socialAccounts" />`
  }))
  .add('two accounts', () => ({
    components: { Social },
    data() {
      return {
        heading: headingStub,
        socialAccounts: [twitterStub, githubStub]
      }
    },
    template: `<Social :heading="heading" :socialAccounts="socialAccounts" />`
  }))
  .add('three accounts', () => ({
    components: { Social },
    data() {
      return {
        heading: headingStub,
        socialAccounts: [twitterStub, githubStub, facebookStub]
      }
    },
    template: `<Social :heading="heading" :socialAccounts="socialAccounts" />`
  }));
