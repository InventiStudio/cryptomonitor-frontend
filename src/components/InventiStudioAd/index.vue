<template lang="pug">
  .inventistudio-ad.pt-48.pb-56.px-32.text-center(:class="`inventistudio-ad--${bgcolor}`")
    a(href="//inventi.studio/en/", target="_blank")
      img.inventistudio-ad__logo(src="~assets/inventistudio__logo.svg", alt="")
    h2.fs-24.c-white.mt-32.mb-8 Do you need developers?
    p.fs-15.c-white-60.m-0.
      We provide Vue.js front-end, Node.js back-end and UI/UX design services.
      Whether you’re enterprise, company or startup - we can certainly help you!
    div.d-block.mt-24
      a.o-btn.bg-black(href="//inventi.studio/en/estimate-project", target="_blank")
        span.fs-15.c-white Estimate project
      a.ml-16(href="mailto:hello@inventi.studio")
        span.fs-15.c-white or contact us!
</template>

<script>
  export default {
    name: 'InventiStudioAd',
    props: {
      bgcolor: {
        type: String,
        required: true,
      },
    },
  }
</script>

<style lang="sass" src="./styles.sass"></style>
