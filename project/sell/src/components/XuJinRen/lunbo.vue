<template>
  <div id="lunbo"  ref="sliderContext">
    <div class="sliderContext">
       <div class="wrapper_x" >
          <img src="./images/lunbo1.jpg" v-on:mouseover="stopInterval" v-on:mouseout="startInterval"/>
       </div>
       <div  class="wrapper_x" >
          <img src="./images/lunbo2.jpg" v-on:mouseover="stopInterval" v-on:mouseout="startInterval"/>
       </div>
       <div class="wrapper_x" >
          <img src="./images/lunbo3.jpg" v-on:mouseover="stopInterval" v-on:mouseout="startInterval"/>
       </div>
    </div>
    <div id="span_x">
      <span :class="pageCurrentIndex == 0 ? 'span_class_activate' : 'span_class'"></span>
      <span :class="pageCurrentIndex == 1 ? 'span_class_activate' : 'span_class'"></span>
      <span :class="pageCurrentIndex == 2 ? 'span_class_activate' : 'span_class'"></span>
    </div>
  </div>
</template>

<script>
  import MScroll from 'better-scroll'
  export default{
    data(){
      return{
        lunbosWidths:[0,414,828,1242],
        pageCurrentIndex:0,
        lunboList:[],
        interval:'',
        disableMouse:false,
        currentScollX:0 //滑动的距离
      }
    },
    created(){
      this.$http.get("/api/header_lunbo").then((res)=>{
        res = res.body;
        if(res.erron == 0){
          this.lunboScroll = new MScroll(this.$refs.sliderContext,{
            scrollX:true,
            scrollY:false,
            probeType:3,
          });
          this.$nextTick(()=>{
            setTimeout(()=>{
              this._initMscroll();
            }, 20)
          })
        }
      });
    },
    methods:{
      interval_x:function(){
        let this_ = this;
        let temp = 0;
        return setInterval(function(){
          if(this_.pageCurrentIndex == 0){
            temp = 1;
          }else if(this_.pageCurrentIndex == 1){
            temp = 2;
          }else{
            temp = 0;
          }
          this_.lunboList = this_.$refs.sliderContext.getElementsByClassName("wrapper_x");
          this_.lunboScroll.scrollToElement(this_.lunboList[temp], 600);
          this_.pageCurrentIndex = temp;
        }, 3000);
      },
      _initMscroll:function(){
        this.interval = this.interval_x();
        let this_ = this;
        // this.lunboScroll.on("scroll",(pos)=>{
        //   this_.currentScollX = Math.abs(Math.round(pos.x));
        //   for(let j = 0; j < this_.lunbosWidths.length; j ++){
        //     let height1 = this_.lunbosWidths[j];
        //     let height2 = this_.lunbosWidths[j + 1];
        //     if(this_.currentScollX > height1 && this_.currentScollX <= height2){
        //       if(this_.pageCurrentIndex == (j + 1) % 3){
        //         this_.lunboScroll.scrollToElement(this_.lunboList[this_.pageCurrentIndex], 100);
        //         break;
        //       }else{
        //         // this_.pageCurrentIndex = j;
        //         // this_.lunboScroll.scrollToElement(this_.lunboList[this_.pageCurrentIndex], 100);
        //       }
        //       // this_.pageCurrentIndex = (j + 1) % 3;
        //       // this_.lunboScroll.scrollToElement(this_.lunboList[this_.pageCurrentIndex], 100);
        //     }
        //   }
        // });
      },
      stopInterval:function(){
        alert(1);
        clearInterval(this.interval);
      },
      startInterval:function(){
        alert(2);
        this.interval = this.interval_x();
      }
    },
  }
</script>

<style lang="stylus" rel="sheet/stylus">
  #lunbo
    width:100%;
    height:120px;
    display:flex;
    overflow :hidden;
    .sliderContext
      height:100%;
      display :flex;
      .wrapper_x
        height:100%;
        img
          width:414px;
          height:100%;
    #span_x
      position :absolute;
      display:flex;
      top: 215px;
      right:15px;
      width:60px;
      justify-content: space-around;
      .span_class_activate
        width:10px;
        height:10px;
        border-radius :50%;
        background-color :white;
        border:2px solid white;
      .span_class
        width:10px;
        height:10px;
        border-radius :50%;
        border:2px solid white;
        background-color :none;

</style>
