<template>
  <div id="app">
    <div id="header">
    <nav class="main-nav">
      
      <b-container class="bv-example-row">
        <b-row >
        <b-col ><Burger></Burger></b-col>
        <b-col id="headerlogo" @click="imgClick(item)"><router-link to="/"><img class="logo" src="./assets/logo.svg" /> </router-link></b-col>
        
      </b-row>
      </b-container>
    </nav>

    <Sidebar>
      <ul class="sidebar-panel-nav">
        <router-link to="/"><img class="logo" src="./assets/logo.svg" /> </router-link>
        <li><router-link to="/">{{ $t('accueil') }}</router-link></li>
        <li><router-link to="/programmation">{{ $t('programmation') }}</router-link></li>
        <li><router-link to="/partenaire">{{ $t('partenaires') }}</router-link></li>
        <li><router-link to="/contact">{{ $t('contact') }}</router-link></li>
        <li><router-link to="/Faq">{{ $t('FAQ') }}</router-link></li>
        <li><router-link to="/Cgv">{{ $t('conditiongeneral') }}</router-link></li>
        <div class="reseau">
        <a class="jaune" target="_:blank" href="https://www.linkedin.com/company/festivaldes3continents?originalSubdomain=fr">  <i class="fab fa-linkedin"></i> </a>
          <a class="violet" target="_:blank" href="https://www.instagram.com/nationsound/">  <i class="fab fa-instagram-square"></i></a>
           <a class="jaune" target="_:blank" href="https://www.facebook.com/nationsounds"> <i class="fab fa-facebook-square"></i></a>
          <a class="violet" target="_:blank" href="https://www.youtube.com/channel/UCyQy3WEj4Qqxc33up9xJZHQ">  <i class="fab fa-youtube"></i></a>

           </div>
    

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
.reseau{justify-content: center;
display: flex;
width: 100%;

}
.violet{color: #7673FE;

}
.jaune{color:#F3BA00 ;}
 i{
  padding: 5px;
    font-size: 5vh;

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
    font-size: 4vw;
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

 .cls-3 {
        fill: #fff;
        font-size: 27px;
        font-family: Montserrat-Bold, Montserrat;
        font-weight: 700;
      }

#headerlogo{
  text-align: right;
}
</style>
