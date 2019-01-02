import { mount } from '@vue/test-utils';
import Link from '../generic/Link.vue';

describe('Link.vue', () => {
  it('renders link', () => {
    const wrapper = mount(Link, {
      propsData: {
        link: 'https://www.google.com',
        text: 'boggle.bob',
      },
    });

    expect(wrapper.contains('a')).toBe(true);
    expect(wrapper.props().link).toBe('https://www.google.com');
    expect(wrapper.props().text).toBe('boggle.bob');
    expect(wrapper.html()).toContain('boggle');
  });

  it('calls href when clicked', () => {
    const wrapper = mount(Link, {
      propsData: {
        link: 'https://www.bbc.co.uk',
        text: 'goggle.gob',
      },
    });

    wrapper.find('a').trigger('click');
    expect(wrapper.vm.link).toBe('https://www.bbc.co.uk');
  });

  it('binds valid custom class', () => {
    const wrapper = mount(Link, {
      propsData: {
        link: 'https://www.github.com',
        text: 'gothub.lom',
        customClass: 'github',
      },
    });

    expect(wrapper.props().customClass).toBe('github');
    expect(wrapper.classes('github')).toBe(true);
  });
});
