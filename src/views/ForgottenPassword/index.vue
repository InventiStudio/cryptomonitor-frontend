<template lang="pug">
  main
    .container
      .row.justify-content-center
        .col-12.col-md-10
          .o-card
            .container
              .row
                InventiStudioAd.col-12.col-md-6(bgcolor="orange")
                .col-12.col-md-6.pt-64.px-48.text-center
                  h2.fs-24.c-white.mb-32.mt-0 Forgotten password?
                  form
                    label.d-none E-mail address
                    input.o-input(
                      type="email",
                      v-model.trim="email",
                      placeholder="Your email address",
                      :class="{ 'o-input--error': !isEmailValid }",
                    )
                    small.o-form-error
                      span.fs-12.c-orange(v-if="!$v.email.required && $v.forgottenPasswordForm.$dirty")
                        | We need your email!
                      span.fs-12.c-orange(v-if="!$v.email.email && $v.forgottenPasswordForm.$dirty")
                        | Hm, that seems like an invalid e-mail..
                  button.o-btn.o-btn--blue.mt-16(
                    type="button",
                    :disabled="!isFormValid",
                    @click="forgottenPassword()",
                  )
                    span.fs-15.c-white Send me a link
</template>

<script>
  import { required, email } from 'vuelidate/lib/validators'
  import InventiStudioAd from 'components/InventiStudioAd'

  function getDefaltState() {
    return {
      email: '',
    }
  }

  export default {
    name: 'ForgottenPassword',
    components: {
      InventiStudioAd,
    },
    data() {
      return getDefaltState()
    },
    computed: {
      isEmailValid() { return !this.$v.email.$error },
      isFormValid() { return this.isEmailValid },
    },
    methods: {
      async forgottenPassword() {
        try {
          if (this.$v.forgottenPasswordForm.$touch() ||
            this.$v.forgottenPasswordForm.$error) return null
          const { email } = this
          // api.post()
          alert(`Forgotten password!, ${JSON.stringify({ email })}`) // eslint-disable-line
          Object.assign(this.$data, getDefaltState())
          this.$v.forgottenPasswordForm.$reset()
        } catch (err) {
          throw err
        }
      },
    },
    validations: {
      email: { required, email },
      forgottenPasswordForm: [
        'email',
      ],
    },
  }
</script>
