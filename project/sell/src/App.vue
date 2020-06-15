<template>
  <div id="app">
    <DongTai></DongTai>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
