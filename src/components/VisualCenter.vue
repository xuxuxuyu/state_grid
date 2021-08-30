<template>
  <el-row type="flex" justify="space-around" class="content">
    <el-col class="left-col">
      <!-- 现场监控 -->
      <el-row class="left-top">
        <el-image class="leftTopBg" :src="leftTopBg" />
        <div class="titleDiv"></div>
        <span class="title">现场监控</span>
        <div class="video">
          <el-image @click="dialogVisible = true" class="smallVideo" :src="smallVideo" />
          <el-image @click="dialogVisible = true" class="smallVideo" :src="smallVideo" />
          <el-image @click="dialogVisible = true" class="smallVideo" :src="smallVideo" />
          <el-image @click="dialogVisible = true" class="smallVideo" :src="smallVideo" />
          <el-image @click="dialogVisible = true" class="smallVideo" :src="smallVideo" />
          <el-image @click="dialogVisible = true" class="smallVideo" :src="smallVideo" />
          <el-image @click="dialogVisible = true" class="smallVideo" :src="smallVideo" />
          <el-image @click="dialogVisible = true" class="smallVideo" :src="smallVideo" />
          <el-image @click="dialogVisible = true" class="smallVideo" :src="smallVideo" />
        </div>
      </el-row>
      <!-- 站点监控 -->
      <el-row class="left-bottom">
        <el-image class="leftBottomBg" :src="leftTopBg" />
        <div class="titleDivBottom"></div>
        <span class="title">站点监控</span>
        <el-image @click="dialogVisible = true" class="bigVideo" :src="bigVideo" />
      </el-row>
    </el-col>
    <el-col class="center-col">
      <el-image class="center-bg" :src="centerBg" />
      <div class="amap-page-container">
        <el-amap vid="amapDemo" :plugin="plugin" :center="center" class="amap-demo" :zoom="zoom">
          <el-amap-marker vid="marker" :position="center" :label="label"></el-amap-marker>
        </el-amap>
      </div>
    </el-col>
    <el-col class="right-col">
      <!-- 一键呼救 -->
      <el-row class="left-top">
        <el-image class="leftTopBg" :src="leftTopBg" />
        <div class="titleDiv"></div>
        <span class="title">一键呼救</span>
        <div class="leida">
          <!-- <el-image class="leidabg" :src="leidabg" />
          <el-image class="leidabgred" :src="leidabgred" />
          <el-image class="leidaimg" :src="leidaimg"/>  
          <el-image class="leidaredpoint" :src="leidaredpoint"/>-->
          <el-image class="maiImage" :src="maiImage"></el-image>
          <el-image class="maiTop" :src="maiTop"></el-image>
        </div>
      </el-row>
      <!-- 围栏告警 -->
      <el-row class="left-bottom">
        <el-image class="leftBottomBg" :src="leftTopBg" />
        <!-- <el-image class="leftBottomBgTop" :src="leftBottomBgTop" /> -->
        <div class="titleDivBottom"></div>
        <span class="title">录像时长</span>
        <div id="videoTime" class="videoTime"></div>
      </el-row>
    </el-col>
    <el-dialog title="监控画面" :visible.sync="dialogVisible" width="60%" :before-close="handleClose">
      <video-player class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
        ></video-player>
    </el-dialog>
  </el-row>
</template>

<script>
import { httpPost, httpGet } from "../utils/http";
import axios from "axios";
export default {
  name: "VisualCenter",
  data() {
    return {
      dialogVisible: false,
      msg: "Visual",
      leftTopBg: require("../assets/visual/left_top_bg.png"),
      leftBottomBg: require("../assets/visual/left_bottom_bg.png"),
      leftBottomBgTop: require("../assets/visual/left_bottom_bg_top.png"),
      centerBg: require("../assets/visual/center_bg.png"),
      smallVideo: require("../assets/visual/smallVideo.png"),
      bigVideo: require("../assets/visual/bigVideo.png"),
      leidabg: require("../assets/visual/leidabg.png"),
      leidabgred: require("../assets/visual/leidabgred.png"),
      leidaimg: require("../assets/visual/leida.png"),
      leidaredpoint: require("../assets/visual/leidaredpoint.png"),
      maiImage: require("../assets/visual/mai.png"),
      maiTop: require("../assets/visual/maiTop.png"),
      center: [125.330645, 43.875532],
      zoom: 12,
      label: {
        content: "我在&nbsp&nbsp&nbsp国家电网&nbsp&nbsp&nbsp附近",
        offset: [-40, 38]
      },
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
          panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true//定位成功后调整地图
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
            }
          }
        }
      ],
       playerOptions: {
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: true, // 默认情况下将会消除任何音频。
        loop: true, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "rtmp/flv",
            src: "rtmp://47.104.232.219:1935/hls/movie"
          }
        ],
        //poster: "poster.jpg", //你的封面地址
        techOrder: ["flash"],
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: false,
          durationDisplay: false,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      }
    };
  },
  methods: {
    getGPS() {
      httpGet("eqgps/getAddress").then(res => {
        this.center = [
          res.liveMonitorList[0].longitude,
          res.liveMonitorList[0].latitude
        ];
      });
    }
  },
  mounted() {
    this.getGPS();
    var myBarDom = document.getElementById("videoTime")
    var myBar = this.echarts.init(myBarDom)
    myBar.setOption({
      xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisLabel:{
          show:true,
          textStyle:{
            color:'#fff',
            fontSize:'40%'
          }
        },
        axisLine:{
          lineStyle:{
            color:'#0498CD'
          }
        },
        axisTick:{
          lineStyle:{color:'#0498CD'}
        },
      },
      yAxis: {
          type: 'value',
          min:0,
          max:80,
          axisLabel:{
            show:true,
            textStyle:{
              color:'#fff',
              fontSize:'35%'
            }
          },
          axisLine:{
            lineStyle:{
              color:'#0498CD'
            }
          },
          axisTick:{
            lineStyle:{color:'#0498CD'}
          },

      },
      series: [{
          data: [60, 40, 30, 50, 20, 30, 50],
          type: 'bar',
          itemStyle:{
            normal:{
              color:'#00BD6E'
            }
          },
          barWidth:17,
      }]
      })

  }
};
</script>

<style scoped>
.content {
}
.left-col {
  width: 24%;
  height: 100%;
}
.center-col {
  width: 49%;
  height: 100%;
}
.center-bg {
  width: 49%;
  height: 100%;
  position: absolute;
}
.amap-page-container {
  width: 49%;
  height: 100%;
  position: absolute;
}
.right-col {
  width: 24%;
  height: 100%;
}
.left-top {
  width: 100%;
  height: 55%;
  position: relative;
}
.left-bottom {
  margin-top: 2%;
  width: 100%;
  height: 42%;
  position: relative;
}
.leftBottomBg {
  width: 100%;
  height: 100%;
  position: absolute;
}
.leftBottomBgTop {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 2px;
  left: 1px;
}
.leftTopBg {
  width: 100%;
  height: 100%;
  position: absolute;
}
.titleDiv {
  width: 97.5%;
  left: 1.5%;
  height: 14%;
  top: 2.3%;
  background-color: rgba(4, 99, 255, 0.4);
  position: absolute;
}
.titleDivBottom {
  width: 97.5%;
  left: 1.5%;
  height: 18%;
  top: 2.3%;
  background-color: rgba(4, 99, 255, 0.4);
  position: absolute;
}
.title {
  font-size: 55%;
  font-family: SourceHanSansCN;
  font-weight: bold;
  color: rgba(0, 242, 241, 1);
  width: 100%;
  height: 13.6%;
  position: absolute;
  top: 4%;
  left: 7.7%;
}
.videoTime {
  width: 100%;
  height: 120%;
  /*height: 600px;*/
  list-style: none;
  overflow: hidden;
}
.changeColor {
  color: "red";
}
.video {
  width: 100%;
  height: 100%;
  padding-top: 15%;
  padding-left: 3.2%;
}
.video .smallVideo {
  width: 29.7%;
  height: 22.7%;
}
.bigVideo {
  width: 83.5%;
  height: 74.3%;
  margin-left: 7.7%;
  margin-top: 12%;
}
.leida {
  width: 100%;
  height: 100%;
  position: absolute;
  padding-top: 5%;
}
.leida .leidabg {
  width: 50%;
  margin-top: 5%;
  margin-left: 25%;
  position: absolute;
}
.leidabgred {
  width: 50%;
  margin-top: 5%;
  margin-left: 25%;
  position: absolute;
}
.leidaimg {
  width: 45%;
  margin-top: 7.5%;
  margin-left: 27.5%;
}
.leidaredpoint {
  position: absolute;
  left: 41%;
  top: 30%;
}
.maiImage {
  width: 30%;
  left: 35%;
  top: 12%;
}
.maiTop {
  width: 12%;
  left: 44%;
  top: 23%;
  position: absolute;
}
</style>