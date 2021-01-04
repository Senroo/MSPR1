<template>
  <header>
    <div class="header_container">
      <div class="logo">
        <img src="../assets/logo.png">
      </div>
      <div class="menu">
        <p>Menu</p>
        <p>Menu</p>
        <p>Menu</p>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
/* Header style */
.header_container {
  display: flex;
  justify-content: space-around;
  border: solid 1px white;
}

.logo img {
    width: 50%;
}

.menu{
    display: flex;
    width: 40%;
    justify-content: space-around;
}

</style>