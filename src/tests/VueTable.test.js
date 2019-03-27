import { mount } from '@vue/test-utils';
import VueTable from '../components/generic/VueTable.vue';

describe('VueTable.vue', () => {
  it('renders table', () => {
    const wrapper = mount(VueTable, {
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
