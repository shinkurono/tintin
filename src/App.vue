<template>
  <div id="app">
    <app-navbar></app-navbar>
    <body>
      <router-view></router-view>
    </body>
    <bottom/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import bottom from './components/bottom.vue'

export default {
  name: 'App',
  components: {
    appNavbar:Navbar,
    bottom
  }
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

a {
    text-decoration: none;
}

#app {
  background-color: #ebebeb;
}
</style>