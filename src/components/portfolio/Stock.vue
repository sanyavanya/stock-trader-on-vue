<template>
  <div class="stock" :key="id">
    <div class="stock-header">
      <span class="stock-name">{{stocks[id].name}}</span>
      <span class="stock-amount">{{portfolio[id]}}</span>
    </div>
    <div class="stock-body-wrap">
      <div class="stock-description">
        <span>Current market price: </span><span class="stock-price">${{stocks[id].price}}</span>
      </div>
      <div class="stock-body">
        <input
          type="number"
          min="0"
          :max="portfolio[id]"
          class="input"
          v-model="inputAmount"
        >
        <button
          class="button-sell"
          :class="{'button-sell-enabled': sellEnabled}" 
          :disabled="!sellEnabled"
          @click="sellStock({id, amount: inputAmount})"
        >
          Sell
        </button>
      </div>
    </div>      
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PortStock',
  props: [
    'stock',
    'id'
  ],
  data: function () {
    return {
      inputAmount: 0
    }
  },
  computed: {
    ...mapGetters([
      'stocks',
      'portfolio'
    ]),
    sellEnabled() {
      let amount = Number(this.inputAmount);
      let isInt = Number.isInteger(amount);
      let largerThanZero = amount > 0;
      let moreThanUserHas = amount > this.portfolio[this.id];
      return largerThanZero && !moreThanUserHas && isInt;
    }
  },
  methods: {
    ...mapActions([
      'sellStock'
    ]),
  }
}
</script>

<style scoped lang="scss">
.stock {
  border-radius: .5rem;
  padding: .8rem 1.2rem;
  background-color: #d2f7eb;
  margin: .8rem;
  width: 14rem;

  .stock-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .stock-name {
      font-weight: bold;
      font-size: 1.5rem;
    }

    .stock-amount {
      font-weight: bold;
      font-size: .9rem;
      color: #1e426b;
    }
  }

  .stock-body-wrap {
    display: flex;
    flex-direction: column;

    .stock-description {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      font-size: .8rem;

      .stock-price {
        font-size: 1rem;
        font-weight: bold;
      }
    }      

    .stock-body {
      margin-top: .5rem;
      display: flex;
      justify-content: space-between;        

      .input, .button-sell {
        border-radius: .3rem;
        border: 1px solid black;
        margin: 0 0;
      }

      .input {
        width: 10rem;
        font-size: 1.1rem;
      }

      .button-sell-enabled:hover {
        text-shadow: 1px 1px 1px #B7D4FF;
        cursor: pointer;
      }
      
      .button-sell {
        background-color: #F2F8FD;
      }
    }
  }    
}
</style>