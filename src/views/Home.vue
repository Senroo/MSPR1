<template>
  <div class="home">
    <News />
    <Slider />
    <img
      srcset="
        @/assets/billetterie-mobile.svg 480w,
        @/assets/banner/banner.svg 800w
      "
      size="(max-width: 480px), 800px"
      class="billet mt-3"
      src="@/assets/billetterie-mobile.svg"
      alt="banner"
    />
    <div class="head-carte">
      <h2 class="titre-carte mt-4">Bienvenue dans la nation !</h2>
    </div>
    <Map />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "../components/footer/Footer.vue";
import Slider from "../components/artites/slider.vue";
import News from "../components/menu/ImportantInfo.vue";
import Map from "../components/bottom-navbar/map.vue";

export default {
  name: "Home",
  components: {
    Slider,
    News,
    Map,
    Footer,
  },
};
</script>
<style scoped>
@import "~animate.css/animate.css";
body {
}
.billet {
  width: 100%;
}
.titre-carte {
  font-size: 1.5em;
  text-align: center;
}
</style>