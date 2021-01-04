<template>
  <div id="app">
    <div class="header-composent">
    <Header />
    </div>
    <div class="body">
    <Welcome />
    </div>
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
body{
  margin: 3%;
  background-color:#3C454C;

}
.body{
  margin-top: 10%;
}
footer {
  background: black;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100vw;
  margin: 0;
}
</style>
