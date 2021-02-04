<template>
  <div class="carte">
    <iframe scrolling="no" scrollwheel="false" src="https://www.google.com/maps/d/u/0/embed?mid=1-ej6YhnlI-xKt9NtEfRRgJh6d03UbkLH" width="640" height="480"></iframe>

  </div>
</template>

<script>
export default {

}
</script>

<style>
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