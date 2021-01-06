<template>
  <div id="searchbar" class="mt-5 w-75 mx-auto position-relative">
    <input type="search" placeholder="Trouver un partenaire" v-model="partSearchString" id="partSearchbar"
           class="form-control rounded text-center">
    <i class="fas fa-search position-absolute"></i>
  </div>
</template>

<script>
export default {
  name: "searchbar"
}
</script>

<style>
#searchbar .fa-search {
  right: 15px;
  top: 10px;
}
</style>