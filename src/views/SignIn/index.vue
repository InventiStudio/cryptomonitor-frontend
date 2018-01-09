<template lang="pug">
  main
    .container
      .row.justify-content-center
        .col-12.col-md-10
          .o-card
            .container
              .row
                .col-12.col-md-6.pt-48.pb-56.px-32.text-center
                  a(href="//inventi.studio/en/")
                    img(src="~assets/inventistudio__logo.svg", alt="")
                  h2.fs-24.c-white.mt-32.mb-8 Do you need developers?
                  p.fs-15.c-white-60.m-0.
                    We provide Vue.js front-end, Node.js back-end and UI/UX design services.
                    Whether you’re enterprise, company or startup - we can certainly help you!
                  div.d-block.mt-24
                    a.o-btn.bg-black(href="//inventi.studio/en/estimate-project")
                      span.fs-15.c-white Estimate project
                    a.ml-16(href="mailto:hello@inventi.studio")
                      span.fs-15.c-white or contact us!
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
                  button.o-btn.o-btn--orange-gradient.mt-24(
                    type="button",
                    :disabled="!isFormValid",
                    @click="signIn",
                  )
                    span.fs-15.c-white Sign in
                  router-link.ml-16(:to="{ name: 'Monitor' }")
                    span.fs-15.c-white Forgotten password?
</template>

<script>
  import { required, email } from 'vuelidate/lib/validators'
  import { mapActions } from 'vuex'
  import Navbar from 'components/Navbar'

  export default {
    name: 'SignIn',
    components: {
      Navbar,
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
