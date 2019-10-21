import { shallowMount } from '@vue/test-utils';
import Tab from './Tab.vue';

describe('Tab.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(Tab, {
      propsData: {
        label: 'skills',
        click: () => { },
      },
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.classes('mdc-tab')).toBe(true);
    expect(wrapper.props().label).toBe('skills');
  });

  it('calls function when clicked', () => {
    const wrapper = shallowMount(Tab, {
      propsData: {
        label: 'skills',
        click: jest.fn(),
      },
    });

    wrapper.find('button').trigger('click');
    expect(wrapper.props().click).toBe(wrapper.vm.click);
    expect(wrapper.vm.click).toHaveBeenCalledTimes(1);
  });
});
