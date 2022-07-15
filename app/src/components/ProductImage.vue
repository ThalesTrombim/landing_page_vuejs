<template>
  <div class="container">
    <nav>
      <div class="long-bar"></div>
      <div class="circle red"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="long-bar"></div>
    </nav>
    <div class="image-container">
      <img src="../../../assets/fone.png" alt="Hyper X On-Ear">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  display: flex;
  gap: 60px;
}
img {
  width: 65%
}
nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 70px;
}
.long-bar {
  width: 5px;
  height: 60px;
  border-radius: 20px;
  background: #E0E0E0;
}
.circle {
  background: #E0E0E0;
  width: 5px;
  height: 5px;
  border-radius: 10px;
}
.red {
  background: #CA3B3A;
  transform: scale(1.9);
}

@media (max-width: 430px) {
  nav {
    display: none;
  }
  .image-container {
    width: 100%;
  }
  img {
    width: 100%;
  }
}
</style>