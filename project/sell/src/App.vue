<template>
  <div id="app">
    <!-- <DongTai></DongTai> -->
    <live></live>
  </div>

</template>

<script>
import DongTai from './components/RenLin/DongTai'
import live from "./components/XuJinRen/live"
export default {
  components:{
    DongTai,
    live
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
