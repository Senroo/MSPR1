<template>
  <div id="planning">
    <div class="filtre">
      <div class="filtre1 mr-5 ml-4 mt-2">
        <p>Genre</p>
        <select class="form-control" v-model="selectedType">
          <option value="rap">Rap</option>
          <option value="pop">Pop</option>
          <option value="electro">Electro</option>
          <option value="idk">...</option>
        </select>
      </div>

      <div class="filtre2 mt-2">
        <p>Date</p>
        <select class="form-control" v-model="selectedSize">
          <option value="vendredi">Jour 1</option>
          <option value="samedi">Jour 2</option>
          <option value="dimanche">Jour 3</option>
        </select>
      </div>
      <div class="reset mt-5">
        <button class="btn btn-primary ml-5" @click="shut()">Reset</button>
      </div>
    </div>
    <div id="item-artistes" class="d-flex flex-wrap justify-content-around text-center mt-5">
      <div id="container-artist" v-for="(item, index) in computed_items" :key="index" class="Item">
        <router-link :to="{ name: 'info', params: { name: item.name } }"><img class="ItemImg mb-4 pr-2" :src="item.image" /></router-link>
        <router-view></router-view>
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
          id: 1,
          name: "Damso",
          type: "rap",
          jour: "vendredi",
          image: require("@/assets/artists/damso.svg"),
        },
        {
          id:2,
          name: "Ninho",
          type: "rap",
          jour: "samedi",
          image: require("@/assets/artists/ninho.svg"),
        },
        {
          id:3,
          name: "Dua Lipa",
          type: "pop",
          jour: "dimanche",
          image: require("@/assets/artists/dua lipa.svg"),
        },
        {
          id:4,
          name: "Dj snake",
          type: "electro",
          jour: "vendredi",
          image: require("@/assets/artists/dj snake.svg"),
        },
                {
          id:5,
          name: "Dj snake",
          type: "electro",
          jour: "vendredi",
          image: require("@/assets/artists/dj snake.svg"),
        },
                {
          id:6,
          name: "Dj snake",
          type: "electro",
          jour: "vendredi",
          image: require("@/assets/artists/dj snake.svg"),
        },
                        {
          id:7,
          name: "Dj snake",
          type: "electro",
          jour: "vendredi",
          image: require("@/assets/artists/dj snake.svg"),
        },
                        {
          id:8,
          name: "Dj snake",
          type: "electro",
          jour: "vendredi",
          image: require("@/assets/artists/dj snake.svg"),
        },
                        {
          id:9,
          name: "Dj snake",
          type: "electro",
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
          filtered = item.type === filterType;
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
};
</script>

<style>
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

.filtre{
  display: flex;
}

</style>
