<template>
  <footer class="disclaimer">
    <p>{{ text }}</p>
  </footer>
</template>

<script>
  export default {
    name: 'Disclaimer',
    props: {
      text: {
        type: String,
        required: true
      },
    },
  }
</script>

<style lang="scss" scoped>
  .disclaimer {
    font-size: 0.875em;
    font-style: italic;
  }
</style>
