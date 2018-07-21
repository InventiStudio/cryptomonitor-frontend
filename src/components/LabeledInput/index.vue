<template lang="pug">
  .labeled-input
    label.c-white(v-if="labelPos ==='left' || labelPos === 'top'" :class="{'d-block': labelPos === 'top'}") {{ label }}
    input.o-input(
      v-bind="$attrs"
      @input="update($event)"
      :value="value"
      @focus="focus(true)"
      @blur="focus(false)"
      :class="{ 'o-input--error': error, 'd-inline-block': dType === 'inline-block' }"
    )
    label.c-white(v-if="labelPos ==='right'") {{ label }}
</template>

<script>
  export default {
    props: {
      labelPos: {
        type: String,
        default: 'left',
      },
      dType: String,
      value: { type: [String, Array], required: true },
      label: { type: String, required: false },
      error: { type: Boolean, default: false },
    },
    data() {
      return {
        isFocused: false,
      }
    },
    methods: {
      update(event) {
        this.$emit('input', event.target.value)
      },
      focus(focus) {
        this.isFocused = focus
      },
    },
  }
</script>

<style lang="sass" scoped>
  .d-block
    display: block

  .d-inline-block
    display: inline-block
    width: auto
</style>
