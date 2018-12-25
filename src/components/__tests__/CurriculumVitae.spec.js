import { mount } from '@vue/test-utils';
import CurriculumVitae from '../CurriculumVitae.vue';

describe('CurriculumVitae.vue', () => {
  it('displays skills', () => {
    const wrapper = mount(CurriculumVitae, {});

    expect(wrapper.contains('ul')).toBe(true);
  });
});
