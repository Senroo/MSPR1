<template>
  <div id="slider">
    <vueper-slides autoplay>
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :title="slide.title"
        :content="slide.content"
      />
    </vueper-slides>
  </div>
</template>

<script>
/*import axios from 'axios';*/
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      slides: [
        {
          title: "Alerte covid",
          content: "Nous sommes en guerre",
        },
        {
          title: "Slide #2",
          content: "je suis un artiste",
        },
      ],
    };
  },
  methods() {},
  /* mounted () {
  var options = {
    method: 'GET',
    url: 'https://theaudiodb.p.rapidapi.com/artist-mb.php',
    params: {i: '3kdshn1asZHr5OgvBIVHnmQsD_mU5j6m'},
    headers: {
      'x-rapidapi-key': '16f13d8468msh4a621be92a240a3p17b32ejsn41ba33443dad',
      'x-rapidapi-host': 'theaudiodb.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
   }*/
};
</script>

<style>
.sliderImg {
  width: 100%;
  height: 100%;
}

#slider {
  background: linear-gradient(-45deg, #7673fe, #f3ba00, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
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