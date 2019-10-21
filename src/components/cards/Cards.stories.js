import { storiesOf } from '@storybook/vue';
import Cards from './Cards.vue';

const twitterStub = {
  key: '1',
  title: 'twitter',
  subtitle: 'username',
  icon: {
    file: {
      url: 'https://via.placeholder.com/200x180',
    },
    description: 'An image.',
  },
  description: 'Twitter description',
  link: 'https://twitter.com',
  category: 'Social',
};
const githubStub = {
  key: '2',
  title: 'github',
  subtitle: 'username',
  icon: {
    file: {
      url: 'https://via.placeholder.com/200x180',
    },
    description: 'An image.',
  },
  description: 'Github description',
  link: 'https://github.com',
  category: 'Social',
};
const facebookStub = {
  key: '3',
  title: 'facebook',
  subtitle: 'username',
  icon: {
    file: {
      url: 'https://via.placeholder.com/200x180',
    },
    description: 'An image.',
  },
  description: 'Facebook description',
  link: 'https://facebook.com',
  category: 'Social',
};

storiesOf('Cards', module)
  .add('one card', () => ({
    components: { Cards },
    data() {
      return {
        cardList: [twitterStub],
      };
    },
    template: '<Cards :cardList="cardList" />',
  }))
  .add('two cards', () => ({
    components: { Cards },
    data() {
      return {
        cardList: [twitterStub, githubStub],
      };
    },
    template: '<Cards :cardList="cardList" />',
  }))
  .add('three cards', () => ({
    components: { Cards },
    data() {
      return {
        cardList: [twitterStub, githubStub, facebookStub],
      };
    },
    template: '<Cards :cardList="cardList" />',
  }));
