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
                  h2.fs-24.c-white.text-center.mb-32.mt-0 Reset password
                  form
                    label.d-none Password
                    input.o-input.mt-8(
                      type="password",
                      v-model.trim="password",
                      placeholder="Your pass****",
                      :class="{ 'o-input--error': !isPasswordValid }",
                    )
                    small.o-form-error
                      span.fs-12.c-orange(v-if="!$v.password.required && $v.resetPasswordForm.$dirty") You wanted to reset password, right?
                    label.d-none Repeat password
                    input.o-input.mt-8(
                      type="password",
                      v-model="repeatPassword",
                      placeholder="Repeat your pass****",
                      :class="{ 'o-input--error': !isRepeatPasswordValid }",
                    )
                    small.o-form-error
                      span.fs-12.c-orange(v-if="!$v.repeatPassword.sameAsPassword && $v.resetPasswordForm.$dirty") Oops! Passwords don't match!
                  button.o-btn.o-btn--blue.mt-24(
                    type="button",
                    :disabled="!isFormValid",
                    @click="resetPassword()",
                  )
                    span.fs-15.c-white Reset password
</template>

<script>
  import { mapState } from 'vuex'
  import { required, sameAs } from 'vuelidate/lib/validators'
  import InventiStudioAd from 'components/InventiStudioAd'

  export default {
    name: 'ResetPassword',
    components: {
      InventiStudioAd,
    },
    data() {
      return {
        password: '',
        repeatPassword: '',
      }
    },
    computed: {
      ...mapState({
        token: state => state.route.query.token, // API token for password reset
      }),
      isPasswordValid() { return !this.$v.password.$error },
      isRepeatPasswordValid() { return !this.$v.repeatPassword.$error },
      isFormValid() { return this.isPasswordValid && this.isRepeatPasswordValid },
    },
    methods: {
      async resetPassword() {
        try {
          if (this.$v.resetPasswordForm.$touch() ||
            this.$v.resetPasswordForm.$error) return null
          const { password, repeatPassword } = this
          alert(`Reset password!, ${JSON.stringify({ password, repeatPassword })}`) // eslint-disable-line
          // api.post()
        } catch (err) {
          throw err
        }
      },
    },
    validations: {
      password: { required },
      repeatPassword: { sameAsPassword: sameAs('password') },
      resetPasswordForm: [
        'password',
        'repeatPassword',
      ],
    },
  }
</script>
