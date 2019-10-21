import { mount } from '@vue/test-utils';
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
];
const rowsStub = [
  {
    data: [
      {
        data: 'Yellow',
        isNumeric: null,
      },
      {
        data: 'Square',
        isNumeric: null,
      },
    ],
  },
  {
    data: [
      {
        data: 'Green',
        isNumeric: null,
      },
      {
        data: 'Triangle',
        isNumeric: null,
      },
    ],
  },
];
const rowsNumericStub = [
  {
    data: [
      {
        data: '55.43',
        isNumeric: true,
      },
      {
        data: '2',
        isNumeric: true,
      },
    ],
  },
  {
    data: [
      {
        data: '1005',
        isNumeric: true,
      },
      {
        data: '99.9',
        isNumeric: true,
      },
    ],
  },
];

describe('VueTable.vue', () => {
  it('renders table', () => {
    const wrapper = mount(VueTable, {
      propsData: {
        label: 'Favourite table',
        headers: headerStub,
        rows: rowsStub,
      },
    });

    expect(wrapper.contains('table')).toBe(true);
    expect(wrapper.props().label).toBe('Favourite table');
    expect(wrapper.html()).toContain('Favourite table');
    expect(wrapper.html()).toContain('Colour');
    expect(wrapper.html()).toContain('Yellow');
    expect(wrapper.html()).toContain('Triangle');
  });

  it('renders numeric table data', () => {
    const wrapper = mount(VueTable, {
      propsData: {
        label: 'Favourite table',
        headers: headerStub,
        rows: rowsNumericStub,
      },
    });

    expect(wrapper.html()).toContain('mdc-data-table__cell--numeric');
    expect(wrapper.html()).toContain('55.43');
  });
});
