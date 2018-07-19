<template lang="pug">
  section
    h1.fs-32.c-white-90 {{ header }}
    p.fs-16.c-white-80 {{ description }}
    hr
</template>

<script>
  export default {
    props: {
      header: String,
      description: String,
    },
  }
</script>

<style lang="sass" scoped>

</style>
