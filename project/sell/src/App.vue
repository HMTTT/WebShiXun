<template>
  <div id="app">
    <!-- <live></live> -->
    <!-- 调的时候注释下DongTai -->
    <DongTai></DongTai>
    <kz></kz>
  </div>

</template>

<script>
import DongTai from './components/RenLin/DongTai'
import live from "./components/XuJinRen/live"
//知识区
import kz from "./components/tantengkai/kz/kz.vue"
export default {
  components:{
    DongTai,
    live,
    kz
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
