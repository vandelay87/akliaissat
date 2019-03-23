import { RouterLinkStub, mount } from '@vue/test-utils';
import Footer from '../components/Footer.vue';

describe('Footer.vue', () => {
  it('renders component', () => {
    const wrapper = mount(Footer, {
      stubs: {
        GLink: RouterLinkStub,
      },
    });

    expect(wrapper.contains('footer')).toBe(true);
  });
});
