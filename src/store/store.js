import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    balance: 0,
    stocks: {
      amazon: {
        name: 'Amazon',
        price: 0
      },
      apple: {
        name: 'Apple',
        price: 0
      },
      atlassian: {
        name: 'Atlassian',
        price: 0
      },
      facebook: {
        name: 'Facebook',
        price: 0
      },
      microsoft: {
        name: 'Microsoft',
        price: 0
      },
      tesla: {
        name: 'Tesla',
        price: 0
      },
      twitter: {
        name: 'Twitter',
        price: 0
      },
      volvo: {
        name: 'Volvo',
        price: 0
      }      
    },
    portfolio: {}
  },
  getters: {
    balance: state => state.balance,
    formatBalance: state => '$' + state.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    stocks: state => state.stocks,
    portfolio: state => state.portfolio
  },
  mutations: {
    SET_BALANCE: (state) => {
      state.balance = Number((200 + Math.random() * 10000).toFixed(0));
    },
    UPDATE_PRICES: (state) => {
      for (let stock in state.stocks) {
        let currentPrice = state.stocks[stock].price;
        if (currentPrice < 1) currentPrice = (30 + Math.random() * 50).toFixed(2);
        let minPrice = currentPrice * 0.8;
        let maxPrice = currentPrice * 1.2;
        state.stocks[stock].price = (minPrice + Math.random() * (maxPrice - minPrice)).toFixed(2);
      }
    },
    BUY_STOCK: (state, payload) => {
      let amount = Number(payload.amount);
      if (amount > 0) {        
        let total = Number((amount * state.stocks[payload.id].price).toFixed(2));
        if (total <= state.balance) {
          if (Object.keys(state.portfolio).includes(payload.id)) {     
            state.portfolio[payload.id] += amount;
          } else {
            state.portfolio[payload.id] = amount;
          }
          state.balance = Number((state.balance - total).toFixed(2));
        } else {
          alert('You don’t have enough funds for this purchase.');
        }        
      }      
    },
    SELL_STOCK: (state, payload) => {
      let amount = Number(payload.amount);
      if (amount > 0) {
        let total = Number((amount * state.stocks[payload.id].price).toFixed(2));
        if (amount <= state.portfolio[payload.id]) {
          let updatedAmount = state.portfolio[payload.id] - amount;
          Vue.delete(state.portfolio, payload.id);
          if (updatedAmount > 0) Vue.set(state.portfolio, payload.id, updatedAmount);
          state.balance = Number((state.balance + total).toFixed(2));
        } else {
          alert('Please enter a valid amount of stocks to sell.');
        }
      }
    },
    LOAD_DATA: (state, payload) => {
      state.balance = payload.balance;
      state.stocks = payload.stocks;
      if (payload.portfolio) state.portfolio = payload.portfolio;
    }
  },
  actions: {
    setBalance: ({ commit }) => {
      commit('SET_BALANCE')
    },
    updatePrices: ({ commit }) => {
      commit('UPDATE_PRICES')
    },
    buyStock: ({ commit }, payload) => {
      commit('BUY_STOCK', payload)
    },
    sellStock: ({ commit }, payload) => {
      commit('SELL_STOCK', payload)
    },
    loadData: ({ commit }, payload) => {
      commit('LOAD_DATA', payload)
    }
  }
})