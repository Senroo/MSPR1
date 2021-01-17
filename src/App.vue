<template>
  <div id="app">
    <div id="header">
    <nav class="main-nav">
      
      <b-container class="bv-example-row">
        <b-row>
        <b-col ><Burger></Burger></b-col>
        <b-col @click="imgClick(item)"><img class="logo" src="./assets/logo.svg" /></b-col>
        
      </b-row>
      </b-container>
    </nav>

    <Sidebar>
      <ul class="sidebar-panel-nav">
        <img class="mb-5" src="./assets/logo.svg" alt="logo" />
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/programmation">Programmation</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/partenaire">Partenaires</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/Faq">FAQ</router-link></li>
      </ul>
    </Sidebar>
    </div>
        <div id="body">
    <router-view></router-view>
    </div>
    <div class="clear"></div>
    <div id="footer">
          <Footer />
      </div>
  </div>
</template>
<script>
import Burger from "./components/menu/burger.vue";
import Sidebar from "./components/menu/sidebar.vue";
import Footer from "./components/footer/Footer.vue";

export default {
  name: "app",
  components: {
    Burger,
    Sidebar,
        Footer,
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

html {
  height: 100%;
}

ul img {
  width: 90%;
}
.bv-example-row{
  height: 30%;
}
.logo{
  width: 100%;
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
.clear { background:black; clear: both; height: 12vh; }
</style>
