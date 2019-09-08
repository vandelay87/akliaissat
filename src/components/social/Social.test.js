import { mount } from '@vue/test-utils';
import Social from './Social.vue';

const headingStub = {
  title: "Social media",
  align: "centre",
  size: 2
}
const twitterStub = {
  key: "1",
  name: "twitter",
  username: "username",
  profileUrl: "https://twitter.com",
  icon: {
    file: {
      url: 'https://via.placeholder.com/200x180'
    },
    description: 'An image.'
  }
}
const githubStub = {
  key: "2",
  name: "github",
  username: "username",
  profileUrl: "https://github.com",
  icon: {
    file: {
      url: 'https://via.placeholder.com/200x180'
    },
    description: 'An image.'
  }
}

describe('Social.vue', () => {
  it('renders component', () => {
    const wrapper = mount(Social, {
      propsData: {
        heading: headingStub,
        socialAccounts: [twitterStub]
      }
    });

    expect(wrapper.contains('section')).toBe(true);
    expect(wrapper.props().heading.title).toBe(headingStub.title);
    expect(wrapper.props().socialAccounts.length).toBe(1);
    expect(wrapper.html()).toContain(headingStub.title);
    expect(wrapper.html()).toContain(twitterStub.name);
  });

  it('sets grid class', () => {
    const wrapper = mount(Social, {
      propsData: {
        heading: headingStub,
        socialAccounts: [twitterStub, githubStub]
      }
    });

    expect(wrapper.props().socialAccounts.length).toBe(2);
    expect(wrapper.vm.setGridClass['mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-6-desktop']).toBe(true);
    expect(wrapper.vm.setGridClass['mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-12-desktop']).toBe(false);
    expect(wrapper.html()).toContain('mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-6-desktop');
  });

  it('calls function when clicked', () => {
    const wrapper = mount(Social, {
      propsData: {
        heading: headingStub,
        socialAccounts: [twitterStub]
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
