<template lang="pug">
  .container
    .row
      .col-md-12
        SectionHeading(header="Personalize graph" description="Select currencies that you want to tran on monitor by default")
        CurrencyTypeForm(:currencies="currencies" :cryptoCurrencies="cryptoCurrencies")
    .row.mt-48
      .col-md-12
        SectionHeading(header="Change e-mail address" description="Don't worry. We won't spam your inbox")
        UpdateAccountInfoForm(infoType="text" :labels="emailLabels" :initialValue="accountInfo.email" :placeholders="emailPlaceholders")
</template>

<script>
  import SectionHeading from './SectionHeading'
  import CurrencyTypeForm from './CurrencyTypeForm'
  import UpdateAccountInfoForm from './UpdateAccountInfoForm'

  export default {
    components: {
      SectionHeading,
      CurrencyTypeForm,
      UpdateAccountInfoForm,
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
      emailLabels() {
        return [
          'Old email address',
          'New e-mail address',
          'Repeat new e-mail address',
        ]
      },
      emailPlaceholders() {
        return ['some@email.com','some@email.com','some@email.com']
      },
      accountInfo() {
        return {
          email: 'john.doe@mail.com',
          password: 'password',
        }
      },
      passwordLabels() {
        return [
          'Old password',
          'New password',
          'Repeat password',
        ]
      },
    },
  }

</script>

<style lang="sass" scoped>

</style>
