<template>
  <header>
    <div>
      <h1>
        <a href="/">
          <img src="../../../assets/logo.svg" alt="Shop">
        </a>
      </h1>
    </div>

    <div class="links-area">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </ul>
    </div>

    <div class="actions">
      <div>
        <font-awesome-icon class="fa-lg" icon="fa-solid fa-magnifying-glass" />
      </div>
      <div class="cart">
        <font-awesome-icon class="fa-lg" icon="fa-solid fa-cart-shopping" @click="openDropDown" />
        <span v-if="amountProductsCart > 0" class="product-counter">{{ amountProductsCart }}</span>
        <drop-down v-if="isDropDownOpen" :totalPrice="totalPrice" @removeItems="handleDropDown"></drop-down>
      </div>
      <div>
        <font-awesome-icon class="fa-lg" icon="fa-solid fa-bars" />
      </div>
    </div>
  </header>
</template>

<script>
import DropDown from './DropDown.vue';
export default {
  components: { DropDown },
  data() {
    return {
      isDropDownOpen: false
    }
  },
  props: ['amountProducts', 'totalPrice'],
  computed: {
    amountProductsCart() {
      return this.amountProducts;
    }
  },
  methods: {
    handleDropDown() {
      this.isDropDownOpen = false;
      this.$emit('removeProducts');
    },
    openDropDown() {
      this.isDropDownOpen = !this.isDropDownOpen;
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  max-width: 1440px; 
  margin: auto;
}
h1 a img {
  width: 100px;
}
.links-area ul{
  display: flex;
  list-style: none;
  justify-content: center;
  gap: 20px;
}
.links-area a{
  text-decoration: none;
  font-weight: 500;
}
.links-area a:hover{
  color: #CA3B3A;
}

.actions {
  display: flex;
  gap: 25px;
}
.fa-cart-shopping {
  cursor: pointer;
}
.cart {
  display: flex;
  position: relative;
}
.product-counter {
  display: flex;
  width: 15px;
  height: 15px;
  background: tomato;
  justify-content: center;
  border-radius: 100%;
  align-items: center;
  font-weight: bold;
  color: #FFF;
  font-size: 12px;
  margin-left: -7px;
  margin-top: 6px;
}
</style>
