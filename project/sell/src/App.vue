<template>
  <div id="app">
    <!-- <DongTai></DongTai> -->
    <!-- <live></live> -->
	<merberBuy></merberBuy>
  </div>

</template>

<script>
import DongTai from './components/RenLin/DongTai'
import live from "./components/XuJinRen/live"
import merberBuy from "./components/lijiale/merberBuy"
export default {
  components:{
    DongTai,
    live,
	merberBuy
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
  margin-top: 20px;
}
</style>
