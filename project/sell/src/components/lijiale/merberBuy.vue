<template>
	<div class="merberBuyClasss">
		<div class="header_up">
			<p class="title">会员购</p>
			<img src="./icon/购物中心.svg" alt="" class="shoppingCenter">
			<img src="./icon/购物车.svg" alt="" class="shoppingTrolley">
			<img src="./icon/收藏.svg" alt="" class="collect">
		</div>
		<div class="header_center">
			<div class="find">
				<img src="./icon/搜索.svg" alt="" class="findImg">
				<p class="finContent">{{searchUrl_title}}</p>
			</div>
		</div>
		<div class="header_down">
			<div v-for="(picture,index) in headPicturedata" class="pictures">
				<img :src="picture.url" alt="">
				<p>{{picture.name}}</p>
			</div>
		</div>
		<div class="bodyer_up">
			<div class="bodyer_up_up">
				<div class="up_left">
					<span class="up_left_1">魔力赏</span>
					<span class="up_left_2"><div>免费试玩</div></span>
					<img :src="bodyer_upPicture[0].url" alt="" class="up_left_img">
				</div>
				<div class="up_center">
					<span>今日上新</span>
					<img :src="bodyer_upPicture[1].url" alt="">
				</div>
				<div class="up_right">
					<span>IP乐园</span>
					<img :src="bodyer_upPicture[2].url" alt="">
				</div>
			</div>
			<hr align=center width=90% color=#E0E0E0 size=1  style="margin-top:0px;margin-bottom:2px;">
			<div class="bodyer_up_down">
				<div class="down_left">
					<img :src="bodyer_upPicture[3].url" alt="">
					<span class="down_left_1">排行榜</span>
					<span class="down_left_2">每日0点更新</span>
				</div>
				<div class="down_right">
					<img :src="bodyer_upPicture[4].url" alt="">
					<span class="down_right_1">圈子</span>
					<span class="down_right_2">9条新贴</span>
				</div>
			</div>
		</div>
		<div class="bodyer_center">
			<div v-for="(banner,index) in banners" class="banners">
				<div v-if="index===bodyer_center_state" class="ifdiv" @mousedown="aaaaa(this)">
					<img :src="'https:'+banners[sub(index,banners.length)].pic" class="img_0">
					<img :src="'https:'+banner.pic" >
					<img :src="'https:'+banners[add(index,banners.length)].pic" >
				</div>
			</div>
		</div>
		<div class="bodyer_down">
			<div class="content_title">
				<div class="content_title_cild">
					<div v-for="(feedtab,index) in feedtabs" class="bodyer_down_title" @click="content_title_click(index)">
						<div v-show="index==feedtabs_state" class="title_emphasize">
							{{feedtab.name}}
						</div>
						<div v-show="index!=feedtabs_state" class="title_normal">
							{{feedtab.name}}
						</div>
					</div>
				</div>
				<div class="title_emphasize_bg" :style="'left:'+content_title_bg+'%'"></div>
			</div>
			<div class="content">
				<div class="content_good" v-for="(feed,index) in feeds.list" v-show="feed.tagName=='商品'">
					<img :src="feed_img[index]" class="content_img">
					<div class="content_content">
						<div class="content_c_tag">
							<div></div>{{feed.title}}
						</div>
						<div class="content_c_note">
							{{feed.brief}}
						</div>
						<div class="content_tag">
							<div v-for=""></div>
						</div>
						<div class="content_down">
							<span class="symton">￥</span>
							<span class="prime">{{feed.price[0]}}</span>
							<div class="personNum">{{like_content(feed.like)}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    <div class="bottom5"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				merberBuy:{},
				bodyer_center_state:0,
				searchUrl_title:{},
				headPicturedata:{},
				banners:[],
				feedtabs:[],
				feeds:[],
				feedtabs_state:0,
				feed_img:[],
				down_up_img:[],
				bodyer_upPicture:[{url:"#"},{url:"#"},{url:"#"},{url:"#"},{url:"#"}]
			}
		},
		created(){
			this.$http.get('/api/merberBuy').then((res)=>{
				if(res.data.erron==0){
					this.merberBuy=res.data.data.data.vo
					this.searchUrl_title=this.merberBuy.searchUrl.title
					this.banners=this.merberBuy.banners
					this.feedtabs=this.merberBuy.feedTabs
					this.feeds=this.merberBuy.feeds
					this.feedtabs_state=0
					for(let i=0,len=this.feeds.list.length;i<len;i++){
						let img_c=this.feeds.list[i].imageUrls[0].split('/').pop()
						if(img_c[img_c.length-2]=='n'){
							img_c+='@300w_300h.png'
						}else if(img_c[img_c.length-2]=='e'){
							img_c+='@300w_300h.jpg'
						}
						this.feed_img.push(require("./img/"+img_c))
					}
					// this.feed_img=require('http:'+this.feeds.list[0].imageUrls[0])

					// console.log('http:'+this.feeds.list[0].imageUrls[0])
					// console.log(this.feeds)
					//console.log(this.merberBuy)
					// console.log(this.searchUrl_title)
					// console.log(this.banners)
					// console.log(this.feedtabs)
				}
			}),
			this.$http.get('/api/LJLdata').then((res)=>{
				if(res.data.erron==0){
					this.headPicturedata=res.data.data.headPicture
					for(let i=0,len=this.headPicturedata.length;i<len;i++){
						// console.log("./icon_head_conter/"+this.headPicturedata[i].url)
						this.headPicturedata[i].url=require("./icon_head_center/"+this.headPicturedata[i].url)
					}
					this.bodyer_upPicture=res.data.data.bodyer_upPicture
					// console.log(this.bodyer_upPicture)
					if(this.bodyer_upPicture){
						for(let i=0,len=this.bodyer_upPicture.length;i<len;i++){
							this.bodyer_upPicture[i].url=require("./icon_head_center/"+this.bodyer_upPicture[i].url)
						}
					}
				}
			})
		},
		components:{

		},
		methods:{
			add(a,mod){
				return a+1>=mod?0:a+1
			},
			sub(a,mod){
				return a-1<0?mod-1:a-1
			},
			content_title_click(index){
				this.feedtabs_state=index
			},
			like_content(a){
				if(a>=10000){
					a=(a/10000).toFixed(1)
					return a+"万人想要"
				}
				return a+"人想要"
			},
			aaaaa(a){
				// console.log("aaaaaa")
				// console.log(a)
			}

		},
		computed:{
			content_title_bg:function(){
				let left=25*this.feedtabs_state
				// console.log(this.feedtabs[this.feedtabs_state])
				if(this.feedtabs[this.feedtabs_state]){
					let names=this.feedtabs[this.feedtabs_state].name.length
					return left+(names-2)*2.5
				}
				return left
			}
		},
		mounted() {
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.merberBuyClasss
		// overflow :hidden
		width :90%
		margin :5px 5% 50px 5%
		color :rgb(36,36,36)
		text-align:center
		.header_up
			margin :20px 0px
			position:relative
			height :20px
			font-size :20px
			.title
				float :left
				margin :0 0 0 40%
				// position :absolute
			img
				float :right
				margin :0 0 0 5%
				width :20px
				height :20px
		.header_center
			.find
				position:relative
				background-color :rgb(244,244,244)
				border-radius:25px
				height :50px
				.findImg
					width :16px
					height :16px
					margin :17px 0px
					display :inline-block
					vertical-align:top
				.finContent
					color :rgb(154,154,154)
					display :inline-block
					margin :17px 0px
					vertical-align:top
		.header_down
			position:relative
			.pictures
				display :inline-block
				// float :left
				width 25%
				height :80px
				margin :10px 0 0 0
				img
					width :60%
		.bodyer_up
			// height :50px
			// background-color :tan
			box-shadow: 0px 0px 16px 2px rgb(245,245,245);
			border-radius :5px
			margin :10px 0 12px 0
			height :160px
			position :relative
			display :inline-block
			width :100%
			.bodyer_up_up
				margin :20px 0% 0 4%
				width :96%
				// top:50px
				// position :absolute
				display :inline-block
				// border:0
				// padding :0
				// border-bottom :1px solid rgb(224,224,224)
				overflow :hidden
				.up_left
					display :inline-block
					height :87px
					float :left
					width :45%
					border-right :1px solid rgb(224,224,224)
					// position :absolute
					// border-bottom :1px solid rgb(224,224,224)
					.up_left_1
						// position :absolute
						// display :inline-block
						float :left
						font-size: 16px
						font-weight :900
					.up_left_2
						vertical-align:middle
						margin :0 0 0 5px
						// position :absolute
						display :inline-block
						background-color :rgb(239,226,255)
						height :16px
						border-radius :5px
						width :60px
						float :left
						// left :300px
						// vertical-align:auto
						font-size: 12px
						font-weight :500
						color :rgb(130,92,167)
						div
							margin :2px 0 0 0
					.up_left_img
						margin :8px 0 0 0
						width :95%
						float :left
				.up_center
					height :87px
					width :25%
					float :left
					margin :0 0 0 2%
					border-right :1px solid rgb(224,224,224)
					span
						// display :inline-block
						float :left
						font-size: 16px
						font-weight :900
					img
						margin :7px 0 0 0
						width :82%
						float :left
				.up_right
					height :87px
					width :25%
					float :left
					margin :0 0 0 2%
					span
						// display :inline-block
						float :left
						font-size: 16px
						font-weight :900
					img
						margin :7px 0 0 0
						width :82%
						float :left
			.bodyer_up_down
				margin :0px 0% 0 4%
				// border:0
				width :96%
				// top:50px
				// position :absolute
				display :inline-block
				.down_left
					border-right :1px solid rgb(224,224,224)
					display :inline-block
					width :45%
					float :left
					img
						margin :5px 0 0 0
						// width :82%
						float :left
						width :22px
					.down_left_1
						margin :7px 0 0 2px
						display :inline-block
						font-size: 16px
						font-weight :900
						float :left
					.down_left_2
						margin :11px 0 0 3px
						display :inline-block
						font-size: 8px
						font-weight :500
						float :left
						color :rgb(156,156,156)
				.down_right
					display :inline-block
					float :left
					img
						margin :5px 0 0 5px
						// width :82%
						float :left
						width :22px
					.down_right_1
						margin :7px 0 0 3px
						display :inline-block
						font-size: 16px
						font-weight :900
						float :left
					.down_right_2
						margin :11px 0 0 3px
						display :inline-block
						font-size: 8px
						font-weight :500
						float :left
						color :rgb(156,156,156)
		.bodyer_center
			height :100px
			border-radius:5px
			// background-color :tomato
			overflow :hidden
			.ifdiv
				z-index :100
				position:relative
				display: flex
				left :-100%
				img
					// float :left
					height :100px
					width :100%
		.bodyer_down
			margin :10px 0 0 0
			// height :500px
			// background-color :thistle
			// position:relative
			.content_title
				// height :500px
				position:relative
				margin :0 0 10px 0
				.content_title_cild
					// display :inline-block
					// position:absolute
					.bodyer_down_title
						margin :8px 0 0px 0
						display :inline-block
						width :25%
						position:relative
						.title_emphasize
							// display :inline-block
							// position:absolute
							float :left
							vertical-align:top
							font-weight :bold
						.title_normal
							float :left
							font-weight :normal
				.title_emphasize_bg
					// display :block
					// margin :14px 0px 0px 0px
					// position:absolute
					position: absolute
					display: flex
					// vertical-align:top
					float :left
					left :20%
					z-index :-1
					width :30px
					height :3px
					background-color :rgb(247,115,152)
					border-radius :1.5px
					transition:left 0.5s
			.content
				.content_good
					margin :20px 0px 0px 0px
					box-shadow: 0px 0px 16px 2px rgb(245,245,245);
					border-radius :5px
					height :130px
					// position :relative
					.content_img
						float :left
						// display :inline-block
						// position :absolute
						margin :5px 10px 5px 5px
						height :120px
					.content_content
						font-size: 0
						// margin :0 0 0 25px
						// white-space :nowrap
						// font-size :10px
						text-align:left
						.content_c_tag
							margin :0 0 7px 0
							display: -webkit-box
							-webkit-box-orient: vertical
							-webkit-line-clamp: 2
							// height :32px
							font-size :16px
							line-height: 16px
							overflow :hidden
							line-height: 22px;
							// text-overflow:ellipsis
						.content_c_note
							// margin :0 0 0 25px
							line-height: 12px
							font-size :12px
							height: 12px
							display: -webkit-box
							-webkit-line-clamp: 1
							-webkit-box-orient: vertical
							color: #999999;
							// height :20px
							overflow :hidden
						.content_tag
							height :40px
						.content_down
							// height :10px
							position:relative
							// display: inline-block
							width :100%
							font-size: 0
							.symton
								// display: inline-block
								// position: absolute
								font-size :15px
								color :#ff5687
								// vertical-align:text-bottom
							.prime
								// display: inline-block
								// position: absolute
								font-size :20px
								color :#ff5687
								// vertical-align:text-bottom
							.personNum
								display: inline-block
								position: absolute
								font-size :10px
								vertical-align:bottom
								right :10px
								bottom :0
								color :#999999
							// float :left

</style>
