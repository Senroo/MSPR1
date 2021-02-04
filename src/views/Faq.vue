<template>
  <div className="accordion" role="tablist" >
    <b-card no-body className="mb-1" v-for="(info, index) in InfoArtist" :key="index">
      <b-card-header header-tag="header" className="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info">{{ info.question }}</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
          <b-card-text>{{ info.answer}}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      InfoArtist: [],
    }
  },

mounted() {


  axios.get('http://localhost:8000/api/faqs').then(response =>
      this.InfoArtist = response.data["hydra:member"])


},
}
</script>