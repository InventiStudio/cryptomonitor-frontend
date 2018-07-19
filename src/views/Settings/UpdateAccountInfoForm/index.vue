<template lang="pug">
  .form
    .inline-block.mr-32(v-for="(label, i) in labels" :key="label")
      label.c-white(:for="label.toLowerCase()") {{ label }}
      input(:type="infoType" :id="label.toLowerCase()" :name="label.toLowerCase()" v-model="values[i]" placeholder="loolo" )
    button.o-btn.o-btn--gray.c-black Update

</template>

<script>
  export default {
    props: {
      infoType: String,
      labels: Array,
      initialValue: {
        type: String,
        default: '',
      },
      placeholders: {
        type: Array,
        default: ['', '', ''],
      },
    },
    data() {
      return {
        values: this.labels.map(_ => ''),
      }
    },
    created() {
      this.values[0] = this.initialValue
    },
  }

</script>

<style lang="sass" scoped src="./styles.sass"></style>
