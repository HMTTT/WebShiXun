<template>
	<div class="Channel">

		<div class="header">
			<input type="search" class="header_search" id="searchInput" placeholder="搜索你感兴趣的频道">
			<i class="header_glass"></i>
			<div class="header_first">
				<img class="img" src="../img/bmo.png" height="40px" width="40px" />
				<p>全部频道</p>
			</div>
			<div class="header_second">
				<img class="img" src="../img/bmp.png" height="40px" width="40px" />
				<p>美食</p>
			</div>
			<div class="header_thrid">
				<img class="img" src="../img/bmq.png" height="40px" width="40px" />
				<p>搞笑</p>
			</div>
		</div>
		<div class="center">

			<p class="center_p">最近看过的频道</p>
			<div class="center_first">
				<!--<p>           </p>-->
				<img class="img" src="../img/bml.png" width="40px" height="40px" />
				<p class="title">创造与魔法</p>
				<article class="note">06-14浏览</article>
			</div>
			<div class="center_second">
				<img class="img" src="../img/bmm.png" width="40px" height="40px" />
				<p class="title">编程</p>
				<article class="note">看过该频道的视频</article>
			</div>
			<div class="center_third">
				<img class="img" src="../img/bmn.png" width="40px" height="40px" />
				<p class="title">公开课</p>
				<article class="note">看过该频道的视频</article>
			</div>

		</div>
		<div class="bottom1">
			<div class="bottom_first">
				<p>热门频道</p>
				<div class="a">
					<img class="img" src="../img/bmr.png" height="40px" width="40px" />
					<p>科普</p>
				</div>
				<div class="a">
					<img class="img" src="../img/bms.png" height="40px" width="40px" />
					<p>明日方舟</p>
				</div>
				<div class="a">
					<img class="img" src="../img/bmt.png" height="40px" width="40px" />
					<p>吃播</p>
				</div>
				<div class="aa">
					<img class="img" src="../img/bmu.png" height="40px" width="40px" />
					<p>绘画</p>
				</div>
			</div>

			<div class="bottom_center">

				<div class="first">
					<p>鬼畜</p>
					<span>64.8万个视频</span>
					<span>5283个精选视频</span>
				</div>
				<div class="second">
					<div>
						<img src="../img/guichu1.png" />
						<p>亮！从未见过如此炫酷的晚会！</p>
					</div>
					<div>
						<img src="../img/guichu2.png" />
						<p>前方核能！《茄海行动》！震撼来袭！</p>
					</div>
				</div>
			</div>
			<div class="div1"></div>
		<div class="bottom_center">
			<div class="first">
				<p>英雄联盟</p>
				<span>149.3万个视频</span>
				<span>6010个精选视频</span>
			</div>
			<div class="second">
				<div>
					<img src="../img/yxlm1.png" />
					<p>【LPL夏季赛】6月18日 JDG vs RNG</p>
				</div>
				<div>
					<img src="../img/yxlm2.png" />
					<p>LOL五妹车系列(2) 被对面诅咒我们嫁... </p>
				</div>
			</div>
		</div>
		<div class="div1"></div>
	<div class="bottom_center">
		<div class="first">
			<p>明日方舟</p>
			<span>61.9万个视频</span>
			<span>707个精选视频</span>
		</div>
		<div class="second">
			<div>
				<img src="../img/mrfz1.png" />
				<p>建 议 改 成：赞 了，不 出 必 鲨 ， 懂 ？</p>
			</div>
			<div>
				<img src="../img/mrfz2.png" />
				<p>《明日方舟》EP - 从那高地上远眺</p>
			</div>
		</div>
	</div>
	<div class="div1"></div>
		<div class="bottom_center">
			<div class="first">
				<p>吃播</p>
				<span>50.2万个视频</span>
				<span>3942个精选视频</span>
			</div>
			<div class="second">
				<div>
					<img src="../img/chibo1.png" />
					<p>【小缸和阿灿】兄弟二人为一根冰淇...</p>
				</div>
				<div>
					<img src="../img/chibo2.png" />
					<p>大密｜1000元龙虾冰镇冷淡杯！特麻特...</p>
				</div>
			</div>
		</div>
		<div class="div1"></div>
			<div class="bottom_center">
				<div class="first">
					<p>综艺</p>
					<span>183.9万个视频</span>
					<span>5771个精选视频</span>
				</div>
				<div class="second">
					<div>
						<img src="../img/zongyi1.png" />
						<p>为什么各大综艺都喜欢请杨超越，来看...</p>
					</div>
					<div>
						<img src="../img/zongyi2.png" />
						<p>【拜托了冰箱6】黄景瑜杨超越来啦！...</p>
					</div>
				</div>
			</div>

			</div>
			</div>
</template>

<script>
	export default {}
</script>

<style>
	.div1 {
		width: 375px;
		height: 10px;
		margin: 0 auto;
		border-bottom: 1px dotted #000
	}
	
	.img {
		border-radius: 50%;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}
	
	.Channel {
		background: #E5E5E5;
	}
	
	div {
		background: white;
	}
	
	.header {
		margin-bottom: 100px;
		width: 375px;
		height: 200px;
		background: white;
		/*border: 1px solid #000;*/
	}
	
	.header div {
		text-align: center;
		/*float: left;*/
		display: inline-block;
		width: 70px;
		height: 80px;
		margin-left: 10px;
		margin-top: 20px;
		background: #E5E5E5;
	}
	
	.header p {
		margin-top: 5px;
		font-size: small;
		color: #494A5F;
	}
	
	.a,
	.aa,
	.center div {
		float: left;
		width: 90px;
		height: 100px;
		margin-left: 10px;
		margin-bottom: 30px;
		text-align: center;
		padding-top: 20px;
		border: 1px solid #000;
		box-shadow: 10px 10px 5px #888888;
		border-radius: 15px;
	}
	
	.aa {
		margin-right: 45px;
	}
	
	.bottom_first div {
		text-align: center;
		float: left;
		width: 70px;
		height: 80px;
		margin-left: 10px;
		margin-top: 20px;
	}
	
	.bottom_first p {
		padding-top: 10px;
		color: #494A5F;
	}
	
	.bottom1 {
		width: 375px;
		margin-top: 170px;
	}
	
	.bottom_center {
		margin-top: 20px;
	}
	
	.first {
		width: 375px;
		margin-top: 30px;
	}
	
	.first p {
		margin-top: 10px;
		margin-left: 10px;
		margin-bottom: 10px;
		font-weight: bold;
		font-family: "宋体";
	}
	
	.first span {
		margin-left: 10px;
		height: 18px;
		line-height: 18px;
		margin-right: 10px;
		color: #999999;
	}
	
	.second div img {
		width: 145px;
	}
	
	.second div p {
		/*margin-top: 10px;*/
		margin-top: 5px;
		color: #666666;
	}
	
	.second div {
		margin-top: 10px;
		margin-left: 10px;
		text-align: center;
		display: inline-block;
		width: 150px;
	}
	
	.title {
		font-weight: bold;
	}
	
	.note {
		color: #666666;
	}
	
	.center_p {
		color: #74777B;
		font-size: 15px;
		background: #E5E5E5;
		margin-bottom: 15px;
	}
	
	.tl-tag-active {
		width: 80px;
		height: 30px;
		line-height: 30px;
		background: #FB633C;
		border-radius: 15px;
		text-align: center;
		margin-left: 20px;
		color: #FFFFFF;
	}
	
	.tl-tag {
		width: 80px;
		height: 30px;
		line-height: 30px;
		background: #E5E5E5;
		border-radius: 15px;
		text-align: center;
		margin-left: 20px;
		color: #666666;
	}
	
	.header {
		box-sizing: border-box;
		/*position: fixed;*/
		height: 45px;
		width: 100%;
		padding-left: 20px;
		padding-right: 20px;
		padding-bottom: 50px;
		/*overflow: hidden;*/
		z-index: 50;
	}
	
	.header .header_search {
		box-sizing: border-box;
		padding-left: 10px;
		width: 100%;
		height: 37px;
		margin-top: 4px;
		border-radius: 17px;
		background: gainsboro;
		font-size: 14px;
		color: #999;
		border: none;
	}
	
	.header .header_glass {
		display: inline-block;
		position: absolute;
		right: 36px;
		top: 15px;
		width: 20px;
		height: 20px;
		/*background: url('../img/search.png')no-repeat;*/
		background-size: 16px 16px;
	}
</style>