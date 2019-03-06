import { shallowMount } from '@vue/test-utils';
import Privacy from '../views/Privacy.vue';

describe('Privacy.vue', () => {
  it('renders view', () => {
    const wrapper = shallowMount(Privacy, {
    });

    expect(wrapper.contains('div')).toBe(true);
    expect(wrapper.findAll('.privacy').length).toBe(1);
  });
});
