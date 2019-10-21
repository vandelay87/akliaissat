import { shallowMount, mount } from '@vue/test-utils';
import sinon from 'sinon';
import TabBar from './TabBar.vue';

const tabStubSkills = {
  key: '1',
  label: 'skills',
  content: {
    data: {},
    content: [{
      data: {},
      content: [{
        data: {},
        marks: [],
        value: 'Dignissimos ducimus qui',
        nodeType: 'text',
      }],
      nodeType: 'heading-2',
    }, {
      data: {},
      content: [{
        data: {},
        marks: [],
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        nodeType: 'text',
      }],
      nodeType: 'paragraph',
    }],
    nodeType: 'document',
  },
};
const tabStubExperience = {
  key: '2',
  label: 'experience',
  content: {
    data: {},
    content: [{
      data: {},
      content: [{
        data: {},
        marks: [],
        value: 'Dignissimos ducimus qui',
        nodeType: 'text',
      }],
      nodeType: 'heading-2',
    }, {
      data: {},
      content: [{
        data: {},
        marks: [],
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        nodeType: 'text',
      }],
      nodeType: 'paragraph',
    }],
    nodeType: 'document',
  },
};

describe('TabBar.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(TabBar, {
      propsData: {
        tabs: [tabStubSkills, tabStubExperience],
      },
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.classes('mdc-tab-bar')).toBe(true);
    expect(wrapper.props().tabs.length).toBe(2);
  });

  it('adds adapter', () => {
    const wrapper = shallowMount(TabBar, {
      propsData: {
        tabs: [tabStubSkills, tabStubExperience],
      },
    });

    expect(typeof wrapper.vm.tabBar).toBeDefined();
    expect(typeof wrapper.vm.tabBar).toBe('object');
  });

  it('destroys adapter', () => {
    const spy = sinon.stub();

    shallowMount(TabBar, {
      propsData: {
        tabs: [tabStubSkills, tabStubExperience],
      },
      destroyed() {
        spy();
      },
    }).destroy();

    expect(spy.calledOnce).toBe(true);
  });

  it('sets tab state', () => {
    const wrapper = mount(TabBar, {
      propsData: {
        tabs: [tabStubSkills, tabStubExperience],
      },
    });

    expect(wrapper.vm.transitionDirection).toBe('');
    expect(wrapper.vm.selectedTabIndex).toEqual(0);
    wrapper.find('button:nth-child(2n)').trigger('click');
    expect(wrapper.vm.transitionDirection).toBe('next');
    expect(wrapper.vm.selectedTabIndex).toEqual(1);
    wrapper.find('button:nth-child(1n)').trigger('click');
    expect(wrapper.vm.transitionDirection).toBe('prev');
    expect(wrapper.vm.selectedTabIndex).toEqual(0);
  });
});
