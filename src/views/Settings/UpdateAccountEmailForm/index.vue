<template lang="pug">
  form
    .row.align-items-center
      .col-md-3
        LabeledInput(
          v-model="$v.oldEmail.$model"
          :error="!isOldEmailValid"
          type="email"
          label-pos="top"
          label="Old email address"
        )
        small.o-form-error
          span.fs-12.c-orange(v-if="$v.oldEmail.$dirty && !$v.oldEmail.email") Invalid email
          span.fs-12.c-orange(v-if="$v.oldEmail.$dirty && !$v.oldEmail.required") This field is required
      .col-md-3
        LabeledInput(
          v-model="$v.newEmail.$model"
          :error="!isNewEmailValid"
          type="email"
          label-pos="top"
          label="New e-mail address"
        )
        small.o-form-error
          span.fs-12.c-orange(v-if="$v.newEmail.$dirty && !$v.newEmail.email") Invalid email
          span.fs-12.c-orange(v-if="$v.newEmail.$dirty && !$v.newEmail.required") This field is required
      .col.md-4
        LabeledInput(
          v-model="$v.repeatedEmail.$model"
          type="email"
          :error="$v.changeEmailForm.$dirty && !isRepeatedEmailValid"
          label="Repeat new e-mail address"
          label-pos="top"
        )
        small.o-form-error
          span.fs-12.c-orange(v-if="!$v.repeatedEmail.sameAsEmail && $v.changeEmailForm.$dirty") Oops! emails don't match!
      .col-md-2
        button.o-btn.o-btn--gray.c-black(
          @click.prevent="updateAccount"
          :disabled="!isFormValid"
          :class="{'o-btn--orange': isFormValid}"
        ) Update

</template>

<script>
  import { required, email, sameAs } from 'vuelidate/lib/validators'
  import LabeledInput from '../../../components/LabeledInput'

  export default {
    props: {
      initialEmail: { type: String, default: '' },
    },
    components: {
      LabeledInput,
    },
    data() {
      return {
        oldEmail: this.initialEmail,
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
        alert('You have updated an email!')
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
