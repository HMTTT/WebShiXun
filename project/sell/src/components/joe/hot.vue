<template>
	<div class="hot">
    <div class="show">
      <!-- <h1>{{hotdata.rankList[0].author}}</h1> -->
      <ul class="hotList">
      	<li class="hot-item" v-for="(item,itemIndex) in hotdata.rankList" style="border-bottom: 0.125rem #8A8A8A;">
      		<div class="icon">
      			<img :src="item.pic" width="130" height="100" class="pic" style="border-radius: 0.25rem;"/>
      		</div>
      		<div class="content">
      			<div class="name" >{{item.title}}</div>
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

    			}
    	})
    },
    methods: {
      getnum(num){
        return Math.floor(num/10000);
      }
    }
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .hot
    display flex

    top 6rem
    bottom 2.3rem
    .hotList
      flex 1
      .hot-item
        display flex
        width: 100%
        position relative
        .icon
          margin-top 0.625rem
          margin-left 0.625rem
          margin-right 0.625rem
        .name
          font-weight 700
          margin-top 0.9375rem
          width 13rem
          display: -webkit-box;
          overflow: hidden;/*内容超出后隐藏*/
          white-space: wrap;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
        .others
          position absolute
          font-size 0.8125rem
          bottom 10px
          line-height 1rem
	



</style>
