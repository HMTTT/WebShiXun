<template>
  <div id="app">
    <DongTai></DongTai>
  </div>
</template>

<script>
import DongTai from './components/RenLin/DongTai'
export default {
  components:{
    DongTai
  }
}
</script>

<style>
* {
  margin: 0 auto;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
