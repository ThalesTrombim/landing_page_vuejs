<template>
  <div id="app">
    <the-header :amountProducts="this.cart"></the-header>
    <main>
      <product-infos @addToCart="addToCart"></product-infos>
    </main>
    <the-footer></the-footer>
  </div>
</template>

<script>
import ProductInfos from './components/ProductInfos.vue'
export default {
  name: 'App',
  components: {
    ProductInfos
  },
  data() {
    return {
      cart: 0
    }
  },
  methods: {
    addToCart() {
      this.cart++;
      console.log(this.cart)
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  color: #161616;
  font-family: 'Montserrat', sans-serif;
}

main {
  max-width: 1440px;
  margin: auto;
  padding: 15px;
  min-height: calc(100vh - 198px);
}
</style>
