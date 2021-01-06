<template>
 <div id="faq" class="faq">
    <h1 class="h1 text-center mt-4">Frequently asked question</h1>
    
  <VueFaqAccordion :items="myItems"/> 

   </div>
</template>

<script>
import VueFaqAccordion from "vue-faq-accordion";

export default {
  components: {
    VueFaqAccordion
  },
  data() {
    return {
      myItems: [
        {
          title: "Combien de temps dure le festival ?",
          value:
            "Le festival dure sur 3 jours !",
          category: "Le festival"
        },
        {
          title: "How long is a day and year on Venus?",
          value:
            "Venus takes 224.7 Earth days to complete one orbit around the Sun.",
          category: "Le lieu"
        },
        {
          title: "What animal smells like popcorn?",
          value: "Binturongs smell like popcorn.",
          category: "Le lieu"
        }
      ]
    };
  }
};
</script>

<style>
* {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  border-color: blue;
}
#faq{
margin-left: auto;
    margin-right: auto;
    width: 50em
}
</style>
