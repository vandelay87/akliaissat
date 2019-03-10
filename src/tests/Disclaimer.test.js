import { mount } from '@vue/test-utils';
import Disclaimer from '../components/generic/Disclaimer.vue';

describe('Disclaimer.vue', () => {
  it('renders component', () => {
    const wrapper = mount(Disclaimer, {
      propsData: {
        text: 'Marvel films are rubbish',
      },
    });

    expect(wrapper.contains('footer')).toBe(true);
    expect(wrapper.props().text).toBe('Marvel films are rubbish');
    expect(wrapper.html()).toContain('Marvel films are rubbish');
  });
});
