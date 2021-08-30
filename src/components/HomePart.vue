<template>
  <el-col span="24" class="content">
    <el-row type="flex" justify="space-around" align="middle" class="row-top">
      <el-col>
        <div @click="sos">
          <el-image class="btn-bg" :src="btnBg"></el-image>
          <el-image class="item-image" :src="sosImage"></el-image>
          <span class="btn-title">一键呼救</span>
        </div>
      </el-col>
      <el-col>
        <div @click="site">
          <el-image class="btn-bg" :src="btnBg" />
          <el-image class="item-image-site" :src="siteImage"></el-image>
          <span class="btn-title">现场监控</span>
        </div>
      </el-col>
      <el-col>
        <div @click="watch">
          <el-image class="btn-bg" :src="btnBg" />
          <el-image class="item-image-watch" :src="watchImage"></el-image>
          <span @click="watch" class="btn-title">实时指控</span>
        </div>
      </el-col>
      <el-col>
        <div @click="track">
          <el-image class="btn-bg" :src="btnBg" />
          <el-image class="item-image-face" :src="faceImage"></el-image>
          <span class="btn-title">人脸追踪</span>
        </div>
      </el-col>
      <el-col>
        <div @click="alarm">
          <el-image class="btn-bg" :src="btnBg" />
          <el-image class="item-image-alarm" :src="alarmImage"></el-image>
          <span class="btn-title">围栏告警</span>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-around" class="row-center">
      <el-col>
        <span class="cardTitle">录像时长统计</span>
        <div class="line"></div>
        <div class="timecharts" ref="timecharts" id="timecharts"></div>
      </el-col>
      <el-col>
        <span class="cardTitle">设备运行情况统计</span>
        <div class="line"></div>
        <div class="deviceCharts" ref="deviceCharts" id="deviceCharts"></div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-around" class="row-bottom">
      <el-col class="news">
        <span class="cardTitle">公告</span>
        <div class="line"></div>
        <ul>
          <li v-for="val in news">
            <span class="now message">{{ val.now }}</span>
            <span class="time message">{{ val.time }}</span>
          </li>
          <li>
            <span class="more">更多</span>
          </li>
        </ul>
      </el-col>
      <el-col>
        <span class="cardTitle">考勤异常提现</span>
        <div class="line"></div>
        <ul>
          <li v-for="val in info">
            <span class="message">考勤打卡：{{ val.hour }}上班打卡成功...</span>
            <span class="message">{{ val.date }}</span>
          </li>
          <li>
            <span class="more">更多</span>
          </li>
        </ul>
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
export default {
  name: "HomePart",
  data() {
    return {
      btnBg: require("../assets/home/home_btn_bg.png"),
      sosImage: require("../assets/home/矢量智能对象.png"),
      siteImage: require("../assets/home/site.png"),
      watchImage: require("../assets/home/watch.png"),
      faceImage: require("../assets/home/face.png"),
      alarmImage: require("../assets/home/alarm.png"),
      news: [
        { now: "2019中国国际智能产业博览会...", time: "2019-08-27" },
        { now: "2019中国国际智能产业博览会...", time: "2019-08-27" },
        { now: "2019中国国际智能产业博览会...", time: "2019-08-27" },
        { now: "2019中国国际智能产业博览会...", time: "2019-08-27" },
        { now: "2019中国国际智能产业博览会...", time: "2019-08-27" },
      ],
      info: [
        { hour: "08:17", date: "2019-08-27" },
        { hour: "08:17", date: "2019-08-27" },
        { hour: "08:17", date: "2019-08-27" },
        { hour: "08:17", date: "2019-08-27" },
        { hour: "08:17", date: "2019-08-27" },
      ],
    };
  },
  methods: {
    watch() {
      console.log("test");
      this.$router.push("/home/command/watch");
    },
    site() {
      this.$router.push("/home/command/site");
    },
    alarm() {
      this.$router.push("/home/command/alarm");
    },
    sos() {
      this.$router.push("/home/command/SOS");
    },
    track() {
      this.$router.push("/home/video/read/track");
    },
    initTimeCharts() {
      var timeDom = document.getElementById("timecharts");
      var timeChart = this.echarts.init(timeDom);

      // let timeChart = this.$echarts.init(this.$refs.timecharts);
      timeChart.setOption({
        tooltip: {},
        color: ["#00AA6E"],
        xAxis: {
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          offset: 0,
        },
        yAxis: {
          name: "(小时)",
        },
        series: [
          {
            name: "小时",
            type: "bar",
            data: [10, 20, 36, 10, 10, 20, 80],
          },
        ],
      });
      // 设备监控
      var dom = document.getElementById("deviceCharts");
      var myChart = this.echarts.init(dom);
      myChart.resize();
      myChart.setOption({
        title: {},
        color: ["#00AA6E", "#DEC225", "#E71B25"],
        tooltip: {
          trigger: "axis",
        },
        legend: {
          icon: "roundRect",
          data: [
            {
              name: "在线",
            },
            {
              name: "离线",
            },
            {
              name: "维修",
            },
          ],
        },
        // toolbox: {
        //   show: true,
        //   feature: {
        //     magicType: { show: true, type: ["stack", "tiled"] },
        //     saveAsImage: { show: true }
        //   }
        // },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五"],
        },
        yAxis: {
          name: "(个数)",
          type: "value",
        },
        series: [
          {
            name: "在线",
            type: "line",
            smooth: true,
            data: [300, 460, 400, 340, 200],
            areaStyle: {
              normal: {},
            },
          },
          {
            name: "离线",
            type: "line",
            smooth: true,
            data: [200, 140, 220, 300, 400],
            areaStyle: {
              normal: {},
            },
          },
          {
            name: "维修",
            type: "line",
            smooth: true,
            data: [20, 10, 5, 30, 6],
            areaStyle: {
              normal: {},
            },
          },
        ],
      });
      setTimeout(function () {
        window.onresize = function () {
          timeChart.resize();
          myChart.resize();
        };
      }, 200);
    },
  },
  mounted() {
    this.initTimeCharts();
  },
};
</script>
<style scoped>
.content {
  height: 500px;
  width: 100%;
  background-color: #f3f8f6;
}
.row-top {
  height: 16%;
  background-color: #fff;
}
.row-top .el-col {
  width: 13.8%;
  height: 85%;
  position: relative;
}
.btn-title {
  width: 100%;
  color: white;
  font-size: 75%;
  position: absolute;
  text-align: center;
  bottom: 7.5px;
}
.item-image {
  position: absolute;
  top: 9px;
  left: 48%;
  width: 15px;
  height: 21px;
}

.item-image-site {
  position: absolute;
  top: 9px;
  left: 45%;
  width: 17px;
  height: 21px;
}
.item-image-watch {
  position: absolute;
  top: 9px;
  left: 44%;
  width: 21px;
  height: 21px;
}
.item-image-face {
  position: absolute;
  top: 9px;
  left: 45%;
  width: 19.5px;
  height: 21px;
}
.item-image-alarm {
  position: absolute;
  top: 9px;
  left: 43%;
  width: 21px;
  height: 21px;
}

.btn-bg {
  width: 100%;
  height: 100%;
  position: absolute;
}
.row-center {
  height: 44.6%;
  margin-top: 2.8%;
}
.row-center .el-col {
  width: 47%;
  height: 100%;
  position: relative;
  background-color: white;
}
.cardTitle {
  font-size: 68.75%;
  margin-left: 5.7%;
  color: #00aa6e;
}

.timecharts {
  width: 100%;
  height: 100%;
}

.deviceCharts {
  width: 100%;
  height: 100%;
}

.row-bottom {
  height: 50%;
  margin-top: 2.1%;
}
.row-bottom .el-col {
  width: 47%;
  height: 100%;
  position: relative;
  background-color: white;
}
.line {
  height: 1px;
  width: 100%;
  background-color: #dadada;
  margin-top: 6px;
}
ul {
  padding-top: 2%;
  padding-left: 5%;
  padding-right: 5%;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: space-between;
}
ul li {
  width: 100%;
  height: 20%;
  color: #3d3d3d;
  font-size: 70%;
  display: flex;
  justify-content: space-between;
}
ul li span {
}
.more {
  color: #00aa6e;
  position: absolute;
  right: 5%;
  bottom: 1%;
  cursor: pointer;
  font-size: 80%;
}
.message {
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: rgba(61, 61, 61, 1);
}
.more {
  font-size: 100%;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: rgba(0, 170, 110, 1);
}
</style>