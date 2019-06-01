<template>
  <button
    @click="click"
    ref="button"
    class="mdc-button"
    :class="[
      {'mdc-button--raised': raised},
      {'mdc-button--unelevated': unelevated},
      {'mdc-button--outlined': outlined},
      {'mdc-button--dense': dense}
    ]"
    :disabled="disabled"
  >
    <i v-if="icon" class="material-icons mdc-button__icon" aria-hidden="true">{{ icon }}</i>
    <span class="mdc-button__label">{{ value }}</span>
  </button>
</template>

<script>
import { MDCRipple } from "@material/ripple";

export default {
  name: "VueButton",
  props: {
    value: {
      type: String,
      required: true
    },
    click: {
      type: Function,
      required: true
    },
    disabled: Boolean,
    raised: Boolean,
    unelevated: Boolean,
    outlined: Boolean,
    dense: Boolean,
    icon: String
  },
  data() {
    return {
      ripple: MDCRipple
    };
  },
  mounted() {
    this.ripple = new MDCRipple(this.$refs.button);
  },
  destroyed() {
    this.ripple.destroy();
  }
};
</script>

<style lang="scss" scoped>
@import "~@material/button/mdc-button";
</style>
