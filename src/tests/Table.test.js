import { mount } from '@vue/test-utils';
import Table from '../components/generic/Table.vue';

describe('Table.vue', () => {
  it('renders table', () => {
    const wrapper = mount(Table, {
      propsData: {
        headers: ['1', '2'],
        data: ['3', '4'],
      },
    });

    expect(wrapper.contains('table')).toBe(true);
    expect(wrapper.props().headers).toContain('2');
    expect(wrapper.props().data).toContain('4');
  });
});
