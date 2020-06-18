<template>
	<div class="hot">
    <div ref='hotscroll'>
      <!-- <h1>{{hotdata.rankList[0].author}}</h1> -->
      <ul class="hotList">
      	<li class="hot-item" v-for="(item,itemIndex) in hotdata.rankList" style="border-bottom: 0.125rem #8A8A8A;">
      		<div class="icon">
      			<img :src="item.pic" width="130" height="100" class="pic" style="border-radius: 0.25rem;"/>
      		</div>
      		<div class="content">
      			<p class="name">{{item.title}}</p>
      			<div class="others">
      				<!-- <p class="tab">百万点赞</p> -->
              <p v-if="item.play >= 1000000 " class="tab" style="color:coral">百万播放</p>
      				<p class="upname">{{item.author}}</p>
      				<p class="watchs">{{getnum(item.play)}}万人观看   {{getnum(item.coins)}}万硬币<span class="tinypic"></span></p>
      			</div>
      		</div>
      	</li>
      </ul>
    </div>

	</div>
</template>

<script>
  import MScroll from 'better-scroll'
	export default {
    data(){
    	return {
    		hotdata:{},
    	}
    },
    created(){
    	this.$http.get('/api/joe').then((res)=>{
          res = res.body
    			if (res.erron == 0) {
            this.hotdata = res.data

            this.$nextTick(()=>{
            	this._initScroll();  //等数据加载完之后才能调用滚动
            })
    			}
    	})
    },
    methods: {
      _initScroll(){
      	this.hotrow = new MScroll(this.$refs.hotscroll,{})
      },
      getnum(num){
        return Math.floor(num/10000);
      }
    }
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.hot
		// display: flex
		width 100%
		position absolute
		top 7.75rem
		bottom 2.3rem
		overflow hidden //防止溢出,溢出部分隐藏

		.hot-item
			width 100%
			height 120px

			.icon
				flex 0 0 3.5625rem
				margin-top 10px
				margin-left 0.625rem
				margin-right 0.625rem
				float left
			.content
				float left
				position relative
				width 55%
				.name
					line-height 1.5625rem
					margin-top 10px
					font-weight 700

          // text-align left
				.others
					position absolute
					top 4.375rem
					.upname
						font-size 13px
						color #777777

						text-align left
						line-height 1.0625rem
					.watchs
						font-size 13px
						line-height 0.9375rem
						color #777777
            // .tinypic
              // width :0.75rem
              // height :0.75rem
              // background-image url(1.png)
					.tab
						font-size 0.75rem
						text-align left



</style>
