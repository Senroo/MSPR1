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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;700;800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400&display=swap');

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
width: 30VH;}

body {
  border: 0;
  margin: 0;
  padding: 0;
  font-family: "Lato", serif;
  height: 100%;
  background: white;
}
h2 {
    font-family: 'Poppins'!important;
    font-weight: 700!important;
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
.clear {background:white; clear: both; height: 12vh; }
</style>
