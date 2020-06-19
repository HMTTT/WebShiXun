<template>
	<div class="div">
		<div class='List'>
			<img class="imgInit" src="../img/1.png" />
			<p>番剧</p>
		</div>
		<div class='List'>
			<img class="imgInit" src="../img/2.png" />
			<p>国创</p>
		</div>
		<div class='List'>
			<img class="imgInit" src="../img/3.png" />
			<p>放映厅</p>
		</div>
		<div class='List'>
			<img class="imgInit" src="../img/4.png" />
			<p>纪录片</p>
		</div>
		<div class='List'>
			<img class="imgInit" src="../img/5.png" />
			<p>专栏</p>
		</div>
		<div class='List'>
			<img class="imgInit" src="../img/6.png" />
			<p>音频</p>
		</div>
		<div class='List'>
			<img class="imgInit" src="../img/7.png" />
			<p>直播</p>
		</div>
		<div class='List'>
			<img class="imgInit" src="../img/8.png" />
			<p>动画</p>
		</div>
		<div class='List'>
			<img class="imgInit" src="../img/9.png" />
			<p>音乐</p>
		</div>
		<div class='List'>
			<img class="imgInit" src="../img/10.png" />
			<p>舞蹈</p>
		</div>
		<div class='List'>
			<img class="imgInit" src="../img/11.png" />
			<p>游戏</p>
		</div>
		<div class='List'>
			<img class="imgInit" src="../img/12.png" />
			<p>科技</p>
		</div>
		<div class='List'>
			<img class="imgInit" src="../img/13.png" />
			<p>生活</p>
		</div>
		<div class='List'>
			<img class="imgInit" src="../img/14.png" />
			<p>鬼畜</p>
		</div>
		<div class='List'>
			<img class="imgInit" src="../img/15.png" />
			<p>时尚</p>
		</div>
		<div class='List'>
			<img class="imgInit" src="../img/16.png" />
			<p>广告</p>
		</div>
		<div class='List'>
			<img class="imgInit" src="../img/17.png" />
			<p>娱乐</p>
		</div>
		<div class='List'>
			<img class="imgInit" src="../img/18.png" />
			<p>影视</p>
		</div>
		<div class='List'>
			<img class="imgInit" src="../img/19.png" />
			<p>电影</p>
		</div>
		<div class='List'>
			<img class="imgInit" src="../img/20.png" />
			<p>电视剧</p>
		</div>
		<div class='List'>
			<img class="imgInit" src="../img/21.png" />
			<p>小视频</p>
		</div>
		<div class='List'>
			<img class="imgInit" src="../img/22.png" />
			<p>相簿</p>
		</div>
		<div class='List'>
			<img class="imgInit" src="../img/23.png" />
			<p>会员购</p>
		</div>
		<div class='List'>
			<img class="imgInit" src="../img/24.jpg" />
			<p>游戏中心</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				Data: []
			}
		},
		created() {
			var that = this
			this.$http.get('/api/Partition').then((res) => {
				//				console.log(res.body.data.length)

				for(let i = 0; i < res.body.data.length; i++) {
					let data = {
						logo: "",
						name: "",
					}
					data.logo = res.body.data[i].logo
					data.name = res.body.data[i].name
					that.Data.push(data)
					//					console.log(data.logo)
					//					console.log(data.name)
				}
				console.log(that.Data)
			})
		},
	}
</script>

<style>
	.div {
		display: inline;
	}
	
	.List {
		width: 93.750px;
		height: 93.750px;
		flex: auto;
		text-align: center;
		float: left;
	}
	
	.imgInit {
		height: 40px;
		width: 40px;
	}
	
	p {
		font-size: 19px;
		color: grey;
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		word-break: break-all;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}
</style>