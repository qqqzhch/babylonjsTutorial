<template>
<div>

  
  <BabylonScene/>
  
</div>
</template>

<script>
import BabylonScene from './components/BabylonScene.vue'

export default {
  name: 'App',
  components: {
    BabylonScene
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
</style>
