import { mount } from '@vue/test-utils';
import CookieConsent from '../CookieConsent.vue';

describe('CookieConsent.vue', () => {
  it('renders component', () => {
    const wrapper = mount(CookieConsent, {
      propsData: {
        cookie: {
          consent: false,
          name: 'nomnom',
        },
      },
    });

    expect(wrapper.contains('article')).toBe(true);
    expect(wrapper.props().cookie.consent).toBe(false);
    expect(wrapper.props().cookie.name).toBe('nomnom');
  });
});
