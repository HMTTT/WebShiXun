<template>
    <!-- 
        DT  动态
        ZH  综合
    -->
    <div class="DongTai">
        <!-- 头部 -->
        <div class="DT-header">
            <div class="context">
                <span>视频</span>
                <span>综合</span>
            </div>
        </div>
        <!-- 内容 -->
        <div class="DT-context">
            <!-- 综合 -->
            <div class="ZH">
                <!-- 查找 -->
                <div class="ZH-search">
                    <div class="search">
                        <input class="search-input" type="text" placeholder="查找精彩动态内容">
                    </div>
                </div>
                <!-- 直播 -->
                <div class="ZH-broadcast">
                    <ul class="broadcast-list">
                        <li class="broadcast-item">
                            <img class="img" src="./img/psb.jpg" alt="" width="60" height="60">
                            <p class="name">asd</p>
                        </li>
                        <li class="broadcast-item">
                            <img class="img" src="./img/psb.jpg" alt="" width="60" height="60">
                            <p class="name">qwe</p>
                        </li>
                    </ul>
                </div>
                <!-- 话题 -->
                <div class="ZH-topic">
                    <h4 class="title">话题</h4>
                    <div class="topic-item">
                        PS5
                    </div>
                    <div class="topic-item">
                        PS5
                    </div>
                    <div class="topic-item">
                        PS5
                    </div>
                    <div class="topic-item">
                        查看更多
                    </div>
                </div>
                <!-- 动态 -->
                <div class="ZH-message">
                    <ul class="message-list">
                        <li class="message-item" v-for=" i in 10">
                            <div class="user-message">
                                <img class="img" src="./img/psb.jpg" alt="" width="60" height="60">
                                <div class="context">
                                    <div class="name">名字</div>
                                    <div class="time">发布时间</div>
                                </div>
                                <div class="more-op">:</div>
                            </div>
                            <div class="message-context">
                                <div class="desc">
                                    动态描述动态描述动态描述动态描述动态描述动态描述动态描述动态描述动态描述动态描述动态描述动态描述动态描述动态描述动态描述动态描述动态描述动态描述动态描述动态描述动态描述
                                </div>
                                <div class="extra">
                                    <div class="extra-img">
                                        <img @click="click_img_show($event)" v-if="i % 2 == 0" class="img" src="./img/kkl.jpg" alt="" width="100%" >
                                        <img @click="click_img_show($event)" v-else class="img" :src="imgsrc" alt="" width="100%" >
                                    </div>
                                </div>
                                <!-- <div v-else-if="i % 2 == 0" class="extra">
                                    <video class="vedio" src="./vedio/meah264.mp4" controls width="100%" ></video>
                                    视频
                                </div> -->
                            </div>
                            <div class="op">
                                <div class="zhuanfa">转发</div>
                                <div class="pinglun">评论</div>
                                <div class="dianzan">点赞</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
		return {
			dongTaiData:{},
            imgsrc : require("./img/kkl.jpg")
		}
	},
    created(){
		this.$http.get('/api/DT').then((res)=>{
                res = res.body
                console.info(res)
				if (res.erron == 0) {
                    this.dongTaiData = res.data.data
                    console.info(this.dongTaiData)
				}
		})
        console.info(this.dongTaiData)
	},
    methods:{
        // 显示全部图片和取消之
        click_img_show(e){
            let extra_img_div = e.target.parentNode
            let mh = extra_img_div.style.maxHeight
            if(mh == "none"){
                extra_img_div.style.maxHeight = "300px"
            } else {
                extra_img_div.style.maxHeight = "none"
            }
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .DongTai
        width : 100%
        height : 100%
        overflow : hidden
        position : relative
        // 外部背景色
        background : #F3F5F7
        .DT-header
            width : 100%
            position : fixed
            top : 0
            left : 0
            background-color : gray
            height : 50px
            z-index : 100
        .DT-context
            // 内部背景变为v白色
            >*
                >*
                    background-color : white
            .ZH
                .ZH-search
                    width : 100%
                    padding  : 10px 0
                    .search
                        border-radius : 15px
                        background : #F3F5F7
                        width : 95%
                        height : 30px
                        .search-input
                            width : 100%
                            height : 100%
                            border : none
                            background-color : transparent
                            padding-left : 20px
                            outline : medium
                .ZH-broadcast
                    margin-top : 1px
                    height : 95px
                    padding-top : 10px
                    .broadcast-list
                        .broadcast-item
                            float : left
                            display:inline-block
                            width : 60px
                            height : 80px
                            margin-left  : 10px
                            .img
                                display : inline-block
                                border : 1px solid red
                                border-radius : 30px
                .ZH-topic
                    margin-top : 10px
                    padding-top : 10px
                    padding-left : 10px
                    .title
                        text-align : left
                        padding-bottom : 10px
                    .topic-item
                        display : inline-block
                        width : 45%
                        text-align : left
                .ZH-message
                    background-color : white
                    text-align : left 
                    margin-top : 10px
                    .message-list
                        background : #F3F5F7
                        .message-item
                            background-color : white
                            padding-left : 10px
                            padding-right : 10px
                            padding-top : 10px
                            margin-bottom : 10px
                            &:last-child
                                margin-bottom : 0
                            .user-message
                                position : relative
                                .context
                                    vertical-align : top
                                    display : inline-block
                                .more-op
                                    display : inline-block
                                    position : absolute
                                    right : 15px
                                    top: 0
                            .message-context
                                >*
                                    display : block
                                .extra
                                    .extra-img
                                        max-height : 300px
                                        overflow-y : hidden
                            .op
                                display: flex
                                padding: 10px 0
                                >div
                                    // display : inline-block
</style>