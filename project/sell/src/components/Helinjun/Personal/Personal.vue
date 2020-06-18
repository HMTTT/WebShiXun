<template>

<div class="p-content">

  <div class="header-right">
    <img src="../images/v6.png">
    <img src="../images/v5.png">
    <img src="../images/v4.png">
    </div>

  <div class="content-header">
    <div class="photo">
      <span><img width="100" height="100" src="../images/v2.png" /></span>
      </div>
        <div class="xiangxi" >
        	<div class="title">
            <span class="name" >心若痕兮</span>
        		<span><img  src="../images/v1.png"></span>
        		</div>
        	<div class="vip">
            <span class="zvip"><img height="35" width="64" src="../images/v3.png"></span>
            <span class="zone">空间 ></span>
        		</div>
        	<div class="money">
        		<span class="money1">B币 ：20.00 </span>
            <span class="money2">硬币 : 280</span>
        		</div>
        	</div>
    </div>
    <div class="other">
      <span>动态:200</span>
      <span>|</span>
      <span>关注:35</span>
      <span>|</span>
      <span>粉丝:1246</span>
    </div>

  <div class="gonggao">
    <img width="375" height="60" src="../images/v7.png">
    </div>

 <div class="p-basics">
   <img src="../images/b1.png">
   <img src="../images/b2.png">
   <img src="../images/b3.png">
   <img src="../images/b4.png">
 </div>

  <div class="p-creation">
    <div class="chuangzuo">
      <span class="t2">创作中心</span>
      <img src="../images/c5.png">
    </div>
    <img src="../images/c1.png">
    <img src="../images/c2.png">
    <img src="../images/c3.png">
    <img src="../images/c4.png">
  </div>

  <div class="p-recommended">
    <div class="tuijian">
      <span class="t1">推荐服务</span>
    </div>
    <img src="../images/r1.png">
    <img src="../images/r2.png">
    <img src="../images/r3.png">
    <img src="../images/r4.png">
    <img src="../images/r5.png">
    <img src="../images/r6.png">
    <img src="../images/r7.png">
    <img src="../images/r8.png">
  </div>

  <div class="p-more">
    <div class="gengduo">
      <span class="t3">更多</span>
      </div>
    <img src="../images/m1.png">
    <img src="../images/m2.png">
    <img src="../images/m3.png">
    <img src="../images/m4.png">
  </div>

</div>
</template>

<script>
  export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .p-content
    color: rgb(255,255,255)
    .header-right
      width :100%
      height 45px
      img
        float :right
        width :10%
        height :90%
    .content-header
      position: relative
      height :120px
      .photo
        float :left
        width :110px
        height :110px
        display: inline-block
      .xiangxi
        float :left
        width :200px
        height :110px
        display: inline-block
        .title
          font-size: 24px
          color: black
          font-weight: bold
        .vip
          font-size: 18px
          color: gray
          line-height :35px
          .zone
            float :right
        .money
          font-size: 16px
          color: gainsboro
          line-height: 18px
    .other
      font-size: 16px
      color: gray
      font-weight: bold
      line-height :35px
      text-align :center


    .p-basics
      width :100%
      height :80px
      img
        width :24%
        height :90%
        display :inline-block
        vertical-align:top
    .p-creation
      width :100%
      height :120px
      .chuangzuo
        position:relative
        font-size: 16px
        color: black
        font-weight: bold
        .t2
          padding-left :20px
          line-height :35px
        img
          width:20%
          height:27%
          float :right
      img
        width :24%
        height :57%
        display :inline-block
        vertical-align:top
    .p-recommended
          width :100%
          height :180px
          .tuijian
            position :relative
            font-size: 16px
            color: black
            font-weight: bold
            .t1
              padding-left :20px
              line-height :35px
          img
            width :24%
            height :38%
            display :inline-block
            vertical-align:top

    .p-more
      width :100%
      height :220px
      .gengduo
        position :relative
        font-size: 16px
        color: black
        font-weight: bold
        .t3
          padding-left :20px
          line-height :35px
      img
        width :100%
        height :20%
        display :inline-block
        vertical-align:top

</style>
