<template>
  <div class="home">
    <h1>Welcome to the Stock Trader!</h1>
    <p>A perfect place to trade mock stocks that only have virtual value within your browser! You can buy or sell fake stocks, click “End Day” to fast-forward to the next virtual day and even save current market state in a database to load it later! Have fun!</p>
    <p>Your current balance is <b>{{formatBalance}}</b>. Why don’t you go and waste some of that valuable money on fake assets?</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "Home",
    computed: {
      ...mapGetters([
        'balance',
        'formatBalance'
      ])
    }
  }
</script>

<style scoped lang="scss">
  .home {
    max-width: 50rem;
    margin: 0 auto;
  }
</style>