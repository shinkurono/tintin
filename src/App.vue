<template>
  <div id="app">
    <app-navbar></app-navbar>
    <div class="website">
      <router-view><story/></router-view>
    </div>
    <bottom/>
  </div>
</template>

<script>
//import OurStory from './components/story/story.vue';
import Navbar from './components/Navbar.vue';
import story from './components/story/story';
import bottom from './components/bottom.vue'

export default {
  name: 'App',
  components: {
    appNavbar:Navbar,
    story,
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