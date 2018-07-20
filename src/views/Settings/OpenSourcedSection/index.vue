<template lang="pug">
  .bg-white
    .row
      .col-md-6
        header
          h1.fs-32.c-black {{ header }}
          p.fs-16.c-black-80 {{ description }}
      .col-md-6.text-right
        button.o-btn.o-btn--black.c-white.fs-15
          a(href="https://github.com/InventiStudio/cryptomonitor-frontend") Go to Github
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
