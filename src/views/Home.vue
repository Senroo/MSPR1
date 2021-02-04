<template>
  <div class="home">
    <News />
    <Slider />
    <CookieLaw />
    <a target="_blank" href="https://www.fnacspectacles.com/place-spectacle/ticket-evenement/reggae-summer-vibration-festival-mans38oj-lt.htm"><img
      class="billet-mobile mt-3"

      src="@/assets/billetterie-mobile.svg"
      alt="banner"
    /></a>
    <a target="_blank" href="https://www.fnacspectacles.com/place-spectacle/ticket-evenement/reggae-summer-vibration-festival-mans38oj-lt.htm"><img
        class="billet-web mt-3"

        src="@/assets/banner/banner.svg"
        alt="banner"
    /></a>
    <div class="tweet">
      <h2 class="mt-3">{{ $t('livetweet') }}</h2>
    <Tweet />
    </div>
    <div class="head-carte">
      <h2 class="titre-carte mb-3">{{ $t('cartehome') }}</h2>
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


@media (min-width: 1080px) and (max-width: 2000px) {
  #body > div > a:nth-child(4) > img{
    display: none;
    width: 100%;
  }

  #body > div > a:nth-child(5) > img{
    width: 100%;
  }

}

@media (min-width: 280px) and (max-width: 1080px) {
  #body > div > a:nth-child(5) > img{
    display: none;
    }
  #body > div > a:nth-child(4) > img{
    width: 100%;
  }

}


</style>