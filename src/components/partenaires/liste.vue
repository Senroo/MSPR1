<template>
  <div id="partenaires">
    <div v-for="(partenaire,index) in partenaires" :key="index">
      <p>{{partenaire.name}}</p>
      <img :src=partenaire.picture>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partenaires: [
        {
          name: 'romain',
          picture: require('@/assets/partenaires/partenaire.jpg'),
        },
        {
          name: 'yann',
          picture: require('@/assets/partenaires/partenaire.jpg'),
        },
        {
          name: 'vincent',
          picture: require('@/assets/partenaires/partenaire.jpg'),
        },
        {
          name: 'alex',
          picture: require('@/assets/partenaires/partenaire.jpg'),
        },
      ],
    }
  }
}
</script>

<style>

</style>