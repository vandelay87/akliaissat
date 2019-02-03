import { shallowMount } from '@vue/test-utils';
import Block from '../components/generic/Block.vue';

describe('Block.vue', () => {
  it('renders block', () => {
    const wrapper = shallowMount(Block, {
      propsData: {
        type: 'warning',
      },
      slots: {
        foo: '<h1>Stop right now!</h1>',
      },
    });

    expect(wrapper.html()).toContain('Stop right now!');
    expect(wrapper.props().type).toBe('warning');
  });
});
