<template>
  <div id="zhibos">
    <div class="zhibos_div" v-for="zhibos_item, zhibos_index in zhibos">
      <div class="context">
        <p>{{zhibos_item.title}}</p>
        <ul>
          <li v-for="_item, index in zhibos_item.data" class="li_">
            <div class="li_div_">
              <img :src="'https://' + _item.image" class="li_div_img_" />
              <p class="li_div_img_p_">
                <span class="li_div_img_p_span_1">{{_item.author}}</span>
                <span class="li_div_img_p_span_2 icon-navba">{{_item.numb}}</span>
              </p>
              <p class="li_div_desc">{{_item.desc}}</p>
              <p class="li_div_desc li_div_type">{{_item.type}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom_div_">
      <span class="bottom_div_p_">全部直播</span>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        zhibos:[],
      }
    },
    created(){
      this.$http.get("/api/xujinren").then((res)=>{
        res = res.body;
        if(res.erron == 0){
          let temp = res.data.zhibos2;
          this.zhibos = temp;
          let temp_data;
        }
      });
    }
  }
</script>

<style lang="stylus" rel = "sheet/stylus">
  @import "./stylus/icon.styl"
  #zhibos
    margin-bottom:55px;
    margin-top:80px;
    .zhibos_div
      .context
        display:flex;
        justify-content :space-between;
        flex-wrap:wrap;
        border-bottom:1px solid rgb(230, 225, 229);
        margin-bottom:20px;
        ul
          display:flex;
          justify-content:space-between;
          flex-wrap :wrap;
          .li_
            width:180px;;
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
                .li_div_img_p_span_1
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
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
    .bottom_div_
      width:100%;
      height:40px;
      background-color:#e2e2e2;
      margin-top:-20px;
      display :block;
      position :relative;
      padding-top:20px;
      padding-bottom:10px;
      .bottom_div_p_
        height:20px;
        color:#999999;
        text-align :center;
        line-height :20px;
        border-radius 10px;
        border:1px solid #999999;
        width:100px;
        margin-left:141px;
        display :block;

</style>
