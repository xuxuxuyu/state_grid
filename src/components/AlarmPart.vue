<template>
  <div class="wrapper">
    <el-row class="breadCol">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home/home' }"
          >指挥中心</el-breadcrumb-item
        >
        <el-breadcrumb-item>围栏告警</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row>
      <el-col class="left">
        <el-row class="title">电子围栏</el-row>
        <el-row>
          <el-input
            class="input"
            placeholder="围栏名称、编号"
            v-model="input"
            clearable
          ></el-input>
          <el-image class="search" :src="search"></el-image>
        </el-row>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="name" label="围栏名称"></el-table-column>
          <el-table-column prop="state" label="状态"></el-table-column>
        </el-table>
      </el-col>
      <el-col class="right">
        <div class="amap-page-container">
          <el-amap
            vid="amapDemo"
            :plugin="plugin"
            :center="center"
            class="amap-demo"
          ></el-amap>
        </div>
        <el-image class="firstPer" :src="per"></el-image>
        <el-image class="secondPer" :src="per"></el-image>
        <el-image class="thirdPer" :src="per"></el-image>
        <el-image class="red" :src="red"></el-image>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "AlarmPart",
  data() {
    return {
      input: "",
      alarmMap: require("../assets/home/alarmMap.png"),
      per: require("../assets/home/per.png"),
      search: require("../assets/home/search.png"),
      red: require("../assets/home/red.png"),
      tableData: [
        {
          name: "电子围栏1",
          state: "禁用",
        },
        {
          name: "电子围栏2",
          state: "启用",
        },
        {
          name: "电子围栏3",
          state: "启用",
        },
        {
          name: "电子围栏4",
          state: "启用",
        },
      ],
      center: [121.59996, 31.197646],
      lng: 0,
      lat: 0,
      loaded: false,
      plugin: [
        {
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 100, //超过10秒后停止定位，默认：无穷大
          maximumAge: 0, //定位结果缓存0毫秒，默认：0
          convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true, //显示定位按钮，默认：true
          buttonPosition: "RB", //定位按钮停靠位置，默认：'LB'，左下角
          showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：f
          extensions: "all",
          pName: "Geolocation",
          events: {
            init(o) {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                console.log(result);
                if (result && result.position) {
                  self.lng = result.position.lng;
                  self.lat = result.position.lat;
                  self.center = [self.lng, self.lat];
                  self.loaded = true;
                  self.$nextTick();
                }
              });
            },
          },
        },
      ],
    };
  },
};
</script>
<style scoped>
.wrapper {
  position: relative;
  background: #fff;
  width: 100%;
  height: 100%;
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
.left {
  height: 100%;
  width: 30%;
}
.left .title {
  display: block;
  width: 100%;
  line-height: 250%;
  background: url("../assets/home/titlebg.png") no-repeat;
  text-align: center;
  color: #969696;
  font-size: 80%;
}
.input /deep/ .el-input__inner {
  margin-left: 10%;
  width: 80%;
  line-height: 250%;
  font-size: 90%;
  margin-bottom: 6%;
}
.search {
  position: absolute;
  left: 80%;
  top: 15%;
}
.el-table {
  display: flex;
  flex-direction: column;
  align-items: space-between;
  font-size: 80%;
}
.el-table /deep/ td,
.el-table /deep/ th {
  padding: 0 !important;
  font-size: 80%;
  text-align: center;
  line-height: 300%;
}
.el-table /deep/ th {
  background: #f5faf5;
}
.el-table /deep/ td div {
  line-height: 200%;
}
.right {
  width: 70vw;
  height: 50vh;
}
.right .amap-page-container {
  position: absolute;
  left: 31%;
  top: 5%;
  width: 70%;
  height: 100%;
}
.firstPer {
  position: absolute;
  left: 50%;
  top: 46%;
}
.secondPer {
  position: absolute;
  left: 58%;
  top: 45%;
}
.thirdPer {
  position: absolute;
  left: 53%;
  top: 40%;
}
.red {
  width: 20%;
  position: absolute;
  left: 45%;
  top: 35%;
}
.zi {
  font-weight: bolder;
}
</style>