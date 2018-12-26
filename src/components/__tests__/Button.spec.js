import { mount } from '@vue/test-utils';
import Button from '../generic/Button.vue';

describe('Button.vue', () => {
  it('displays button', () => {
    const wrapper = mount(Button, {
      propsData: {
        value: 'click me',
        onClick: jest.fn(),
      },
    });

    expect(wrapper.contains('button')).toBe(true);
    expect(wrapper.html()).toContain('click me');
  });

  it('calls function when clicked', () => {
    const wrapper = mount(Button, {
      propsData: {
        value: 'click me',
        onClick: jest.fn(),
      },
    });

    wrapper.find('button').trigger('click');
    expect(wrapper.vm.onClick).toHaveBeenCalledTimes(1);
  });
});
