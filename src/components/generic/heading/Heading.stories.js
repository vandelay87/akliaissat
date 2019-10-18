import { storiesOf } from '@storybook/vue';
import Heading from './Heading.vue';

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
        <Heading title="Subtitle 1" :subtitle="true"/>
        <Heading title="Subtitle 2" :subtitle="true" override="mdc-typography--subtitle2"/>
      </div>`,
  }))
  .add('alignment', () => ({
    components: { Heading },
    template: `<div class="mdc-layout-grid">
        <Heading title="Left" align="left" :size="4"/>
        <Heading title="Right" align="right" :size="4"/>
        <Heading title="Centre" align="centre" :size="4"/>
      </div>`,
  }));
