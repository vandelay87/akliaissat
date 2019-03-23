import { shallowMount } from '@vue/test-utils';
import Index from '../pages/Index.vue';

describe('Index.vue', () => {
  it('renders view', () => {
    const wrapper = shallowMount(Index, {
    });

    expect(wrapper.contains('div')).toBe(true);
    expect(wrapper.findAll('.index').length).toBe(1);
  });
});
