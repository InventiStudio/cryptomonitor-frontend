<template lang="pug">
  section
    form
      .inline-block(v-for="cryptoCurrency in cryptoCurrencies")
        input(type="checkbox" :value="cryptoCurrency.value" :id="cryptoCurrency.value.toLowerCase()" @change="updateCryptoCurrency" v-model="selectedCryptoCurrency")
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
    methods: {
      async updateCryptoCurrency() {
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(alert('crypto currencies have been updated'))
          },1000)
        });
        console.log('after updated')
      },
    },
  }
</script>

<style lang="sass" scoped>
  .inline-block
    display: inline-block
</style>
