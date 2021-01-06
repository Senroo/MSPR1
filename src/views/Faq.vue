<template>
 <div id="faq" class="faq">
    <h1 class="h1 text-center mt-4 ">Frequently asked question</h1>
    
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
          title: "Où se situe le festival ?",
          value:
            "Le festival se déroule en région Parisienne et plus précisément 12 avenue de menthe la jolie, 75340!",
          category: "Le lieu"
        },
        {
          title: "Comment je peux y accéder ?",
          value:
            "Venus takes 224.7 Earth days to complete one orbit around the Sun.",
          category: "Le lieu"
        },
        {
          title: "Y'a t'il un plan du festival ?",
          value: "Binturongs smell like popcorn.",
          category: "Le lieu"
        },
        {
          title: "Combien de temps dure le festival ?",
          value: "Binturongs smell like popcorn.",
          category: "Le festival"
        }
        ,
        {
          title: "Quels artistes seront présent au festival",
          value: "Vous pouvez retrouver la liste de tous les artistes présents en suivant les différentes journées sur la liste",
          category: "Le festival"
        },
        {
          title: "Quels sont les dates du festival",
          value: "Binturongs smell like popcorn.",
          category: "Le festival"
        },
        {
          title: "Les choses à savoir concernant le covid",
          value: "Binturongs smell like popcorn.",
          category: "Le festival"
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
    width: 100%;
border-color: red;

}
.faq__nav-item{
active-color: #323A61;
}
#faq nav.faq__nav{
  border-color: #323A61!important;
  border-radius: 50px;
}

.faq__nav-item_active{
  background-color: #323A61!important;
  color: white!important;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}
.faq__nav:nth-child(2){
border-top-right-radius: 50px!important;
border-bottom-right-radius: 50px!important;
}
.accordion__item{
  background-color: #323A61!important; 
  border-radius: 50px;
}
.accordion__title{
  color: white!important;
}
.accordion__value{
  background-color: #C5CBE5;
  border-radius: 100px;
  width: auto;
}
button .accordion__toggle-button{
  background-color: red!important;
}
.accordion{
  border-color: blue!important;
}
h1{
  color: #4043B4;
  padding-bot: 50%n;
}
section.faq{
  margin-top: 50px;
}
</style>
