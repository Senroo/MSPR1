<template>
  <div class="home">
    <News />
    <Slider />
    <CookieLaw />
    <a><img
      class="billet mt-3"
      src="@/assets/billetterie-mobile.svg"
      alt="banner"
    /></a>

    <div class="tweet">
      <h2 class="mt-3">Tweet en direct :</h2>
    <Tweet />
    </div>
    <div class="head-carte">
      <h2 class="titre-carte mb-3">Carte de la nation !</h2>
    </div>
    <Map />

  </div>
</template>
<script>
// @ is an alias to /src

import Slider from "../components/artites/slider.vue";
import News from "../components/menu/ImportantInfo.vue";
import Map from "../components/bottom-navbar/map.vue";
import Tweet from "../components/tweet-api/Tweet.vue"
import CookieLaw from "../components/cookie/cookie.vue"
export default {
  name: "Home",
  components: {
    Slider,
    News,
    Map,
    Tweet,
    CookieLaw,
  },

};
</script>
<style scoped>
@import "~animate.css/animate.css";
#v-step-46f34eda{
  background: white!important;
}

body {
}
.billet {
  width: 100%;
}
.bille {
  width: 20%;  
}
.titre-carte {
  font-size: 1.2em;
  text-align: left;
}

.tweet h2{
  font-size: 1.2em;
}



</style>