import { shallowMount } from '@vue/test-utils';
import Heading from './Heading';

describe('Heading.js', () => {
  it('renders heading', () => {
    const wrapper = shallowMount(Heading, {
      context: {
        props: {
          title: 'I am the egg man',
        },
      },
    });

    expect(wrapper.contains('h1')).toBe(true);
    expect(wrapper.html()).toContain('I am the egg man');
  });

  it('renders h4 title', () => {
    const wrapper = shallowMount(Heading, {
      propsData: {
        title: 'They are the egg men',
        size: 4,
      },
    });

    expect(wrapper.contains('h4')).toBe(true);
    expect(wrapper.contains('h1')).toBe(false);
  });

  it('aligns title', () => {
    const wrapper = shallowMount(Heading, {
      propsData: {
        title: 'I am the walrus.',
        align: 'right',
      },
    });

    expect(wrapper.attributes('style')).toBe('text-align: right;');
  });

  it('overrides style', () => {
    const wrapper = shallowMount(Heading, {
      propsData: {
        title: 'goo goob goo joob',
        override: 'mdc-typography--headline3',
      },
    });

    expect(wrapper.contains('h1')).toBe(true);
    expect(wrapper.classes('mdc-typography--headline3')).toBe(true);
    expect(wrapper.classes('mdc-typography--headline1')).toBe(false);
  });

  it('adds theme class', () => {
    const wrapper = shallowMount(Heading, {
      propsData: {
        title: 'hoo!',
        theme: 'mdc-theme--on-secondary',
      },
    });
    expect(wrapper.classes('mdc-theme--on-secondary')).toBe(true);
  });
});
