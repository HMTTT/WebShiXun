<template>
	<div class="app1">

		<div class='tab1'>
			<div class="tab-item1">
				<!--<router-link to="/Channel">频道</router-link>-->
				<span @click="test2()">频道</span>
			</div>
			<div class="tab-item1">
				<!--<router-link to="/Partition">分区</router-link>-->
				<span @click="test1()">分区</span>
			</div>
		</div>
		<div id="aaaaa">
			<Channel></Channel>
			<!--<router-view></router-view>-->
		</div>
		<div id="aaaa">
			<Partition></Partition>
		</div>

	</div>
</template>

<script>
	import Channel from '../Channel/Channel.vue'
	import Partition from '../Partition/Partition.vue'
	export default {
		components: {
			Channel,
			Partition
		},
		created() {},
		methods: {
			test1() {
				var div1 = document.getElementById('aaaaa');
				var div2 = document.getElementById('aaaa');
				div1.style.display = "none";
				div2.style.display = "block";
			},
			test2() {
				var div1 = document.getElementById('aaaaa');
        var div2 = document.getElementById('aaaa');
				div1.style.display = "block";
        div2.style.display = "none";
			}
		}
	}
</script>

<style>
	.app1{
    margin-bottom: 55px;
  }
	#aaaa{
		display: none;
	}
	.tab1 {
		display: flex;
		width: 100%;
		height: 40px;
		line-height: 40px;
		flex: 1;
		text-align: center;
	}

	.tab1 div {
		flex: 1;
		text-align: center;
	}

	.con {
		widows: 100%;
	}
</style>
