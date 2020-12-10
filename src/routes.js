import Home from './components/Home.vue'
import Portfolio from './components/portfolio/Portfolio.vue'
import Stocks from './components/stocks/Stocks.vue'
import NotFound from './components/NotFound.vue'

export const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/stocks',
    name: 'stocks',
    component: Stocks
  },
  {
    path: "*",
    component: NotFound
  }
]