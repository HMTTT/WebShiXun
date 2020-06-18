<template>
  <div id="xiaoshibang">
    <p class="xiaoshibang_p">
      <span class="xiaoshibang_p_span_1">小时榜</span>
      <span class="xiaoshibang_p_span_2">16:00-17:00</span>
      <span class="xiaoshibang_p_span_3">总排行榜</span>
      <span class="icon-right xiaoshibang_p_span_4">查看更多</span>
    </p>
    <div class="xiaoshibang_div1_">
      <img src="./images/xiaoshibang.png" class="xiaoshibang_div1_img"/>
    </div>
  </div>
</template>

<script>
  export default{

  }
</script>

<style lang="stylus" rel="sheet/stylus">
  #xiaoshibang
    width:100%;
    height:180px;

    .xiaoshibang_p
      width:100%;
      height:60px;
      line-height :60px;
      .xiaoshibang_p_span_1
        color:black;
        float:left;
      .xiaoshibang_p_span_2
        color:#999;
        font-size:14px;
        margin-left:8px;
        float:left;
      .xiaoshibang_p_span_3
        color:#999;
        font-size:14px;
        margin-left:8px;
        float:left;
      .xiaoshibang_p_span_4
        float:right;
        // 设置字体的间距
        letter-spacing:1px;
        height:100%;
        line-height :60px;
        color:#999;
        font-size:15px;
    .xiaoshibang_div1_
      border-bottom:1px solid rgb(230, 225, 229);
      width:100%;
      height:100%;
      .xiaoshibang_div1_img
        width:100%;
        height:100%;
</style>
