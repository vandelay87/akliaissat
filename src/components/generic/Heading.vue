<template>
  <header>
    <h2 v-if="size == 2">{{ title }}</h2>
    <h3 v-else-if="size == 3">{{ title }}</h3>
    <h4 v-else-if="size == 4">{{ title }}</h4>
    <h5 v-else-if="size == 5">{{ title }}</h5>
    <h6 v-else-if="size == 6">{{ title }}</h6>
    <h1 v-else>{{ title }}</h1>

  </header>
</template>

<script>
  export default {
    name: 'Heading',
    props: ['title', 'size'],
  }
</script>
