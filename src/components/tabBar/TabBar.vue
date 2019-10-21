<template>
  <div class="mdc-tab-bar" role="tablist" ref="tabBar">
    <div class="mdc-tab-scroller">
      <div class="mdc-tab-scroller__scroll-area">
        <div class="mdc-tab-scroller__scroll-content">
          <Tab
            v-for="(tab, i) in tabs"
            :key="tab.id"
            :label="tab.label"
            :click="setSelectedTab(tab.id, i)"
          />
        </div>
      </div>
    </div>
    <div class="tab-content">
      <transition :name="transitionDirection" mode="out-in">
        <RichText v-for="tab in filteredTabs" :key="tab.id" :article="tab.content" />
      </transition>
    </div>
  </div>
</template>

<script>
import { MDCTabBar } from "@material/tab-bar";
import Tab from "./tab/Tab";
import RichText from "../richText/RichText";

export default {
  name: "TabBar",
  components: {
    Tab,
    RichText
  },
  props: {
    tabs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      tabBar: MDCTabBar,
      selectedTab: "",
      selectedTabIndex: 0,
      transitionDirection: ""
    };
  },
  mounted() {
    this.tabBar = new MDCTabBar(this.$refs.tabBar);
    this.tabBar.activateTab(0);
    this.selectedTab = this.tabs[0].id;
  },
  destroyed() {
    this.tabBar.destroy();
  },
  computed: {
    filteredTabs() {
      return this.tabs.filter(tab => tab.id === this.selectedTab);
    }
  },
  methods: {
    setSelectedTab(id, i) {
      return () => {
        i > this.selectedTabIndex
          ? (this.transitionDirection = "next")
          : (this.transitionDirection = "prev");
        this.tabBar.activateTab(i);
        this.selectedTab = id;
        this.selectedTabIndex = i;
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@material/tab-bar/mdc-tab-bar";
@import "~@material/tab-scroller/mdc-tab-scroller";

.tab-content {
  overflow: hidden;
}

.next-enter-active,
.next-leave-active,
.prev-enter-active,
.prev-leave-active {
  transition: 0.3s ease-in-out;
}

.next-enter,
.prev-leave-to {
  transform: translateX(30em);
  opacity: 0;
}

.next-enter-to,
.next-leave,
.prev-enter-to,
.prev-leave {
  transform: translateX(0);
  opacity: 1;
}

.next-leave-to,
.prev-enter {
  transform: translateX(-30em);
  opacity: 0;
}
</style>
