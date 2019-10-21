import { storiesOf } from '@storybook/vue';
import Link from './Link.vue';

storiesOf('Link', module)
  .add('outbound', () => ({
    components: { Link },
    template: `<div class="mdc-layout-grid">
          <Link path="https://www.google.com" text="google" outbound />
      </div>`,
  }))
  .add('alt', () => ({
    components: { Link },
    template: `<div class="mdc-layout-grid">
          <Link path="https://www.google.com" text="google" customClass="alt" outbound />
      </div>`,
  }));
