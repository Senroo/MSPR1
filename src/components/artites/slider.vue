<template>
  <div id="news">
    <div
      id="item-artistes"
      class="d-flex flex-wrap justify-content-around text-center mt-5"
    >
      <div
        id="container-artist"
        v-for="(item, index) in items"
        :key="index"
        class="Item"
      >
        <img class="ItemImg mb-4 pr-2" :src="item.image" />
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
          id: 2,
          name: "Ninho",
          type: "rap",
          jour: "samedi",
          image: require("@/assets/artists/ninho.svg"),
        },
        {
          id: 3,
          name: "Dua Lipa",
          type: "pop",
          jour: "dimanche",
          image: require("@/assets/artists/dua lipa.svg"),
        },
        {
          id: 4,
          name: "Dj snake",
          type: "electro",
          jour: "vendredi",
          image: require("@/assets/artists/dj snake.svg"),
        },
      ],
    };
  },
};
</script>

<style>
#news {
  margin: 0 auto;
  width: 100%;
}

.billet {
  width: 100%;
}
</style>
