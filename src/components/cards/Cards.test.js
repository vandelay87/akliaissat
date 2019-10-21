import { shallowMount, mount } from '@vue/test-utils';
import Cards from './Cards.vue';

const twitterStub = {
  key: '1',
  title: 'twitter',
  subtitle: 'username',
  icon: {
    file: {
      url: 'https://via.placeholder.com/200x180',
    },
    description: 'An image.',
  },
  description: 'Twitter description',
  link: 'https://twitter.com',
  category: 'Social',
};
const githubStub = {
  key: '2',
  title: 'github',
  subtitle: 'username',
  icon: {
    file: {
      url: 'https://via.placeholder.com/200x180',
    },
    description: 'An image.',
  },
  description: 'Github description',
  link: 'https://github.com',
  category: 'Social',
};

describe('Cards.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(Cards, {
      propsData: {
        cardList: [twitterStub],
      },
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.props().cardList.length).toBe(1);
  });

  it('sets grid class', () => {
    const wrapper = shallowMount(Cards, {
      propsData: {
        cardList: [twitterStub, githubStub],
      },
    });

    expect(wrapper.props().cardList.length).toBe(2);
    expect(wrapper.vm.setGridClass['mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-6-desktop']).toBe(true);
    expect(wrapper.vm.setGridClass['mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-12-desktop']).toBe(false);
    expect(wrapper.html()).toContain('mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-6-desktop');
  });

  it('calls function when clicked', () => {
    const wrapper = mount(Cards, {
      propsData: {
        cardList: [twitterStub],
      },
      mocks: {
        $ga: {
          event: jest.fn(),
        },
      },
    });
    window.open = jest.fn();

    wrapper.find('button').trigger('click');
    expect(window.open).toHaveBeenCalledTimes(1);
    expect(wrapper.vm.$ga.event).toHaveBeenCalledTimes(1);
  });
});
