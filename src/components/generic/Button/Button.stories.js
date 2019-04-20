import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Button from './Button.vue';

storiesOf('Button', module).add('default', () => ({
  components: { Button },
  template: '<Button value="Cool" :onClick="() => {}"/>'
}));
