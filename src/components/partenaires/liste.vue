<template>
  <div id="partenaires" class="d-flex flex-wrap justify-content-around text-center mt-5">
    <div v-for="(partenaire,index) in partenaires" :key="index" class="partenaireItem">
      <img :src=partenaire.picture :alt="partenaire.name" class="partenaireImg">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partenaires: [
        {name: 'Desperados', picture: require('@/assets/partenaires/desperados.svg')},
        {name: 'Spotify', picture: require('@/assets/partenaires/spotify.svg')},
        {name: 'Ile de France', picture: require('@/assets/partenaires/iledefrance.svg')},
        {name: 'Nursultan', picture: require('@/assets/partenaires/nursultan.svg')},
        {name: 'Choke Notes', picture: require('@/assets/partenaires/chokenotes.svg')},
        {name: 'Taylor', picture: require('@/assets/partenaires/taylor.svg')},
        {name: 'Victoria', picture: require('@/assets/partenaires/victoria.svg')},
        {name: 'Belmont', picture: require('@/assets/partenaires/belmont.svg')},
        {name: 'Van Gordon', picture: require('@/assets/partenaires/vangordon.svg')},
        {name: 'Sfamily', picture: require('@/assets/partenaires/sfamily.svg')},
        {name: 'Mercedes-Benz', picture: require('@/assets/partenaires/mercedesbenz.svg')},
        {name: 'Marbary', picture: require('@/assets/partenaires/marbary.svg')},
      ],
    }
  }
}
</script>

<style>
.partenaireImg {
  width: 85%;
  height: 85%;
}

.partenaireItem {
  width: 33%;
}
</style>