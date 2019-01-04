import { mount } from '@vue/test-utils';
import CurriculumVitae from '../components/CurriculumVitae.vue';

describe('CurriculumVitae.vue', () => {
  it('renders component', () => {
    const wrapper = mount(CurriculumVitae, {});

    expect(wrapper.contains('article')).toBe(true);
  });
});
