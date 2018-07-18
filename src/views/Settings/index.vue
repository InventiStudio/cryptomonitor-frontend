<template lang="pug">
  .container
    .row
      .col-md-12
        Header
        hr
        CurrencyTypeForm
</template>

<script>
  import Header from './Header'
  import CurrencyTypeForm from './CurrencyTypeForm'

  export default {
    components: {
      Header,
      CurrencyTypeForm,
    },
  }

</script>

<style lang="sass" scoped>

</style>
