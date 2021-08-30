<template>
  <el-row class="header">
    <el-row class="top">
      <el-col class="left">
        <img class="main-image" :src="left" />
      </el-col>
      <span @click="fullBox" class="center">智慧指控平台</span>
      <el-col class="right">
        <el-image class="main-image" :src="right" />
      </el-col>
    </el-row>
    <el-row class="bottom">
      <el-image class="leftLine" :src="leftLine"></el-image>
      <el-image class="rightLine" :src="rightLine"></el-image>
    </el-row>
  </el-row>
</template>
<script>
import screenfull from "screenfull";
export default {
  name: "VisualHeader",
  data() {
    return {
      left: require("../assets/visual/left.png"),
      right: require("../assets/visual/right.png"),
      leftLine: require("../assets/visual/leftLine.png"),
      rightLine: require("../assets/visual/rightLine.png")
    };
  },
  methods: {
    fullBox() {
      if (!screenfull.enabled) {
        console.log("失败");
        return false;
      }
      console.log("成功");
      screenfull.toggle();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  margin: 0px;
  padding: 0px;
  text-align: center;
}
.top {
  position: relative;
}
.left {
  width: 36%;
  height: 36%;
  float: left;
  left: 2%;
}
.center {
  width: 20%;
  /*height:10%; */
  font-size: 150%;
  font-family: FZZongYi-M05S;
  font-weight: bold;
  color: rgba(0, 217, 251, 1);
  position: absolute;
  top: 15%;
  left: 40%;
}
.right {
  width: 36%;
  height: 36%;
  float: right;
  right: 2%;
}

.main-image {
  width: 88%;
  height: 36%;
}
.small-image {
  width: 6%;
  height: 36%;
}
.bottom {
  margin-top: 2.5%;
}
.leftLine {
  width: 50%;
  height: 25%;
  float: left;
}
.rightLine {
  width: 50%;
  height: 25%;
  float: right;
}
.small-image {
  width: 6%;
  height: 36%;
}
.bottom {
  margin-top: 1%;
}
.leftLine {
  width: 50%;
  height: 25%;
  float: left;
}
.rightLine {
  width: 50%;
  height: 25%;
  float: right;
}
</style>