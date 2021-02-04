<template>
  <div id="planning">
    <h2>{{ $t('prog') }}</h2>
    <div class="filtre">
      <div class="filtre1 mr-5 ml-4 mt-3">
        <p>Genre</p>
        <select class="form-control" v-model="selectedType">
          <option value="Rap">Rap</option>
          <option value="Pop">Pop</option>
          <option value="Electro">Electro</option>
          <option value="Variété">Variété française</option>
          <option value="Rock">Rock</option>
        </select>
      </div>

      <div class="reset mt-5">
        <button class="btn ml-5" style="background-color:rgb(118, 115, 254)!important; color:white;"  @click="shut()">Reset</button>
      </div>
    </div>
    <div
      id="item-artistes"
      class="d-flex flex-wrap justify-content-around text-center mt-5"
    >
      <div
        id="container-artist"
        v-for="(item, index) in computed_items"
        :key="index"
        class="Item"
      >
        <router-link :to="{ name: 'info', params: { id: item.id } }"
          ><img class="ItemImg mb-4 pr-2" :src="require(`@/assets/artists/${item.picture}`)"
        /></router-link>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selectedType: "",
      selectedSize: "",
      items: [],
    };
  },
  methods: {
    shut() {
      this.selectedType = undefined;
      this.selectedSize = undefined;
    },
  },
  computed: {
    computed_items: function () {
      let filterType = this.selectedType,
        filterSize = this.selectedSize;
      return this.items.filter(function (item) {
        let filtered = true;
        if (filterType && filterType.length > 0) {
          filtered = item.genre === filterType;
        }

        if (filtered) {
          if (filterSize && filterSize.length > 0) {
            filtered = item.jour === filterSize;
          }
        }
        return filtered;
      });
    },
  },
  mounted() {

    axios.get('http://localhost:8000/api/artists?page=1').then(response =>
        this.items = response.data["hydra:member"])




  },
};
</script>

<style scoped>
.ItemImg {
  width: 85%;
  height: 85%;
}

.container-block {
  display: flex;
}

.Item {
  width: 33%;
}

.filtre {
  display: flex;
}
@media (min-width: 1080px) and (max-width: 2000px) {
#planning > div.filtre{
  justify-content:space-around;
}

}
</style>
