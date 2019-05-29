<template>
  <header class="header" :class="align">
    <h2 v-if="size === 2" :class="override ? override : 'mdc-typography--headline2'">{{ title }}</h2>
    <h3
      v-else-if="size === 3"
      :class="override ? override : 'mdc-typography--headline3'"
    >{{ title }}</h3>
    <h4
      v-else-if="size === 4"
      :class="override ? override : 'mdc-typography--headline4'"
    >{{ title }}</h4>
    <h5
      v-else-if="size === 5"
      :class="override ? override : 'mdc-typography--headline5'"
    >{{ title }}</h5>
    <h6
      v-else-if="size === 6"
      :class="override ? override : 'mdc-typography--headline6'"
    >{{ title }}</h6>
    <h1 v-else :class="override ? override : 'mdc-typography--headline1'">{{ title }}</h1>
    <p v-if="subtitle" :class="override ? override : 'mdc-typography--subtitle1'">{{ subtitle }}</p>
  </header>
</template>

<script>
export default {
  name: "Heading",
  props: {
    title: {
      type: String,
      required: true
    },
    size: Number,
    subtitle: String,
    align: {
      validator: function(value) {
        return ["left", "right", "centre"].indexOf(value) !== -1;
      },
      type: String
    },
    override: {
      validator: function(value) {
        return (
          [
            "mdc-typography--headline1",
            "mdc-typography--headline2",
            "mdc-typography--headline3",
            "mdc-typography--headline4",
            "mdc-typography--headline5",
            "mdc-typography--headline6",
            "mdc-typography--subtitle1",
            "mdc-typography--subtitle2"
          ].indexOf(value) !== -1
        );
      },
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  &.left {
    text-align: left;
  }

  &.right {
    text-align: right;
  }

  &.centre {
    text-align: center;
  }
}
</style>
