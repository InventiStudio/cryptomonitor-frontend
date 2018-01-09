<template lang="pug">
  main
    .container
      .row.justify-content-center
        .col-12.col-md-10
          .o-card
            .container
              .row
                InventiStudioAd.col-12.col-md-6(bgcolor="blue")
                .col-12.col-md-6.pt-64.pb-64.px-48.text-center
                  h2.fs-24.c-white.mb-32.mt-0 Sign up
                  form
                    label.d-none E-mail address
                    input.o-input(
                      type="email",
                      v-model.trim="email",
                      placeholder="Your email address",
                      :class="{ 'o-input--error': !isEmailValid }",
                    )
                    small.o-form-error
                      span.fs-12.c-orange(v-if="!$v.email.required && $v.signUpForm.$dirty") We need your email!
                      span.fs-12.c-orange(v-if="!$v.email.email && $v.signUpForm.$dirty") Hm, that seems like an invalid e-mail..
                    label.d-none Password
                    input.o-input.mt-8(
                      type="password",
                      v-model.trim="password",
                      placeholder="Your pass****",
                      :class="{ 'o-input--error': !isPasswordValid }",
                    )
                    small.o-form-error
                      span.fs-12.c-orange(v-if="!$v.password.required && $v.signUpForm.$dirty") Trying to sign-up without password?
                    label.d-none Repeat password
                    input.o-input.mt-8(
                      type="password",
                      v-model="repeatPassword",
                      placeholder="Repeat your pass****",
                      :class="{ 'o-input--error': !isRepeatPasswordValid }",
                    )
                    small.o-form-error
                      span.fs-12.c-orange(v-if="!$v.repeatPassword.sameAsPassword && $v.signUpForm.$dirty") Oops! Passwords don't match!
                  button.o-btn.o-btn--violet.mt-16(
                    type="button",
                    :disabled="!isFormValid",
                    @click="signUp()",
                  )
                    span.fs-15.c-white Sign me up
</template>

<script>
  import { required, email, sameAs } from 'vuelidate/lib/validators'
  import InventiStudioAd from 'components/InventiStudioAd'

  export default {
    name: 'SignUp',
    components: {
      InventiStudioAd,
    },
    data() {
      return {
        email: '',
        password: '',
        repeatPassword: '',
      }
    },
    computed: {
      isEmailValid() { return !this.$v.email.$error },
      isPasswordValid() { return !this.$v.password.$error },
      isRepeatPasswordValid() { return !this.$v.repeatPassword.$error },
      isFormValid() {
        return this.isEmailValid && this.isPasswordValid && this.isRepeatPasswordValid
      },
    },
    methods: {
      async signUp() {
        try {
          if (this.$v.signUpForm.$touch() || this.$v.signUpForm.$error) return null
          const { email, password, repeatPassword } = this
          alert(`Sign up!, ${JSON.stringify({ email, password, repeatPassword })}`) // eslint-disable-line
          // api.post()
        } catch (err) {
          throw err
        }
      },
    },
    validations: {
      email: { required, email },
      password: { required },
      repeatPassword: { sameAsPassword: sameAs('password') },
      signUpForm: [
        'email',
        'password',
        'repeatPassword',
      ],
    },
  }
</script>
