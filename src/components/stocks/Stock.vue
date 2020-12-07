<template>
  <div class="stock" :key="id">
    <div class="stock-header">
      <span class="stock-name">{{stock.name}}</span>
      <span class="stock-price">${{stock.price}}</span>
    </div>
    <div class="stock-body">
      <input
        type="number"
        min="0"
        class="input"
        v-model="inputAmount"
      >
      <button
        class="button-buy"
        :class="{'button-buy-enabled': buyEnabled}"
        :disabled="!buyEnabled"
        @click="buyStock({id, amount: inputAmount})"        
      >
        Buy
      </button>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Stock',
    props: [
      'stock',
      'id'
    ],
    data: function() {
      return {
        inputAmount: 0
      }
    },
    methods: {
      ...mapActions([
        'buyStock'
      ])
    },
    computed: {
      ...mapGetters([
        'balance'
      ]),
      buyEnabled() {
        let amount = Number(this.inputAmount);
        let largerThanZero = amount > 0;
        let isInt = Number.isInteger(amount);
        let sufficientFunds = (Number(this.inputAmount) * this.stock.price) <= this.balance;
        return largerThanZero && isInt && sufficientFunds;
      }
    }
  }
</script>

<style scoped lang="scss">
  .stock {
    border-radius: .5rem;
    padding: .8rem 1.2rem;
    background-color: #d5e9f7;
    margin: .8rem;
    width: 14rem;

    .stock-header {
      display: flex;
      justify-content: space-between;

      .stock-name {
        font-size: 1.5rem;
        font-weight: bold;
      }

      .stock-price {
        font-weight: bold;
        font-size: 1.5rem;
        color: #1e426b;
      }
    }

    .stock-body {
      display: flex;
      justify-content: space-between;
      margin-top: .5rem;

      .input, .button-buy {
        border-radius: .3rem;
        border: 1px solid black;
        margin: 0 0;
      }

      .input {
        width: 10rem;
        font-size: 1.1rem;
      }

      .button-buy-enabled:hover {
        text-shadow: 1px 1px 1px #B7D4FF;
        cursor: pointer;
      }

      .button-buy {
        background-color: #F2F8FD;
      }
    }
  }
</style>