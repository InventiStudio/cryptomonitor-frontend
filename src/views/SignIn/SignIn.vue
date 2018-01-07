<template lang="pug">
  main
    form
      label Email
      input(type="email", v-model="email")
      label Password
      input(type="password", v-model="password")
    button(type="button", @click="signIn") Sign in
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
