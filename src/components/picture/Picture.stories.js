import { storiesOf } from '@storybook/vue';
import Picture from './Picture.vue';

storiesOf('Picture', module)
  .add('simple', () => ({
    components: { Picture },
    template: `<div class="mdc-layout-grid">
        <Picture path="https://via.placeholder.com/400x225" width="400px" alt="An image." />
      </div>`,
  }))
  .add('with caption', () => ({
    components: { Picture },
    template: `<div class="mdc-layout-grid">
        <Picture path="https://via.placeholder.com/400x225" width="400px" caption="This is a caption for this image." alt="An image." />
      </div>`,
  }))
  .add('alignment', () => ({
    components: { Picture },
    template: `<div class="mdc-layout-grid">
        <Picture path="https://via.placeholder.com/400x225" width="400px" align="right" alt="An image." />
      </div>`,
  }));
