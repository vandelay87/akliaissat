import { shallowMount } from '@vue/test-utils';
import Default from '../layouts/Default.vue';

describe('Default.vue', () => {
  it('renders app', () => {
    const wrapper = shallowMount(Default, {
      stubs: [
        'router-view',
      ],
    });

    expect(wrapper.contains('div')).toBe(true);
    expect(wrapper.findAll('.layout').length).toBe(1);
  });

  it('calls checkCookieConsent method when mounted', () => {
    const spy = jest.spyOn(Default.methods, 'checkCookieConsent');
    const wrapper = shallowMount(Default, {
      stubs: [
        'router-view',
      ],
    });

    expect(spy).toHaveBeenCalled();
    expect(wrapper.vm.cookie.consent).toBe(false);
  });

  it('sets consent to be true if cookie exists', () => {
    Object.defineProperty(document, 'cookie', {
      get: jest.fn().mockImplementation(() => { return 'cookie_consent=true;'; }),
    });
    const wrapper = shallowMount(Default, {
      stubs: [
        'router-view',
      ],
    });

    expect(wrapper.vm.cookie.consent).toBe(true);
  });
});
