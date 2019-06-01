import { configure } from '@storybook/vue';
import '@material/layout-grid/dist/mdc.layout-grid.min.css';
import '@material/typography/dist/mdc.typography.min.css';

function loadStories() {
  const req = require.context('../src', true, /.stories.js$/);

  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
