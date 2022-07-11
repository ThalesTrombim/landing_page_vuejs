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
      <div>lupa</div>
      <div>carrinho</div>
      <div>menu</div>
    </div>
  </header>
</template>

<script>
export default {
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
</style>
