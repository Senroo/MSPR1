<template>
<div id="slider">
    <pre>{{info}}</pre>
</div>
  
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return{
            artist:[],
        }
    },
 mounted () {
var options = {
  method: 'GET',
  url: 'https://theaudiodb.p.rapidapi.com/artist-mb.php',
  params: {i: '3kdshn1asZHr5OgvBIVHnmQsD_mU5j6m'},
  headers: {
    'x-rapidapi-key': '16f13d8468msh4a621be92a240a3p17b32ejsn41ba33443dad',
    'x-rapidapi-host': 'theaudiodb.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
 }}
</script>

<style>

</style>