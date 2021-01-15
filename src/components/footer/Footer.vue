<template>
  <footer class="text-muted">
    <div class="container">
      <router-link to="/partenaire"><svg height="100" width="100">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="black"
          stroke-width="3"
          fill="white"
        />
      </svg></router-link>
      <router-link to="/programmation"><svg height="100" width="100">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="black"
          stroke-width="3"
          fill="white"
        />
      </svg></router-link>
      <router-link to="/about"><svg height="100" width="100">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="black"
          stroke-width="3"
          fill="white"
        />
      </svg></router-link>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  background: #7673FE;
}

footer{
  width: 100%;
}
</style>