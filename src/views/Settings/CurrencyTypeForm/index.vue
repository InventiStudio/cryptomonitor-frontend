<template lang="pug">
  section
    form
      input(type="checkbox" value="Bitcoin" id="bitcoin" v-model="chosenCryptoCurrency")
      label(for="bitcoin") Bitcoin
      input(type="checkbox" value="Bitcash" id="bitcash" v-model="chosenCryptoCurrency")
      label(for="bitcash") Bitcash
      input(type="checkbox" id="etherium" value="Etherium" v-model="chosenCryptoCurrency")
      label(for="etherium") Etherium
      input(type="checkbox" id="littleCoin" value="LittleCoin" v-model="chosenCryptoCurrency")
      label(for="littleCoin") LittleCoin
      select(v-model="selectedCurrency")
        option(selected="true" value="USD") USD
        option(value="PLN") PLN
        option(value="GBP") GBP
        option(value="EUR") EUR
</template>

<script>
  export default {
    data() {
      return {
        chosenCryptoCurrency: [],
        selectedCurrency: 'USD',
      }
    },
  }
</script>

<style lang="sass" scoped>

</style>
