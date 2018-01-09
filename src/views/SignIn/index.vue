<template lang="pug">
  main
    .container
      .row.justify-content-center
        .col-12.col-md-10
          .o-card
            .container
              .row
                InventiStudioAd.col-12.col-md-6(bgcolor="orange")
                .col-12.col-md-6.pt-64.px-48
                  h2.fs-24.c-white.text-center.mb-32.mt-0 Sign in
                  form
                    label.d-none E-mail address
                    input.o-input(
                      type="email",
                      v-model="email",
                      placeholder="Your email address",
                      :class="{ 'o-input--error': !isEmailValid }",
                    )
                    small.o-form-error
                      span.fs-12.c-orange(v-show="!isEmailValid") Hm, that seems like a wrong e-mail..
                    label.d-none Password
                    input.o-input.mt-16(
                      type="password",
                      v-model="password",
                      placeholder="Your pass****",
                      :class="{ 'o-input--error': !isPasswordValid }",
                    )
                    small.o-form-error
                      span.fs-12.c-orange(v-show="!isPasswordValid") Oops! Password and/or email doesn't match!
                  button.o-btn.o-btn--orange.mt-24(
                    type="button",
                    :disabled="!isFormValid",
                    @click="signIn",
                  )
                    span.fs-15.c-white Sign in
                  router-link.ml-16(:to="{ name: 'ResetPassword' }")
                    span.fs-15.c-white Forgotten password?
</template>

<script>
  import { required, email } from 'vuelidate/lib/validators'
  import { mapActions } from 'vuex'
  import InventiStudioAd from 'components/InventiStudioAd'

  export default {
    name: 'SignIn',
    components: {
      InventiStudioAd,
    },
    data() {
      return {
        email: '',
        password: '',
      }
    },
    computed: {
      isEmailValid() { return !this.$v.email.$error },
      isPasswordValid() { return !this.$v.password.$error },
      isFormValid() { return this.isEmailValid && this.isPasswordValid },
    },
    methods: {
      ...mapActions({
        login: 'auth/login',
      }),
      async signIn() {
        try {
          if (this.$v.signInForm.$touch() || this.$v.signInForm.$error) return null
          await this.login({ email: this.email, password: this.password })
        } catch (err) {
          throw err
        }
      },
    },
    validations: {
      email: { required, email },
      password: { required },
      signInForm: [
        'email',
        'password',
      ],
    },
  }
</script>
