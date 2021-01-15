<template>
  <div class="home">
    <News/>
    <Slider/>
    <img class="billet" src="@/assets/banner/banner.svg" alt="banner"/>
    <h2 class="titre-carte mt-4">Bienvenue dans la nation !</h2>
    <hr>
    <img class="billet mt-2" src="@/assets/banner/Carte.svg" alt="carte"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from "../components/artites/slider.vue";
import News from "../components/menu/ImportantInfo.vue";

export default {
  name: 'Home',
  components: {
    Slider,
    News,
  }
}
</script>
<style>
.billet {
  width: 100%;
}

.titre-carte {
  font-size: 1.5em;
}

</style>