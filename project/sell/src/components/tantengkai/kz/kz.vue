<template>
  <div class="kzone">
    <div class="top">
      <ul class="turn-img">
        <li v-for="(item, i) in kz.top" v-show="i == turns">
          <a><img :src="item[1]" /></a>
        </li>
      </ul>
      <ul class="title">
        <a v-for="(item, i) in kz.top" v-show="i == turns" :class="{ on: turns == i }">{{ item[0] }}</a>
      </ul>
      <ul class="trig">
        <span v-for="(item, i) in kz.top" :class="{ on: turns == i }" @click="changeTop(i)"></span>
      </ul>
    </div>
    <div class="middle">
      <ul>
        <li v-for="(item, i) in kz.middle" :style="{ width: middleWidth + 'px' }">
          <a>
            <i :class='item[1]'></i>
          </a>
          <span>{{ item[0] }}</span>
        </li>
      </ul>
    </div>
    <div class="content">
      <ul>
        <li v-for="(item, i) in kz.content">
          <h5 class="theme">{{ item.partition }}</h5>
          <div class="wrapper" v-for="detail in item.list">
            <img :src="detail.cover" />
            <span class="play">{{ detail.play }}</span>
            <span class="comment">{{ detail.comment }}</span>
            <span class="len">{{ detail.len }}</span>
            <div class="desc-wrapper">
              <div class="desc">{{ detail.title }}</div>
            </div>
            <span class="tail">{{ item.partition }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      kz: [],
      timer: null,
      turns: 0,
      middleWidth: 0,
      kztop: require('../kzone/kz1.jpg')
    };
  },
  created() {
    this.$http.get('/api/kz').then(res => {
      res = res.body;
      if (res.errno == 0) {
        this.kz = res.data;
        this.imgLen = this.kz.top.length;
        this.middleLen = this.kz.middle.length;
        this.middleWidth = (1 / this.middleLen) * document.body.clientWidth;
        console.info(this.kz);
      }
    });
  },
  methods: {
    changeTop(i) {
      this.turns = i;
    },
    turnImg() {
      this.timer = setInterval(() => {
        if (this.turns < this.imgLen - 1) {
          this.turns++;
        } else {
          this.turns = 0;
        }
        this.kztop = require('../kzone/kz' + (this.turns + 1) + '.jpg');
      }, 3000);
    },
    loading() {},
    clearTimer() {
      clearInterval(timer);
      this.timer = null;
    }
  },
  mounted: function() {
    this.turnImg();
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import 'icon.styl'

.kzone
  line-height 1
  font-weight 200
  font-family Comic Sans MS, Lucida Console, Microsoft YaHei, arial
  position relative
  text-align left
  .top
    position relative
    .turn-img
      transition all 0.3s ease 0s
      img
        width 96%
        height 200px
        margin 5px 2% 5px
        border-radius 5px
    .title
      position absolute
      width 100%
      height 35px
      left 0
      bottom 0
      font-size 14px
      line-height 35px
      a
        position absolute
        width 100%
        padding-left 10px
        color #FFF
        &.on
          opacity 1
    .trig
      position absolute
      bottom 6px
      right 20px
      span
        display inline-block
        width 18px
        height 18px
        background-image url('icons.png')
        background-position -855px -790px
        &.on
          background-position -855px -727px
  .middle
    ul
      width 100%
      height 40px
      li
        margin-top 20px
        float left
        text-align center
        img
          margin auto
        span
          float left
          margin-left 15px
  .content
    ul
      li
        margin-top 60px
        .theme
          margin-left 5px
        .wrapper
          position relative
          float left
          width 170px
          height 150px
          margin 5px 5px 5px
          background-color #1111110f
          border-radius 5px
          color #000
          background url('back.png') 50% no-repeat
          img
            width 170px
            height 100px
          .play
            position absolute
            bottom 50px
            line-height 30px
            font-size 10px
            left 7px
            color #fff
            font-weight bold
            &::before
              content ''
              background url('play.png')
              width 15px
              height 15px
              display inline-block
              background-size 100%
              margin-bottom -3px
              filter invert(1)
          .comment
            position absolute
            bottom 50px
            line-height 30px
            left 70px
            font-size 10px
            color #fff
            font-weight bold
            &::before
              content ''
              background url('comment.png')
              width 15px
              height 15px
              display inline-block
              background-size 100%
              margin-bottom -3px
              filter invert(1)
          .len
            position absolute
            bottom 50px
            line-height 30px
            font-size 10px
            right 9px
            font-weight bold
            color #fff
          .desc-wrapper
            bottom 20px
            left 10px
            width 90%
            position absolute
            .desc
              overflow hidden
              text-overflow ellipsis
              display -webkit-box
              -webkit-box-orient vertical
              -webkit-line-clamp 2
              width 100%
              font-size 10px
          .tail
            position absolute
            bottom 5px
            left 10px
            font-size 10px
            color gray
        img
          float left
          border-top-right-radius 5px
          border-top-left-radius 5px
</style>
