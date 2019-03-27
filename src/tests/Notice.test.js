import { shallowMount } from '@vue/test-utils';
import Notice from '../components/generic/Notice.vue';

describe('Notice.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(Notice, {
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
    expect(wrapper.findAll('.warning').length).toBe(1);
  });
});
