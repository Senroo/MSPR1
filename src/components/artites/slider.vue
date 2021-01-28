<template>
  <div id="news">
    <h2 class="news-artistes mt-3">Concert à venir :</h2>
    <b-carousel
      id="artistsSlider"
      class="mt-2"
      controls
      indicators
      :interval="4000"
      fade
    >
      <b-carousel-slide v-for="i in Math.ceil(items.length / 3)" :key="i">
        <template v-slot:img>
          <b-card-group class="artistsSliderImgGroup d-flex">
            <b-card
              v-for="item in items.slice((i - 1) * 3, i * 3)"
              :alt="item.name"
              :img-src="item.image"
              class="artistSliderImg border-0 m-1"
              :key="item.id"
              overlay
            >
            </b-card>
          </b-card-group>
        </template>
      </b-carousel-slide>
    </b-carousel>
    <router-link to="/programmation">
    <a class="details-artistes mt-2" >En voir plus</a>
    </router-link>
    <router-view></router-view>
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

<style scooped>

#news {
  width: 100%;
}

.billet {
  width: 100%;
}

#artistsSlider .carousel-indicators li {
  width: 0.9rem;
  height: 0.9rem;
}

.news-artistes {
  font-size: 1.2em;
}

.details-artistes {
  float: right;
  color:rgb(118, 115, 254)!important;
  font-size: 1.2em;

}

a:hover {
  color: white;
  
}

#artistsSlider___BV_indicators_{
  display:none;
}
h2{
  font-size: 35px!important;
  padding:10px!important;
  background: linear-gradient(to right, #7673FE 0%, #F3BA00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    text-align: center!important;
    font-family: 'Poppins'!important;
    font-weight: 700!important;

}
</style>
