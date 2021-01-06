<template>
  <div>
   <div id="app">
  <select v-model="selectedType">
    <option value="musique">Musique</option>
    <option value="film">Film</option>
    <option value="idk">IDK</option>
    <option value="idk">Reset</option>
  </select>
  
  <select v-model="selectedSize">
    <option value="vendredi">Vendredi</option>
    <option value="samedi">Samedi</option>
    <option value="dimanche">Dimanche</option>
  </select>

  <button @click="shut()">Reset</button>

</div>
  <ul>
    <li v-for="(item, index) in computed_items" :key="index">
      <span>{{ item.name }}</span> |
      <span>{{ item.type }}</span> |
      <span>{{ item.jour }}</span> |
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  data() {
    return{
      selectedType: '',
      selectedSize: '',
       items: [
      {
        name: 'Damso',
        type: 'musique',
        jour: 'vendredi'
      },
      {
        name: 'Nekfeu',
        type: 'idk',
        jour: 'samedi'
      },
      {
        name: 'Dua Lipa',
        type: 'film',
        jour: 'dimanche'
      },
      {
        name: 'Ninho',
        type: 'musique',
        jour: 'vendredi'
      }
    ],
    }
  },
  methods: {

      shut(){
        this.selectedType = undefined;
        this.selectedSize = undefined;
      }
  },
  computed: {
    computed_items: function () {
      let filterType= this.selectedType,
          filterSize = this.selectedSize
      return this.items.filter(function(item){
        let filtered = true
        if(filterType && filterType.length > 0){
          filtered = item.type == filterType
        }

        if(filtered){
          if(filterSize && filterSize.length > 0){
            filtered = item.jour == filterSize
          }
        }
        return filtered
      })
    }
  }
}
</script>

<style></style>
