<template>
  <div id="planning">
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
    <div class="container-block mt-5">
      <div
        id="container-artist"
        v-for="(item, index) in computed_items"
        :key="index"
      >
        <img class="img mb-4 pr-2" :src="item.image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedType: "",
      selectedSize: "",
      items: [
        {
          name: "Damso",
          type: "musique",
          jour: "vendredi",
          image: require("@/assets/artists/damso.svg"),
        },
        {
          name: "Ninho",
          type: "idk",
          jour: "samedi",
          image: require("@/assets/artists/ninho.svg"),
        },
        {
          name: "Dua Lipa",
          type: "film",
          jour: "dimanche",
          image: require("@/assets/artists/dua lipa.svg"),
        },
        {
          name: "Dj snake",
          type: "musique",
          jour: "vendredi",
          image: require("@/assets/artists/dj snake.svg"),
        },
      ],
    };
  },
  methods: {
    shut() {
      this.selectedType = undefined;
      this.selectedSize = undefined;
    },
  },
  computed: {
    computed_items: function() {
      let filterType = this.selectedType,
        filterSize = this.selectedSize;
      return this.items.filter(function(item) {
        let filtered = true;
        if (filterType && filterType.length > 0) {
          filtered = item.type == filterType;
        }

        if (filtered) {
          if (filterSize && filterSize.length > 0) {
            filtered = item.jour == filterSize;
          }
        }
        return filtered;
      });
    },
  },
};
</script>

<style>
.img {
  width: 100%;
}

.container-block {
  display: flex;
}
</style>
