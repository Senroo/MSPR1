<template>
  <div id="app">
    
    <Header />
    <Welcome />
    <footer>Le groupe de folie</footer>
  </div>
</template>

<script>
import Welcome from './components/welcome.vue'
import Header from './components/header.vue'
export default {
  name: 'App',
  components: {
    Welcome,
    Header,
  }
}
</script>

<style>
footer {
  background: black;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100vw;
  margin: 0;
}
</style>
