<template>
  <div class="notice" :class="type">
    <Alert v-if="type === 'warning'" class="icon" width="50" height="50"/>
    <Alert v-else-if="type === 'error'" class="icon"/>
    <Information v-else class="icon"/>
    <slot></slot>
  </div>
</template>

<script>
import Information from "../../assets/images/information.svg";
import Alert from "../../assets/images/alert.svg";

export default {
  name: "Notice",
  components: {
    Information,
    Alert
  },
  props: {
    type: {
      validator: function(value) {
        return ["warning", "danger"].indexOf(value) !== -1;
      },
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/colours.scss";

.notice {
  position: relative;
  display: flex;
  background: $blue;
  color: $white;
  padding: 0 2em 0 4em;

  &.warning {
    background: $warning;
  }

  &.error {
    background: $error;
  }

  .icon {
    position: absolute;
    height: 1.875em;
    width: 1.875em;
    top: 0.75em;
    left: 1.25em;
  }
}
</style>
