<template lang="pug">
  .form
    .inline-block.mr-32
      LabeledInput(:error="!isOldEmailValid" :type="infoType" label-pos="top"  :label="labels[0]" v-model="oldEmail")
    .inline-block.mr-32
      LabeledInput(:error="$v.newEmail.$dirty && !isNewEmailValid" error-msg="Invalid email" :type="infoType" label-pos="top" :label="labels[1]" v-model="$v.newEmail.$model" )
    .inline-block.mr-32
      LabeledInput(
      v-model="repeatedEmail"
      :type="infoType"
      :error="$v.changeEmailForm.$dirty && !isRepeatedEmailValid"
      error-msg="Oops! emails don't match!"
      :label="labels[2]"
      label-pos="top"
      )
    button.o-btn.o-btn--gray.c-black(@click="updateAccount" :disabled="!isFormValid") Update

</template>

<script>
  import {required, email, sameAs} from 'vuelidate/lib/validators'
  import LabeledInput from '../../../components/LabeledInput'

  export default {
    props: {
      infoType: String,
      labels: Array,
      initialValue: String,
    },
    components: {
      LabeledInput,
    },
    data() {
      return {
        oldEmail: this.initialValue,
        newEmail: '',
        repeatedEmail: '',
      }
    },
    computed: {
      isOldEmailValid() {
        return !this.$v.oldEmail.$error
      },
      isNewEmailValid() {
        return !this.$v.newEmail.$error
      },
      isRepeatedEmailValid() {
        return !this.$v.repeatedEmail.$error
      },
      isFormValid() {
        return this.$v.changeEmailForm.$dirty &&
          this.isOldEmailValid &&
          this.isNewEmailValid &&
          this.isRepeatedEmailValid
      },
    },
    methods: {
      updateAccount() {
        if (this.$v.changeEmailForm.$touch() || !this.isFormValid) {
          return null
        }
      },
    },
    validations: {
      oldEmail: { required, email },
      newEmail: { required, email },
      repeatedEmail: { sameAsEmail: sameAs('newEmail') },
      changeEmailForm: [
        'newEmail',
        'repeatedEmail',
      ],
    },
  }

</script>

<style lang="sass" scoped src="./styles.sass"></style>
