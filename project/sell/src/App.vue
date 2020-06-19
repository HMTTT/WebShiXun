<template>
  <div id="app">

    <!-- <DongTai></DongTai> -->
    <!-- <live></live> -->
	<!-- <merberBuy></merberBuy> -->
    <!--调试的时候注释这个 -->

  <!--  <live></live> -->
    <!-- 调的时候注释下DongTai -->
    <!--<DongTai></DongTai>-->
   <!-- <Personal></Personal> -->
    <!-- <live></live> -->
    <!-- <hot></hot> -->
    <!-- 调的时候注释下DongTai -->
    <!--<DongTai></DongTai>-->
    <!-- <Personal></Personal> -->

    <div class="details"><router-view ></router-view></div>

    <div class="bottom border-1px">
      <div class="bottom-item">
          <router-link to="/live"><img src="./common/images/bot1.png" /></router-link>
      </div>
      <div class="bottom-item">
          <img src="./common/images/bot2.png" />
        </div>
        <div class="bottom-item">
          <router-link to="/DongTai"><img src="./common/images/bot3.png" /></router-link>
        </div>
        <div class="bottom-item">
          <router-link to="huiyuangou"><img src="./common/images/bot4.png" /></router-link>
        </div>
        <div class="bottom-item">
         <router-link to="/Personal"><img src="./common/images/bot5.png" /></router-link>
        </div>
    </div>

    </div>

    <!-- <DongTai></DongTai> -->
    <!-- <kz></kz> -->
  </div>
</template>

<script>
import DongTai from './components/RenLin/DongTai'
import live from "./components/XuJinRen/live"
import hot from './components/joe/hot.vue'
import merberBuy from "./components/lijiale/merberBuy"
import Personal from "./components/Helinjun/Personal/Personal"
//知识区
import kz from "./components/tantengkai/kz/kz.vue"
export default {
  components:{
    DongTai,
    live,
    Personal,
    kz,
    merberBuy,
    Personal,
    kz
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import './common/stylus/mixin.styl';
  #app
    .details
      width :100%
      height :612px
    .bottom
      display: flex
      width: 100%
      height:55px
      bottom:0px
      position: fixed
      overflow: hidden
      .bottom-item
        background-color :white
        flex:1
        img
          width :75px
          height :54px
/*{
  margin: 0 auto;
  padding: 0;
} */

/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:auto;
}
} */
</style>
