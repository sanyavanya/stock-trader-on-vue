<template>
  <div class="stocks">
    <template v-for="(stock, id) in stocks">
      <Stock :stock="stock" :id="id" :key="id">
      </Stock>
    </template>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Stock from './Stock.vue'

  export default {
    name: "Stocks",
    components: {
      Stock
    },
    computed: {
      ...mapGetters([
        'stocks'
      ])
    }
  }
</script>

<style scoped lang="scss">
  .stocks {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  } 
</style>