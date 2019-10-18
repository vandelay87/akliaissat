import { shallowMount } from '@vue/test-utils';
import sinon from 'sinon';
import TopAppBar from './TopAppBar.vue';

describe('TopAppBar.vue', () => {
  it('renders button', () => {
    const wrapper = shallowMount(TopAppBar, {
      propsData: {
        title: 'website',
      },
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.contains('header')).toBe(true);
    expect(wrapper.classes('bar')).toBe(true);
    expect(wrapper.html()).toContain(wrapper.props().title);
  });

  it('adds bar js', () => {
    const wrapper = shallowMount(TopAppBar, {
      propsData: {
        title: 'website',
      },
    });

    expect(typeof wrapper.vm.topAppBar).toBe('object');
  });

  it('destroys bar js', () => {
    const spy = sinon.stub();

    shallowMount(TopAppBar, {
      propsData: {
        title: 'website',
      },
      destroyed() {
        spy();
      },
    }).destroy();

    expect(spy.calledOnce).toBe(true);
  });
});
