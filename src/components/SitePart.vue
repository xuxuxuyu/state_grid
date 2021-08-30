<template>
  <el-col class="content">
    <!-- 面包屑 -->
    <el-row class="breadCol">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home/home' }"
          >指挥中心</el-breadcrumb-item
        >
        <el-breadcrumb-item>现场监控</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <!-- 筛选功能 -->
    <el-row type="flex" align="middle" justify="start" class="func">
      <el-col class="func-feft">
        <el-col class="func-feft-item" :span="6">
          <el-row
            class="item"
            type="flex"
            align="middle"
            justify="space-around"
          >
            <div class="left-title">工作站点:</div>
            <el-input class="input" placeholder></el-input>
          </el-row>
        </el-col>
        <el-col class="func-feft-item" :span="6">
          <el-row
            class="item"
            type="flex"
            align="middle"
            justify="space-around"
          >
            <div class="left-title">员工姓名:</div>
            <el-input class="input" placeholder></el-input>
          </el-row>
        </el-col>
        <el-col class="func-feft-item" :span="6">
          <el-row
            class="item"
            type="flex"
            align="middle"
            justify="space-around"
          >
            <div class="left-title">监控设备:</div>
            <el-input class="input" placeholder></el-input>
          </el-row>
        </el-col>
        <el-col class="func-feft-item" :span="6">
          <el-row
            class="item"
            type="flex"
            align="middle"
            justify="space-around"
          >
            <div class="left-title">监控类型:</div>
            <el-input class="input" placeholder></el-input>
          </el-row>
        </el-col>
      </el-col>
      <el-col class="func-right">
        <el-row type="flex" justify="center" align="middle">
          <span class="search">查询</span>
        </el-row>
      </el-col>
    </el-row>
    <!-- 监控画面 -->
    <el-row class="watch">
      <el-col
        v-for="(item, index) in dataList"
        :span="8"
        class="watch-item"
        :key="index"
      >
        <div @click="dialogVisible = true" class="item">
          <el-row class="item-image"></el-row>
          <el-row type="flex" justify="space-between">
            <el-col :span="16" offset="1" class="watch-text left">{{
              "类型:" + item.playName
            }}</el-col>
            <el-col :span="7" class="watch-text right">
              <span class="watch-text">状态:</span>
              <span class="watch-text" id="green-text">连接成功</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4" offset="1" class="watch-text watch-text-bottom">{{
              item.realName ? "员工:" + item.realName : ""
            }}</el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <!-- 页码 -->
    <el-row></el-row>
    <el-dialog
      title="监控画面"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose"
    >
      <video-player
        class="video-player vjs-custom-skin"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
      ></video-player>
    </el-dialog>
  </el-col>
</template>

<script>
import "video.js/dist/video-js.css";

import { videoPlayer } from "vue-video-player";
import { httpGet } from "../utils/http";

export default {
  name: "SitePart",
  components: {
    videoPlayer,
  },
  data() {
    return {
      dataList: [],
      dialogVisible: false,
      play_type: 0,
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
            src: "rtmp://47.104.232.219:1935/hls/movie",
          },
        ],
        //poster: "poster.jpg", //你的封面地址
        techOrder: ["flash"],
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: false,
          durationDisplay: false,
          remainingTimeDisplay: false,
          fullscreenToggle: true, //全屏按钮
        },
      },
    };
  },
  methods: {
    getData() {
      httpGet("/live-monitor/list", { type: this.play_type }).then((res) => {
        console.log(res);
        if (res.success) {
          var data = res.liveMonitorList.map((item) => {
            item["playName"] = this.playTypeToName(item.playType);
            return item;
          });
          this.dataList = data;
          console.log(data);
        }
      });
    },
    playTypeToName(type) {
      console.log(type);
      switch (type) {
        case "1":
          return "布控球";
        case "2":
          return "执法记录仪";
        case "3":
          return "安全帽";
        default:
          return "";
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style scoped>
.content {
  height: 100%;
  width: 100%;
  background-color: #fff;
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
  font-size: 14px;
}
.func {
  width: 100%;
  height: 7.6%;
}
.func .func-feft {
  width: 68%;
  height: 100%;
}

.func-feft-item {
  height: 100%;
}

.func .func-right {
  width: 32%;
  height: 100%;
}
.func .left-title {
  font-size: 8px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(112, 112, 112, 1);
}
.item {
  width: 100%;
  height: 100%;
}
.func .input {
  width: 60%;
  height: 52.6%;
  /* margin-top: 3%; */
  /* margin-left: 3%; */
}
.func .input /deep/ .el-input__inner {
  height: 100%;
  line-height: 100%;
}
.func-right .el-row {
  height: 100%;
}
.search {
  width: 89px;
  height: 40px;
  background-color: #00bd6e;
  border-radius: 3px;
  font-size: 16px;
  color: white;
  text-align: center;
}
.watch {
  height: 80%;
  width: 100%;
}
.watch-item {
  height: 50%;
  padding-bottom: 6px;
}
.item {
  width: 100%;
  height: 100%;
}
.watch-item .item-image {
  height: 80%;
  width: 100%;
  background: url("../assets/visual/bigVideo.png") no-repeat;
}
.watch-text {
  font-size: 14px;
  color: #969696;
  margin-top: 0px;
}
#green-text {
  color: #20c580;
}
</style>