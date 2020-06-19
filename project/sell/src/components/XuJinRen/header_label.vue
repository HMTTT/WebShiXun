<template>
  <div id="header_label">
    <ul>
      <li class="header_label_li" v-for="item, index in header_label">
       <img :src="item.image"/>
        <a>{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        header_label:[],
        xujinrenData:[],
      }

    },
    created(){
      this.$http.get("/api/xujinren").then((res)=>{
        res = res.body;
        if(res.erron == 0){
          this.xujinrenData = res.data;
          let img = "";
          let temp =this.xujinrenData.header_label;
          for(let i = 0; i < temp.length; i ++){
            img =require("./images/header_label/" + temp[i].image);
            temp[i].image = img;
            this.header_label.push(temp[i]);
          } 
        }
      })
    },
  }
</script>
<style lang="stylus" rel="sheet/stylus">
  #header_label
    width:100%;
    height:150px;
    ul
      width:100%;
      display:flex;
      flex-wrap:wrap ;
      justify-content:space-between;
      .header_label_li
        text-align:center;
        width:18%;
        height:65px;
        margin-top:20px;
        img
          width:80%;
          height:80%;
</style>
