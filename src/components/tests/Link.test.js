import { RouterLinkStub, shallowMount } from '@vue/test-utils';
import Link from '../generic/Link.vue';

describe('Link.vue', () => {
  it('renders link', () => {
    const wrapper = shallowMount(Link, {
      propsData: {
        path: 'https://www.google.com',
        text: 'boggle.bob',
        external: true,
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });

    expect(wrapper.contains('a')).toBe(true);
    expect(wrapper.props().path).toBe('https://www.google.com');
    expect(wrapper.props().text).toBe('boggle.bob');
    expect(wrapper.props().external).toBe(true);
    expect(wrapper.html()).toContain('boggle');
  });

  it('calls href when clicked', () => {
    const wrapper = shallowMount(Link, {
      propsData: {
        path: 'https://www.bbc.co.uk',
        text: 'goggle.gob',
        external: true,
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });

    wrapper.find('a').trigger('click');
    expect(wrapper.vm.path).toBe('https://www.bbc.co.uk');
  });

  it('binds valid custom class', () => {
    const wrapper = shallowMount(Link, {
      propsData: {
        path: 'https://www.github.com',
        text: 'gothub.lom',
        customClass: 'github',
        external: true,
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });

    expect(wrapper.props().customClass).toBe('github');
    expect(wrapper.classes('github')).toBe(true);
  });
});
