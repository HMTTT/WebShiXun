<template>
  <div id="live_id" @drag="live_drag">
     <header_></header_>
     <div id="navigation_xjr"  ref="navigationXjr">
       <div id="div_" >
           <ul class="ul_">
             <li v-for="item, index in header_navigation" class="header_navigation_li" v-on:click="changeActivate_xjr(index)">
               <a :class="isActivateXjr_a[index] ? 'isActivate_xjr' : 'NoActivate_xjr'"><router-link v-bind:to="routes_xjr[index]" @click="routeClick(index)" :id="index == 0 ? 'index_x_' : ''">{{item}}</router-link></a>
             </li>
           </ul>
       </div>
     </div>
     <div class="live_context_xjr">
       <router-view></router-view>
     </div>
  </div>
</template>

<script>
import header_ from './header'
import MScroll from 'better-scroll'
export default{
  data(){
    return{
       header_navigation:[],
       isActivateXjr_a:[],
       routes_xjr:[]
    }
  },
  components:{
    header_,
  },
  created(){
    this.$http.get("/api/xujinren_header_navigation").then((res)=>{
      res = res.body;
      let erron = res.erron;
      if(erron == 0){
        this.header_navigation = res.data;
        for(let i = 0; i < this.header_navigation.length; i ++){
          this.isActivateXjr_a[i] = false;
          this.routes_xjr[i] = "";
        }
        this.isActivateXjr_a[0] = true;
        this.routes_xjr[0] = "/liveContext";
        this.routes_xjr[1] = "/ces";
        this.$nextTick(()=>{
          this._initScroll();
          this.routeClick();
          document.getElementById("index_x_").click();
        })
      }
    });
  },
  methods:{
    _initScroll(){
  		this.menuScroll = new MScroll(this.$refs.navigationXjr, {
  			click:true,
        scrollX:true,
        scrollY:false,
        probeType:3
  		});
  	},
    routeClick(){
      this.routes_xjr[0] = "/liveContext";
    },
    changeActivate_xjr(index){
        for(let i = 0; i < this.header_navigation.length; i ++){
          this.isActivateXjr_a[i] = false;
        }
        this.isActivateXjr_a[index] = true;
        //this.routes_xjr[0] = "/liveContext";
        this.$forceUpdate();
    },
    live_drag(e){
        console.info(e.pageY);
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #live_id
    height:auto;
    margin-bottom:80px;
    #navigation_xjr
      height:50px;
      display:flex;
      overflow:hidden;
      #div_
        height:100%;
        .ul_
          width:auto;
          display :flex;
          height:50px;
          .header_navigation_li
            width:80px;
            height:48px;
            line-height :48px;
            a
              display :inline-block;
              height:100%;
              font-size :18px;
            .isActivate_xjr
              color:rgb(255, 0, 127);
              border-bottom :2px solid rgb(255,0,127);
            .NoActivate_xjr
              color:none;
              border-bottom :none;

    .live_context_xjr
      width:100%;
      height:130px;
</style>
