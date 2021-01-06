<template>
  <div class="home">
    <News/>
    <Slider/>
    <Carte/>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from "../components/artites/slider.vue";
import News from "../components/menu/ImportantInfo.vue";
import Carte from "../components/carte/carte.vue";

export default {
  name: 'Home',
  components: {
    Slider,
    News,
    Carte,
  }
}
</script>
