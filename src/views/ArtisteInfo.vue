<template>
  <div class="artist-info">
    <pre>{{ InfoArtist }}</pre>
    <router-link to="/programmation">Retour</router-link>
    <router-view></router-view>
    <div>
      <ul v-for="(artiste, index) in InfoArtist" :key="index">
        <li>
          {{artiste}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      InfoArtist: [],
      items: [
        {
          name: "Damso",
          type: "rap",
          jour: "vendredi",
          image: require("@/assets/artists/damso.svg"),
        },
        {
          name: "Ninho",
          type: "rap",
          jour: "samedi",
          image: require("@/assets/artists/ninho.svg"),
        },
        {
          name: "Dua Lipa",
          type: "pop",
          jour: "dimanche",
          image: require("@/assets/artists/dua lipa.svg"),
        },
        {
          name: "Dj snake",
          type: "electro",
          jour: "vendredi",
          image: require("@/assets/artists/dj snake.svg"),
        },
      ],
    };
  },

  mounted() {
    var url = new URL(document.location.href);
    var name = url.searchParams.get("name");
    console.log(name);

    axios.get('http://localhost:8000/api/partners?page=1').then(response =>
        this.InfoArtist = response.data)


  },
};
</script>

<style></style>
