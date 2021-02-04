<template>
  <div id="slider">
    <vueper-slides autoplay>
      <vueper-slide class="textinfo"
        v-for="(slide, i) in slides"
        :key="i"
        :title="slide.title"
        :content="slide.message"
      />
    </vueper-slides>
  </div>
</template>

<script>
/*import axios from 'axios';*/
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import axios from "axios";

export default {
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      slides: [],
    };
  },
  mounted() {
    axios.get('http://localhost:8000/api/notifications?page=1').then(response =>
        this.slides = response.data["hydra:member"])
  },

};
</script>

<style>
.textinfo{
  font-size: 4vw;
}

.sliderImg {
  width: 100%;
  height: 100%;
}

#slider {
  background: linear-gradient(-45deg, #7673fe, #f3ba00, #e0243d);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
}
#slider div{

  color: white;
     font-family: 'Poppins'!important;
}
.vueperslide__title{
      font-weight: 700!important;

}
.vueperslide__content{
      font-weight: 300!important;

}


@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.vueperslides__arrows{
  display:none;
}

.vueperslides__bullets{
  display:none;
}

</style>