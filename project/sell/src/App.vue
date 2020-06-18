<template>
  <div id="app">
    <!--调试的时候注释这个 -->
    <live></live>
    <!-- 调的时候注释下DongTai -->
<<<<<<< HEAD
    <!--<DongTai></DongTai>-->
    <Personal></Personal>
    <!-- <div class="details"></div>
    <div class="bottom border-1px">
      		<div class="bottom-item">
            <img src="./common/images/bot1.png" />
      		</div>
      		<div class="bottom-item">
            <img src="./common/images/bot2.png" />
          </div>
          <div class="bottom-item">
            <router-link to="/DongTai"><img src="./common/images/bot3.png" /></router-link>
          </div>
          <div class="bottom-item">
            <img src="./common/images/bot4.png" />
          </div>
      		<div class="bottom-item">
            <router-link to="/Personal"><img src="./common/images/bot5.png" /></router-link>
    </div>
    </div> -->
=======
    <!-- <DongTai></DongTai> -->
    <!-- <kz></kz> -->
>>>>>>> cefc5787c1ef5877aa76be94ec2ae8bc7afbbb7d
  </div>
</template>

<script>
import DongTai from './components/RenLin/DongTai'
import live from "./components/XuJinRen/live"
<<<<<<< HEAD
import Personal from "./components/Helinjun/Personal/Personal"
=======
//知识区
import kz from "./components/tantengkai/kz/kz.vue"
>>>>>>> cefc5787c1ef5877aa76be94ec2ae8bc7afbbb7d
export default {
  components:{
    DongTai,
    live,
<<<<<<< HEAD
    Personal
=======
    kz
>>>>>>> cefc5787c1ef5877aa76be94ec2ae8bc7afbbb7d
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import './common/stylus/mixin.styl';
  #app
    .details
      width :100%
      height :610px
    .bottom
      display: flex
      width: 100%
      height:55px
      line-height: 55px
      /* border-1px(rgba(7,17,27,0.1)) */
      .bottom-item
        flex:1
        img
          width :75px
          height :50px
        /* & > a
          display: block
          height: 55px
          color: rgb(77,85,93)
          &.router-link-active
            color: rgb(240,20,20) */
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
} */
</style>
