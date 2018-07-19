<template lang="pug">
  main
    .container
      section
        .row
          .col-md-12
            SectionHeading(header="Personalize graph" description="Select currencies that you want to tran on monitor by default")
            CurrencyTypeForm(:currencies="currencies" :cryptoCurrencies="cryptoCurrencies")
      section
        .row.mt-48
          .col-md-12
            SectionHeading(header="Change e-mail address" description="Don't worry. We won't spam your inbox")
            UpdateAccountInfoForm(infoType="email" :labels="emailLabels" :initialValue="accountInfo.email" :placeholders="emailPlaceholders")
      section
        .row.mt-48
          .col-md-12
            SectionHeading(header="Change password" description="Your password should be at least 10 characters long")
            UpdateAccountInfoForm(infoType="password" :labels="passwordLabels")
      section
        .row.mt-48
          .col-md-12
            SectionHeading(header="Delete account" description="Warning! This cannot be undone!")
            DeleteAccountForm
      section
        .row.mt-48
          .col-md-12
            OpenSourcedSection(
              header="This project is open sourced"
              description="You can check & fork it on github.com"
            )


</template>

<script>
  import SectionHeading from './SectionHeading'
  import CurrencyTypeForm from './CurrencyTypeForm'
  import UpdateAccountInfoForm from './UpdateAccountInfoForm'
  import DeleteAccountForm from './DeleteAccountForm'
  import OpenSourcedSection from './OpenSourcedSection'

  export default {
    components: {
      SectionHeading,
      CurrencyTypeForm,
      UpdateAccountInfoForm,
      DeleteAccountForm,
      OpenSourcedSection
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
        return ['some@email.com', 'some@email.com', 'some@email.com']
      },
      accountInfo() {
        return {
          email: 'john.doe@mail.com',
          password: '',
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
