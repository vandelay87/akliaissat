import { mount, shallowMount } from '@vue/test-utils';
import sinon from 'sinon';
import VueButton from './VueButton.vue';

describe('VueButton.vue', () => {
  it('renders button', () => {
    const wrapper = mount(VueButton, {
      propsData: {
        value: 'click me',
        click: () => { }
      }
    });

    expect(wrapper.contains('button')).toBe(true);
    expect(wrapper.classes('mdc-button')).toBe(true);
    expect(wrapper.props().value).toBe('click me');
    expect(wrapper.html()).toContain('click me');
  });

  it('calls function when clicked', () => {
    const wrapper = mount(VueButton, {
      propsData: {
        value: 'click me',
        click: jest.fn()
      }
    });

    wrapper.find('button').trigger('click');
    expect(wrapper.props().click).toBe(wrapper.vm.click);
    expect(wrapper.vm.click).toHaveBeenCalledTimes(1);
  });

  it('adds custom class', () => {
    const wrapper = mount(VueButton, {
      propsData: {
        value: 'click me',
        click: () => { },
        raised: true,
        unelevated: true,
        outlined: true,
        dense: true
      }
    });

    expect(wrapper.props().raised).toBe(true);
    expect(wrapper.classes('mdc-button--raised')).toBe(true);
    expect(wrapper.props().unelevated).toBe(true);
    expect(wrapper.classes('mdc-button--unelevated')).toBe(true);
    expect(wrapper.props().outlined).toBe(true);
    expect(wrapper.classes('mdc-button--outlined')).toBe(true);
    expect(wrapper.props().dense).toBe(true);
    expect(wrapper.classes('mdc-button--dense')).toBe(true);
  });

  it('is disabled', () => {
    const wrapper = mount(VueButton, {
      propsData: {
        value: 'click me',
        click: jest.fn(),
        disabled: true
      }
    });

    wrapper.find('button').trigger('click');
    expect(wrapper.props().disabled).toBe(true);
    expect(wrapper.vm.click).toHaveBeenCalledTimes(0);
  });

  it('adds ripple', () => {
    const wrapper = mount(VueButton, {
      propsData: {
        value: 'click me',
        click: () => { }
      }
    });

    expect(typeof wrapper.vm.ripple).toBe('object');
  });

  it('destroys ripple', () => {
    const spy = sinon.stub();

    mount(VueButton, {
      propsData: {
        value: 'click me',
        click: () => { }
      },
      destroyed() {
        spy();
      }
    }).destroy();
    expect(spy.calledOnce).toBe(true);
  });

  it('adds icon', () => {
    const wrapper = mount(VueButton, {
      propsData: {
        value: 'click me',
        click: () => { },
        icon: 'warning'
      }
    });

    expect(wrapper.props().icon).toBe('warning');
    expect(wrapper.contains('i')).toBe(true);
    expect(wrapper.html()).toContain('mdc-button__icon');
  });
});
