<template>
  <div>
    <div id="searchbar" class="mt-5 w-75 mx-auto position-relative">
      <input type="search" placeholder="Trouver un partenaire" v-model="partSearch" id="partSearchbar"
             class="form-control rounded text-center">
      <i class="fas fa-search position-absolute"></i>
    </div>
    <div id="partenaires" class="d-flex flex-wrap justify-content-around text-center mt-5">
      <div v-for="(partenaire,index) in filteredPartenaires" :key="index" class="partenaireItem">
        <img :src="require(`@/assets/partenaires/${partenaire.logo}`)" :alt="partenaire.name" class="partenaireImg">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      partSearch: "",
      partenaires: [],
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
  },
  mounted() {

    axios.get('http://localhost:8000/api/partners?page=1').then(response =>
        this.partenaires = response.data["hydra:member"])


  },
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