<template lang="pug">
  div#app.app
    router-view
</template>

<script>
  import { mapActions } from 'vuex'
  import ls from 'local-storage'
  import { STORAGE_AUTH_TOKEN } from 'src/constants'

  export default {
    name: 'App',
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
