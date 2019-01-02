import { mount } from '@vue/test-utils';
import Footer from '../Footer.vue';

describe('Footer.vue', () => {
  it('renders component', () => {
    const wrapper = mount(Footer, {});

    expect(wrapper.contains('footer')).toBe(true);
  });
});
