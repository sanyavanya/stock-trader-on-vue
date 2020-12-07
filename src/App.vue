<template>
  <div id="app">
    <Header></Header>
    <div class="route">
      <transition name="main" mode="out-in" appear>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  methods: {
    ...mapActions([
      'setBalance',
      'updatePrices'
    ])
  },
  created() {
    this.setBalance();
    this.updatePrices();
  }
}
</script>

<style scoped lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #2c3e50;
    margin-top: 5vh;
    text-align: center;
  }

  .route {
    width: 90vw;
    background-color: #F2F8FD;
    border-radius: .5rem;
  }

  .main-enter {
    opacity: 0;
    transform: translateY(30px);
  }
  .main-enter-active {
    transition: all .4s;
  }
</style>
