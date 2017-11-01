<template>
    <div>
        <input type="button" value="Increment Count" @click="incrementCount">
    </div>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
  name: 'counterInput',
  methods: {
      ...mapMutations([
          'incrementCount'
      ])
  }
}
</script>

<style lang="scss" scoped>
    input {
        margin-top: 25px;
    }
</style>


