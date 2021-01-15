<template>
  <div id="app">
    <nav class="main-nav">
      <div class="logo">
        <img src="./assets/logo.svg"/>
      </div>
      <Burger></Burger>
    </nav>

    <Sidebar>
      <ul class="sidebar-panel-nav">
        <img class="mb-5" src="./assets/logo.svg" alt="logo"/>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/programmation">Programmation</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/partenaire">Partenaires</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/Faq">FAQ</router-link></li>
      </ul>
    </Sidebar>
    <router-view></router-view>

    <Footer/>

  </div>
</template>
<script>
import Footer from "./components/footer/Footer.vue";
import Burger from "./components/menu/burger.vue";
import Sidebar from "./components/menu/sidebar.vue";

export default {
  name: "app",
  components: {
    Burger,
    Sidebar,
    Footer,
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

html {
  height: 100%;
}

ul img {
  width: 90%;
}

.logo img {
  width: 25%;
}

body {
  border: 0;
  margin: 0;
  padding: 0;
  font-family: "Lato", serif;
  height: 100%;
  background: white;
}

.logo {
  align-self: center;
  color: #fff;
  font-weight: bold;
  font-family: "Lato", serif;
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
