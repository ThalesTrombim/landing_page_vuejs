<template>
  <footer>
    <ul>
      <li>
        <font-awesome-icon icon="fa-solid fa-wave-square" />
        <p>High-Resolution Audio compatible</p>
      </li>
      <li>
        <font-awesome-icon icon="fa-brands fa-bluetooth-b" />
        <p>Wireless connectivity using bluetooth</p>
      </li>
      <li>
        <font-awesome-icon icon="fa-solid fa-battery-empty" />
        <p>A powerful battery that lasts up to 4 hours of use</p>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {
  background: #FCF7DA;
  max-width: 1336px;
  margin: auto;
  border-radius: 10px 10px 0 0;
}

ul {
  display: flex;
  list-style: none;
  justify-content: center;
  gap: 50px;
}

li {
  display: flex;
  gap: 15px;
  padding: 30px 0;
  max-width: 300px;
  font-weight: 500;
  align-items: center;
}
</style>