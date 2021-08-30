<template>
  <div class="wrapper">
    <el-row class="breadCol">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home/home' }">指挥中心</el-breadcrumb-item>
        <el-breadcrumb-item>实时指控</el-breadcrumb-item>
        <div class="num">
            <span>总计：5</span>
            <span>在线：5</span>
            <span>离线：0</span>
        </div>
      </el-breadcrumb>
    </el-row>
    <div class="left">
      <el-row type="flex" justify="space-between">
        <el-col :span="4"><span>站点：</span></el-col>
        <el-col :span="10"><input v-model="input" clearable></el-col>
        <el-col :span="10"><input v-model="input" clearable></el-col>
      </el-row>
        <!-- <el-input v-model="input" clearable></el-input> -->
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="num" label="序号" width="90"></el-table-column>
          <el-table-column prop="name" label="员工名称" width="295"></el-table-column>
        </el-table>
    </div>
    <div class="right">
        <div class="amap-page-container">
          <el-amap vid="amapDemo"  :plugin="plugin" :center="center" class="amap-demo"></el-amap>
        </div>
        <el-image class="firstPer" :src="per"></el-image>
        <el-image class="secondPer" :src="per"></el-image>
        <el-image class="thirdPer" :src="per"></el-image>
    </div>
  </div>
</template>
<script>
export default {
  name: "WatchPart",
  data(){
    return{
        per:require("../assets/home/per.png"),
        input:"",
        tableData: [
            {
              num:"1",
              name:"张三"
            }, 
            {
              num:"2",
              name:"李四"
            }, 
            {
              num:"3",
              name:"王五"
            }, 
            {
              num:"4",
              name:"赵六"
            },
            {
              num:"5",
              name:"琪琪"
            },
            {
              num:"6",
              name:"比克"
            },
            {
              num:"7",
              name:"小九"
            },
            {
              num:"8",
              name:"路飞"
            },
            {
              num:"9",
              name:"艾斯"
            },
            {
              num:"10",
              name:"萨博"
            },
            {
              num:"11",
              name:"索隆"
            },
        ],
        center: [121.59996, 31.197646],
            lng: 0,
            lat: 0,
            loaded: false,
            plugin: [{
              enableHighAccuracy: true,//是否使用高精度定位，默认:true
              timeout: 100,          //超过10秒后停止定位，默认：无穷大
              maximumAge: 0,           //定位结果缓存0毫秒，默认：0
              convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
              showButton: true,        //显示定位按钮，默认：true
              buttonPosition: 'RB',    //定位按钮停靠位置，默认：'LB'，左下角
              showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
              showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
              panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
              zoomToAccuracy:true,//定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：f
              extensions:'all',
              pName: 'Geolocation',
              events: {
                init(o) {
                  // o 是高德地图定位插件实例
                  o.getCurrentPosition((status, result) => {
                    console.log(result)
                    if (result && result.position) {
                      self.lng = result.position.lng;
                      self.lat = result.position.lat;
                      self.center = [self.lng, self.lat];
                      self.loaded = true;
                      self.$nextTick();
                    }
                  });
                }
              }
            }]
    }
  }
};
</script>
<style scoped>
.wrapper{
    width: 100%;
    height: 100%;
    position: relative;
}
.breadCol {
  height: 7%;
  width: 100%;
  padding-left: 9px;
  padding-top: 1.2%;
  background-color: #fff;
  border-bottom: 1px solid #dadada;
}
.el-breadcrumb {
  font-size: 80%;
}
.num{
  font-size: 80%;
}
.zi{
  font-weight: bolder;
}
.num{
    float: right;
    margin-right: 5%;
}
.num span{
    padding: 5px;
}
.num span:nth-of-type(2){
    color: #00BD6E;
}
.num span:nth-of-type(3){
    color: #FF0000;
}
.left{
    width: 30%;
    margin-top: 1%;
}
.right{
    width: 70%;
}
.left{
  color: #969696;
  font-size: 70%;
  position: relative;
  clear: both;
}
.left input{
    height: 90%;
    width: 80%;
}
.left span{
    display: block;
    height: 10px;
    margin-top: 2%;
    margin-left: 18%;
}
.left /deep/ .el-input__inner{
    width: 40%;
    height: 20px;
    font-size: 40%;
    margin-bottom: 6%;
}
.el-table{
    /*height: 200px;*/
    display: flex;
    flex-direction: column;
    align-items: space-between;
    font-size: 90%;
    margin-top: 4%;
}
.el-table /deep/ td, 
.el-table /deep/ th{
    padding:0 !important;
    text-align: center;
}
.el-table /deep/ td div{
    line-height: 200% !important;
}
.el-table /deep/ th div{
  background: #F5FAF5;
  line-height: 200%;
}
.right .amap-page-container{
    position: absolute;
    left: 31%;
    top: 10%;
    width: 70%;
    height: 100%;
}
.firstPer{
    position: absolute;
    left: 50%;
    top: 50%;
}
.secondPer{
    position: absolute;
    left: 62%;
    top: 78%;
}
.thirdPer{
    position: absolute;
    left: 79%;
    top: 48%;
}
</style>