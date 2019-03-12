import { mount } from '@vue/test-utils';
import Banner from '../components/generic/Icon.vue';

describe('Icon.vue', () => {
  it('renders icon', () => {
    const wrapper = mount(Banner, {
      propsData: {
        icon: 'jasmine',
      },
    });

    expect(wrapper.contains('i')).toBe(true);
    expect(wrapper.props().icon).toBe('jasmine');
    expect(wrapper.classes('jasmine')).toBe(true);
  });
});
