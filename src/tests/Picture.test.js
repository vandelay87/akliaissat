import { shallowMount } from '@vue/test-utils';
import Picture from '../components/generic/Picture.vue';

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

    expect(wrapper.vm.style).toMatchObject({"maxWidth": "none"});
  });

  it('returns 420px max-width', () => {
    const wrapper = shallowMount(Picture, {
      propsData: {
        path: 'akliaissat/src/assets/images/me.jpg',
        alt: 'An hoop.',
        maxWidth: '420px',
      },
    });

    expect(wrapper.vm.style).toMatchObject({"maxWidth": "420px"});
  });
});