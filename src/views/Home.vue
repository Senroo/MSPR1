<template>
  <div class="home">
    <News/>
    <Slider/>
    <img class="billet" src="@/assets/banner/banner.svg">
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
