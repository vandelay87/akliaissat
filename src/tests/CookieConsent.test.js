import { RouterLinkStub, mount } from '@vue/test-utils';
import CookieConsent from '../components/CookieConsent.vue';

describe('CookieConsent.vue', () => {
  it('renders component', () => {
    const wrapper = mount(CookieConsent, {
      propsData: {
        cookie: {
          consent: false,
          name: 'nomnom',
        },
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });

    expect(wrapper.contains('article')).toBe(true);
    expect(wrapper.props().cookie.consent).toBe(false);
    expect(wrapper.props().cookie.name).toBe('nomnom');
  });
});
