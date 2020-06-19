<template>
	<div id="app">
		<div class="details">
			<router-view></router-view>
		</div>

		<div class="bottom border-1px">
			<div class="bottom-item">
				<router-link to="/live"><img id="bot1" @click="changeImg(0)" :src="showImg(0)" /></router-link>
			</div>
			<div class="bottom-item">
				<router-link to="/main"><img id="bot2" @click="changeImg(1)" :src="showImg(1)" /></router-link>
			</div>
			<div class="bottom-item">
				<router-link to="/DongTai"><img id="bot3" @click="changeImg(2)" :src="showImg(2)" /></router-link>
			</div>
			<div class="bottom-item">
				<router-link to="huiyuangou"><img id="bot4" @click="changeImg(3)" :src="showImg(3)" /></router-link>
			</div>
			<div class="bottom-item">
				<router-link to="/Personal"><img id="bot5" @click="changeImg(4)" :src="showImg(4)" /></router-link>
			</div>
		</div>

	</div>

	</div>
</template>

<script>
	import DongTai from './components/RenLin/DongTai'
	import live from "./components/XuJinRen/live"
	import hot from './components/joe/hot.vue'
	import merberBuy from "./components/lijiale/merberBuy"
	import Personal from "./components/Helinjun/Personal/Personal"
	import main from './components/yinwenbin/main/main.vue'
	//知识区
	import kz from "./components/tantengkai/kz/kz.vue"
	export default {
		data() {
			return {
				image_status: 0,
				App_imgs: []
			}
		},
		created() {
			this.App_imgs[0] = require('./common/images/bot1.png')
			this.App_imgs[1] = require('./common/images/bot2.png')
			this.App_imgs[2] = require('./common/images/bot3.png')
			this.App_imgs[3] = require('./common/images/bot4.png')
			this.App_imgs[4] = require('./common/images/bot5.png')
			this.App_imgs[5] = require('./common/images/bot1@.png')
			this.App_imgs[6] = require('./common/images/bot2@.png')
			this.App_imgs[7] = require('./common/images/bot3@.png')
			this.App_imgs[8] = require('./common/images/bot4@.png')
			this.App_imgs[9] = require('./common/images/bot5@.png')
		},
		components: {
			DongTai,
			live,
			Personal,
			kz,
			merberBuy,
			//  Personal,
			//  kz,
			main
		},
		methods: {
			changeImg(a) {
				this.image_status = a
			},
			showImg(a) {
				let index = a
				if(this.image_status == a) {
					index += 5
				}
				return this.App_imgs[index]
			}
		}
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
