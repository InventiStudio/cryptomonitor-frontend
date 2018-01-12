<template lang="pug">
  section.landing
    .container
      .row
        .col
          h1.c-white Graph
</template>

<script>
  import socket from 'src/services/socket'

  export default {
    name: 'Landing',
    mounted() {
      socket.connect()
    },
    beforeDestroy() {
      socket.disconnect()
    },
  }
</script>

<style lang="sass" src="./styles.sass" scoped></style>
