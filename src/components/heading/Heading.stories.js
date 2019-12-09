import { storiesOf } from '@storybook/vue';
import Heading from './Heading.js';

storiesOf('Heading', module)
  .add('sizes', () => ({
    components: { Heading },
    template: `<div class="mdc-layout-grid">
        <Heading title="Heading 1"/>
        <Heading title="Heading 2" :size="2"/>
        <Heading title="Heading 3" :size="3"/>
        <Heading title="Heading 4" :size="4"/>
        <Heading title="Heading 5" :size="5"/>
        <Heading title="Heading 6" :size="6"/>
        <Heading title="Subtitle 1" override="mdc-typography--subtitle1"/>
        <Heading title="Subtitle 2" override="mdc-typography--subtitle2"/>
      </div>`,
  }))
  .add('alignment', () => ({
    components: { Heading },
    template: `<div class="mdc-layout-grid">
        <Heading title="Left" align="left" :size="4"/>
        <Heading title="Right" align="right" :size="4"/>
        <Heading title="Centre" align="center" :size="4"/>
      </div>`,
  }));
