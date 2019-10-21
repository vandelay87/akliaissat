import { configure } from '@storybook/vue';
import '@material/layout-grid/dist/mdc.layout-grid.min.css';
import '@material/typography/dist/mdc.typography.min.css';
import theme from "../src/assets/theme.scss";

function loadStories() {
  const req = require.context('../src', true, /.stories.js$/);

  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
