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
    <div>
      <RichText v-for="tab in filteredTabs" :key="tab.id" :article="tab.content" />
    </div>
  </div>
</template>

<script>
import { MDCTabBar } from "@material/tab-bar";
import Tab from "./tab/Tab";
import RichText from "../generic/richText/RichText";

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
      selectedTab: ""
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
        this.tabBar.activateTab(i);
        this.selectedTab = id;
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@material/tab-bar/mdc-tab-bar";
@import "~@material/tab-scroller/mdc-tab-scroller";
</style>
