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
                    span.c-white Estimate project
                  a.o-btn(href="mailto:hello@inventi.studio")
                    span.c-white or contact us!
                .col-12.col-md-6
                  h2.c-white Sign in
                  form
                    label Email
                    input(type="email", v-model="email")
                    label Password
                    input(type="password", v-model="password")
                  button.o-btn(type="button", @click="signIn")
                    span.c-black Sign in
</template>

<script>
  import { mapActions } from 'vuex'
  import Navbar from 'components/Navbar'

  export default {
    name: 'SignIn',
    data() {
      return {
        email: '',
        password: '',
      }
    },
    components: {
      Navbar,
    },
    methods: {
      ...mapActions({
        login: 'auth/login',
      }),
      async signIn() {
        try {
          const { email, password } = this
          await this.login({ email, password })
        } catch (err) {
          throw err
        }
      },
    },
  }
</script>
