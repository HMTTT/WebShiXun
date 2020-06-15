<template>
  <div id="live_id">
     <header_ class="head_common"></header_>
     <div id="navigation_xjr" class="head_common">
       <div id="div_" ref="navigationXjr">
           <ul>
             <li v-for="item, index in header_navigation" class="header_navigation_li">
               {{item}}
             </li>
           </ul>
       </div>
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
        this.$nextTick(()=>{
        this._initScroll();
        })
      }
    });
  },
  methods:{
    _initScroll(){
      // let cliw = 80 *this.header_navigation.length ;
      // this.$refs.navigationXjr.style.width = cliw + "px";
  		this.menuScroll = new MScroll(this.$refs.navigationXjr, {
  			click:true,
        scrollX:true,
        scrollY:false,
        // eventPassthrough:"vertical",
  		});
  	},
  }
}


</script>

<style lang="stylus" rel="stylesheet/stylus">
  #live_id
    width:414px;
    height:70px;
    #navigation_xjr
      flex:1;
      height:50px;
      width:414px;
      overflow:hidden;
      #div_
        display:flex;
        width:414px;
        height:100%;
        .header_navigation_li
          display:table;
          width:80px;
          height:100%;
          text-align :center;
          line-height :50px;
          float:left;
</style>
