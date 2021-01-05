<template>
  <div id="searchbar">
    <div v-for="(artists,index) in artist" :key="index">
      <p>{{artists.name}}</p>
      <img :src=artists.picture>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchbar"
}
</script>

<style>

</style>