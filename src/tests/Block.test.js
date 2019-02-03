import { shallowMount } from '@vue/test-utils';
import Block from '../components/generic/Block.vue';

describe('Block.vue', () => {
  it('renders block', () => {
    const wrapper = shallowMount(Block, {
      propsData: {
        type: 'warning',
      },
      slots: {
        default: '<div class="msg-msg-msg">peace and love</div>',
      },
    });

    expect(wrapper.contains('div')).toBe(true);
    expect(wrapper.html()).toContain('peace and love');
    expect(wrapper.findAll('.msg-msg-msg').length).toBe(1);
    expect(wrapper.props().type).toBe('warning');
  });
});
