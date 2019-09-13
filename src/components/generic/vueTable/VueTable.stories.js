import { storiesOf } from '@storybook/vue';
import VueTable from './VueTable.vue';

const headerStub = [
  {
    data: 'Heading 1'
  },
  {
    data: 'Heading 2'
  },
  {
    data: 'Heading 3'
  },
]
const rowStub = [
  {
    data: [
      {
        data: 'Data 1'
      },
      {
        data: "Data 2"
      },
      {
        data: "Data 3"
      },
    ]
  },
  {
    data: [
      {
        data: 'Data 1'
      },
      {
        data: "Data 2"
      },
      {
        data: "Data 3"
      },
    ]
  },
]

storiesOf('Table', module)
  .add('default', () => ({
    components: { VueTable },
    data() {
      return {
        headers: headerStub,
        rows: rowStub
      }
    },
    template: `<div class="mdc-layout-grid">
        <VueTable label="Table label" :headers="headers" :rows="rows" />
      </div>`
  }));
