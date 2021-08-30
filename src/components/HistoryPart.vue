<template>
    <div class="wrapper">
        <el-row class="breadCol">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home/home' }">指挥中心</el-breadcrumb-item>
        <el-breadcrumb-item>历史轨迹</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
        <div class="left">
            <span>安全帽编号：</span><input v-model="safeNum" clearable></br>
            <span>员工：</span><input v-model="name" type="text"></br>
            <span>日期：</span><input v-model="date" type="text"></br>
            <input class="search" type="button" value="查询"></input>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="num" label="序号" width="55"></el-table-column>
                <el-table-column prop="safenum" label="安全帽编号" width="110"></el-table-column>
                <el-table-column prop="pernum" label="员工工号" width="110" ></el-table-column>
                <el-table-column prop="pername" label="员工姓名" width="110" ></el-table-column>
            </el-table>
        </div>
        <div class="right">
            <div class="amap-page-container">
              <el-amap vid="amapDemo"  :plugin="plugin" :center="center" class="amap-demo"></el-amap>
            </div>
            <el-image class="his" :src="his"></el-image>
            <el-image class="position" :src="position"></el-image>
        </div>
  </div>
</template>

<script>
export default {
  name: "HistoryPart",
  data(){
    return{
        safeNum:'',
        name:'',
        date:'',
        map:require("../assets/home/map2.png"),
        per:require("../assets/home/per.png"),
        his:require("../assets/home/his.png"),
        position:require("../assets/home/position.png"),
        tableData:[
            {num:1,safenum:"02453",pernum:"024524",pername:"张三"},
            {num:2,safenum:"02456",pernum:"024572",pername:"李四"},
            {num:3,safenum:"02445",pernum:"024555",pername:"王五"},
            {num:4,safenum:"02453",pernum:"024524",pername:"赵六"},
            {num:5,safenum:"02456",pernum:"024572",pername:"琪琪"},
            {num:6,safenum:"02445",pernum:"024555",pername:"比克"},
            {num:7,safenum:"02453",pernum:"024524",pername:"小九"},
            {num:8,safenum:"02456",pernum:"024572",pername:"路飞"},
            {num:9,safenum:"02445",pernum:"024555",pername:"艾斯"},
            {num:10,safenum:"02453",pernum:"024524",pername:"萨博"},
            {num:11,safenum:"02456",pernum:"024572",pername:"索隆"}
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
.left{
    width: 30%;
}
.right{
    width: 70%;
}
.left{
    color: #969696;
    font-size: 70%;
    position: relative;
}
.left input{
    height: 20px;
    width: 50%;
    float: right;
    margin-right: 20%;
    margin-top: -3%;
}
.left span{
    display: block;
    height: 10px;
    margin-top: 2%;
    margin-left: 3%;
}
.right .amap-page-container{
    position: absolute;
    left: 31%;
    top:10%;
    width: 70%;
    height: 100%;
}
.right .his{
    position: absolute;
    left: 62%;
    top: 77%;
}
.right .position{
    position: absolute;
    left: 93.5%;
    top: 25%;
}
.left .search{
    margin-top: 1%;
    margin-bottom: 5%;
    color: #fff;
    border: none;
    font-size: 90%;
    width: 25%;
    height: 27px;
    background: #00BA6E;
    border-radius: 3px;
}
.el-table{
    display: flex;
    flex-direction: column;
    align-items: space-between;
    font-size: 90%;
}
.el-table /deep/ td, 
.el-table /deep/ th{
    padding:0 !important;
    text-align: center;
    border-spacing:0;
}
.el-table /deep/ td div{
    padding:0;
    line-height: 250% !important;
}
.el-table /deep/ th div{
    text-align: center;
    padding:0;
    line-height: 250% !important;
    font-size: 100%;
    background-color: #f5faf5;
   
}
.zi{
    font-weight: bolder;
}

</style>