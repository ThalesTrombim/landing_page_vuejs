<template>
  <div class="container">
    <div>
      <img src="../../../assets/fone.png" alt="Hyper x on-ear">
    </div>
    <div class="cartInfo">
      <div class="description">
        <span>Hyper X ON-EAR</span>
        <p class="amoutText">Quantidade: <strong>{{ amount }}</strong></p>
        <p class="total">total: <strong>${{ finalPrice }}</strong></p>
      </div>
      <div class="deleteProducts">
        <font-awesome-icon @click="removeoFCart" icon="fa-solid fa-trash-can" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['totalPrice'],
  data() {
    return {
      amount: 1
    }
  },
  computed: {
    finalPrice() {
      return this.totalPrice.toFixed(2)
    }
  },
  methods: {
    removeoFCart() {
      this.$emit('removeItems')
    }
  }
}
</script>

<style scoped>
.container {
  background: #FFF;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 12px;
  position: absolute;
  display: flex;
  margin-top: 25px;
  right: 0;
  gap: 16px;
  border-radius: 6px  0 6px 6px;
}
img {
  width: 50px;
}
.cartInfo {
  display: flex;
  gap: 16px;
}
.cartInfo span{
  font-size: 14px;
  font-weight: 500;
  color: #CA3B3A;
}
.cartInfo .description {
  display: flex;
  flex-direction: column;
  min-width: 120px;
}
.cartInfo .amoutText{
  font-size: 12px;
}
.total {
  margin-top: 10px;
  font-size: 14px;
}
.deleteProducts {
  display: flex;
  align-items: center;
  justify-content: center;
}
.deleteProducts .fa-trash-can{
  cursor: pointer;
}

@media (max-width: 430px) {
  .container {
    z-index: 9;
  }
}
</style>