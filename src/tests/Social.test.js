import { mount } from '@vue/test-utils';
import Social from '../components/Social.vue';

describe('Social.vue', () => {
  it('renders component', () => {
    const wrapper = mount(Social, {});

    expect(wrapper.contains('article')).toBe(true);
  });
});
