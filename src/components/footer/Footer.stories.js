import { storiesOf } from '@storybook/vue';
import Footer from './Footer.vue';

storiesOf('Footer', module)
  .add('simple', () => ({
    components: { Footer },
    template: `<div class="mdc-layout-grid">
        <Footer />
      </div>`,
  }));
