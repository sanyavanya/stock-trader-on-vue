<template>
  <div class="header">
    <ul class="navigation">
      <li><router-link to="/" exact tag="div" class="header-logo">Stock Trader</router-link></li>
      <ul class="navigation">
        <li><router-link to="/portfolio" tag="div" class="header-item" active-class="header-active">Portfolio</router-link></li>
        <li><router-link to="/stocks" tag="div" class="header-item" active-class="header-active">Stocks</router-link></li>
      </ul>
    </ul>
    <ul class="navigation">
      <li><div class="header-item" @click="updatePrices">End Day</div></li>
      <li class="header-item" :class="{'header-item-open': open}" @click="open = !open">
        <div class="custom-select">
          <div class="selected" :class="{ open: open }">
            Save & Load
          </div>
          <div class="items" :class="{'items-hide': !open }">
            <div @click="save">Save</div>
            <div @click="load">Load</div>
          </div>
        </div>
      </li>
      <li class="header-funds">Funds: {{formatBalance}}</li>
    </ul>    
  </div>  
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: "Header",
    computed: {
      ...mapGetters([
        'balance',
        'formatBalance',
        'stocks',
        'portfolio'
      ])
    },
    methods: {
      ...mapActions([
        'updatePrices',
        'loadData'
      ]),
      save() {
        const data = {
          balance: this.balance,
          stocks: this.stocks,
          portfolio: this.portfolio
        }
        this.$http.put('data.json', data);
      },
      load() {
        this.$http.get('data.json')
          .then(res => {
            if (res.body) this.loadData(res.body);
            else alert('No data to load.');
          })
          .catch(err => {
            alert('Error! See console for details.');
            console.log(err);
          })
      }
    },
    data: function() {
      return {
        dropdown: false,
        open: false
      }
    }
  }
</script>

<style scoped lang="scss">
  .header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90%;
    background-color: #F2F8FD;
    border-radius: .5rem;
    padding: 0 .5rem;
    margin-bottom: 1rem;
    .navigation {
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 0;

      .header-logo {
        font-weight: bold;
        font-style: italic;
        font-size: 1.5rem;
        font-family: 'SF Pro Display';
        margin: 0 1rem 0 1.5rem;
        user-select: none;
        white-space: nowrap;
      }

      .header-logo:hover {
        cursor: pointer;
        text-shadow: 1px 1px 1px #B7D4FF;
      }

      .header-item {
        margin: 0 .3rem;
        padding: .5rem 1.2rem;
        border-radius: .5rem;
        background-color: #F2F8FD;  
        z-index: 2;
        user-select: none;
        white-space: nowrap;

        .custom-select {
          position: relative;
          text-align: left;
          outline: none;

          .selected {
            border-radius: 6px;
            cursor: pointer;
            z-index: 1;
          }

          .selected:after {
            position: absolute;
            content: "";
            top: 22px;
            right: 1em;
            width: 0;
            height: 0;
          }

          .items {
            transition: all .2s;
            overflow: hidden;
            border-radius: 0 0 10px 10px;
            position: absolute;
            background-color: rgba(255, 255, 255, 1);
            border: 1px solid rgba(183, 212, 255, 0.3);
            border-top: 0;
            margin-top: 8px;
            left: 0;
            right: 0;
            z-index: -1;

            div {
              padding: 1px 0;
              text-align: center;
              cursor: pointer;
              user-select: none;
            }

            div:hover {
              text-shadow: 1px 1px 1px rgba(183, 212, 255, 0.9);
            }
          }

          .items-hide {
            opacity: 0;
            transform: translateY(-25px) scaleY(0);
            transition: all .2s;
          }
        }  
      }        

      .header-item:hover {
        cursor: pointer;
        background-color: rgba(183, 212, 255, 0.3);
      }

      .header-item-open {
        background-color: rgba(183, 212, 255, 0.3);
      }

      .header-active {
        text-shadow: 1px 1px 1px #f583a9;
      }

      .header-funds {
        margin: 0 .3rem;
        padding: .5rem 1.2rem;
        font-weight: bold;
        white-space: nowrap;
      }
    }
  }
</style>