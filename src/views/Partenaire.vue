<template>
  <div class="partenaire">
    <h1 class="h1 text-center mt-4">Nos Partenaires</h1>
    <Partenaire></Partenaire>
  </div>
</template>

<script>
import Partenaire from '@/components/partenaires/liste.vue'

export default {
  name: 'Partenaires',
  components: {
    Partenaire
  }
}
</script>
