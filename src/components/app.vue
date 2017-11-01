<template>
  <section id="main">
      <h1>Vue Counter Demo</h1>
      <div id="content">
        <counter-output></counter-output>
        <counter-input></counter-input>
      </div>
  </section>
</template>

<script>
import CounterOutput from './counter-output.vue';
import CounterInput from './counter-button.vue';

export default {
  name: 'app',
  components: {
    counterOutput: CounterOutput,
    counterInput: CounterInput
  }
}
</script>

<style lang="scss">
  h1 {
    color: red;
  }
</style>


