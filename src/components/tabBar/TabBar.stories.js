import { storiesOf } from '@storybook/vue';
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
const tabStubEducation = {
  key: '3',
  label: 'education',
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

storiesOf('Tab bar', module)
  .add('two tabs', () => ({
    components: { TabBar },
    data() {
      return {
        tabs: [tabStubSkills, tabStubExperience],
      };
    },
    template: `<div class="mdc-layout-grid">
        <TabBar :tabs="tabs"/>
      </div>`,
  }))
  .add('three tabs', () => ({
    components: { TabBar },
    data() {
      return {
        tabs: [tabStubSkills, tabStubExperience, tabStubEducation],
      };
    },
    template: `<div class="mdc-layout-grid">
        <TabBar :tabs="tabs"/>
      </div>`,
  }));
