<template>
  <div>
    <div class="contact_titre mb-2 mt-">
    <h1 class=" pt-4 contact-titre">{{ $t('contact3') }}</h1>
    </div>
    <div class="container-contact">
      <div class="image-contact">
        <img class="mt-2 image_contact" src="@/assets/banner/festivalcontact.svg"/>
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

@media (min-width: 1080px) and (max-width: 2000px) {
  .image-contact{
    text-align: center;

  }
  img{
    width:100%!important;
    height: 45vh;
  }
  .i4ewOd-UzWXSb{
    height: 100vh!important;
  }

}


.container {
  text-align: center;
}

.image_contact {
  width: 100%;

}

.contact-titre{
    color: white;
  font-size: 1.5em;
  text-align: center;
}
.contact_titre {

    background: linear-gradient(-45deg, #7673fe, #f3ba00, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
  width: 100%;
  height:9vh;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}



</style>