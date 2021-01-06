<template>
  <div>
    <div id="searchbar" class="mt-5 w-75 mx-auto position-relative">
      <input type="search" placeholder="Trouver un partenaire" v-model="partSearch" id="partSearchbar"
             class="form-control rounded text-center">
      <i class="fas fa-search position-absolute"></i>
    </div>
    <div id="partenaires" class="d-flex flex-wrap justify-content-around text-center mt-5">
      <div v-for="(partenaire,index) in filteredPartenaires" :key="index" class="partenaireItem">
        <img :src=partenaire.picture :alt="partenaire.name" class="partenaireImg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partSearch: "",
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
  },
  computed: {
    filteredPartenaires: function () {
      let part_array = this.partenaires,
          partSearch = this.partSearch;
      if(!partSearch){
        return part_array;
      }
      partSearch = partSearch.trim().toLowerCase();
      part_array = part_array.filter(function(item){
        if(item.name.toLowerCase().indexOf(partSearch) !== -1){
          return item;
        }
      })
      return part_array;
    },
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

#searchbar .fa-search {
  left: 15px;
  top: 10px;
}
</style>