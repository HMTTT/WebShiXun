<template>
  <div id="tuiJianZhiBo">
    <p class="p_1">
        <span class="span_1">推荐直播</span>
        <span class="icon-shuaxin span_2">换一换</span>
    </p>
    <div class="context">
      <ul>
        <li v-for="item, index in tuijianzhibo" class="li_">
          <div class="li_div_">
            <img :src = "item.image" class="li_div_img_"/>
            <p class="li_div_img_p_">
              <span class="li_div_img_p_span_1">{{item.author}}</span>
              <span class="li_div_img_p_span_2 icon-navba">{{item.numb}}</span>
            </p>
            <p class="li_div_desc">{{item.desc}}</p>
            <p class="li_div_desc li_div_type">{{item.type}}</p>
          </div>
        </li>
      </ul>
      <p class="icon-right context_p">更多16222个推荐直播</p>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
         tuijianzhibo:[],
      }
    },
    created() {
      this.$http.get("/api/xujinren").then((res)=>{
        res = res.body;
        if(res.erron == 0){
          let temp = res.data.tuiJianZhiBo;
          for(let i = 0; i < temp.length; i ++){
            let img = require("./images/tuijianzhibo/" + temp[i].image);
            temp[i].image = img;
            this.tuijianzhibo.push(temp[i]);
          }
        }
      })
    },
    methods:{



    }
  }
</script>

<style lang="stylus" rel="sheet/stylus">
  @import "./stylus/icon.styl"
  #tuiJianZhiBo
    border-top:1px solid rgb(230, 225, 229);
    .p_1
      width:100%;
      height:50px;
      line-height:50px;
      .span_1
        float:left;
      .span_2
        float:right;
        height:50px;
        line-height:50px;
        // 设置字体的间距
        letter-spacing:3px;
    .context
      display:flex;
      justify-content :space-between;
      flex-wrap:wrap;
      ul
        display:flex;
        justify-content:space-between;
        flex-wrap :wrap;
        .li_
          width:180px;
          height:150px;
          border-radius: 10px;
          margin-bottom:20px;
          .li_div_
            width:100%;
            height:100%;
            border-radius: 10px;
            .li_div_img_
              width:100%;
              height:70%;
            .li_div_img_p_
              color:white;
              margin-top:-25px;
              display flex;
              justify-content :space-between;
            .li_div_desc
              height:16px;
              width:100%;
              display:block;
              text-align :left;
              margin-top:10px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            .li_div_type
              color:#ccc;
              font-size:15px;
      .context_p
        text-align:center;
        color:red;
        // 设置字体的间距
        letter-spacing:1px;
        width:100%;
</style>
