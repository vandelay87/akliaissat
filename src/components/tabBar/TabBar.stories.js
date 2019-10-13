import { storiesOf } from '@storybook/vue';
import TabBar from './TabBar.vue';

storiesOf('Tab Bar', module)
    .add('default', () => ({
        components: { TabBar },
        template: `<div class="mdc-layout-grid">
        <TabBar />
      </div>`
    }));