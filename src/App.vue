<template>
  <div id="app">
    <ele-table />
  </div>
</template>

<script>
import EleTable from './components/table.vue'

export default {
  name: 'App',
  components: {
    EleTable
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
