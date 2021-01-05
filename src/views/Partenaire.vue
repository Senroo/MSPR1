<template>
  <div class="partenaire">
    <searchbar></searchbar>
    <Partenaire></Partenaire>
  </div>
</template>

<script>
// @ is an alias to /src
import Partenaire from '@/components/partenaires/liste.vue'
import Searchbar from '@/components/partenaires/searchbar.vue'

export default {
  name: 'Partenaires',
  components: {
    Partenaire,
    Searchbar
  }
}
</script>
