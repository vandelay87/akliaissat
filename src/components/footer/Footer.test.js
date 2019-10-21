import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import Footer from './Footer.vue';

describe('Footer.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(Footer, {
      stubs: {
        GLink: RouterLinkStub,
      },
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.contains('footer')).toBe(true);
  });
});
