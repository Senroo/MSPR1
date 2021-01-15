<template>
  <div>
    <div class="contact_titre">
    <h1 class=" pt-4 contact-titre">Vous voulez contacter la nation ?</h1>
    </div>
    <div class="container-contact">
      <div class="image-contact">
        <img class="mt-0 image_contact" src="https://www.plumetismagazine.net/medias/2019/09/a4_visuel_2_labelpomme_eng.jpg"/>
      </div>
      <Form/>
  </div>
  </div>
</template>

<script>
import Form from '@/components/form/Form.vue'

export default {
  components: {
    Form,
  },
}
</script>

<style scoped>
.container {
  text-align: center;
}

.image_contact {
  width: 100%;
  height: 50vh;
}

.contact_titre {
  text-align: center;
  background-color: #4043B4;
  height: 10vh;
}
.contact-titre {
  color: white;
  font-size: 1.5em;

}
</style>