<template>
    <div>
        <label for="counter">Count: </label>
        <output id="counter">{{currentCount}}</output>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'counterOutput',
  computed: {
      ...mapGetters([
          'currentCount'
      ])
  }
}
</script>

<style lang="scss">

</style>


