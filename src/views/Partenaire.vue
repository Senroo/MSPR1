<template>
  <div class="partenaire">
    <h1 class="h1 text-center mt-4">Nos Partenaires</h1>
    <Searchbar></Searchbar>
    <Partenaire></Partenaire>
  </div>
</template>

<script>
// @ is an alias to /src
import Searchbar from '@/components/partenaires/searchbar.vue'
import Partenaire from '@/components/partenaires/liste.vue'

export default {
  name: 'Partenaires',
  components: {
    Searchbar,
    Partenaire
  }
}
</script>
