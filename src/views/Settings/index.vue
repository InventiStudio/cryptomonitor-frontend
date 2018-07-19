<template lang="pug">
  .container
    .row
      .col-md-12
        SectionHeading(header="Personalize graph" description="Select currencies that you want to tran on monitor by default")
        CurrencyTypeForm(:currencies="currencies" :cryptoCurrencies="cryptoCurrencies")
</template>

<script>
  import SectionHeading from './SectionHeading'
  import CurrencyTypeForm from './CurrencyTypeForm'

  export default {
    components: {
      SectionHeading,
      CurrencyTypeForm,
    },
    computed: {
      currencies() {
        return [
          { value: 'PLN', initiallySelected: false },
          { value: 'USD', initiallySelected: true },
          { value: 'GBP', initiallySelected: false },
          { value: 'EUR', initiallySelected: false },
        ]
      },
      cryptoCurrencies() {
        return [
          { value: 'Bitcoin', initiallyChecked: true, bgColor: 'red' },
          { value: 'Bitcash', initiallyChecked: false, bgColor: 'yellow' },
          { value: 'Etherium', initiallyChecked: false, bgColor: 'violet' },
          { value: 'LittleCoin', initiallyChecked: false, bgColor: 'transparent' },
        ]
      },
    },
  }

</script>

<style lang="sass" scoped>

</style>
