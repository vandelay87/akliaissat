import { mount } from '@vue/test-utils';
import Bio from '../components/Bio.vue';

describe('Banner.vue', () => {
  it('renders component', () => {
    const wrapper = mount(Bio, {});

    expect(wrapper.contains('article')).toBe(true);
  });
});
