<template>
  <div id="searchbar" class="mt-5 w-75 mx-auto position-relative">
    <input type="search" placeholder="Trouver un partenaire" v-model="partSearch" id="partSearchbar"
           class="form-control rounded text-center">
    <i class="fas fa-search position-absolute"></i>
  </div>
</template>

<script>
export default {
  name: "searchbar",
  data() {
    return {
      partSearch: "",
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
#searchbar .fa-search {
  left: 15px;
  top: 10px;
}
</style>