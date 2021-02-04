<template>
  <div class="container-tweet">
      <Timeline id="charrues" sourceType="profile" :options="{ tweetLimit: '2' }" widget-class="" />
  </div>
</template>

<script>
import {  Timeline } from 'vue-tweet-embed'
export default {
  components:{
Timeline,
  }
};
</script>

<style scoped>

.timeline-Header .timeline-InformationCircle-widgetParent{
  display: none!important;
}
@media (min-width: 1080px) and (max-width: 2000px) {
  .container-tweet{

  }
}
</style>