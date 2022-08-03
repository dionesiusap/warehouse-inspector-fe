<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Warehouse Inspector</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/packages" class="nav-link">Packages</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/inspections" class="nav-link">Previous Batches</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/package_inspections" class="nav-link">History</router-link>
        </li>
      </div>
    </nav>
    <div class="container mt-5">
      <router-view />
    </div>
  </div>
</template>

<script>
// import Packages from './components/Packages.vue'

export default {
  name: 'App',
  // components: {
  //   Packages
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
