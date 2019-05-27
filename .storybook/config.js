import { configure } from '@storybook/vue';

function loadStories() {
  const req = require.context('../src', true, /.stories.js$/);

  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);