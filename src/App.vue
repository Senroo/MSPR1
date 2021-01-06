<template>
  <div id="app">
    <nav class="main-nav">
      <div class="logo">
        <img width="20%" src="./assets/logo.svg"/>
      </div>
      <Burger></Burger>
    </nav>

    <Sidebar>
      <ul class="sidebar-panel-nav">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/partenaire">Partenaires</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/Faq">FAQ</router-link></li>
        <li><router-link to="/programation">Programation</router-link></li>

      </ul>
    </Sidebar>

    <router-view></router-view>

  </div>
</template>
<script>
import Burger from "./components/menu/burger.vue";
import Sidebar from "./components/menu/sidebar.vue";

export default {
  name: "app",
  components: {
    Burger,
    Sidebar,
  },
};
</script>
<style>
html {
  height: 100%;
}

body {
  border: 0;
  margin: 0;
  padding: 0;
  font-family: "Lato",serif;
  height: 100%;
  background: rgb(101, 31, 87);
  background: linear-gradient(
    45deg,
    rgba(101, 31, 87, 1) 0%,
    rgba(225, 113, 87, 1) 48%,
    rgba(249, 248, 113, 1) 100%
  );
}

.logo {
  align-self: center;
  color: #fff;
  font-weight: bold;
  font-family: "Lato",serif;
}

.main-nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
}

ul.sidebar-panel-nav {
  list-style-type: none;
}

ul.sidebar-panel-nav > li > a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
}
</style>
