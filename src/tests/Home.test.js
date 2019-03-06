import { shallowMount } from '@vue/test-utils';
import Home from '../views/Home.vue';

describe('Home.vue', () => {
  it('renders view', () => {
    const wrapper = shallowMount(Home, {
    });

    expect(wrapper.contains('div')).toBe(true);
    expect(wrapper.findAll('.home').length).toBe(1);
  });
});
