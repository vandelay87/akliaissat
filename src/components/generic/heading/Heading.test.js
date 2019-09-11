import { mount } from '@vue/test-utils';
import Heading from './Heading.vue';

describe('Heading.vue', () => {
  it('renders heading', () => {
    const wrapper = mount(Heading, {
      propsData: {
        title: 'I am the egg man'
      }
    });

    expect(wrapper.contains('h1')).toBe(true);
    expect(wrapper.props().title).toBe('I am the egg man');
    expect(wrapper.html()).toContain('I am the egg man');
  });

  it('renders h4 title', () => {
    const wrapper = mount(Heading, {
      propsData: {
        title: 'They are the egg men',
        size: 4
      }
    });

    expect(wrapper.props().size).toBe(4);
    expect(wrapper.contains('h4')).toBe(true);
    expect(wrapper.contains('h1')).toBe(false);
  });

  it('aligns title', () => {
    const wrapper = mount(Heading, {
      propsData: {
        title: 'I am the walrus.',
        align: 'right'
      }
    });

    expect(wrapper.props().align).toBe('right');
    expect(wrapper.classes('right')).toBe(true);
  });

  it('overrides style', () => {
    const wrapper = mount(Heading, {
      propsData: {
        title: 'goo goob goo joob',
        override: 'mdc-typography--headline3'
      }
    });

    expect(wrapper.contains('h1')).toBe(true);
    expect(wrapper.props().override).toBe('mdc-typography--headline3');
    expect(wrapper.html()).toContain('mdc-typography--headline3');
  });

  it('renders subtitle', () => {
    const wrapper = mount(Heading, {
      propsData: {
        title: 'woo!',
        subtitle: true
      }
    });

    expect(wrapper.contains('h6')).toBe(true);
    expect(wrapper.props().subtitle).toBe(true);
    expect(wrapper.html()).toContain('mdc-typography--subtitle1');
    expect(wrapper.html()).toContain('woo!');
  });

  it('adds theme class', () => {
    const wrapper = mount(Heading, {
      propsData: {
        title: 'hoo!',
        theme: 'mdc-theme--on-secondary'
      }
    });
    expect(wrapper.classes('mdc-theme--on-secondary')).toBe(true);
    expect(wrapper.props().theme).toBe('mdc-theme--on-secondary');
    expect(wrapper.html()).toContain('mdc-theme--on-secondary');
  });
});
