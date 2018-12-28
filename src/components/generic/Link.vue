<template>
  <a :href="link" class="link">
    {{ text }}
  </a>
</template>

<script>
  export default {
    name: 'Link',
    props: {
      link: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/variables.scss';

  .link {
    color: $link;

    &:hover, &:active, &:focus {
      color: $linkHover;
    }
  }
</style>
