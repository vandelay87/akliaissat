<template>
  <button class="mdc-tab" role="tab" @click="click">
    <span class="mdc-tab__content">
      <span class="mdc-tab__text-label">{{ label }}</span>
    </span>
    <span class="mdc-tab-indicator">
      <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
    </span>
    <span class="mdc-tab__ripple"></span>
  </button>
</template>

<script>
export default {
  name: "Tab",
  props: {
    label: {
      type: String,
      required: true
    },
    click: Function
  }
};
</script>

<style lang="scss" scoped>
@import "@material/tab/mdc-tab";
@import "@material/tab-indicator/mdc-tab-indicator";
</style>
