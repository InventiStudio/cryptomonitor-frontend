<template lang="pug">
  form
    .col-md-6
      label.c-white(for="password") Password
      input(type="password" id="password" v-model="password")
      button.o-btn.o-btn--red.c-blue.ml-24 Delete
</template>

<script>
  export default {
    data() {
      return {
        password: '',
      }
    },
  }
</script>

<style lang="sass" scoped>
  label
    display: block
</style>
