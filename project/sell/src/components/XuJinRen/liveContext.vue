<template>
  <div id="liveContext">
    <lunbo></lunbo>
    <header_label></header_label>
    <p class="mySee_1">
      <span class="span_1">我的关注</span>
      <span class="span_2">18小时前</span>
      <span class="span_3">黑马程序员</span>
      <span class="span_2">直播了学习</span>
      <i class="span_4 icon-right"> </i>
    </p>
    <tuiJianZhiBo></tuiJianZhiBo>
    <xiaoshibang></xiaoshibang>
    <zhibos></zhibos>
    <div id="woyaozhibo">
       <p>我要</p>
       <p>直播</p>
    </div>
  </div>
</template>

<script>
  import lunbo from './lunbo'
  import header_label from "./header_label"
  import tuiJianZhiBo from "./tuiJianZhiBo"
  import xiaoshibang from "./xiaoshibang"
  import zhibos from "./zhibos"
  export default{
    components:{
      lunbo,
      header_label,
      tuiJianZhiBo,
      xiaoshibang,
      zhibos,
    },


  }
</script>

<style lang="stylus" rel="sheet/stylus">
  @import "./stylus/icon.styl"
  #liveContext
    .mySee_1
      height:70px;
      margin-top:30px;
      line-height:70px;
      .span_1
        display :block;
        height:100%;
        width:70px;
        float:left;
      .span_2
        display:block;
        width:70px;
        font-size:14px;
        color:#999;
        float:left;
        margin-left:5px;
      .span_3
        display :block;
        font-size:15px;
        float:left;
        margin-left:5px;
      .span_4
        height:100%;
        line-height :100%;
        display:inline-block;
        margin-top:27px;
        margin-left:50px;
    #woyaozhibo
      width:70px;
      height:70px;
      border-radius :50%;
      background-color :rgb(253, 46, 84);
      position :fixed;
      bottom :65px;
      right:10px;
      color:white;
      text-align :center;
      line-height :70px;
      font-size:20px;
      p
        width:40px;
        margin-left:15px;
        display :flex;
        height:20px;
        flex-wrap :wrap;
        line-height:50px;
        font-family:"楷体";
</style>
