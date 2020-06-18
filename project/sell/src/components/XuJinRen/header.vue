<template>
  <div id="header_">
    <img class="img_ header_common" src="./images/header_touxiang.jpg"/>
    <search_xjr class="header_search_xjr header_common"></search_xjr>
    <img src="./images/game.png" class="header_game header_common"/>
    <img src="./images/email.png" class="header_email"/>
  </div>
</template>
<script>
import search_xjr from './search'
export default{
   components:{
     search_xjr
   }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #header_
    width:100%;
    height:48px;
    .header_common
      float:left;
      text-align :center;
      margin-right:20px;
    .header_search_xjr
      margin-top:8px;
    .img_
      margin-left:2px;
      width:48px;
      border-radius:50%;
      height:100%;
      float:left;
    .header_game
      width:30px;
      height:30px;
      margin-top:8px;
    .header_email
      width:30px;
      height:30px;
      margin-top:8px;
</style>
