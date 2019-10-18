import { storiesOf } from '@storybook/vue';
import TopAppBar from './TopAppBar.vue';

storiesOf('Top App Bar', module)
  .add('simple', () => ({
    components: { TopAppBar },
    template: `<div class="mdc-layout-grid">
        <TopAppBar title="Website"/>
      </div>`,
  }));
