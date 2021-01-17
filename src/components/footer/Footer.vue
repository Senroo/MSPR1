<template>
  <footer id="v-step-0" class="footer footer-transparent">
    <v-tour style="" name="myTour" :steps="steps" :options="myOptions"></v-tour>
    <div class="container">
      <b-container class="bv-example-row mt-2 ml-2">
        <b-row>
          <router-link to="/"
            ><b-col id="v-step-1" class="mt-2">
              <i class="fas fa-2x fa-ticket-alt"></i>
              <p class="mt-2 mr-2">Billeterie</p>
            </b-col></router-link
          >
          <router-link to="/programmation"
            ><b-col id="v-step-2" class="mt-2">
              <i class="fas fa-2x fa-calendar-week"></i>
              <p class="mt-2 mr-3">Programmation</p>
            </b-col></router-link
          >
          <router-link to="/carte"
            ><b-col id="v-step-3" class="mt-2">
              <i class="fas fa-2x fa-map"></i>
              <p class="mt-2">Carte</p>
            </b-col></router-link
          >
        </b-row>
      </b-container>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        {
          target: "#v-step-0", // We're using document.querySelector() under the hood
          header: {
            title: "Notre menu de navigation rapide",
          },
          content: `Naviguez plus rapidement <strong>sur toutes nos pages</strong>!`,
        },
        {
          target: "#v-step-1",
          header: {
            title: "Vous n'avez pas encore vos billets ?",
          },
          content:
            "Pas de panique accedez directement à notre billeterie en cliquant ici",
        },
        {
          target: "#v-step-2",
          header: {
            title: "Menu programmation",
          },
          content: "Programme de tous les concerts prévus",
        },
        {
          target: "#v-step-3",
          header: {
            title: "Menu Carte",
          },
          content: "Venez découvrir notre carte intéractive",
        },
      ],
      myOptions: {
        labels: {
          buttonSkip: "Passer la visite",
          buttonPrevious: "Précédent",
          buttonNext: "Suivant",
          buttonStop: "Finir",
        },
      },
    };
  },
  mounted: function () {
    this.$tours["myTour"].start();
  },
};
</script>

<style scoped>
.container {
  text-align: center;
}

footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
}
.bv-example-row b-row b-col i {
  text-align: center;
}

.link-ticket:active {
  color: red;
}
.v-tour__target--highlighted {
  background: white;
}
</style>