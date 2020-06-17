<template>
  <div id="search_xjr">
    <img  class="search_xjr_img " src="./images/search.png">
    <input type="text" class="search_xjr_text"/>
  </div>
</template>

<script>
  export default{

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #search_xjr
    width:200px;
    height: 30px;
    float:left;
    border-radius: 30px;
    border:1px solid rgb(216, 216, 216);
    .search_xjr_img
      width:30px;
      height:100%;
      float:left;
    .search_xjr_text
      border :none;
      width:70%;
      margin-top:1px;
      height:19%;
      float:left;
      padding:10px
</style>
