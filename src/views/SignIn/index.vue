<template lang="pug">
  main
    .container
      .row.justify-content-center
        .col-12.col-md-8
          .o-card
            .container
              .row
                .col-12.col-md-6
                  img(src="~assets/inventistudio__logo.svg", alt="")
                  h2.c-white Do you need developers?
                  p.c-white.
                    We provide Vue.js front-end, Node.js back-end and UI/UX design services.
                    Whether you’re enterprise, company or startup - we can certainly help you!
                  a.o-btn.bg-black(href="//inventi.studio/en/estimate-project")
                    span.fs-16.c-white Estimate project
                  a.o-btn(href="mailto:hello@inventi.studio")
                    span.fs-16.c-white or contact us!
                .col-12.col-md-6
                  h2.c-white Sign in
                  form
                    label Email
                    input(
                      type="email",
                      v-model="email",
                      placeholder="Your email address",
                      :class="{ '': !isEmailValid }",
                    )
                    small
                      span(v-show="!isEmailValid") TODO email error
                    label Password
                    input(
                      type="password",
                      v-model="password",
                      placeholder="Your pass****",
                      :class="{ '': !isPasswordValid }",
                    )
                    small
                      span(v-show="!isPasswordValid") TODO password error
                  button.o-btn(
                    type="button",
                    :disabled="!isFormValid",
                    @click="signIn",
                  )
                    span.fs-16.c-black Sign in
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
