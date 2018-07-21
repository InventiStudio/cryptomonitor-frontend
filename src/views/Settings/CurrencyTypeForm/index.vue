<template lang="pug">
  section
    form
      .row
        .col-md-2(v-for="cryptoCurrency in cryptoCurrencies")
          LabeledInput(d-type="inline-block" :checked="cryptoCurrency.initiallyChecked" :label="cryptoCurrency.value" labelPos="right" type="checkbox" :value="cryptoCurrency.value" v-model="selectedCryptoCurrency")
        select(v-model="selectedCurrency")
          option(v-for="currency in currencies" :selected="currency.initiallySelected" :value="currency.value") {{ currency.value}}
</template>

<script>
  import LabeledInput from '../../../components/LabeledInput'

  export default {
    props: {
      currencies: Array,
      cryptoCurrencies: Array,
    },
    data() {
      return {
        selectedCryptoCurrency: this.cryptoCurrencies.filter(currency => currency.initiallyChecked)
                                                      .map(currency => currency.value),
        selectedCurrency: this.currencies.filter(currency => currency.initiallySelected)[0].value,
      }
    },
    components: {
      LabeledInput,
    },
  }
</script>

<style lang="sass" scoped>
  .inline-block
    display: inline-block
</style>
