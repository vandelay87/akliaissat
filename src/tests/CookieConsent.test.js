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
        GLink: RouterLinkStub,
      },
    });

    expect(wrapper.contains('article')).toBe(true);
    expect(wrapper.props().cookie.consent).toBe(false);
    expect(wrapper.vm.visible).toBe(true);
    expect(wrapper.props().cookie.name).toBe('nomnom');
  });

  it('creates cookie and hides banner', () => {
    const wrapper = mount(CookieConsent, {
      propsData: {
        cookie: {
          consent: false,
          name: 'nomnom',
        },
      },
      stubs: {
        GLink: RouterLinkStub,
      },
      mocks: {
        $ga: {
          event: jest.fn(),
        },
      },
    });
    const button = wrapper.find('button:first-of-type');

    button.trigger('click');
    expect(wrapper.vm.visible).toBe(false);
    expect(wrapper.vm.isVisible).toBe(false);
    expect(wrapper.vm.$ga.event).toHaveBeenCalledTimes(1);
  });

  it('hides banner', () => {
    const wrapper = mount(CookieConsent, {
      propsData: {
        cookie: {
          consent: false,
          name: 'nomnom',
        },
      },
      stubs: {
        GLink: RouterLinkStub,
      },
      mocks: {
        $ga: {
          event: jest.fn(),
        },
      },
    });
    const button = wrapper.find('button:nth-of-type(2)');

    button.trigger('click');
    expect(wrapper.vm.visible).toBe(false);
    expect(wrapper.vm.isVisible).toBe(false);
    expect(wrapper.vm.$ga.event).toHaveBeenCalledTimes(1);
  });

  it('hides banner if user gives consent', () => {
    const wrapper = mount(CookieConsent, {
      propsData: {
        cookie: {
          consent: true,
          name: 'nomnom',
        },
      },
      stubs: {
        GLink: RouterLinkStub,
      },
      mocks: {
        $ga: {
          event: jest.fn(),
        },
      },
    });

    expect(wrapper.vm.isVisible).toBe(false);
  });
});
