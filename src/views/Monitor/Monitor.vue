<template lang="pug">
  main
    Navbar
    Landing
</template>

<script>
  import Navbar from 'components/Navbar'
  import Landing from './Landing'

  export default {
    name: 'Monitor',
    components: {
      Landing,
      Navbar,
    },
  }
</script>
