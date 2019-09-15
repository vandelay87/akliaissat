import { storiesOf } from '@storybook/vue';
import VueTable from './VueTable.vue';

const headerStub = [
  {
    data: 'Colour',
    isNumeric: null,
  },
  {
    data: 'Shape',
    isNumeric: null,
  },
  {
    data: 'Sport',
    isNumeric: null,
  },
  {
    data: 'Animal',
    isNumeric: null,
  },
]
const rowsStub = [
  {
    data: [
      {
        data: 'Yellow',
        isNumeric: null,
      },
      {
        data: "Square",
        isNumeric: null,
      },
      {
        data: "Football",
        isNumeric: null,
      },
      {
        data: "Giraffe",
        isNumeric: null,
      },
    ]
  },
  {
    data: [
      {
        data: 'Green',
      },
      {
        data: "Triangle",
      },
      {
        data: "Rugby",
      },
      {
        data: "Grizzly bear",

      },
    ]
  },
]
const headerNumericStub = [
  {
    data: 'Dessert',
    isNumeric: null,
  },
  {
    data: 'Calories',
    isNumeric: true,
  },
  {
    data: 'Fat',
    isNumeric: true,
  },
  {
    data: 'Carbs',
    isNumeric: true,
  },
  {
    data: 'Protein (g)',
    isNumeric: true,
  },
]
const rowsNumericStub = [
  {
    data: [
      {
        data: 'Frozen yogurt',
        isNumeric: null,
      },
      {
        data: "159",
        isNumeric: true,
      },
      {
        data: "6",
        isNumeric: true,
      },
      {
        data: "24",
        isNumeric: true,
      },
      {
        data: "4",
        isNumeric: true,
      },
    ]
  },
  {
    data: [
      {
        data: 'Ice cream sandwich',
        isNumeric: null,
      },
      {
        data: "237",
        isNumeric: true,
      },
      {
        data: "9",
        isNumeric: true,
      },
      {
        data: "37",
        isNumeric: true,
      },
      {
        data: "4.3",
        isNumeric: true,
      },
    ]
  },
  {
    data: [
      {
        data: 'Eclair',
        isNumeric: null,
      },
      {
        data: "262",
        isNumeric: true,
      },
      {
        data: "16",
        isNumeric: true,
      },
      {
        data: "24",
        isNumeric: true,
      },
      {
        data: "6",
        isNumeric: true,
      },
    ]
  },
]

storiesOf('Table', module)
  .add('text', () => ({
    components: { VueTable },
    data() {
      return {
        headers: headerStub,
        rows: rowsStub
      }
    },
    template: `<div class="mdc-layout-grid">
        <VueTable label="Table label" :headers="headers" :rows="rows" />
      </div>`
  }))
  .add('numeric', () => ({
    components: { VueTable },
    data() {
      return {
        headers: headerNumericStub,
        rows: rowsNumericStub
      }
    },
    template: `<div class="mdc-layout-grid">
        <VueTable label="Table label" :headers="headers" :rows="rows" />
      </div>`
  }));
