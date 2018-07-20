<template lang="pug">
  section
    form
      .inline-block(v-for="cryptoCurrency in cryptoCurrencies")
        input(type="checkbox" :value="cryptoCurrency.value" :id="cryptoCurrency.value.toLowerCase()" v-model="selectedCryptoCurrency")
        label.c-white(:for="cryptoCurrency.value.toLowerCase()") {{ cryptoCurrency.value }}
      select(v-model="selectedCurrency")
        option(v-for="currency in currencies" :selected="currency.initiallySelected" :value="currency.value") {{ currency.value}}
</template>

<script>
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
  }
</script>

<style lang="sass" scoped>
  .inline-block
    display: inline-block
</style>
