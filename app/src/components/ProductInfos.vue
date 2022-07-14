<template>
  <div class="container">
    <section class="images">
      <product-image></product-image>
    </section>
    <section class="infos">
      <h3>Hyper X ON-EAR</h3>
      <span>Wireless over-ear headphones</span>

      <div class="rating">
        <div>
          <font-awesome-icon v-for="star in stars" :key="star" icon="fa-solid fa-star" />
          <font-awesome-icon icon="fa-regular fa-star" />
        </div>
        <p>4.2 (335)</p>
      </div>

      <div>
        <span>Driver unit</span>
        <p>70 mm, dome type (CCAW Voice Col)</p>
      </div>

      <div>
        <span>Frequency Response</span>
        <p>4 Hz + 100.000 Hz</p>
      </div>

      <div class="price-actions">
        <p>$89.99</p>
        <button>Add to Cart</button>
      </div>
    </section>
  </div>
</template>

<script>
import ProductImage from './ProductImage.vue';

export default {
  data() {
    return {
      stars: 4
    }
  },
  components: {
    ProductImage
  }
}
</script>

<style scoped>
.container {
  display: flex;
}
.images {
  width: 65%;
}
.infos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}
.infos h3{
  font-size: 36px;
  color: #CA3B3A;
  margin: 40px 0;
}
.rating {
  display: flex;
  gap: 20px;
}
.rating p{
  font-weight: 700;
  color: #CA3B3A;
}
span {
  font-weight: bold;
}
.fa-star {
  color: #CA3B3A;
}
.price-actions {
  display: flex;
  align-items: center;
  gap: 60px;
}
.price-actions p{
  font-size: 28px;
  font-weight: 600;
}
.price-actions button{
  background: #CA3B3A;
  color: #FFF;
  padding: 16px 28px;
  border: none;
  font-size: 16px;
}
</style>