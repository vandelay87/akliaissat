<template>
  <header :class="align">
    <h2 v-if="size === 2">{{ title }}</h2>
    <h3 v-else-if="size === 3">{{ title }}</h3>
    <h4 v-else-if="size === 4">{{ title }}</h4>
    <h5 v-else-if="size === 5">{{ title }}</h5>
    <h6 v-else-if="size === 6">{{ title }}</h6>
    <h1 v-else>{{ title }}</h1>
    <p v-if="subtitle">{{ subtitle }}</p>
  </header>
</template>

<script>
  export default {
    name: 'Heading',
    props: {
      title: {
        type: String,
        required: true
      },
      size: Number,
      subtitle: String,
      align: {
        validator: function (value) {
          return ['left', 'right', 'centre'].indexOf(value) !== -1
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .left {
    text-align: left;
  }

  .right {
    text-align: right;
  }

  .centre {
    text-align: center;
  }

  h1 {
    font-size: 3em;
  }

  h2 {
    font-size: 2.25em;
  }

  h3 {
    font-size: 1.75em;
  }

  h4 {
    font-size: 1.125em;
  }
</style>
