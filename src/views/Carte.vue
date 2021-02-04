<template>


  <div class="carte">
<b-row class="cartedw">
 <b-col lg="8" class="pb-2"> <h2>{{ $t('telecharger') }} </h2></b-col>
  <b-col lg="4" class="pb-2"><b-button size="med" href="/img/Carte.702ea25c.svg" download="Carte_Nation_Sounds">{{ $t('download') }}</b-button></b-col>

</b-row>

    <iframe scrolling="no" scrollwheel="false" src="https://www.google.com/maps/d/u/0/embed?mid=1-ej6YhnlI-xKt9NtEfRRgJh6d03UbkLH" width="640" height="480"></iframe>
    
  </div >
</template>

<script>
export default {

}
</script>

<style>
.cartedw{
  text-align: center;
}
.carte{
  width:100%;
justify-content: center;
}
iframe{width: 100%;}

@media (min-width: 1080px) and (max-width: 2000px) {
  iframe{
    height: 72vh;
  }
}
</style>