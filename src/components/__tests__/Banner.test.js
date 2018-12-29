import { mount } from '@vue/test-utils';
import Banner from '../Banner.vue';

describe('Banner.vue', () => {
  it('renders component', () => {
    const wrapper = mount(Banner, {});

    expect(wrapper.contains('article')).toBe(true);
  });
});
