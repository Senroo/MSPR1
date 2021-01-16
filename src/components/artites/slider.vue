<template>
  <div id="news">
    <b-carousel id="artistsSlider" class="mt-5" controls indicators :interval="4000" fade>
      <b-carousel-slide v-for="i in Math.ceil(items.length / 3)" :key="i">
        <template v-slot:img>
          <b-card-group class="artistsSliderImgGroup d-flex">
            <b-card v-for="item in items.slice((i - 1) * 3, i * 3)" :alt="item.name"
                    :img-src="item.image" class="artistSliderImg border-0 m-2" :key="item.id" overlay>
            </b-card>
          </b-card-group>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedType: "",
      selectedSize: "",
      items: [
        {
          id: 1,
          name: "Ninho",
          type: "rap",
          jour: "samedi",
          image: require("@/assets/artists/ninho.svg"),
        },
        {
          id: 2,
          name: "Damso",
          type: "rap",
          jour: "vendredi",
          image: require("@/assets/artists/damso.svg"),
        },
        {
          id: 3,
          name: "Dua Lipa",
          type: "pop",
          jour: "dimanche",
          image: require("@/assets/artists/dua lipa.svg"),
        },
        {
          id: 4,
          name: "Dj snake",
          type: "electro",
          jour: "vendredi",
          image: require("@/assets/artists/dj snake.svg"),
        },
        {
          id: 5,
          name: "Tiesto",
          type: "trance",
          jour: "dimanche",
          image: require("@/assets/artists/tiesto.svg"),
        },
        {
          id: 6,
          name: "Drake",
          type: "hip-hop/rap",
          jour: "samedi",
          image: require("@/assets/artists/drake.svg"),
        },
      ],
    };
  },
};
</script>

<style>
#news {
  margin: 0 auto;
  width: 100%;
}

.billet {
  width: 100%;
}

#artistsSlider .carousel-indicators li{
  width: 0.9rem;
  height: 0.9rem;
}

#artistsSlider .carousel-control-next span, #artistsSlider .carousel-control-prev span {
  width: 5rem!important;
  height: 5rem!important;
}
</style>
