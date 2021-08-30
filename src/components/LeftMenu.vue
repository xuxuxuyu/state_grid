<template>
  <div>
    <el-row class="logo">
      <el-image :src="logo"></el-image>
    </el-row>
    <el-menu
      router="true"
      default-active="1-1"
      @open="handleOpen"
      @close="handleClose"
      class="el-menu"
    >
      <el-menu-item
        class="main-item"
        v-for="item in meunData"
        v-if="item.child.length == 0"
        :key="item.title"
        :index="item.path"
        :route="item.path"
        >{{ item.title }}</el-menu-item
      >
      <el-submenu
        class="sub"
        v-for="item in meunData"
        v-if="item.child.length > 0"
        :key="item.path"
        :index="item.title"
      >
        <template class="submenu-title" slot="title">{{ item.title }}</template>
        <el-menu-item
          class="el-menu-item"
          v-for="childItem in item.child"
          v-if="childItem.child.length == 0"
          :key="childItem.title"
          :index="childItem.path"
          :route="childItem.path"
          >{{ childItem.title }}</el-menu-item
        >
        <!-- 三级菜单 -->
        <el-submenu
          class="sub-sub"
          v-for="(childItem, index) in item.child"
          v-if="childItem.child.length > 0"
          :key="index"
        >
          <template class="submenu-title sub-sub-menuTitle" slot="title">{{
            childItem.title
          }}</template>
          <el-menu-item
            class="el-menu-item sub-sub-item"
            v-for="child in childItem.child"
            :key="child.title"
            :index="child.path"
            :route="child.path"
            >{{ child.title }}</el-menu-item
          >
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { httpGet } from "../utils/http";
export default {
  name: "LeftMenu",
  data() {
    return {
      logo: require("../assets/home/logo.png"),
      meunData: require("../assets/left/meun.json"),
    };
  },
  methods: {
    getMenu() {
      httpGet("/menu/list").then((res) => {
        console.log(res);
      });
    },
  },
  mounted() {
    this.getMenu();
  },
};
</script>
<style scoped>
.logo {
  height: 7.5%;
  width: 100%;
  background-color: #0c915b;
  position: relative;
}
.logo .el-image {
  height: 62.5%;
  width: 60.7%;
  /* position: absolute; */
  left: 6%;
  top: 18.75%;
}
.el-menu {
  height: 100%;
}
.el-menu /deep/ .el-submenu__title {
  height: 22px;
  line-height: 22px;
  /*font-size: 9px;*/
  padding: 0% !important;
  background-color: #00bd6e;
  color: white;
  font-family: SourceHanSansCN;
  font-weight: 500;
  text-align: center;
  width: 100%;
}
.el-menu /deep/ .el-submenu__title i {
  color: white;
}
.sub /deep/ .el-menu-item {
  height: 22px;
  line-height: 22px;
  /*font-size: 9px;*/
  /* padding: 0px !important; */
  background-color: #0c915b;
  color: white;
  padding: 0% !important;
  font-family: SourceHanSansCN;
  font-weight: 500;
  text-align: center;
  width: 100%;
  min-width: 0px;
}
/* 二级菜单 菜单背景 */
.sub-sub /deep/ .el-submenu__title {
  background-color: #0c915b;
}
/* 三级菜单  标题 */
.el-menu /deep/ .sub-sub-item {
  color: white;
  padding-left: 20px !important;
}
.main-item {
  height: 22px;
  line-height: 22px;
  font-size: 9px;
  padding: 0px !important;
  background-color: #00bd6e;
  color: white;
  font-family: SourceHanSansCN;
  font-weight: 500;
  text-align: center;
  width: 100%;
}
.el-menu /deep/ .is-active {
  background-color: #006b3c !important;
}
</style>