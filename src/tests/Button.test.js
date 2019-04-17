import { mount } from '@vue/test-utils';
import Button from '../components/generic/Button.vue';

describe('Button.vue', () => {
  it('renders button', () => {
    const wrapper = mount(Button, {
      propsData: {
        value: 'click me',
        onClick: () => {},
      },
    });

    expect(wrapper.contains('button')).toBe(true);
    expect(wrapper.props().value).toBe('click me');
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
    expect(wrapper.props().onClick).toBe(wrapper.vm.onClick);
    expect(wrapper.vm.onClick).toHaveBeenCalledTimes(1);
  });

  it('binds valid custom class', () => {
    const wrapper = mount(Button, {
      propsData: {
        value: 'click me',
        onClick: () => {},
        customClass: 'twitter',
      },
    });

    expect(wrapper.props().customClass).toBe('twitter');
    expect(wrapper.classes('twitter')).toBe(true);
  });
});
