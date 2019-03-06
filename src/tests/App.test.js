import { shallowMount } from '@vue/test-utils';
import App from '../App.vue';

describe('App.vue', () => {
  it('renders app', () => {
    const wrapper = shallowMount(App, {
      stubs: [
        'router-view',
      ],
    });

    expect(wrapper.contains('div')).toBe(true);
    expect(wrapper.findAll('#app').length).toBe(1);
  });

  it('calls checkCookieConsent method when mounted', () => {
    const spy = jest.spyOn(App.methods, 'checkCookieConsent');
    const wrapper = shallowMount(App, {
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
    const wrapper = shallowMount(App, {
      stubs: [
        'router-view',
      ],
    });

    expect(wrapper.vm.cookie.consent).toBe(true);
  });
});
