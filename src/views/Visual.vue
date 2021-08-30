<template>
  <el-container direction="vertical" class="container">
    <el-image class="bg" :src="bg"></el-image>
    <el-image class="earth-img" :src="earth"></el-image>
    <visual-header class="header"/>
    <visual-center class="center"></visual-center>
    <visual-bottom class="bottom"></visual-bottom>
  </el-container>
</template>

<script>
import VisualHeader from "../components/VisualHeader";
import VisualCenter from "../components/VisualCenter";
import VisualBottom from "../components/VisualBottom";


export default {
  name: "Visual",
  components: {
    "visual-header": VisualHeader,
    "visual-center": VisualCenter,
    "visual-bottom": VisualBottom
  },
  data() {
    return {
      msg: "Visual",
      bg: require("../assets/home/mainBg5.png"),
      earth: require("../assets/visual/earth.png")
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  font-size: 30px;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
.header {
  width: 100%;
  height: 10%;
}
.center {
  width: 100%;
  height: 56%;
  margin-top: 1%;
}
.bottom {
  width: 100%;
  height: 30%;
  margin-top: 1%;
}
.bg {
  width: 100%;
  height: 100%;
  position: absolute;
}
.earth-img {
  width: 100%;
  height: 62%;
  position: absolute;
  top: 58%;
}
</style>
