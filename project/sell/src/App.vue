<template>
  <div id="app">
    <!-- <live></live> -->
    <!-- 调的时候注释下DongTai -->
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
  </div>

</template>

<script>
import DongTai from './components/RenLin/DongTai'
import live from "./components/XuJinRen/live"
import Personal from "./components/Helinjun/Personal/Personal"
export default {
  components:{
    DongTai,
    live,
    Personal
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
