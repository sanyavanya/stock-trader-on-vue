<template>
  <div class="portfolio">
    <div v-if="Object.keys(portfolio).length === 0" class="empty">
      Your portfolio is empty.
    </div>
    <template v-for="(stock, id) in portfolio">
      <Stock :stock="stock" :id="id" :key="id">
      </Stock>
    </template>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Stock from './Stock.vue'

  export default {
    name: "Portfolio",
    components: {
      Stock
    },
    computed: {
      ...mapGetters([
        'portfolio'
      ])
    }
  }
</script>

<style scoped lang="scss">
  .portfolio {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .empty {
      margin: 1rem 0;
    }
  } 
</style>