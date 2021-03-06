import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import Link from './Link.vue';

describe('Link.vue', () => {
  it('renders link', () => {
    const wrapper = shallowMount(Link, {
      propsData: {
        path: 'https://www.google.com',
        text: 'boggle.bob',
        outbound: true,
      },
      stubs: {
        GLink: RouterLinkStub,
      },
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.contains('a')).toBe(true);
    expect(wrapper.props().path).toBe('https://www.google.com');
    expect(wrapper.props().text).toBe('boggle.bob');
    expect(wrapper.props().outbound).toBe(true);
    expect(wrapper.html()).toContain('boggle');
  });

  it('calls href when clicked', () => {
    const wrapper = shallowMount(Link, {
      propsData: {
        path: 'https://www.bbc.co.uk',
        text: 'goggle.gob',
        outbound: true,
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

    wrapper.find('a').trigger('click');
    expect(wrapper.vm.path).toBe('https://www.bbc.co.uk');
    expect(wrapper.vm.$ga.event).toHaveBeenCalledTimes(1);
  });

  it('binds valid custom class', () => {
    const wrapper = shallowMount(Link, {
      propsData: {
        path: 'https://www.github.com',
        text: 'gothub.lom',
        customClass: 'alt',
        outbound: true,
      },
      stubs: {
        GLink: RouterLinkStub,
      },
    });

    expect(wrapper.classes('alt')).toBe(true);
  });
});
