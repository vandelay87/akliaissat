import { shallowMount } from '@vue/test-utils';
import Privacy from '../pages/Privacy.vue';

describe('Privacy.vue', () => {
  it('renders view', () => {
    const wrapper = shallowMount(Privacy, {
    });

    expect(wrapper.contains('div')).toBe(true);
    expect(wrapper.findAll('.privacy').length).toBe(1);
  });
});
