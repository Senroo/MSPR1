<template>

  <div class="artist-info">
    <pre>{{ItemMeet}}</pre>
    <div>
      <div class="picture_artiste mb-4">
      <img :src="require(`@/assets/artists/${InfoArtist.picture}`)">
      </div>
      <div class="info">
        <h2>{{ $t('artiste1') }}</h2>
        <p>{{InfoArtist.description}}</p>
        <h2>{{ $t('artiste2') }}</h2>
        <p>{{InfoArtist.genre}}</p>
        <h2>{{ $t('artiste3') }}</h2>
        <p>{{InfoArtist.music_group}}</p>
        <h2>{{ $t('artiste4') }}</h2>
        <p>{{ $t('artiste5') }} : {{MeeingArtists.location}}</p>
        <br />
        <p>{{ $t('artiste6') }} : <span>{{moment(MeeingArtists.date).format('dddd, hA')}}</span></p>
      </div>
      <div class="info_footer">
    <router-link align="center" to="/programmation">Retour</router-link>
    <router-view></router-view>
      </div>
  </div>
  </div>
</template>
<style scoped>
.info{
  text-align: center;
}
.picture_artiste{
  text-align: center;
}
.info_footer{
  text-align: center;
}
</style>
<script>

import axios from 'axios';

export default {
  data() {
    return {
      InfoArtist: [],
      MeeingArtists:[],
      ItemMeet:[],

    };
  },

  mounted() {
    let url = new URL(document.location.href);
    let id = url.searchParams.get("id");

    console.log(id);

    axios.get('http://localhost:8000/api/artists/'+id).then(response =>
        this.InfoArtist = response.data)

    axios.get('http://localhost:8000/api/artist_meetings/').then(response =>
        this.MeeingArtists = response.data)



  },
};
</script>

<style></style>
