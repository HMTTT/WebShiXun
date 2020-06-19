<template>
    <!-- 
        DT  动态
        ZH  综合
    -->
    <div class="DongTai">
        <!-- 头部 -->
        <div class="DT-header">
            <div class="content">
                动态
            </div>
        </div>
        <!-- 内容 -->
        <div class="DT-content">
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
                            <p class="name">英雄联盟</p>
                        </li>
                        <li class="broadcast-item">
                            <img class="img" src="./img/psb.jpg" alt="" width="60" height="60">
                            <div class="name">bilibili</div>
                        </li>
                    </ul>
                </div>
                <!-- 话题 -->
                <div class="ZH-topic" style="padding-bottom:10px">
                    <h4 class="title">话题</h4>
                    <div class="topic-item">
                        618种草
                    </div>
                    <div class="topic-item">
                        数据可视化
                    </div>
                    <div class="topic-item">
                        PS5
                    </div>
                    <div class="topic-item" style="color:#00BFFF">
                        查看更多>
                    </div>
                </div>
                <!-- 动态 -->
                <div class="ZH-message">
                    <ul class="message-list">
                        <li class="message-item" v-for="card in dongTaiData.cards" >
                            <div class="user-message">
                                <img class="img" onerror="this.onerror=null;this.src='/static/img/psb.d7a2b15.jpg'" :src="card.desc.user_profile.info.face" alt="">
                                <div class="content">
                                    <div class="name">{{card.desc.user_profile.info.uname}}</div>
                                    <div class="time">{{dateFormat("YYYY-mm-dd HH:MM", card.desc.timestamp * 1000)}}</div>
                                </div>
                                <div class="more-op">:</div>
                            </div>
                            <div class="message-content">
                                <!-- 
                                    1：转发
                                    2：带图动态
                                    4：不带图动态
                                    8: 视频
                                -->
                                <div v-if="card.desc.type==1" class="zhuanfa">
                                    <div class="content">
                                        {{card.card.item.content}}
                                    </div>
                                    <div class="zhuanfa-content">
                                        <div class="content">
                                            <!-- 无头像的转发 -->
                                            <div v-if="card.card.origin.user" class="user">
                                                @{{card.card.origin.user.name}}
                                            </div>
                                            <div v-if="card.card.origin.item" class="user-content">
                                                <div class="description">
                                                    {{card.card.origin.item.description}}
                                                </div>
                                                <div v-if="card.card.origin.item.pictures_count == 1" @click="click_img_show($event)" class="pic">
                                                    <img  class="img" :src="card.card.origin.item.pictures[0].img_src" alt="" width="100%" >
                                                    <div class="showBtn" >显示全部</div>
                                                </div>
                                                <div v-else class="pics">
                                                    <div class="pic" v-for="picture in card.card.origin.item.pictures">
                                                        <img @click="showPic($event, picture.img_width, picture.img_height)" :src="picture.img_src" alt="" height="100%">
                                                    </div>
                                                    <div class="picShower" @click="hiddenPic($event)">
                                                        <img class="shower" src="" alt="" width="100%">
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- 有头像的转发 -->
                                            <div v-if="card.card.origin.owner" class="owner">
                                                <div class="face">
                                                    <img :src="card.card.origin.owner.face" alt="" width="100%" height="100%">
                                                </div>
                                                <div class="name">
                                                    {{card.card.origin.owner.name}} <span class="houzhui">的投稿</span>
                                                </div>
                                            </div>
                                            <div v-if="card.card.origin.owner" class="pic">
                                                <img :src="card.card.origin.pic" alt="" width="100%">
                                                <div class="title">
                                                    {{card.card.origin.title}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-else-if="card.desc.type==2" class="DT-img">
                                    <div class="content">
                                        {{card.card.item.description}}
                                    </div>
                                    <div v-if="card.card.item.pictures_count == 1" @click="click_img_show($event)" class="pic">
                                        <img  class="img" :src="card.card.item.pictures[0].img_src" alt="" width="100%" >
                                        <div class="showBtn" >显示全部</div>
                                    </div>
                                    <div v-else class="pics">
                                        <div class="pic" v-for="picture in card.card.item.pictures">
                                            <img @click="showPic($event, picture.img_width, picture.img_height)" :src="picture.img_src" alt="" height="100%">
                                        </div>
                                        <div class="picShower" @click="hiddenPic($event)">
                                            <img class="shower" src="" alt="" width="100%">
                                        </div>
                                    </div>
                                </div>
                                <div v-else-if="card.desc.type==4" class="DT-noImg">
                                    <div class="content">
                                        {{card.card.item.content}}
                                    </div>
                                </div>
                                <div v-else-if="card.desc.type==8" class="vedio">
                                    <div class="pic">
                                        <img :src="card.card.pic" alt="" width="100%">
                                    </div>
                                    <div class="content">
                                        {{card.card.title}}
                                    </div>
                                </div>
                                <div v-else-if="card.desc.type==64" class="zhuanlan">
                                    <div class="zhuanlan-content">
                                        <div class="title">{{card.card.title}}</div>
                                        <div class="zhuanlan-pics">
                                            <div class="zhuanlan-pic" v-for="img_url in card.card.image_urls">
                                                <img :src="img_url" alt="" width="100%" height="100%">
                                            </div>
                                        </div>
                                        <div class="summary">{{card.card.summary}}</div>
                                    </div>
                                </div>
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
var vueObj = null

export default {
    data(){
		return {
			dongTaiData:{},
            imgsrc : require("./img/psb.jpg")
		}
	},
    created(){
        vueObj = this
		this.$http.get('/api/DT').then((res)=>{
                res = res.body
				if (res.erron == 0) {
                    this.dongTaiData = res.data.data
                    for(let i = 0; i < this.dongTaiData.cards.length; i ++) {
                        if(this.dongTaiData.cards[i].card){
                            this.dongTaiData.cards[i].card = JSON.parse(this.dongTaiData.cards[i].card)
                            if(this.dongTaiData.cards[i].card.origin) {
                                this.dongTaiData.cards[i].card.origin = JSON.parse(this.dongTaiData.cards[i].card.origin)
                            }
                        }
                    }
				}
        })
	},
    methods:{
        // 显示全部图片和取消之
        click_img_show(e){
            let extra_img_div = e.target.parentNode
            let mh = extra_img_div.style.maxHeight
            let showBtn = (extra_img_div.getElementsByClassName('showBtn')[0])
            if(mh == "none"){
                extra_img_div.style.maxHeight = "300px"
                showBtn.style.display = "inline-block"
            } else {
                extra_img_div.style.maxHeight = "none"
                showBtn.style.display = "none"
            }
        },
        dateFormat(fmt, timestamp) {
            let ret;
            let date = new Date(timestamp)
            const opt = {
                "Y+": date.getFullYear().toString(),        // 年
                "m+": (date.getMonth() + 1).toString(),     // 月
                "d+": date.getDate().toString(),            // 日
                "H+": date.getHours().toString(),           // 时
                "M+": date.getMinutes().toString(),         // 分
                "S+": date.getSeconds().toString()          // 秒
                // 有其他格式化字符需求可以继续添加，必须转化成字符串
            };
            for (let k in opt) {
                ret = new RegExp("(" + k + ")").exec(fmt);
                if (ret) {
                    fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
                };
            };
            return fmt;
        },
        showPic(e, imgWidth, imgHeight) {
            let img_src = e.target.src
            let picShower = (e.target.parentNode.parentNode.getElementsByClassName('picShower')[0])
            let shower = picShower.getElementsByClassName('shower')[0]
            let clientWidth = document.body.clientWidth
            let H = imgHeight * clientWidth / imgWidth
            // 设置图片路径
            shower.src = img_src
            // 设置图片边距
            shower.style.top = (window.screen.availHeight - H)/2 + "px"
            // 设置可见属性
            picShower.style.display = "block"
            shower.style.display = "block"
        },
        hiddenPic(e){
            let tagName = e.target.localName
            if(tagName == "div"){
                e.target.style.display = "none"
            } else if (tagName == "img"){
                e.target.parentNode.style.display = "none"
            }
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .DongTai
        white-space: pre-line;
        width : 100%
        overflow : hidden
        position : relative
        padding-bottom : 55px
        // 外部背景色
        background : #F3F5F7
        .DT-header
            text-align : center
            width : 100%
            position : fixed
            top : 0
            left : 0
            background-color : white
            height : 50px
            z-index : 100
            .content
                font-size : 20px
                height : 50px
                line-height : 50px
                white-space: normal
        .DT-content
            margin-top : 50px
            // 内部背景变为v白色
            >*
                >*
                    background-color : white
            .ZH
                .ZH-search
                    width : 100%
                    padding  : 10px 0
                    .search
                        margin : 0 auto
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
                            line-height : 30px
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
                            .name
                                text-overflow : ellipsis
                                height : 14px
                                font-size : 14px
                                text-align : center
                                margin-top : 10px
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
                            padding-top : 10px
                            margin-bottom : 10px
                            &:last-child
                                margin-bottom : 0
                            .user-message
                                position : relative
                                padding : 0 10px
                                .img
                                    width : 60px
                                    height : 60px
                                    border-radius : 30px
                                .content
                                    vertical-align : top
                                    display : inline-block
                                .more-op
                                    display : inline-block
                                    position : absolute
                                    right : 15px
                                    top: 0
                            .message-content
                                >*
                                    display : block
                                    >.content
                                        margin-bottom : 10px
                                        padding : 0 10px
                                        overflow : hidden
                                        word-wrap:break-word
                                .zhuanfa
                                    .zhuanfa-content
                                        background : #F3F5F7
                                        .content
                                            padding : 0 10px
                                            padding-top : 10px
                                            .user
                                                height : 30px
                                                line-height : 30px
                                                font-size : 14px
                                                white-space : normal
                                                color : #00BFFF
                                            .user-content
                                                padding-bottom : 10px
                                                .description
                                                    padding-bottom : 10px
                                                .pic
                                                    padding : 0    
                                            .owner
                                                padding-bottom : 10px
                                                .face
                                                    display : inline-block
                                                    width : 30px
                                                    height : 30px
                                                    border-radius : 15px
                                                    overflow : hidden
                                                .name
                                                    color : #00BFFF
                                                    display : inline-block
                                                    font-size : 14px
                                                    height : 30px
                                                    vertical-align : top
                                                    line-height : 30px
                                                    white-space : normal
                                                    .houzhui
                                                        color #000
                                                        margin-left : 10px
                                            >.pic
                                                .title
                                                    font-size : 14px
                                                    height : 30px
                                                    line-height : 30px
                                                    white-space : normal
                                .vedio
                                    margin-top : 10px
                                    >.pic
                                        border-radius : 10px
                                    >.content 
                                        font-weight : bold
                                .zhuanlan
                                    >.zhuanlan-content
                                        border : 1px #F3F5F7 solid
                                        margin : 10px
                                        border-radius : 10px
                                        >.title
                                            padding : 10px 0 
                                            padding-left : 10px
                                        >.zhuanlan-pics
                                            display : flex
                                            >.zhuanlan-pic
                                                display : inline-block
                                                width : 30%
                                                height : 100px
                                                margin : 0 auto
                                        >.summary
                                            padding : 10px 0
                                            padding-left : 10px
                                .vedio
                                    >.content 
                                        height : 30px
                                        line-height : 30px
                                        overflow : hidden
                                        text-overflow : ellipsis
                                        white-space:nowrap
                                .DT-img,.vedio
                                    padding : 0 10px
                                    >.content
                                        padding : 0
                                .pic
                                    position : relative
                                    overflow : hidden
                                    max-height : 300px
                                    .showBtn
                                        position : absolute
                                        right : 10px
                                        bottom  : 10px
                                        display : inline-block
                                        color : #00BFFF
                                .pics
                                    display : flex
                                    flex-wrap: wrap;
                                    .pic
                                        width : 33%
                                        height : 100px
                                        display : inline-block
                                        overflow : hidden
                                        background-color : white
                                        >img
                                            display : block
                                            margin : 0 auto
                                    .picShower
                                        position : fixed
                                        width : 100%
                                        height : 100%
                                        left : 0
                                        top : 0
                                        background-color : black 
                                        z-index : 100
                                        display : none
                                        .shower
                                            display : block
                                            position:absolute; 
                                            width:100%
                                            z-index:99
                            .op
                                display: flex
                                padding: 10px 0
                                >div
                                    margin : 0 auto
                                    // display : inline-block
</style>