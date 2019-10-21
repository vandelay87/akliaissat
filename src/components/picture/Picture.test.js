import { shallowMount } from '@vue/test-utils';
import Picture from './Picture.vue';

describe('Picture.vue', () => {
  it('renders image', () => {
    const wrapper = shallowMount(Picture, {
      propsData: {
        path: 'akliaissat/src/assets/images/me.jpg',
        alt: 'An hoop.',

      },
    });

    expect(wrapper.contains('img')).toBe(true);
    expect(wrapper.html()).toContain('An hoop.');
    expect(wrapper.props().path).toBe('akliaissat/src/assets/images/me.jpg');
    expect(wrapper.props().alt).toBe('An hoop.');
  });

  it('renders figure with caption', () => {
    const wrapper = shallowMount(Picture, {
      propsData: {
        path: 'akliaissat/src/assets/images/me.jpg',
        alt: 'An hoop.',
        caption: 'Hop, pops and cops.',
      },
    });

    expect(wrapper.contains('figure')).toBe(true);
    expect(wrapper.contains('figcaption')).toBe(true);
    expect(wrapper.html()).toContain('Hop, pops and cops.');
    expect(wrapper.props().caption).toBe('Hop, pops and cops.');
  });

  it('aligns image', () => {
    const wrapper = shallowMount(Picture, {
      propsData: {
        path: 'akliaissat/src/assets/images/me.jpg',
        alt: 'An hoop.',
        align: 'left',
      },
    });

    expect(wrapper.props().align).toBe('left');
  });

  it('returns no max-width', () => {
    const wrapper = shallowMount(Picture, {
      propsData: {
        path: 'akliaissat/src/assets/images/me.jpg',
        alt: 'An hoop.',
      },
    });

    expect(wrapper.attributes().style).toBe('max-width: none;');
  });

  it('returns 420px max-width', () => {
    const wrapper = shallowMount(Picture, {
      propsData: {
        path: 'akliaissat/src/assets/images/me.jpg',
        alt: 'An hoop.',
        width: '420px',
      },
    });

    expect(wrapper.attributes().style).toBe('max-width: 420px;');
  });

  it('returns 120px height', () => {
    const wrapper = shallowMount(Picture, {
      propsData: {
        path: 'akliaissat/src/assets/images/me.jpg',
        alt: 'An hoop.',
        height: '120px',
      },
    });

    expect(wrapper.attributes().style).toBe('max-width: none; height: 120px;');
  });
});
