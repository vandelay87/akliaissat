import { mount } from '@vue/test-utils';
import Heading from '../generic/Heading.vue';

describe('Heading.vue', () => {
  it('renders heading', () => {
    const wrapper = mount(Heading, {
      propsData: {
        title: 'I am the egg man',
      },
    });

    expect(wrapper.contains('h1')).toBe(true);
    expect(wrapper.props().title).toBe('I am the egg man');
    expect(wrapper.html()).toContain('I am the egg man');
  });

  it('renders h4 title', () => {
    const wrapper = mount(Heading, {
      propsData: {
        title: 'They are the egg men',
        size: 4,
      },
    });

    expect(wrapper.props().size).toBe(4);
    expect(wrapper.contains('h4')).toBe(true);
    expect(wrapper.contains('h1')).toBe(false);
  });

  it('aligns title', () => {
    const wrapper = mount(Heading, {
      propsData: {
        title: 'I am the walrus.',
        align: 'right',
      },
    });

    expect(wrapper.props().align).toBe('right');
    expect(wrapper.props().align).toBe('right');
  });
});
