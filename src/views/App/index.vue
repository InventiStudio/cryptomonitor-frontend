<template lang="pug">
  div#app.app
    Navbar
    router-view
</template>

<script>
  import { mapActions } from 'vuex'
  import ls from 'local-storage'
  import { STORAGE_AUTH_TOKEN } from 'src/constants'
  import Navbar from 'components/Navbar'

  export default {
    name: 'App',
    components: {
      Navbar,
    },
    methods: {
      ...mapActions({
        login: 'auth/login',
      }),
    },
    async mounted() {
      try {
        const lsToken = ls.get(STORAGE_AUTH_TOKEN)
        if (lsToken) await this.login({ lsToken })
      } catch (err) {
        console.warn(err) // eslint-disable-line no-console
      }
    },
  }
</script>

<style lang="sass" src="styles/application.sass"></style>
<style lang="sass" src="./styles.sass"></style>
